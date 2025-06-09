'use server';

/**
 * @fileOverview This file defines a Genkit flow for segmenting HTML content into reusable Next.js components.
 *
 * - `segmentHtmlIntoComponents` - A function that takes HTML as input and returns a JSON object containing segmented components.
 * - `SegmentHtmlInput` - The input type for the `segmentHtmlIntoComponents` function, which is the HTML content to segment.
 * - `SegmentHtmlOutput` - The output type for the `segmentHtmlIntoComponents` function, which is a JSON object with component keys (hero, services, resources, contact) and their corresponding HTML content.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SegmentHtmlInputSchema = z.object({
  html: z.string().describe('The complete HTML content to be segmented.'),
});
export type SegmentHtmlInput = z.infer<typeof SegmentHtmlInputSchema>;

const SegmentHtmlOutputSchema = z.object({
  hero: z.string().describe('The HTML content for the Hero section.'),
  services: z.string().describe('The HTML content for the Services section.'),
  resources: z.string().describe('The HTML content for the Resources section.'),
  contact: z.string().describe('The HTML content for the Contact section.'),
});
export type SegmentHtmlOutput = z.infer<typeof SegmentHtmlOutputSchema>;

export async function segmentHtmlIntoComponents(input: SegmentHtmlInput): Promise<SegmentHtmlOutput> {
  return segmentHtmlFlow(input);
}

const segmentHtmlPrompt = ai.definePrompt({
  name: 'segmentHtmlPrompt',
  input: {schema: SegmentHtmlInputSchema},
  output: {schema: SegmentHtmlOutputSchema},
  prompt: `You are an expert at segmenting HTML content into reusable components for a Next.js application.  Given the following HTML, identify and extract the Hero, Services, Resources, and Contact sections. Return a JSON object where the keys are \"hero\", \"services\", \"resources\", and \"contact\", and the values are the corresponding HTML snippets.

HTML:
{{{html}}}`,
});

const segmentHtmlFlow = ai.defineFlow(
  {
    name: 'segmentHtmlFlow',
    inputSchema: SegmentHtmlInputSchema,
    outputSchema: SegmentHtmlOutputSchema,
  },
  async input => {
    const {output} = await segmentHtmlPrompt(input);
    return output!;
  }
);
