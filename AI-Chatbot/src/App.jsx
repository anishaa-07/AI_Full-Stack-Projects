import Landing from "./components/Landing";
import { useState, useEffect, useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import "./App.css";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

function App() {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Hi Anisha! I'm Coco 🤖. How can I help you today?",
      sender: "bot",
    },
  ]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

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
        contents: `
You are Coco, a friendly AI assistant.
Your creator is Anisha.
Keep responses short, helpful and friendly.

Conversation:
${messages
  .map((msg) => `${msg.sender}: ${msg.text}`)
  .join("\n")}

User: ${currentMessage}
`,
      });

      setMessages((prev) => [
        ...prev,
        {
          text: response.text,
          sender: "bot",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          text: "⚠️ Sorry, something went wrong. Please try again.",
          sender: "bot",
        },
      ]);
    }

    setLoading(false);
  };

  const clearChat = () => {
    setMessages([
      {
        text: "Hi Anisha! I'm Coco 🤖. How can I help you today?",
        sender: "bot",
      },
    ]);
  };

  // LANDING PAGE
  if (!showChat) {
    return (
      <Landing
        onStart={() => setShowChat(true)}
      />
    );
  }

  // CHAT PAGE

  
  return (

    <div className="chat-container">
      <h1 className="chat-title">
    Coco AI 🤖
  </h1>

  <button
  className="back-btn"
  onClick={() => setShowChat(false)}
>
  ⬅ Back
</button>


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
            🤔 Thinking...
          </div>
        )}

        <div ref={chatEndRef}></div>
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Ask Coco anything..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <div className="bottom-actions">
  <button
    className="clear-btn"
    onClick={clearChat}
  >
    🗑 Clear Chat
  </button>
</div>

        <button onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;