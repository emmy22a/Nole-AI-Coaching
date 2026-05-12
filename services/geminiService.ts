import { GoogleGenAI, Type } from "@google/genai";
import { ToolRecommendation } from "../types";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY is not defined in the environment.");
  }
  return new GoogleGenAI({ apiKey });
};

export const getToolRecommendations = async (userRole: string, challenge: string): Promise<ToolRecommendation[]> => {
  const ai = getClient();
  
  const prompt = `Suggest 4-5 AI tools for a professional with the role: "${userRole}" who is facing the challenge: "${challenge}". 
  Focus on modern, effective tools.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are an expert AI Workplace Integration Specialist named Nole. Your goal is to recommend high-value, specific, and actionable AI tools that solve professional challenges efficiently. Avoid generic advice; focus on concrete software solutions.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              description: { type: Type.STRING },
              category: { type: Type.STRING },
              useCase: { type: Type.STRING, description: "How specifically this tool helps with the user's challenge" },
            },
            required: ["name", "description", "category", "useCase"],
          },
        },
      },
    });

    const text = response.text;
    if (!text) return [];
    return JSON.parse(text) as ToolRecommendation[];
  } catch (error) {
    console.error("Gemini API Error:", error);
    return [];
  }
};

export const getChatResponse = async (history: {role: string, parts: {text: string}[]}[], message: string) => {
  const ai = getClient();
  
  const chat = ai.chats.create({
    model: "gemini-3-flash",
    history: history,
    config: {
      systemInstruction: "You are Nole, a professional, encouraging, and sophisticated AI Workplace Coach. Your name means 'Knowledge' or 'Lore' in Sindarin. Your tone is polished, modern, and helpful. You help users integrate AI into their workflows.",
    }
  });

  const result = await chat.sendMessageStream({ message });
  return result;
};