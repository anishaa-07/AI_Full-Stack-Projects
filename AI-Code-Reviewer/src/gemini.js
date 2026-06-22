import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function reviewCode(code) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
You are an expert software engineer.

Review the following code and provide:
1. Bugs or issues
2. Code improvements
3. Performance optimizations
4. Best practices

Code:
${code}
`,
  });

  return response.text;
}