"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const templates = [
  {
    id: "builder",
    title: "Builder",
    sections: [
      "Hero with trust strip",
      "Extension + renovation services",
      "Before/after gallery",
      "Quote estimator",
      "Area coverage map",
    ],
  },
  {
    id: "electrician",
    title: "Electrician",
    sections: [
      "Emergency call-out banner",
      "EV charger service block",
      "Certification badges",
      "Booking widget",
      "Review carousel",
    ],
  },
  {
    id: "plumber",
    title: "Plumber",
    sections: [
      "Boiler repair CTA",
      "Service plan offers",
      "Live reviews",
      "Fast enquiry form",
      "Local SEO pages",
    ],
  },
  {
    id: "roofer",
    title: "Roofer",
    sections: [
      "Storm damage CTA",
      "Flat + pitched roof services",
      "Gallery showcase",
      "Warranty highlights",
      "Quote form",
    ],
  },
];

export default function ExampleTradesSitesPage() {
  const [active, setActive] = useState<(typeof templates)[0] | null>(null);

  return (
    <div className="container py-12">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Example trades websites</h1>
        <p className="text-slate-600">
          Open each layout to see how content is structured for different trades. These are realistic, ready-to-launch
          templates.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {templates.map((template) => (
          <Card key={template.id}>
            <CardHeader>
              <CardTitle>{template.title} Template</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-600">
                Built for {template.title.toLowerCase()} enquiries with clear service blocks and strong calls to action.
              </p>
              <Button variant="outline" onClick={() => setActive(template)}>
                View layout
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{active?.title} Homepage Layout</DialogTitle>
          </DialogHeader>
          <div className="space-y-2 text-sm text-slate-600">
            {active?.sections.map((section) => (
              <div key={section} className="rounded-md border bg-slate-50 px-3 py-2">
                {section}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
