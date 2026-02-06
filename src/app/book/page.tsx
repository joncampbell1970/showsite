import { BookingForm } from "@/components/forms/booking-form";

export default function BookPage() {
  return (
    <div className="container py-12">
      <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
        <div>
          <h1 className="text-3xl font-semibold">Book a discovery call</h1>
          <p className="mt-2 text-slate-600">
            Pick a slot that works for you. We will review your trade, service area, and goals.
          </p>
          <div className="mt-6">
            <BookingForm />
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border bg-slate-50 p-6">
            <h2 className="text-lg font-semibold">What we cover on the call</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>✔ Your services and ideal jobs</li>
              <li>✔ Your current leads and gaps</li>
              <li>✔ A realistic quote range</li>
              <li>✔ Timeline to launch</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6 text-sm text-slate-600">
            <p className="font-medium text-slate-900">No pressure.</p>
            <p className="mt-2">We will give straight answers and a clear next step.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
