import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container grid gap-6 py-10 md:grid-cols-[2fr,1fr,1fr]">
        <div>
          <h3 className="text-lg font-semibold">Get a trades website that earns its keep</h3>
          <p className="mt-2 text-sm text-slate-600">
            UK-based web builds for builders, electricians, plumbers and roofers. Straightforward setup, clear
            enquiries, and features you can try today.
          </p>
          <div className="mt-4 text-sm text-slate-600">
            <p>Call: 020 8123 4567</p>
            <p>Email: hello@tradesdemo.co.uk</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/live-features">Live Features</Link>
            </li>
            <li>
              <Link href="/get-a-quote">Get a Quote</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/process">Process</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>VAT may apply depending on package.</li>
            <li>Demo data for showroom purposes only.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
