import { Button } from "@/components/ui/button";

export function PhoneFramePreview() {
  return (
    <div className="rounded-3xl border bg-slate-950 p-3 text-white shadow-lg">
      <div className="rounded-2xl bg-white px-4 py-6 text-slate-900">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500">Mobile preview</span>
          <span className="text-xs font-medium">09:41</span>
        </div>
        <div className="mt-4 space-y-3">
          <p className="text-sm font-semibold">Call-out electrician in Leeds</p>
          <p className="text-xs text-slate-600">
            Tap to call, or request a callback. Clients can reach you in 1 tap.
          </p>
          <Button className="w-full" size="sm">
            Tap to Call 0113 555 0192
          </Button>
          <Button className="w-full" size="sm" variant="outline">
            Request a Callback
          </Button>
        </div>
      </div>
    </div>
  );
}
