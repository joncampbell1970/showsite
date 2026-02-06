import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trades Website Features Demo | UK Trades Web Agency",
  description:
    "Interactive showroom for trades website features: quote estimator, booking, reviews, SEO structure, and enquiry handling.",
  metadataBase: new URL("https://trades-demo.example"),
  openGraph: {
    title: "Trades Website Features Demo",
    description:
      "Try the live quote estimator, booking widget, and enquiry flow for UK trade websites.",
    url: "https://trades-demo.example",
    siteName: "Trades Website Features Demo",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Trades Website Features Demo",
      areaServed: "United Kingdom",
      telephone: "+44 20 8123 4567",
      priceRange: "££",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "GB",
      },
    },
    {
      "@type": "Service",
      name: "Trades website build and lead capture",
      serviceType: "Website design for trades",
      areaServed: "United Kingdom",
      provider: {
        "@type": "LocalBusiness",
        name: "Trades Website Features Demo",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
