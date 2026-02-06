"use client";

import { useState } from "react";
import Image from "next/image";
import { demo } from "@/lib/demo-data";
import { Badge } from "@/components/ui/badge";

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YxZjVmOSI+PC9yZWN0Pjwvc3ZnPg==";

export function ReviewsGallery() {
  const trades = ["All", ...new Set(demo.gallery.map((item) => item.trade))];
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? demo.gallery : demo.gallery.filter((item) => item.trade === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {trades.map((trade) => (
          <button
            key={trade}
            type="button"
            onClick={() => setFilter(trade)}
            className={`rounded-full border px-3 py-1 text-xs font-medium ${
              filter === trade ? "bg-brand-600 text-white" : "bg-white text-slate-600"
            }`}
          >
            {trade}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-xl border">
            <div className="relative h-40 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>
            <div className="space-y-1 p-4">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <Badge>{item.trade}</Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
