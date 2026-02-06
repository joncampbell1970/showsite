"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type AdminData = {
  quotes: Array<Record<string, string | string[]>>;
  bookings: Array<Record<string, string>>;
  enquiries: Array<Record<string, string>>;
};

export function DemoAdminPanel() {
  const [data, setData] = useState<AdminData | null>(null);
  const [selected, setSelected] = useState<Record<string, string | string[]> | null>(null);

  useEffect(() => {
    fetch("/api/admin")
      .then((res) => res.json())
      .then((payload) => setData(payload));
  }, []);

  const rows = [
    ...(data?.quotes.map((item) => ({ type: "Quote", item })) ?? []),
    ...(data?.bookings.map((item) => ({ type: "Booking", item })) ?? []),
    ...(data?.enquiries.map((item) => ({ type: "Enquiry", item })) ?? []),
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-xl border bg-slate-50 p-6">
        <h2 className="text-2xl font-semibold">Demo Admin Panel</h2>
        <p className="mt-2 text-sm text-slate-600">
          Submissions stored in-memory for the demo. Refreshing the server will clear this list.
        </p>
      </div>
      <div className="rounded-xl border">
        <div className="grid grid-cols-[120px,1fr,160px,120px] gap-2 border-b bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600">
          <span>Type</span>
          <span>Details</span>
          <span>Submitted</span>
          <span></span>
        </div>
        {rows.length === 0 && (
          <div className="px-4 py-6 text-sm text-slate-500">No submissions yet.</div>
        )}
        {rows.map((row, index) => (
          <div
            key={`${row.type}-${index}`}
            className="grid grid-cols-[120px,1fr,160px,120px] gap-2 border-b px-4 py-3 text-sm"
          >
            <span className="font-medium text-slate-700">{row.type}</span>
            <span className="text-slate-600">
              {row.type === "Quote" ? `${row.item.trade} · ${(row.item.services as string[]).join(", ")}` : row.item.name}
            </span>
            <span className="text-xs text-slate-500">{row.item.createdAt}</span>
            <Button size="sm" variant="outline" onClick={() => setSelected(row.item)}>
              View
            </Button>
          </div>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submission details</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-2 text-sm text-slate-600">
              {Object.entries(selected).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-xs uppercase text-slate-400">{key}</span>
                  <span className="text-slate-700">
                    {Array.isArray(value) ? value.join(", ") : value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
