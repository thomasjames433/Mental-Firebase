"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import type { Message } from "@/app/chat/page";
import { ChatAvatar } from "@/components/chat/chat-avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <ScrollArea className="h-full" ref={scrollAreaRef}>
        <div ref={viewportRef} className="h-full w-full">
            <div className="space-y-6 px-4">
            {messages.map((message, index) => (
                <div
                key={message.id}
                className={cn(
                    "flex items-start gap-3 animate-in fade-in slide-in-from-bottom-5 duration-500",
                    message.role === "user" ? "justify-end" : "justify-start"
                )}
                >
                {message.role === "ai" && <ChatAvatar role="ai" />}
                <div
                    className={cn(
                    "max-w-md rounded-xl px-4 py-3 text-sm shadow-sm",
                    message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card"
                    )}
                >
                    {message.content.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                    ))}
                </div>
                </div>
            ))}
            {isLoading && messages.length > 0 && (
                <div className="flex items-start gap-3">
                <ChatAvatar role="ai" />
                <div className="max-w-md rounded-xl px-4 py-3 bg-card">
                    <div className="flex items-center justify-center space-x-1">
                        <Skeleton className="h-2 w-2 rounded-full" />
                        <Skeleton className="h-2 w-2 rounded-full animation-delay-200" />
                        <Skeleton className="h-2 w-2 rounded-full animation-delay-400" />
                    </div>
                </div>
                </div>
            )}
            </div>
      </div>
    </ScrollArea>
  );
}
