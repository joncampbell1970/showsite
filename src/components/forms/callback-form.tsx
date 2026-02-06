"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().min(2, "Add your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Enter a phone number"),
  time: z.string().min(1, "Select a time"),
  message: z.string().min(10, "Tell us about the job"),
});

type FormValues = z.infer<typeof schema>;

export function CallbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: `${data.time} - ${data.message}`,
      }),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border bg-slate-50 p-6">
        <h3 className="text-lg font-semibold">Callback booked</h3>
        <p className="mt-2 text-sm text-slate-600">
          We will call you in your chosen window. You will also get a text reminder.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-xl border p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="callback-name" className="text-sm font-medium">
            Name
          </label>
          <Input id="callback-name" className="mt-2" {...register("name")} />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="callback-email" className="text-sm font-medium">
            Email
          </label>
          <Input id="callback-email" className="mt-2" type="email" {...register("email")} />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="callback-phone" className="text-sm font-medium">
            Mobile
          </label>
          <Input id="callback-phone" className="mt-2" {...register("phone")} />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="callback-time" className="text-sm font-medium">
            Preferred time
          </label>
          <Select onValueChange={(value) => setValue("time", value, { shouldValidate: true })}>
            <SelectTrigger id="callback-time" className="mt-2">
              <SelectValue placeholder="Choose a time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Morning">Morning (9-12)</SelectItem>
              <SelectItem value="Afternoon">Afternoon (12-4)</SelectItem>
              <SelectItem value="Evening">Evening (4-7)</SelectItem>
            </SelectContent>
          </Select>
          {errors.time && <p className="text-xs text-red-500">{errors.time.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="callback-message" className="text-sm font-medium">
          Job summary
        </label>
        <Textarea id="callback-message" className="mt-2" {...register("message")} />
        {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        Request callback
      </Button>
    </form>
  );
}
