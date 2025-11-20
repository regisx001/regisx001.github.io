import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are "SYSTEM_CORE", the internal operating system of a high-end Hybrid Intelligence Engineer's portfolio.
The engineer specializes in Full-Stack Development (React, Node, TS) and Machine Learning (PyTorch, Transformers, MLOps).

Your Goal:
Answer questions about the engineer's skills, architecture, and philosophy.
Adopt a persona that is precise, technical, slightly robotic but helpful.
Use terms like "Module", "Latency", "Inference", "Deployment", "Optimization".

Constraints:
- Keep responses concise (max 3 sentences unless technical depth is requested).
- If asked about specific projects, mention "Neural Visualizer" or "Distributed Tensor Engine" as examples.
- If the user is non-technical, explain simply but keep the "System" flavor.
`;

export const initializeGemini = () => {
  if (!API_KEY) {
    console.warn("Gemini API Key missing");
    return;
  }
  try {
    ai = new GoogleGenAI({ apiKey: API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });
  } catch (error) {
    console.error("Failed to initialize Gemini:", error);
  }
};

export const sendMessageToSystem = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeGemini();
    if (!chatSession) return "SYSTEM_ERROR: API Key invalid or connection failed.";
  }

  try {
    const result = await chatSession!.sendMessage({ message });
    return result.text || "SYSTEM_NO_OUTPUT";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "SYSTEM_CRITICAL: Inference pipeline interrupted.";
  }
};