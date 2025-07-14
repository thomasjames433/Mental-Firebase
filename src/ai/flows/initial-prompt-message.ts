// src/ai/flows/initial-prompt-message.ts
'use server';

/**
 * @fileOverview A Genkit flow for generating an initial warm and supportive message for the AI chat.
 *
 * - initialPromptMessage - A function that returns a warm and supportive message to encourage users to share their feelings.
 * - InitialPromptMessageOutput - The output type for the initialPromptMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InitialPromptMessageOutputSchema = z.object({
  message: z.string().describe('A warm and supportive message.'),
});

export type InitialPromptMessageOutput = z.infer<typeof InitialPromptMessageOutputSchema>;

export async function initialPromptMessage(): Promise<InitialPromptMessageOutput> {
  return initialPromptMessageFlow();
}

const prompt = ai.definePrompt({
  name: 'initialPromptMessagePrompt',
  output: {schema: InitialPromptMessageOutputSchema},
  prompt: `You are a compassionate and supportive AI assistant designed to help users explore and process their feelings. Generate a brief, warm, and encouraging message to invite the user to share what's on their mind. 

Response:
`,
});

const initialPromptMessageFlow = ai.defineFlow(
  {
    name: 'initialPromptMessageFlow',
    outputSchema: InitialPromptMessageOutputSchema,
  },
  async () => {
    const {output} = await prompt({});
    return output!;
  }
);
