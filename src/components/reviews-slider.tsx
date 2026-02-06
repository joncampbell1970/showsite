"use client";

import { useState } from "react";
import { demo } from "@/lib/demo-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ReviewsSlider() {
  const [index, setIndex] = useState(0);
  const review = demo.reviews[index];

  const next = () => setIndex((prev) => (prev + 1) % demo.reviews.length);
  const prev = () => setIndex((prev) => (prev - 1 + demo.reviews.length) % demo.reviews.length);

  return (
    <Card>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">Live reviews</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={prev} aria-label="Previous review">
              Back
            </Button>
            <Button variant="outline" size="sm" onClick={next} aria-label="Next review">
              Next
            </Button>
          </div>
        </div>
        <div className="rounded-lg border bg-slate-50 p-4">
          <p className="text-sm text-slate-700">“{review.text}”</p>
          <p className="mt-2 text-xs text-slate-500">
            {review.name} · {review.trade} · {review.location} · {"★".repeat(review.rating)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
