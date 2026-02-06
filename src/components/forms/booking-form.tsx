"use client";

import { useMemo, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { demo } from "@/lib/demo-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const schema = z.object({
  slotId: z.string().min(1, "Select a slot"),
  name: z.string().min(2, "Add your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Enter a phone number"),
});

type FormValues = z.infer<typeof schema>;

const formatICS = ({ name, date, time }: { name: string; date: string; time: string }) => {
  const start = `${date.replace(/-/g, "")}T${time.replace(":", "")}00`;
  const end = `${date.replace(/-/g, "")}T${time.replace(":", "")}00`;
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `SUMMARY:Discovery Call with ${name}`,
    `DTSTART:${start}Z`,
    `DTEND:${end}Z`,
    "DESCRIPTION:Trades website discovery call",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");
};

export function BookingForm() {
  const [success, setSuccess] = useState<null | {
    slotId: string;
    date: string;
    time: string;
    name: string;
    email: string;
    phone: string;
  }>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const slotId = watch("slotId");
  const selectedSlot = useMemo(() => demo.bookingSlots.find((slot) => slot.id === slotId), [slotId]);

  const onSubmit = async (data: FormValues) => {
    const slot = demo.bookingSlots.find((item) => item.id === data.slotId);
    if (!slot) return;
    await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, date: slot.date, time: slot.time }),
    });
    setSuccess({ ...data, date: slot.date, time: slot.time });
  };

  const downloadICS = () => {
    if (!success) return;
    const ics = formatICS({ name: success.name, date: success.date, time: success.time });
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "discovery-call.ics";
    link.click();
    URL.revokeObjectURL(url);
  };

  if (success) {
    return (
      <div className="space-y-4 rounded-xl border bg-green-50 p-6">
        <h3 className="text-lg font-semibold text-green-900">Booking confirmed</h3>
        <p className="text-sm text-green-800">
          {success.date} at {success.time}. We will call {success.phone}.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button onClick={downloadICS} type="button">
            Download calendar file
          </Button>
          <Button variant="outline" type="button" onClick={() => setSuccess(null)}>
            Book another slot
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-3 md:grid-cols-2">
        {demo.bookingSlots.map((slot) => (
          <label
            key={slot.id}
            className={`cursor-pointer rounded-lg border p-4 text-sm ${
              slotId === slot.id ? "border-brand-500 bg-brand-50" : "bg-white"
            }`}
          >
            <input
              type="radio"
              value={slot.id}
              className="sr-only"
              {...register("slotId")}
            />
            <span className="font-semibold">{slot.date}</span>
            <span className="block text-xs text-slate-500">{slot.time}</span>
          </label>
        ))}
      </div>
      {errors.slotId && <p className="text-xs text-red-500">{errors.slotId.message}</p>}

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label htmlFor="booking-name" className="text-sm font-medium">
            Name
          </label>
          <Input id="booking-name" className="mt-2" {...register("name")} />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="booking-email" className="text-sm font-medium">
            Email
          </label>
          <Input id="booking-email" className="mt-2" type="email" {...register("email")} />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="booking-phone" className="text-sm font-medium">
            Mobile
          </label>
          <Input id="booking-phone" className="mt-2" {...register("phone")} />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
        </div>
      </div>
      {selectedSlot && (
        <p className="text-xs text-slate-500">You selected {selectedSlot.date} at {selectedSlot.time}.</p>
      )}
      <Button type="submit" disabled={isSubmitting}>
        Confirm booking
      </Button>
    </form>
  );
}
