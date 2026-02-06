"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EmailPreview } from "@/components/email-preview";

const schema = z.object({
  name: z.string().min(2, "Add your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Enter a phone number"),
  message: z.string().min(10, "Tell us about the job"),
});

type FormValues = z.infer<typeof schema>;

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState<FormValues | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSubmitted(data);
  };

  if (submitted) {
    return (
      <div className="space-y-6">
        <div className="rounded-xl border bg-green-50 p-6">
          <h3 className="text-lg font-semibold text-green-900">Enquiry sent</h3>
          <p className="mt-2 text-sm text-green-800">
            We have logged the enquiry and triggered the auto-response email.
          </p>
        </div>
        <EmailPreview
          subject="Thanks {{name}} - we will review your job today"
          body={`Hi {{name}},\n\nThanks for reaching out. We have your details and will reply within one working day.\n\nSummary:\n- Phone: {{phone}}\n- Email: {{email}}\n- Job: {{message}}\n\nSpeak soon,\nTrades Website Demo Team`}
          variables={["{{name}}", "{{phone}}", "{{email}}", "{{message}}"]}
        />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-xl border p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="enquiry-name" className="text-sm font-medium">
            Name
          </label>
          <Input id="enquiry-name" className="mt-2" {...register("name")} />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="enquiry-email" className="text-sm font-medium">
            Email
          </label>
          <Input id="enquiry-email" className="mt-2" type="email" {...register("email")} />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="enquiry-phone" className="text-sm font-medium">
            Mobile
          </label>
          <Input id="enquiry-phone" className="mt-2" {...register("phone")} />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="enquiry-message" className="text-sm font-medium">
            Job summary
          </label>
          <Textarea id="enquiry-message" className="mt-2" {...register("message")} />
          {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
        </div>
      </div>
      <Button type="submit" disabled={isSubmitting}>
        Send enquiry
      </Button>
    </form>
  );
}
