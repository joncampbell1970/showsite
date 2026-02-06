import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  { title: "Discovery", detail: "Understand your trade, best jobs, and areas." },
  { title: "Content", detail: "We shape your services, proof, and FAQs." },
  { title: "Build", detail: "Design and development with live demos." },
  { title: "Launch", detail: "Go live with SEO, forms, and tracking." },
  { title: "Support", detail: "Ongoing tweaks and updates." },
];

export default function ProcessPage() {
  return (
    <div className="container py-12">
      <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
        <div>
          <h1 className="text-3xl font-semibold">Our build process</h1>
          <p className="mt-2 text-slate-600">Clear steps so you know exactly what happens next.</p>
          <div className="mt-6 space-y-4">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-4 rounded-xl border p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <Card>
            <CardContent className="space-y-3">
              <h2 className="text-lg font-semibold">What we need from you</h2>
              <ul className="text-sm text-slate-600">
                <li>✔ Main services and target areas</li>
                <li>✔ Photos of recent work</li>
                <li>✔ Preferred jobs and pricing</li>
                <li>✔ Contact details for the site</li>
              </ul>
            </CardContent>
          </Card>
          <div className="rounded-xl border bg-brand-50 p-6">
            <h3 className="text-lg font-semibold text-brand-900">Ready to start?</h3>
            <p className="mt-2 text-sm text-brand-800">Book a discovery call and we will map the plan.</p>
            <Button asChild className="mt-4">
              <Link href="/book">Book a call</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
