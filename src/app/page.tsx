import Link from "next/link";
import { PhoneFramePreview } from "@/components/phone-frame-preview";
import { ReviewsSlider } from "@/components/reviews-slider";
import { QuoteTeaser } from "@/components/quote-teaser";
import { BookingTeaser } from "@/components/booking-teaser";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div>
      <section className="bg-slate-50 py-16">
        <div className="container grid gap-10 md:grid-cols-[1.2fr,0.8fr] md:items-center">
          <div>
            <Badge>Live Feature Showroom</Badge>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
              Trades Website Features Demo
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Every feature below is interactive. Try the quote estimator, book a call, and see the emails your
              customers would get. Built for UK tradespeople who want better enquiries.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/live-features">View Live Features</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/get-a-quote">Get My Website Quote</Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
              <span>✔ Built for builders, electricians, plumbers & roofers</span>
              <span>✔ UK-focused copy and SEO structure</span>
              <span>✔ Fast, mobile-first design</span>
            </div>
          </div>
          <PhoneFramePreview />
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-semibold">Feature highlights you can try right now</h2>
          <p className="mt-2 text-slate-600">
            These widgets behave like the real ones on your future site. Explore each or head to the full showroom.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <ReviewsSlider />
            <QuoteTeaser />
            <BookingTeaser />
            <div className="rounded-xl border bg-brand-50 p-6">
              <h3 className="text-lg font-semibold text-brand-900">Enquiry capture in 60 seconds</h3>
              <p className="mt-2 text-sm text-brand-800">
                Forms validate details, auto-send a reply, and notify you instantly. See the live demo in the showroom.
              </p>
              <Button asChild className="mt-4" variant="secondary">
                <Link href="/live-features">See the enquiry flow</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-white py-12">
        <div className="container flex flex-wrap items-center justify-between gap-4">
          {[
            "Google-ready page structure",
            "Fast call-back response",
            "Review capture widgets",
            "Local SEO landing pages",
          ].map((item) => (
            <span key={item} className="text-sm font-medium text-slate-600">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-10 md:grid-cols-[1fr,1fr]">
          <div>
            <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
            <Accordion type="single" collapsible className="mt-6">
              <AccordionItem value="faq-1">
                <AccordionTrigger>Is this a real site or just a mock-up?</AccordionTrigger>
                <AccordionContent>
                  It is a working demo. Every form and feature is live, but emails are simulated so you can preview them.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>How quickly can you build my site?</AccordionTrigger>
                <AccordionContent>
                  Most trades sites go live in 2-3 weeks once we have your services, photos, and area coverage.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>Do you help with local SEO?</AccordionTrigger>
                <AccordionContent>
                  Yes. We build service + area pages and internal links so Google understands what you do and where.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="rounded-xl border bg-slate-50 p-6">
            <h3 className="text-xl font-semibold">Ready to see your own demo?</h3>
            <p className="mt-2 text-sm text-slate-600">
              Tell us your trade and service area. We will map out a demo plan and send a quote range.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/get-a-quote">Request a quote</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/book">Book a discovery call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
