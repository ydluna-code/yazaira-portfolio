"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export interface DocMeta {
  key: string;
  project: string;
  title: string;
  subtitle: string;
  desc: string;
  pages: string;
  coverSrc: string;
  pdfSrc: string | null;   // null = download-only (file too large for inline)
  filename: string;
}

interface Props {
  doc: DocMeta | null;
  onClose: () => void;
}

export default function DocumentModal({ doc, onClose }: Props) {
  const [previewing, setPreviewing] = useState(false);
  const [loading, setLoading] = useState(false);

  // Reset when doc changes
  useEffect(() => {
    setPreviewing(false);
    setLoading(false);
  }, [doc]);

  // Close on Escape
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);
  useEffect(() => {
    if (doc) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [doc, handleKey]);

  if (!doc) return null;

  function handlePreview() {
    if (!doc?.pdfSrc) return;
    if (!previewing) { setPreviewing(true); setLoading(true); }
    else             { setPreviewing(false); setLoading(false); }
  }

  function handleDownload() {
    if (!doc?.pdfSrc) return;
    const a = Object.assign(document.createElement("a"), {
      href: doc.pdfSrc, download: doc.filename,
    });
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  const S = {
    backdrop: {
      position: "fixed" as const, inset: 0, zIndex: 1000,
      background: "rgba(19,10,13,0.6)", backdropFilter: "blur(8px)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem",
    },
    box: {
      background: "#FEFCF8", width: "100%", maxWidth: 780,
      maxHeight: "90vh", overflow: "hidden", display: "flex",
      flexDirection: "column" as const, position: "relative" as const,
    },
    closeBtn: {
      position: "absolute" as const, top: "1rem", right: "1.2rem", zIndex: 10,
      background: "none", border: "none", cursor: "pointer", fontSize: "0.6rem",
      letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#6B5455",
      fontFamily: "var(--font-montserrat)", fontWeight: 600, padding: "0.3rem 0.5rem",
      transition: "color 0.2s",
    },
  };

  return (
    <div style={S.backdrop} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={S.box} role="dialog" aria-modal="true">

        {/* Close */}
        <button style={S.closeBtn} onClick={onClose}
          onMouseEnter={e => (e.currentTarget.style.color = "#883B43")}
          onMouseLeave={e => (e.currentTarget.style.color = "#6B5455")}>
          ✕ close
        </button>

        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "148px 1fr", gap: "1.8rem", padding: "1.8rem 1.8rem 1.5rem", borderBottom: "1px solid #D9CEC5", alignItems: "start" }}>
          <Image src={doc.coverSrc} alt={`${doc.project} ${doc.title} cover`} width={148} height={200}
            style={{ width: 148, aspectRatio: "3/4", objectFit: "cover", boxShadow: "3px 5px 18px rgba(19,10,13,0.18)", flexShrink: 0 }} />
          <div>
            <span style={{ fontSize: "0.56rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#883B43", display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>{doc.project}</span>
            <h2 style={{ fontFamily: "'Libre Bodoni', serif", fontSize: "1.45rem", lineHeight: 1.15, marginBottom: "0.35rem" }}>{doc.title}</h2>
            <p style={{ fontSize: "0.7rem", color: "#6B5455", fontWeight: 500, marginBottom: "0.7rem" }}>{doc.subtitle}</p>
            <p style={{ fontSize: "0.82rem", lineHeight: 1.8, color: "#6B5455", fontWeight: 500, maxWidth: 420, marginBottom: "0.8rem" }}>{doc.desc}</p>
            <p style={{ fontSize: "0.56rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#D9CEC5", fontWeight: 600, marginBottom: "1.1rem" }}>{doc.pages}</p>

            <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap", alignItems: "center" }}>
              {doc.pdfSrc && (
                <button onClick={handlePreview}
                  style={{ padding: "0.62rem 1.5rem", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid #883B43", color: previewing ? "#FEFCF8" : "#883B43", background: previewing ? "#883B43" : "transparent", cursor: "pointer", transition: "all 0.3s", fontFamily: "var(--font-montserrat)", fontWeight: 600 }}>
                  {previewing ? "Close Preview" : "Preview Document"}
                </button>
              )}
              {doc.pdfSrc ? (
                <button onClick={handleDownload}
                  style={{ padding: "0.62rem 1.5rem", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid #D9CEC5", color: "#6B5455", background: "transparent", cursor: "pointer", transition: "all 0.3s", fontFamily: "var(--font-montserrat)", fontWeight: 600 }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#130A0D"; e.currentTarget.style.color = "#130A0D"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#D9CEC5"; e.currentTarget.style.color = "#6B5455"; }}>
                  Download PDF ↓
                </button>
              ) : (
                <span style={{ fontSize: "0.72rem", color: "#6B5455", fontStyle: "italic", fontFamily: "'Courier Prime', monospace" }}>
                  Available via download only
                </span>
              )}
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        {previewing && doc.pdfSrc && (
          <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #D9CEC5", flex: 1, overflow: "hidden", minHeight: 0 }}>
            <div style={{ padding: "0.6rem 1.5rem", background: "#F5EFE6", borderBottom: "1px solid #D9CEC5", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
              <span style={{ fontSize: "0.56rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B5455", fontWeight: 600 }}>
                Previewing — {doc.project} {doc.title}
              </span>
              <button onClick={handlePreview}
                style={{ fontSize: "0.56rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B5455", background: "none", border: "none", cursor: "pointer", fontWeight: 600, fontFamily: "var(--font-montserrat)", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#883B43")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6B5455")}>
                ✕ Close Preview
              </button>
            </div>

            {loading && (
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", padding: "2.5rem" }}>
                <div style={{ width: 180, height: 2, background: "#D9CEC5", overflow: "hidden" }}>
                  <div style={{ height: "100%", background: "#883B43", animation: "dmLoad 1.4s ease-in-out infinite" }} />
                </div>
                <p style={{ fontSize: "0.76rem", color: "#6B5455", fontStyle: "italic", fontFamily: "'Courier Prime', monospace", fontWeight: 400 }}>Loading document...</p>
              </div>
            )}

            <iframe
              src={doc.pdfSrc}
              title={`${doc.project} ${doc.title}`}
              style={{ flex: 1, width: "100%", border: "none", display: loading ? "none" : "block", minHeight: 380 }}
              onLoad={() => setLoading(false)}
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes dmLoad {
          0%   { width:0;   margin-left:0 }
          50%  { width:55%; margin-left:22% }
          100% { width:0;   margin-left:100% }
        }
        @media(max-width:600px){
          [role="dialog"] { max-height:96vh }
        }
      `}</style>
    </div>
  );
}
