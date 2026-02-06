import Link from "next/link";
import { demo } from "@/lib/demo-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function BookingTeaser() {
  const slots = demo.bookingSlots.slice(0, 2);
  return (
    <Card>
      <CardContent className="space-y-3">
        <p className="text-sm font-semibold">Instant booking widget</p>
        <div className="space-y-2 text-xs text-slate-600">
          {slots.map((slot) => (
            <div key={slot.id} className="flex items-center justify-between rounded-md border bg-white px-3 py-2">
              <span>
                {slot.date} · {slot.time}
              </span>
              <span className="text-brand-600">Available</span>
            </div>
          ))}
        </div>
        <Button asChild size="sm">
          <Link href="/book">Book a call</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
