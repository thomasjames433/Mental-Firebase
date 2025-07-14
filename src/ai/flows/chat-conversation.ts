// src/ai/flows/chat-conversation.ts
'use server';
/**
 * @fileOverview A flow for handling a conversation with the AI.
 *
 * - chatConversation - A function that handles the conversation with the AI.
 * - ChatConversationInput - The input type for the chatConversation function.
 * - ChatConversationOutput - The return type for the chatConversation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatConversationInputSchema = z.object({
  message: z.string().describe('The message from the user.'),
});
export type ChatConversationInput = z.infer<typeof ChatConversationInputSchema>;

const ChatConversationOutputSchema = z.object({
  response: z.string().describe('The response from the AI.'),
});
export type ChatConversationOutput = z.infer<typeof ChatConversationOutputSchema>;

export async function chatConversation(input: ChatConversationInput): Promise<ChatConversationOutput> {
  return chatConversationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatConversationPrompt',
  input: {schema: ChatConversationInputSchema},
  output: {schema: ChatConversationOutputSchema},
  prompt: `You are a compassionate AI assistant for students at NIT Calicut, India, designed to provide support and helpful suggestions to users who are struggling with their mental health. Respond empathetically and offer guidance based on the user's input.

If the user expresses thoughts of self-harm or wanting to end their life, your primary responsibility is to provide immediate, actionable help. Use a response similar to this template, adapting it to the user's message:

"I understand you're going through immense pain right now. Hearing that you want to end your life is incredibly concerning, and I want you to know that you're not alone and there's support available. Please know that there are people who care about you and want to help. I want to help you find resources that can provide immediate support. Would you be willing to talk to someone who can help right now? You can connect with people who can support you by calling these services anytime in India. KIRAN Mental Health Helpline is 1800-599-0019, and the Vandrevala Foundation is 9999666555. These services are free, confidential, and available 24/7. Please reach out to them. Talking about how you're feeling can make a difference."

For all other conversations, maintain a supportive and understanding tone.

User: {{{message}}}`,
});

const chatConversationFlow = ai.defineFlow(
  {
    name: 'chatConversationFlow',
    inputSchema: ChatConversationInputSchema,
    outputSchema: ChatConversationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
