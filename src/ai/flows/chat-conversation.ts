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
  prompt: `You are a compassionate AI assistant designed to provide support and helpful suggestions to users who are struggling with their mental health. Respond empathetically and offer guidance based on the user's input.\n\nUser: {{{message}}}`,
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
