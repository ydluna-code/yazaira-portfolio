"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Work",    href: "/work" },
  { label: "Contact", href: "/about#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 right-0 z-[300] flex justify-between items-center px-10 py-4"
      style={{ background: "rgba(245,239,230,0.92)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(217,206,197,0.5)", height: "62px" }}>
      <Link href="/" style={{ fontFamily: "'Over the Rainbow', cursive", fontSize: "1.35rem", color: "#883B43", textDecoration: "none" }}>
        Yazaira Luna
      </Link>
      <div className="flex gap-9 items-center">
        {links.map((link) => {
          const base = link.href.split("#")[0];
          const isActive = base === "/" ? pathname === "/" : pathname.startsWith(base);
          return (
            <Link key={link.label} href={link.href}
              style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: isActive ? "#883B43" : "#6B5455", textDecoration: "none", fontWeight: 600, position: "relative" as const, paddingBottom: "3px", transition: "color 0.3s" }}>
              {link.label}
              {isActive && <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "#883B43" }} />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
