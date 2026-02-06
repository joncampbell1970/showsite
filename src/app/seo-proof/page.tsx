import { LocalSeoPreview } from "@/components/local-seo-preview";
import { Badge } from "@/components/ui/badge";

export default function SeoProofPage() {
  return (
    <div className="container py-12">
      <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
        <div>
          <h1 className="text-3xl font-semibold">Local SEO proof</h1>
          <p className="mt-2 text-slate-600">
            We build your site so Google can match your services to the right towns. Service pages, area pages, and
            internal links work together.
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border bg-slate-50 p-6">
              <h2 className="text-lg font-semibold">Example URL structure</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>/plumber-manchester</li>
                <li>/emergency-plumber-manchester</li>
                <li>/boiler-repair-salford</li>
                <li>/bathroom-fitters-stockport</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6">
              <h2 className="text-lg font-semibold">Metadata sample</h2>
              <p className="mt-2 text-sm text-slate-600">
                <strong>Title:</strong> Emergency Plumber Manchester | 24/7 Call-Out
              </p>
              <p className="text-sm text-slate-600">
                <strong>Description:</strong> Fast local plumber in Manchester. Call now or book online for leaks,
                boilers, and burst pipes.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>GBP-aligned NAP</Badge>
              <Badge>Schema markup</Badge>
              <Badge>Internal links</Badge>
            </div>
          </div>
        </div>
        <LocalSeoPreview />
      </div>
    </div>
  );
}
