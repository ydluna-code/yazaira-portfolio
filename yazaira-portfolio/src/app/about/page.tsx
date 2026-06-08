"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { siteContent } from "../../../content/site";
import ContactForm from "@/components/sections/ContactForm";

const { about, funFacts, currentlyLoving } = siteContent;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

// Scroll to #contact hash on mount if present
function useHashScroll() {
  useEffect(() => {
    if (window.location.hash === "#contact") {
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);
}

export default function AboutPage() {
  useHashScroll();

  const sec: React.CSSProperties  = { padding: "2.5rem 3.5rem" };
  const alt: React.CSSProperties  = { padding: "2.5rem 3.5rem", background: "#FAF6EF" };
  const eyebrow: React.CSSProperties = { fontFamily: "'Over the Rainbow', cursive", fontSize: "1rem", color: "#883B43", display: "block", marginBottom: "0.4rem" };
  const title: React.CSSProperties   = { fontFamily: "'Libre Bodoni', serif", fontSize: "1.9rem", marginBottom: "1.2rem" };
  const body: React.CSSProperties    = { fontSize: "0.88rem", lineHeight: 2, color: "#6B5455", marginBottom: "1rem", maxWidth: "480px", fontWeight: 500 };

  return (
    <div style={{ background: "#F5EFE6" }}>

      {/* ── Hero ── */}
      <motion.section
        className="grid items-start"
        style={{ gridTemplateColumns: "1fr 1.5fr", gap: "3rem", padding: "1.5rem 3.5rem 2.5rem" }}
        variants={fadeUp} initial="hidden" animate="show"
      >
        <div className="flex flex-col items-center pt-2">
          <div style={{ background: "#FEFCF8", padding: "0.9rem 0.9rem 3.5rem", transform: "rotate(-1.8deg)", filter: "drop-shadow(5px 9px 25px rgba(19,10,13,0.15))", maxWidth: 270 }}>
            <Image src="/images/photos/headshot.jpg" alt="Yazaira Luna" width={270} height={360} className="w-full block object-cover object-top" style={{ aspectRatio: "3/4" }} priority />
            <p style={{ fontFamily: "'Over the Rainbow', cursive", fontSize: "1.3rem", textAlign: "center", marginTop: "0.5rem", color: "#130A0D" }}>that&apos;s me ☆</p>
          </div>
        </div>

        <div>
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#883B43", display: "block", marginBottom: "1.2rem", fontWeight: 600 }}>Nice to meet you</span>
          <h1 style={{ fontFamily: "'Libre Bodoni', serif", fontSize: "clamp(2.4rem,4vw,3.6rem)", lineHeight: 1.05, marginBottom: "1.5rem" }}>
            {about.headline}<br /><em style={{ color: "#883B43" }}>{about.name}</em>
          </h1>
          {about.paragraphs.map((p, i) => <p key={i} style={body}>{p}</p>)}
        </div>
      </motion.section>

      {/* ── Fun Facts ── */}
      <motion.section style={alt} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
        <span style={eyebrow}>a little more about me</span>
        <h2 style={title}>Fun Facts</h2>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))" }}>
          {funFacts.map((f) => (
            <div key={f.num} className="relative p-6 transition-all duration-300" style={{ border: "1px solid #D9CEC5", background: "#FEFCF8" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#883B43")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#D9CEC5")}>
              <span style={{ fontFamily: "'Over the Rainbow', cursive", fontSize: "2.2rem", color: "#D9CEC5", position: "absolute", top: "0.4rem", right: "0.7rem", lineHeight: 1 }}>{f.num}</span>
              <span style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#883B43", display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>{f.label}</span>
              <p style={{ fontFamily: "'Libre Bodoni', serif", fontSize: "0.95rem", lineHeight: 1.45, color: "#130A0D" }}>{f.value}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Currently Loving ── */}
      <motion.section style={sec} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
        <span style={eyebrow}>right now, I&apos;m obsessed with...</span>
        <h2 style={title}>Currently Loving</h2>
        <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
          {[
            { type: "☐ Book Read",       img: currentlyLoving.book.image,   name: currentlyLoving.book.title,   sub: currentlyLoving.book.author,                         note: currentlyLoving.book.note },
            { type: "♪ Song on Replay",  img: currentlyLoving.song.image,   name: currentlyLoving.song.title,   sub: currentlyLoving.song.artist,   spotify: currentlyLoving.song.spotifyUrl, note: currentlyLoving.song.note },
            { type: "✦ Beauty Obsession",img: currentlyLoving.beauty.image, name: currentlyLoving.beauty.title, sub: `${currentlyLoving.beauty.brand} · ${currentlyLoving.beauty.shade}`, note: currentlyLoving.beauty.note },
          ].map((card) => (
            <div key={card.name} className="p-7 transition-all duration-300" style={{ background: "#FEFCF8", borderTop: "2px solid #883B43" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(19,10,13,0.1)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>
              <span style={{ fontSize: "0.56rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#883B43", display: "block", marginBottom: "0.9rem", fontWeight: 600 }}>{card.type}</span>
              <Image src={card.img} alt={card.name} width={200} height={200} className="w-full object-cover mb-4" style={{ aspectRatio: "1/1" }} />
              <p style={{ fontFamily: "'Libre Bodoni', serif", fontSize: "1rem", marginBottom: "0.2rem" }}>{card.name}</p>
              <p style={{ fontSize: "0.7rem", color: "#6B5455", marginBottom: "0.9rem", fontWeight: 500 }}>{card.sub}</p>
              <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.74rem", color: "#6B5455", fontStyle: "italic", lineHeight: 1.7, borderLeft: "2px solid #D9CEC5", paddingLeft: "0.8rem", fontWeight: 400 }}>&ldquo;{card.note}&rdquo;</p>
              {"spotify" in card && card.spotify && (
                <a href={card.spotify} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-block", marginTop: "0.9rem", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#883B43", textDecoration: "none", borderBottom: "1px solid #883B43", paddingBottom: 1, fontWeight: 600 }}>
                  Listen on Spotify ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Résumé ── */}
      <motion.section style={alt} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
        <span style={eyebrow}>credentials</span>
        <h2 style={title}>Résumé</h2>
        <div style={{ border: "1px solid #D9CEC5", background: "#FEFCF8", padding: "2rem", marginBottom: "1.5rem", minHeight: 110, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ fontFamily: "'Libre Bodoni', serif", fontStyle: "italic", color: "#6B5455" }}>Yazaira Luna — Advertising &amp; Media</p>
        </div>
        {/* download attribute triggers immediate PDF download */}
        <a href="/resume/resume.pdf" download="Yazaira_Luna_Resume.pdf"
          style={{ display: "inline-block", padding: "0.75rem 2.2rem", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", border: "1px solid #883B43", color: "#883B43", background: "transparent", textDecoration: "none", fontWeight: 600, transition: "all 0.35s" }}
          onMouseEnter={e => { e.currentTarget.style.background = "#883B43"; e.currentTarget.style.color = "#FEFCF8"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#883B43"; }}>
          Download Résumé ↓
        </a>
      </motion.section>

      {/* ── Contact ── */}
      <motion.section id="contact" style={sec} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
        <span style={eyebrow}>let&apos;s create together</span>
        <h2 style={title}>Get in Touch</h2>
        <div className="grid gap-12" style={{ gridTemplateColumns: "1fr 1.2fr" }}>
          <div>
            {[
              { label: "Email",    href: "mailto:yazairaluna03@gmail.com", display: "yazairaluna03@gmail.com" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/yazaira-luna-34274330b", display: "linkedin.com/in/yazaira-luna-34274330b" },
            ].map((item) => (
              <div key={item.label} style={{ borderBottom: "1px solid #D9CEC5", paddingBottom: "1.2rem", marginBottom: "1.2rem" }}>
                <label style={{ fontSize: "0.56rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#883B43", display: "block", marginBottom: "0.4rem", fontWeight: 600 }}>{item.label}</label>
                <a href={item.href} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'Libre Bodoni', serif", fontSize: "1rem", color: "#130A0D", textDecoration: "none", transition: "color 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#883B43")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#130A0D")}>
                  {item.display}
                </a>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </motion.section>
    </div>
  );
}
