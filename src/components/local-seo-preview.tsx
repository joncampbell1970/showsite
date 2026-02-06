import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function LocalSeoPreview() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border bg-slate-50 p-6">
        <h3 className="text-lg font-semibold">Local SEO structure preview</h3>
        <p className="mt-2 text-sm text-slate-600">
          Service pages link to area pages and vice versa, helping Google understand coverage.
        </p>
        <div className="mt-4 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
          <Link href="#" className="underline">
            /electrician-leeds
          </Link>
          <Link href="#" className="underline">
            /electrician-bradford
          </Link>
          <Link href="#" className="underline">
            /rewire-leeds
          </Link>
          <Link href="#" className="underline">
            /ev-charger-installation-leeds
          </Link>
        </div>
      </div>
      <div className="rounded-xl border p-6">
        <h4 className="text-sm font-semibold">Internal link map</h4>
        <svg viewBox="0 0 420 180" className="mt-4 w-full">
          <rect x="10" y="20" width="120" height="40" rx="8" fill="#e0e7ff" />
          <text x="20" y="45" fontSize="12" fill="#1e1b4b">Service page</text>
          <rect x="170" y="10" width="120" height="40" rx="8" fill="#fef3c7" />
          <text x="180" y="35" fontSize="12" fill="#92400e">Area page A</text>
          <rect x="170" y="70" width="120" height="40" rx="8" fill="#fef3c7" />
          <text x="180" y="95" fontSize="12" fill="#92400e">Area page B</text>
          <rect x="170" y="130" width="120" height="40" rx="8" fill="#fef3c7" />
          <text x="180" y="155" fontSize="12" fill="#92400e">Area page C</text>
          <line x1="130" y1="40" x2="170" y2="30" stroke="#64748b" strokeWidth="2" />
          <line x1="130" y1="40" x2="170" y2="90" stroke="#64748b" strokeWidth="2" />
          <line x1="130" y1="40" x2="170" y2="150" stroke="#64748b" strokeWidth="2" />
        </svg>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge>Service pages</Badge>
          <Badge>Area pages</Badge>
          <Badge>GBP alignment</Badge>
        </div>
      </div>
    </div>
  );
}
