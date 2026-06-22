import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function reviewCode(code) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are an expert software engineer.

Review this code and provide:
1. Bugs
2. Improvements
3. Best Practices

Code:
${code}`,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return `Error: ${error.message}`;
  }
}