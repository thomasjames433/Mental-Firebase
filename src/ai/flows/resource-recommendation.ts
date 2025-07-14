// This is a server-side file
'use server';

/**
 * @fileOverview A flow to recommend mental health resources based on user input.
 *
 * - recommendResources - A function that takes user input and returns a list of relevant resources.
 * - ResourceRecommendationInput - The input type for the recommendResources function.
 * - ResourceRecommendationOutput - The return type for the recommendResources function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResourceRecommendationInputSchema = z.object({
  userInput: z.string().describe('The user input or query.'),
});
export type ResourceRecommendationInput = z.infer<typeof ResourceRecommendationInputSchema>;

const ResourceRecommendationOutputSchema = z.object({
  resources: z.array(z.string()).describe('A list of relevant mental health resources.'),
});
export type ResourceRecommendationOutput = z.infer<typeof ResourceRecommendationOutputSchema>;

export async function recommendResources(input: ResourceRecommendationInput): Promise<ResourceRecommendationOutput> {
  return resourceRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'resourceRecommendationPrompt',
  input: {schema: ResourceRecommendationInputSchema},
  output: {schema: ResourceRecommendationOutputSchema},
  prompt: `Based on the user's input, suggest relevant mental health resources like hotline numbers or websites.

User Input: {{{userInput}}}

Ensure the resources are appropriate and helpful for someone in distress.`,
});

const resourceRecommendationFlow = ai.defineFlow(
  {
    name: 'resourceRecommendationFlow',
    inputSchema: ResourceRecommendationInputSchema,
    outputSchema: ResourceRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
