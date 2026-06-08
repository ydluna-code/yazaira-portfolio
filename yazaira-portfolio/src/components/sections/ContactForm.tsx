"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus]   = useState<"idle"|"success"|"error">("idle");

  const field: React.CSSProperties = {
    width: "100%", border: "none", borderBottom: "1px solid #D9CEC5",
    background: "transparent", padding: "0.7rem 0",
    fontFamily: "var(--font-montserrat)", fontSize: "0.82rem",
    color: "#130A0D", outline: "none", transition: "border-color 0.3s",
    marginBottom: "1.2rem", display: "block", fontWeight: 500,
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) { setStatus("error"); return; }
    const sub  = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:yazairaluna03@gmail.com?subject=${sub}&body=${body}`;
    setStatus("success");
    setName(""); setEmail(""); setMessage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input style={field} type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)}
        onFocus={e => (e.target.style.borderColor = "#883B43")} onBlur={e => (e.target.style.borderColor = "#D9CEC5")} required />
      <input style={field} type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)}
        onFocus={e => (e.target.style.borderColor = "#883B43")} onBlur={e => (e.target.style.borderColor = "#D9CEC5")} required />
      <textarea style={{ ...field, minHeight: "80px", resize: "vertical" }} placeholder="Your message..." value={message} onChange={e => setMessage(e.target.value)}
        onFocus={e => (e.target.style.borderColor = "#883B43")} onBlur={e => (e.target.style.borderColor = "#D9CEC5")} required />
      <button type="submit"
        style={{ display: "inline-block", padding: "0.75rem 2.2rem", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", border: "1px solid #883B43", color: "#883B43", background: "transparent", cursor: "pointer", fontWeight: 600, transition: "all 0.35s", fontFamily: "var(--font-montserrat)" }}
        onMouseEnter={e => { e.currentTarget.style.background = "#883B43"; e.currentTarget.style.color = "#FEFCF8"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#883B43"; }}>
        Send Message →
      </button>
      {status === "success" && <p style={{ fontSize: "0.76rem", color: "#883B43", marginTop: "0.8rem", fontStyle: "italic", fontFamily: "'Courier Prime', monospace" }}>Opening your email client — message addressed to yazairaluna03@gmail.com.</p>}
      {status === "error"   && <p style={{ fontSize: "0.76rem", color: "#c0392b",  marginTop: "0.8rem", fontStyle: "italic", fontFamily: "'Courier Prime', monospace" }}>Please fill in all fields.</p>}
    </form>
  );
}
