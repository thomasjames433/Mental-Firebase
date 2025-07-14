"use client";

import { useState, useEffect, useRef } from 'react';
import { initialPromptMessage } from '@/ai/flows/initial-prompt-message';
import { chatConversation } from '@/ai/flows/chat-conversation';
import { useToast } from "@/hooks/use-toast";
import { ChatMessages } from '@/components/chat/chat-messages';
import { ChatInput } from '@/components/chat/chat-input';

export type Message = {
  id: string;
  role: 'user' | 'ai';
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const getInitialMessage = async () => {
      try {
        const initialMessage = await initialPromptMessage();
        setMessages([
          {
            id: crypto.randomUUID(),
            role: 'ai',
            content: initialMessage.message,
          },
        ]);
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: "Failed to start conversation. Please try refreshing the page.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    getInitialMessage();
  }, [toast]);

  const handleSendMessage = async (messageContent: string) => {
    if (!messageContent.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: messageContent,
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const aiResponse = await chatConversation({ message: messageContent });
      const aiMessage: Message = {
        id: crypto.randomUUID(),
        role: 'ai',
        content: aiResponse.response,
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        role: 'ai',
        content: "I'm sorry, but I'm having trouble connecting right now. Please try again in a moment.",
      }
      setMessages(prev => [...prev, errorMessage]);
      toast({
        title: "Error",
        description: "Something went wrong. Please try sending your message again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto h-[calc(100vh-4rem)] flex flex-col py-4">
      <div className="flex-1 overflow-y-auto pr-4">
        <ChatMessages messages={messages} isLoading={isLoading} />
      </div>
      <div className="mt-4">
        <ChatInput onSubmit={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}
