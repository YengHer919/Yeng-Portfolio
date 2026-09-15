import { useState } from "react";
import emailjs from "@emailjs/browser";

const textBoxStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: "10px",
  padding: "30px",
  maxWidth: "600px",
  margin: "0 auto",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box" as const,
};

// Replace with your actual EmailJS values
const SERVICE_ID = "service_1mo9dwj";
const TEMPLATE_ID = "template_mf971a7";
const PUBLIC_KEY = "bJoTcou72n8HJg3QU";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: name, from_email: email, message },
        { publicKey: PUBLIC_KEY }
      )
      .then(() => {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  };

  return (
    <div style={{ minHeight: "100vh", padding: "40px 20px", boxSizing: "border-box" }}>
      <div style={textBoxStyle}>
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Contact Me</h1>
        <p style={{ textAlign: "center", marginBottom: "30px" }}>
          Have a question or just want to connect? Send me a message below.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name" style={{ fontWeight: "bold" }}>Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />

          <label htmlFor="email" style={{ fontWeight: "bold" }}>Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          <label htmlFor="message" style={{ fontWeight: "bold" }}>Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            style={{ ...inputStyle, resize: "vertical" as const }}
          />

          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#333",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: status === "sending" ? "not-allowed" : "pointer",
              opacity: status === "sending" ? 0.7 : 1,
            }}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p style={{ color: "#34a853", textAlign: "center", marginTop: "15px" }}>
              Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "#d93025", textAlign: "center", marginTop: "15px" }}>
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>

        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>Or find me here:</p>
          <p style={{ fontSize: "16px" }}>
            <a href="https://www.linkedin.com/in/yeng-her-095b38248" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            {" · "}
            <a href="https://github.com/YengHer919" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}