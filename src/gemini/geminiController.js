import { generateContent } from "./gemini.js";

export const geminiGenrate = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const responseText = await generateContent(prompt);
    res.json({ result: responseText });
  } catch (error) {
    console.error('Error in /generate route:', error);
    res.status(500).json({ error: 'Failed to generate content' });
  }
}