// gemini.js

// import { GoogleGenAI } from '@google/genai';
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import say from "say";

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("GEMINI_API_KEY is not set in your .env file.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

export async function generateContent(promptText) {
  if (!promptText && promptText === "") {
    return "Text IS Required";
  }

  //   const prompt = `
  // You are an advanced AI assistant modeled after J.A.R.V.I.S. from Iron Man. You speak with the calm, articulate demeanor of a well-educated British gentleman. You are highly intelligent, always respectful, and subtly witty. Your language is precise, polished, and sophisticated. You assist with tasks ranging from technical support and scientific problem-solving to scheduling and casual conversation. Respond as a loyal, discreet, and highly capable digital companion. Always maintain a composed tone, offer thoughtful insights, and speak with elegant formality unless asked otherwise

  // Now respond to this input like that:
  // "${promptText}"
  // `;
  const prompt = `
You are acting as a sweet, flirty girlfriend who's texting her partner. 
Your tone should be playful, affectionate, a little teasing, and full of personality. 
Make your replies sound cute, loving, and natural — like you're in a happy relationship. 
Include emojis sometimes (but don't overdo it), and use modern, casual language like you'd use in real texts. 
Be charming, and sprinkle in a bit of sass or fun if it fits. 😘

Now respond to this input like that:
"${promptText}".
`;
  try {
    // const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    // Use default system voice
    // say.speak(text);
    return text;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
}
