import "./globals.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GA_TRACKING_ID = "G-7WFYRDDRL5";

const storeUTMParams = () => {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium");
  const utmCampaign = params.get("utm_campaign");

  if (utmSource || utmMedium || utmCampaign) {
    localStorage.setItem("utm_source", utmSource ?? "");
    localStorage.setItem("utm_medium", utmMedium ?? "");
    localStorage.setItem("utm_campaign", utmCampaign ?? "");
  }
};

export const metadata = {
  title: "Conversion Tracker",
  description: "Conversion tracking specially for Muwaz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Google Analytics script
    const handleRouteChange = (url: string) => {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    };

    const script1 = document.createElement("script");
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}');
    `;
    document.head.appendChild(script2);

    handleRouteChange(pathname);

    storeUTMParams();

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [pathname]);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
