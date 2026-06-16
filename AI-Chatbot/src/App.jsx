import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import "./App.css";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Hi Anisha! How can I help you today?",
      sender: "bot",
    },
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      text: message,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentMessage = message;
    setMessage("");
    setLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: currentMessage,
      });

      setMessages((prev) => [
        ...prev,
        {
          text: response.text,
          sender: "bot",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Something went wrong.",
          sender: "bot",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="chat-container">
      <h1>AI Chatbot</h1>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender}`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="message bot">
            Thinking...
          </div>
        )}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;