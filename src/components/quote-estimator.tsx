"use client";

import { useMemo, useState } from "react";
import { demo } from "@/lib/demo-data";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const propertyMultipliers: Record<string, number> = {
  House: 1,
  Flat: 0.95,
  Commercial: 1.3,
};

const urgencyMultipliers: Record<string, number> = {
  Normal: 1,
  Urgent: 1.2,
};

const areaMultipliers: Record<string, number> = {
  "Local town": 1,
  "Wider UK": 1.1,
};

const included = [
  "Dedicated landing page for the service",
  "Click-to-call buttons",
  "Online enquiry capture",
  "Review showcase",
];

export function QuoteEstimator({ compact = false }: { compact?: boolean }) {
  const trades = Object.keys(demo.services);
  const [trade, setTrade] = useState(trades[0]);
  const [serviceId, setServiceId] = useState(demo.services[trades[0]][0]?.id ?? "");
  const [propertyType, setPropertyType] = useState("House");
  const [urgency, setUrgency] = useState("Normal");
  const [areaType, setAreaType] = useState("Local town");

  const serviceOptions = demo.services[trade] ?? [];

  const selectedService = serviceOptions.find((service) => service.id === serviceId);

  const estimate = useMemo(() => {
    if (!selectedService) return null;
    const base = selectedService.basePrice;
    const price =
      base *
      propertyMultipliers[propertyType] *
      urgencyMultipliers[urgency] *
      areaMultipliers[areaType];
    const low = Math.round(price * 0.85);
    const high = Math.round(price * 1.15);
    return { low, high };
  }, [selectedService, propertyType, urgency, areaType]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Quote Estimator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className={compact ? "grid gap-3" : "grid gap-4 md:grid-cols-2"}>
          <div>
            <label htmlFor="estimator-trade" className="text-sm font-medium">
              Trade
            </label>
            <Select
              value={trade}
              onValueChange={(value) => {
                setTrade(value);
                const nextService = demo.services[value]?.[0];
                if (nextService) setServiceId(nextService.id);
              }}
            >
              <SelectTrigger id="estimator-trade" className="mt-2">
                <SelectValue placeholder="Select trade" />
              </SelectTrigger>
              <SelectContent>
                {trades.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="estimator-service" className="text-sm font-medium">
              Service
            </label>
            <Select value={serviceId} onValueChange={setServiceId}>
              <SelectTrigger id="estimator-service" className="mt-2">
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((service) => (
                  <SelectItem key={service.id} value={service.id}>
                    {service.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="estimator-property" className="text-sm font-medium">
              Property type
            </label>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger id="estimator-property" className="mt-2">
                <SelectValue placeholder="Select property" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(propertyMultipliers).map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="estimator-urgency" className="text-sm font-medium">
              Urgency
            </label>
            <Select value={urgency} onValueChange={setUrgency}>
              <SelectTrigger id="estimator-urgency" className="mt-2">
                <SelectValue placeholder="Select urgency" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(urgencyMultipliers).map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className={compact ? "" : "md:col-span-2"}>
            <label htmlFor="estimator-area" className="text-sm font-medium">
              Service area
            </label>
            <Select value={areaType} onValueChange={setAreaType}>
              <SelectTrigger id="estimator-area" className="mt-2">
                <SelectValue placeholder="Select area" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(areaMultipliers).map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        {estimate && (
          <div className="rounded-lg border bg-slate-50 p-4">
            <p className="text-sm text-slate-600">Estimated guide price</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">
              £{estimate.low.toLocaleString()} - £{estimate.high.toLocaleString()}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              This is a guide price; final quote after a quick call/photos.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-600">
              {included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <p className="text-xs text-slate-500">Want exact pricing? We will ring you back in 1 working day.</p>
        <Button asChild size="sm">
          <a href="/get-a-quote">Submit details</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
