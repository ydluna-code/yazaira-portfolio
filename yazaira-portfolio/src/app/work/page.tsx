"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects, type ProjectDoc } from "../../../content/projects";
import DocumentModal, { type DocMeta } from "@/components/ui/DocumentModal";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const S = {
  label: { fontFamily: "'Over the Rainbow', cursive", fontSize: "1rem", color: "#883B43", display: "block", marginBottom: "0.3rem", marginTop: "2rem" } as React.CSSProperties,
  h3:    { fontFamily: "'Libre Bodoni', serif", fontSize: "1.4rem", marginBottom: "1rem" } as React.CSSProperties,
  p:     { fontSize: "0.87rem", lineHeight: 1.95, color: "#6B5455", marginBottom: "0.8rem", maxWidth: "740px", fontWeight: 500 } as React.CSSProperties,
  li:    { fontSize: "0.84rem", lineHeight: 1.9, color: "#6B5455", paddingLeft: "1.2rem", position: "relative" as const, fontWeight: 500 },
  hr:    { border: "none", borderTop: "1px solid #D9CEC5", margin: "2rem 0" } as React.CSSProperties,
};

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function docToMeta(doc: ProjectDoc): DocMeta {
  return {
    key:        doc.file,
    project:    doc.label.replace(".pdf", ""),
    title:      doc.title,
    subtitle:   doc.subtitle,
    desc:       doc.desc,
    pages:      doc.pages,
    coverSrc:   doc.coverSrc,
    pdfSrc:     doc.canPreview ? doc.file : null,
    filename:   doc.file.split("/").pop() ?? doc.label,
  };
}

export default function WorkPage() {
  const [activeDoc, setActiveDoc] = useState<DocMeta | null>(null);

  return (
    <div style={{ background: "#F5EFE6" }}>

      {/* Intro */}
      <motion.div className="text-center" style={{ padding: "1.5rem 3.5rem 1rem" }} variants={fadeUp} initial="hidden" animate="show">
        <span style={{ fontFamily: "'Over the Rainbow', cursive", fontSize: "1rem", color: "#883B43", display: "block", marginBottom: "0.4rem" }}>selected projects</span>
        <h1 style={{ fontFamily: "'Libre Bodoni', serif", fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "0.4rem" }}>Creative Work</h1>
        <p style={{ fontSize: "0.75rem", color: "#6B5455", letterSpacing: "0.08em", fontWeight: 500 }}>Click a client to jump to their case study</p>
      </motion.div>

      {/* Sticky nav */}
      <div className="sticky flex gap-10 justify-center flex-wrap px-8 py-3"
        style={{ top: 62, zIndex: 200, background: "rgba(245,239,230,0.94)", backdropFilter: "blur(12px)", borderTop: "1px solid #D9CEC5", borderBottom: "1px solid #D9CEC5" }}>
        {projects.map((p) => (
          <button key={p.id} onClick={() => scrollToId(`proj-${p.id}`)}
            style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B5455", cursor: "pointer", background: "none", border: "none", borderBottom: "1.5px solid transparent", fontFamily: "var(--font-montserrat)", padding: "0.4rem 0", transition: "all 0.3s", fontWeight: 600 }}
            onMouseEnter={e => { e.currentTarget.style.color = "#883B43"; e.currentTarget.style.borderBottomColor = "#883B43"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "#6B5455"; e.currentTarget.style.borderBottomColor = "transparent"; }}>
            {p.client}
          </button>
        ))}
      </div>

      {/* Projects */}
      {projects.map((project, idx) => (
        <ProjectSection key={project.id} project={project} alt={idx % 2 === 1} onOpenDoc={(doc) => setActiveDoc(docToMeta(doc))} />
      ))}

      <div className="flex justify-center py-10">
        <Link href="/" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B5455", textDecoration: "none", fontWeight: 600 }}
          onMouseEnter={e => (e.currentTarget.style.color = "#883B43")}
          onMouseLeave={e => (e.currentTarget.style.color = "#6B5455")}>
          ← Back to Home
        </Link>
      </div>

      {/* Document Modal */}
      <DocumentModal doc={activeDoc} onClose={() => setActiveDoc(null)} />
    </div>
  );
}

function ProjectSection({ project, alt, onOpenDoc }: {
  project: typeof projects[0];
  alt: boolean;
  onOpenDoc: (doc: typeof projects[0]["documents"][0]) => void;
}) {
  return (
    <motion.section id={`proj-${project.id}`}
      style={{ padding: "2.5rem 3.5rem 3.5rem", borderTop: "1px solid #D9CEC5", background: alt ? "#FAF6EF" : "#F5EFE6" }}
      variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>

      {/* Header */}
      <div className="grid gap-12 mb-10" style={{ gridTemplateColumns: "1fr 2fr" }}>
        <div>
          <span style={{ fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#883B43", fontWeight: 600 }}>{project.category}</span>
          <div style={{ fontFamily: "'Libre Bodoni', serif", fontSize: "3rem", color: "#D9CEC5", lineHeight: 1, margin: "0.4rem 0" }}>{project.year}</div>
          <div className="grid gap-4 mt-3" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {([["Client", project.client], ["Role", project.role], ["Firm", project.firm]] as [string,string][]).map(([l,v]) => (
              <div key={l}>
                <label style={{ fontSize: "0.54rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#883B43", display: "block", marginBottom: "0.2rem", fontWeight: 600 }}>{l}</label>
                <span style={{ fontSize: "0.82rem", color: "#130A0D", fontWeight: 500 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span style={{ fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#883B43", display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>{project.semester}</span>
          <h2 style={{ fontFamily: "'Libre Bodoni', serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", lineHeight: 1.1, marginBottom: "1rem" }}>{project.client}</h2>
          <p style={{ fontSize: "0.87rem", lineHeight: 1.95, color: "#6B5455", maxWidth: "560px", fontWeight: 500 }}>{project.summary}</p>
        </div>
      </div>

      <span style={S.label}>who?</span>
      <h3 style={S.h3}>About the Client</h3>
      <p style={S.p}>{project.who}</p>

      <span style={S.label}>the objective</span>
      <h3 style={S.h3}>{project.objective.length < 60 ? project.objective : "The Mission"}</h3>
      {project.objective.length >= 60 && <p style={S.p}>{project.objective}</p>}

      {project.bigIdea && (
        <>
          <span style={S.label}>big idea</span>
          <h3 style={S.h3}>{project.bigIdea}</h3>
          <p style={S.p}>A campaign built on the idea that Tazo is more than a beverage — it&apos;s a ritual. Every cup is an invitation to slow down, connect, and be present with the people around you.</p>
        </>
      )}

      {project.deliverables.map((del, i) => (
        <div key={i}>
          <hr style={S.hr} />
          <span style={S.label}>deliverable {String(i+1).padStart(2,"0")}</span>
          <h3 style={S.h3}>{del.title}</h3>
          <p style={S.p}>{del.purpose}</p>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "1rem" }}>
            {del.details.map((d,j) => (
              <li key={j} style={S.li}><span style={{ position: "absolute", left: 0, color: "#883B43" }}>—</span>{d}</li>
            ))}
          </ul>
          <div style={{ display: "grid", gap: "1.2rem", marginTop: "1.5rem", gridTemplateColumns: del.images.length === 3 ? "1fr 1fr 1fr" : "1fr 1fr" }}>
            {del.images.map((img) => (
              <div key={img.src} style={{ overflow: "hidden", background: img.transparent ? "transparent" : "#FAF6EF" }}>
                <Image src={img.src} alt={img.alt} width={600} height={img.layout === "logo" ? 200 : 400}
                  className="w-full block transition-transform duration-500 hover:scale-[1.02]"
                  style={{ objectFit: img.transparent ? "contain" : "cover", maxHeight: img.layout === "logo" ? 160 : 340, background: "transparent" }} />
              </div>
            ))}
          </div>
        </div>
      ))}

      {project.learnedItems && project.learnedItems.length > 0 && (
        <>
          <hr style={S.hr} />
          <span style={S.label}>what I learned</span>
          <h3 style={S.h3}>Skills &amp; Growth</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {project.learnedItems.map((item,i) => (
              <li key={i} style={S.li}><span style={{ position: "absolute", left: 0, color: "#883B43" }}>—</span>{item}</li>
            ))}
          </ul>
        </>
      )}

      {project.blogUrl && (
        <>
          <span style={S.label}>my posts</span>
          <h3 style={S.h3}>Published Articles</h3>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "1rem" }}>
            {(project.blogPosts ?? []).map((post,i) => (
              <li key={i} style={S.li}><span style={{ position: "absolute", left: 0, color: "#883B43" }}>—</span>{post}</li>
            ))}
          </ul>
          <a href={project.blogUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-between no-underline transition-all duration-300"
            style={{ padding: "1.5rem 2rem", border: "1px solid #D9CEC5", background: "#FEFCF8", margin: "1.5rem 0", color: "inherit" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#883B43"; e.currentTarget.style.transform = "translateX(4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#D9CEC5"; e.currentTarget.style.transform = ""; }}>
            <div>
              <h4 style={{ fontFamily: "'Libre Bodoni', serif", fontSize: "1rem", marginBottom: "0.3rem", color: "#130A0D" }}>goodkidadcityy.wordpress.com</h4>
              <p style={{ fontSize: "0.72rem", color: "#6B5455", fontWeight: 500 }}>Visit the live blog — read all five articles ↗</p>
            </div>
            <span style={{ fontSize: "1.4rem", color: "#883B43" }}>→</span>
          </a>
        </>
      )}

      {project.results.length > 0 && (
        <>
          <hr style={S.hr} />
          <span style={S.label}>results</span>
          <h3 style={S.h3}>{project.id === "chop-house" ? "Deliverables at a Glance" : "Impact & Recognition"}</h3>
          <div className="grid gap-5 mt-6" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))" }}>
            {project.results.map((m,i) => (
              <div key={i} style={{ border: "1px solid #D9CEC5", textAlign: "center", padding: "1.8rem 1rem", background: "#FEFCF8" }}>
                <span style={{ fontFamily: "'Libre Bodoni', serif", fontSize: "2rem", color: "#883B43", display: "block" }}>{m.value}</span>
                <span style={{ fontSize: "0.58rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#6B5455", display: "block", marginTop: "0.4rem", lineHeight: 1.4, fontWeight: 600 }}>{m.label}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Supporting Documents — modal trigger */}
      {project.documents.length > 0 && (
        <>
          <hr style={S.hr} />
          <span style={S.label}>documents</span>
          <h3 style={S.h3}>Supporting Materials</h3>
          <div className="flex flex-col gap-3 mt-4">
            {project.documents.map((doc) => (
              <button key={doc.label} onClick={() => onOpenDoc(doc)}
                className="flex justify-between items-center w-full transition-all duration-300 text-left"
                style={{ padding: "1rem 1.4rem", border: "1px solid #D9CEC5", background: "#FEFCF8", cursor: "pointer", color: "inherit" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#883B43"; e.currentTarget.style.background = "rgba(136,59,67,0.03)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#D9CEC5"; e.currentTarget.style.background = "#FEFCF8"; }}>
                <div className="flex items-center gap-4">
                  {/* Mini cover thumbnail */}
                  <Image src={doc.coverSrc} alt="" width={32} height={42}
                    style={{ width: 32, height: 42, objectFit: "cover", border: "1px solid #D9CEC5", flexShrink: 0 }} />
                  <div className="text-left">
                    <span style={{ fontSize: "0.78rem", fontFamily: "'Courier Prime', monospace", color: "#130A0D", fontWeight: 400, display: "block" }}>{doc.label}</span>
                    <span style={{ fontSize: "0.6rem", letterSpacing: "0.12em", color: "#6B5455", fontWeight: 500 }}>{doc.pages} · {doc.canPreview ? "Preview available" : "Download only"}</span>
                  </div>
                </div>
                <em style={{ fontSize: "0.56rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#883B43", fontStyle: "normal", fontWeight: 600, flexShrink: 0 }}>View ↗</em>
              </button>
            ))}
          </div>
        </>
      )}

      <p style={{ fontSize: "0.78rem", color: "#6B5455", fontStyle: "italic", marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #D9CEC5", fontWeight: 400, fontFamily: "'Courier Prime', monospace" }}>
        {project.collaborators}
      </p>
    </motion.section>
  );
}
