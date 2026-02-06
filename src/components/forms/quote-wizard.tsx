"use client";

import { useMemo, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { demo } from "@/lib/demo-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EmailPreview } from "@/components/email-preview";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  trade: z.string().min(1, "Select a trade"),
  services: z.array(z.string()).min(1, "Select at least one service"),
  area: z.string().min(1, "Select a service area"),
  urgency: z.string().min(1, "Select urgency"),
  budget: z.string().min(1, "Select a budget"),
  name: z.string().min(2, "Add your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Enter a phone number"),
});

type FormValues = z.infer<typeof schema>;

const steps = [
  { id: 1, title: "Trade & services", fields: ["trade", "services"] as const },
  { id: 2, title: "Area & urgency", fields: ["area", "urgency", "budget"] as const },
  { id: 3, title: "Contact details", fields: ["name", "email", "phone"] as const },
];

export function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { services: [] },
  });

  const trade = watch("trade");
  const selectedServices = watch("services");

  const serviceOptions = useMemo(() => demo.services[trade] ?? [], [trade]);

  const onNext = async () => {
    const fields = steps[step].fields;
    const valid = await trigger(fields as (keyof FormValues)[]);
    if (valid) setStep((prev) => prev + 1);
  };

  const onBack = () => setStep((prev) => Math.max(prev - 1, 0));

  const onSubmit = async (data: FormValues) => {
    await fetch("/api/quote", {
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
          <h3 className="text-lg font-semibold text-green-900">Quote request sent</h3>
          <p className="mt-2 text-sm text-green-800">
            We will review your details and send a tailored proposal within one working day.
          </p>
        </div>
        <EmailPreview
          subject="Your trades website quote request – {{trade}}"
          body={`Hi {{name}},\n\nThanks for requesting a trades website quote. We have logged:\n- Services: {{services}}\n- Area: {{area}}\n- Urgency: {{urgency}}\n- Budget: {{budget}}\n\nWe will reply within one working day with a proposal and next steps.\n\nTrades Website Demo Team`}
          variables={["{{trade}}", "{{name}}", "{{services}}", "{{area}}", "{{urgency}}", "{{budget}}"]}
        />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {steps.map((item, index) => (
          <div
            key={item.id}
            className={`rounded-full px-4 py-1 text-xs font-medium ${
              index === step ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"
            }`}
          >
            {item.title}
          </div>
        ))}
      </div>

      {step === 0 && (
        <div className="space-y-4">
          <div>
            <label htmlFor="quote-trade" className="text-sm font-medium">
              Trade type
            </label>
            <Select
              onValueChange={(value) => {
                setValue("trade", value, { shouldValidate: true });
                setValue("services", [], { shouldValidate: true });
              }}
            >
              <SelectTrigger id="quote-trade" className="mt-2">
                <SelectValue placeholder="Select trade" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(demo.services).map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.trade && <p className="text-xs text-red-500">{errors.trade.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Services needed</label>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              {serviceOptions.map((service) => (
                <label key={service.id} className="flex items-center gap-2 rounded-md border p-2 text-sm">
                  <input
                    type="checkbox"
                    aria-label={service.name}
                    value={service.name}
                    checked={selectedServices?.includes(service.name)}
                    onChange={(event) => {
                      const value = event.target.value;
                      setValue(
                        "services",
                        event.target.checked
                          ? [...(selectedServices ?? []), value]
                          : (selectedServices ?? []).filter((item) => item !== value),
                        { shouldValidate: true }
                      );
                    }}
                  />
                  {service.name}
                </label>
              ))}
            </div>
            {errors.services && <p className="text-xs text-red-500">{errors.services.message}</p>}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label htmlFor="quote-area" className="text-sm font-medium">
              Service area
            </label>
            <Select onValueChange={(value) => setValue("area", value, { shouldValidate: true })}>
              <SelectTrigger id="quote-area" className="mt-2">
                <SelectValue placeholder="Select service area" />
              </SelectTrigger>
              <SelectContent>
                {demo.towns.map((town) => (
                  <SelectItem key={town} value={town}>
                    {town}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.area && <p className="text-xs text-red-500">{errors.area.message}</p>}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="quote-urgency" className="text-sm font-medium">
                Urgency
              </label>
              <Select onValueChange={(value) => setValue("urgency", value, { shouldValidate: true })}>
                <SelectTrigger id="quote-urgency" className="mt-2">
                  <SelectValue placeholder="Select urgency" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Ready now",
                    "This month",
                    "Just planning",
                  ].map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.urgency && <p className="text-xs text-red-500">{errors.urgency.message}</p>}
            </div>
            <div>
              <label htmlFor="quote-budget" className="text-sm font-medium">
                Budget range
              </label>
              <Select onValueChange={(value) => setValue("budget", value, { shouldValidate: true })}>
                <SelectTrigger id="quote-budget" className="mt-2">
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  {["Under £1k", "£1k-£3k", "£3k-£5k", "£5k+"].map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.budget && <p className="text-xs text-red-500">{errors.budget.message}</p>}
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label htmlFor="quote-name" className="text-sm font-medium">
                Name
              </label>
              <Input id="quote-name" className="mt-2" {...register("name")} />
              {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="quote-email" className="text-sm font-medium">
                Email
              </label>
              <Input id="quote-email" className="mt-2" type="email" {...register("email")} />
              {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="quote-phone" className="text-sm font-medium">
                Mobile
              </label>
              <Input id="quote-phone" className="mt-2" {...register("phone")} />
              {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <Button type="button" variant="outline" onClick={onBack} disabled={step === 0}>
          Back
        </Button>
        {step < steps.length - 1 ? (
          <Button type="button" onClick={onNext}>
            Next step
          </Button>
        ) : (
          <Button type="submit" disabled={isSubmitting}>
            Send quote request
          </Button>
        )}
      </div>
    </form>
  );
}
