import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const analyzeResumeWithAI = async (resumeText) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are an expert ATS Resume Analyzer.

Analyze the resume and return ONLY valid JSON.

{
  "atsScore": 0,
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Do not return markdown.
Do not return explanations.
Return only JSON.

Resume:
${resumeText}
      `,
    });

    const text = response.text.trim();

    return JSON.parse(text);
  } catch (error) {
    console.error(error);

    return {
      atsScore: 0,
      strengths: [],
      weaknesses: [],
      suggestions: ["Failed to analyze resume"],
    };
  }
};