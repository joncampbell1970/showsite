import Link from "next/link";
import { demo } from "@/lib/demo-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function PricingPage() {
  return (
    <div className="container py-12">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Clear pricing for trades websites</h1>
        <p className="text-slate-600">Monthly plans with straightforward setup fees. No long-term contracts.</p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {demo.packages.map((pkg) => (
          <Card key={pkg.name}>
            <CardHeader>
              <CardTitle>{pkg.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-2xl font-semibold text-slate-900">{pkg.price}</p>
              <p className="text-sm text-slate-500">{pkg.setup}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {pkg.features.map((feature) => (
                  <li key={feature}>✔ {feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/book">Book a call</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-xl border bg-slate-50 p-6">
        <h2 className="text-xl font-semibold">Compared to leads platforms</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-white p-4 text-sm text-slate-600">
            <h3 className="font-semibold text-slate-900">Our websites</h3>
            <ul className="mt-2 space-y-2">
              <li>✔ Your brand and reviews upfront</li>
              <li>✔ Quotes go straight to you</li>
              <li>✔ Long-term asset you own</li>
            </ul>
          </div>
          <div className="rounded-lg border bg-white p-4 text-sm text-slate-600">
            <h3 className="font-semibold text-slate-900">Generic leads platforms</h3>
            <ul className="mt-2 space-y-2">
              <li>• Shared leads with competitors</li>
              <li>• Less control over quality</li>
              <li>• Ongoing fees per enquiry</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
