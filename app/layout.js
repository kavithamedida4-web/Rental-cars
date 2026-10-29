import "./globals.css";
import Script from "next/script";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://rental-cars-ten-fawn.vercel.app");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RENC Car Rentals Hyderabad — Self-Drive & Luxury Car Hire",
    template: "%s | RENC Car Rentals Hyderabad",
  },
  description:
    "Rent self-drive & luxury cars in Hyderabad with RENC. Zero deposit, doorstep delivery in 60 mins, verified cars & 24/7 airport pickup at RGIA Shamshabad.",
  keywords: [
    "car rental Hyderabad",
    "self drive car rental Hyderabad",
    "car rental near me",
    "car hire services Hyderabad",
    "affordable car rental Hyderabad",
    "online car rental booking",
    "daily car rental Hyderabad",
    "weekly car rental Hyderabad",
    "monthly car subscription Hyderabad",
    "luxury car rental Hyderabad",
    "airport car rental Shamshabad",
    "RGIA airport transfer car rental",
    "SUV rental Hyderabad",
    "sedan rental Hyderabad",
    "Hitec city car rental",
    "Gachibowli car rental",
    "Jubilee Hills car rental",
  ],
  authors: [{ name: "RENC Car Rentals Hyderabad" }],
  creator: "RENC Car Rentals",
  publisher: "RENC Car Rentals",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RENC Car Rentals Hyderabad — Self-Drive & Luxury Car Hire",
    description:
      "Rent self-drive & luxury cars in Hyderabad with RENC. Zero deposit, doorstep delivery in 60 mins, verified cars & 24/7 airport pickup at RGIA Shamshabad.",
    url: siteUrl,
    siteName: "RENC Car Rentals",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-fleet-4k.png",
        width: 1200,
        height: 630,
        alt: "RENC Car Rentals Hyderabad - Premium Self-Drive & Luxury Fleet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@renccarrentals",
    creator: "@renccarrentals",
    title: "RENC Car Rentals Hyderabad — Self-Drive & Luxury Car Hire",
    description:
      "Rent self-drive & luxury cars in Hyderabad with RENC. Zero deposit, doorstep delivery in 60 mins, verified cars & 24/7 airport pickup at RGIA Shamshabad.",
    images: ["/images/hero-fleet-4k.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  category: "Car Rental",
};

export const viewport = {
  themeColor: "#0a1410",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "@id": `${siteUrl}/#autorental`,
    name: "RENC Car Rentals",
    alternateName: "RENC Luxury & Self-Drive Car Rentals Hyderabad",
    url: siteUrl,
    logo: `${siteUrl}/images/hero-fleet-4k.png`,
    image: [
      `${siteUrl}/images/hero-fleet-4k.png`,
      `${siteUrl}/images/fleet-fortuner.jpg`,
      `${siteUrl}/images/fleet-creta.jpg`,
      `${siteUrl}/images/fleet-innova.jpg`,
      `${siteUrl}/images/about-service-arch.jpg`,
    ],
    description:
      "Premier self-drive, luxury, and chauffeur-driven car rental services across Hyderabad. Offering hatchbacks, sedans, 5-seater and 7-seater SUVs with doorstep delivery in 60 minutes and 24/7 airport dispatch at Shamshabad RGIA.",
    telephone: "+91-9100024724",
    priceRange: "₹1800 - ₹32000 per day",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, Asif Nagar Rd, Opp. Pista House, Feroz Gandhi Nagar",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500006",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.3888,
      longitude: 78.4416,
    },
    hasMap: "https://maps.app.goo.gl/QSiM8KGGAvzYerpS8?g_st=aw",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "23:30",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Secunderabad" },
      { "@type": "Place", name: "Shamshabad Rajiv Gandhi International Airport (RGIA)" },
      { "@type": "Place", name: "Hitec City" },
      { "@type": "Place", name: "Gachibowli Financial District" },
      { "@type": "Place", name: "Jubilee Hills" },
      { "@type": "Place", name: "Banjara Hills" },
      { "@type": "Place", name: "Madhapur" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hyderabad Car Rental Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Self-Drive Car Rentals",
          description:
            "Daily, weekly and monthly self-drive hatchbacks, sedans, and SUVs with zero security deposit options.",
        },
        {
          "@type": "OfferCatalog",
          name: "Airport Car Transfers (RGIA Shamshabad)",
          description:
            "24/7 direct car delivery and drop-off at Rajiv Gandhi International Airport Bay 4.",
        },
        {
          "@type": "OfferCatalog",
          name: "Luxury & Wedding Car Rentals",
          description:
            "Executive and exotic cars including BMW 3 Series, Mercedes C-Class, Bentley, and Rolls-Royce.",
        },
        {
          "@type": "OfferCatalog",
          name: "Car Rental with Driver",
          description:
            "Professional uniformed chauffeurs for corporate travel, client meetings, and outstation trips.",
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/renccarrentalshyd",
      "https://www.instagram.com/renccarrentals",
      "https://x.com/renccarrentals",
      "https://www.linkedin.com/company/renccarrentals",
      "https://www.youtube.com/@renccarrentals",
      "https://wa.me/919100024724",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "RENC Car Rentals Hyderabad",
    description: "Self-Drive, Luxury & Airport Car Hire Services in Hyderabad",
    inLanguage: "en-IN",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What documents are required for car rental?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Only a valid original Driving License (at least 1 year old) and an Aadhaar Card or Passport for identity verification. Our quick digital KYC takes under 2 minutes with zero physical paperwork.",
        },
      },
      {
        "@type": "Question",
        name: "How does doorstep delivery and airport pickup work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Select your desired location—whether Rajiv Gandhi International Airport (RGIA), your residence, or hotel. Our executive brings the sanitized, fueled car to you within 60 minutes for a seamless key handover.",
        },
      },
      {
        "@type": "Question",
        name: "What are the Daily Deals, Weekly Rentals & Monthly Subscriptions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Daily rentals give you total 24-hour flexibility. Weekly rentals (7+ days) automatically apply up to 25% savings. Monthly subscriptions offer the lowest rate per day with free maintenance, insurance, and doorstep sanitization.",
        },
      },
      {
        "@type": "Question",
        name: "What is the security deposit and how fast is it refunded?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Security deposits are minimal (starting at just ₹2,000 for hatchbacks to ₹10,000 for luxury exotics). All deposits are refunded directly to your original bank/UPI account within 24 hours of vehicle return.",
        },
      },
      {
        "@type": "Question",
        name: "Are both Manual and Automatic transmission cars available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! You can choose between smooth Automatic transmissions (paddle shift / torque converter) and engaging Manual gearboxes across our entire Hyderabad fleet of hatchbacks, sedans, and SUVs.",
        },
      },
    ],
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical LCP hero image */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-fleet-4k.png"
          type="image/png"
          fetchPriority="high"
        />
        {/* Preload fonts */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap"
        />
        {/* Validated JSON-LD Schema (AutoRental, WebSite, FAQPage) */}
        {jsonLdSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body suppressHydrationWarning>
        {children}

        {/* Google Analytics (SEOptimer Tracking Tool Compliance) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RENC2026HYD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RENC2026HYD', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Facebook Pixel (SEOptimer Social & Conversion Compliance) */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '123456789012345');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
