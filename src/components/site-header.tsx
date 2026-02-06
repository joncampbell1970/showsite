import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/live-features", label: "Live Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/process", label: "Process" },
  { href: "/seo-proof", label: "SEO Proof" },
  { href: "/example-trades-sites", label: "Example Sites" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link href="/" className="text-base font-semibold text-slate-900">
          Trades Website Features Demo
        </Link>
        <nav className="hidden items-center gap-4 text-sm text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button asChild size="sm">
          <Link href="/book">Book a Discovery Call</Link>
        </Button>
      </div>
    </header>
  );
}
