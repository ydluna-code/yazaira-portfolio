"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-62px)] flex flex-col" style={{ background: "#F5EFE6" }}>
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 gap-14">

        {/* Title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span style={{ fontFamily: "'Over the Rainbow', cursive", fontSize: "clamp(3.8rem,10vw,8rem)", color: "#883B43", display: "block", lineHeight: 0.88, transform: "rotate(-2.5deg)" }}>
            Portfolio
          </span>
          <span style={{ fontFamily: "'Libre Bodoni', serif", fontSize: "clamp(0.9rem,2vw,1.3rem)", letterSpacing: "0.22em", color: "#130A0D", display: "block", marginTop: "0.8rem", fontWeight: 400 }}>
            Yazaira Luna
          </span>
        </motion.div>

        {/* Two objects */}
        <div className="flex items-center justify-center gap-16 flex-wrap">

          {/* Paper card → Work */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -2.5 }}
            animate={{ opacity: 1, y: 0, rotate: -2.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ rotate: -0.5, scale: 1.05, y: -10 }}
          >
            <Link href="/work" className="block no-underline" style={{ filter: "drop-shadow(4px 8px 18px rgba(19,10,13,0.14))" }}>
              <div style={{ background: "#FEFCF8", padding: "2.2rem 2.5rem 2rem", width: 240, minHeight: 250, position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%) rotate(1.5deg)", width: 54, height: 20, background: "rgba(245,239,230,0.75)", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }} />
                <div style={{ position: "absolute", top: 0, left: "1.5rem", right: "1.5rem", height: 2, background: "repeating-linear-gradient(90deg,#883B43 0,#883B43 3px,transparent 3px,transparent 9px)" }} />
                {["Blue Ridge Foster VA", "Chop House", "Tazo", "Good Kid, Ad City"].map((name) => (
                  <span key={name} style={{ fontFamily: "'Over the Rainbow', cursive", fontSize: "1rem", color: "#130A0D", lineHeight: 2.4, display: "block" }}>{name}</span>
                ))}
                <span style={{ fontFamily: "'Over the Rainbow', cursive", fontSize: "0.9rem", color: "#883B43", textAlign: "center", marginTop: "1rem", display: "block" }}>creative work →</span>
              </div>
            </Link>
          </motion.div>

          {/* Polaroid → About */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 3.5 }}
            animate={{ opacity: 1, y: 0, rotate: 3.5 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            whileHover={{ rotate: 1, scale: 1.05, y: -10 }}
          >
            <Link href="/about" className="block no-underline" style={{ filter: "drop-shadow(4px 8px 18px rgba(19,10,13,0.18))" }}>
              <div style={{ background: "#FEFCF8", padding: "0.85rem 0.85rem 3rem", width: 200, position: "relative" }}>
                <div style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%) rotate(-1.5deg)", width: 54, height: 20, background: "rgba(245,239,230,0.75)", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }} />
                <div style={{ overflow: "hidden", aspectRatio: "4/5" }}>
                  <Image src="/images/photos/polaroid.jpg" alt="Yazaira Luna" width={208} height={260} className="w-full h-full object-cover object-top" priority />
                </div>
                <p style={{ fontFamily: "'Over the Rainbow', cursive", fontSize: "1.2rem", color: "#130A0D", textAlign: "center", marginTop: "0.4rem" }}>About Me ♡</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer — no Email link */}
      <footer className="border-t flex justify-between items-center px-12 py-5 flex-wrap gap-4" style={{ borderColor: "#D9CEC5" }}>
        <div className="flex gap-8 flex-wrap">
          {[
            { label: "Contact",  href: "/about#contact" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/yazaira-luna-34274330b", ext: true },
            { label: "Résumé",   href: "/resume/resume.pdf", ext: true },
          ].map((link) => (
            <a key={link.label} href={link.href} target={link.ext ? "_blank" : undefined} rel={link.ext ? "noopener noreferrer" : undefined}
              style={{ fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#6B5455", textDecoration: "none", fontWeight: 600, transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#883B43")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6B5455")}
            >
              {link.label}
            </a>
          ))}
        </div>
        <span style={{ fontFamily: "'Over the Rainbow', cursive", fontSize: "0.82rem", color: "#D9CEC5" }}>© 2025 Yazaira Luna</span>
      </footer>
    </div>
  );
}
