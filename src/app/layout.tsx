import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostHogProvider from "@/components/PostHogProvider";

const BASE_URL = 'https://www.impact-led-products.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Impact-led products — De l'idée à l'impact",
    template: "%s | Impact-led products",
  },
  description:
    "Victor Dulieu, Product Manager & Product Builder senior. Conseil produit, coaching PM, frameworks Notion et publications sur le product management.",
  keywords: [
    "product manager", "product builder", "product management", "stratégie produit",
    "product discovery", "OKR", "roadmap", "coaching produit", "notion", "Victor Dulieu",
    "impact-led products", "product led growth",
  ],
  authors: [{ name: "Victor Dulieu", url: "https://www.linkedin.com/in/victordulieu/" }],
  creator: "Victor Dulieu",
  publisher: "Impact-led products",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Impact-led products — De l'idée à l'impact",
    description: "Victor Dulieu, Product Manager & Product Builder senior. Conseil produit, coaching PM, frameworks Notion.",
    url: BASE_URL,
    siteName: "Impact-led products",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Impact-led products — De l'idée à l'impact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impact-led products — De l'idée à l'impact",
    description: "Victor Dulieu, Product Manager & Product Builder senior.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Impact-led products",
      description: "De l'idée à l'impact — Product management senior",
      inLanguage: "fr-FR",
      author: { "@id": `${BASE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Victor Dulieu",
      url: BASE_URL,
      jobTitle: "Product Manager & Product Builder Senior",
      description:
        "Product Manager et Product Builder avec plus de 10 ans d'expérience dans la construction de produits numériques en B2B et B2C. Fondateur d'Impact-led products.",
      sameAs: [
        "https://www.linkedin.com/in/victordulieu/",
        "https://medium.com/@dulieu.victor",
      ],
      knowsAbout: [
        "Product Management",
        "Product Strategy",
        "Product Discovery",
        "OKR",
        "Roadmap",
        "Continuous Discovery",
        "Product Led Growth",
        "Notion",
      ],
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Impact-led products",
      url: BASE_URL,
      founder: { "@id": `${BASE_URL}/#person` },
      description: "Conseil, coaching et ressources pour les équipes produit.",
      slogan: "De l'idée à l'impact",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Script id="posthog" strategy="afterInteractive">{`
          !function(t,e){var o,n,p,r;e.__SV||(window.posthog&&window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init Dr qr Ci Br Zr Pr capture calculateEventProperties Ur register register_once register_for_session unregister unregister_for_session Xr getFeatureFlag getFeatureFlagPayload getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync Jr identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset setIdentity clearIdentity get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException captureLog startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty Gr Hr createPersonProfile setInternalOrTestUser Wr Fr tn opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing $r debug ki Yr getPageViewId captureTraceFeedback captureTraceMetric Rr".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
          posthog.init('phc_qygtJdv2HbpLB8Grhe4pdX5McsabWhcgbuBVZMQqZxUA', {
            api_host: 'https://us.i.posthog.com',
            defaults: '2026-01-30',
            person_profiles: 'identified_only',
          });
        `}</Script>
        <PostHogProvider />
        <Navbar />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
