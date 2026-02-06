import { QuoteEstimator } from "@/components/quote-estimator";
import { CallbackForm } from "@/components/forms/callback-form";
import { ReviewsGallery } from "@/components/reviews-gallery";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { LocalSeoPreview } from "@/components/local-seo-preview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LiveFeaturesPage() {
  return (
    <div className="container py-12">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Interactive Feature Playground</h1>
        <p className="text-slate-600">
          Try each feature as if it were live on your trades website. Forms validate, confirmations appear, and emails
          are previewed instantly.
        </p>
      </div>

      <Tabs defaultValue="quote" className="mt-8">
        <TabsList>
          <TabsTrigger value="quote">Quote estimator</TabsTrigger>
          <TabsTrigger value="booking">Booking / callback</TabsTrigger>
          <TabsTrigger value="reviews">Reviews + gallery</TabsTrigger>
          <TabsTrigger value="enquiry">Enquiry + auto-responder</TabsTrigger>
          <TabsTrigger value="seo">Local SEO structure</TabsTrigger>
        </TabsList>

        <TabsContent value="quote">
          <QuoteEstimator />
        </TabsContent>
        <TabsContent value="booking">
          <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
            <CallbackForm />
            <div className="rounded-xl border bg-slate-50 p-6 text-sm text-slate-600">
              <h3 className="text-lg font-semibold text-slate-900">How booking works</h3>
              <ul className="mt-3 space-y-2">
                <li>✔ Client chooses preferred time window</li>
                <li>✔ You receive a callback notification</li>
                <li>✔ A reminder text goes out automatically</li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews">
          <ReviewsGallery />
        </TabsContent>
        <TabsContent value="enquiry">
          <EnquiryForm />
        </TabsContent>
        <TabsContent value="seo">
          <LocalSeoPreview />
        </TabsContent>
      </Tabs>
    </div>
  );
}
