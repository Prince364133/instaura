
import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const key = process.env.GEMINI_API_KEY;
console.log("Using Key:", key ? key.substring(0, 5) + "..." : "UNDEFINED");

const genAI = new GoogleGenerativeAI(key);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function run() {
    try {
        const result = await model.generateContent("Hello");
        console.log("Success:", result.response.text());
    } catch (e) {
        console.error("Error:", e);
    }
}
run();
