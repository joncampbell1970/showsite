import { QuoteWizard } from "@/components/forms/quote-wizard";
import { EmailPreview } from "@/components/email-preview";

export default function GetQuotePage() {
  return (
    <div className="container py-12">
      <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
        <div>
          <h1 className="text-3xl font-semibold">Get a trades website quote</h1>
          <p className="mt-2 text-slate-600">
            Answer a few quick questions. We will send a tailored estimate and a simple action plan.
          </p>
          <div className="mt-6">
            <QuoteWizard />
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border bg-slate-50 p-6">
            <h2 className="text-lg font-semibold">What happens next</h2>
            <ol className="mt-3 space-y-2 text-sm text-slate-600">
              <li>1. We review your trade and service area.</li>
              <li>2. We build a quick plan and quote range.</li>
              <li>3. You get a short call to lock in priorities.</li>
            </ol>
          </div>
          <EmailPreview
            subject="Your quote request is in – we will respond within 1 working day"
            body={`Hi {{name}},\n\nWe have received your website quote request. We will send a tailored estimate, timings, and next steps within one working day.\n\nThanks,\nTrades Website Demo Team`}
            variables={["{{name}}"]}
          />
        </div>
      </div>
    </div>
  );
}
