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

Analyze this resume and provide:

1. ATS Score (out of 100)
2. Strengths
3. Weaknesses
4. Missing Skills
5. Improvement Suggestions

Resume:
${resumeText}
      `,
    });

    return response.text;
  } catch (error) {
    console.error(error);
    return "Error analyzing resume.";
  }
};