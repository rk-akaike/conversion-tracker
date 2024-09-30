"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { GA_TRACKING_ID } from "./constants";

const GoogleAnalytics = () => {
  const pathname = usePathname();

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

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    };

    // Inject Google Analytics script
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

  return null; // This component doesn't render anything in the DOM
};

export default GoogleAnalytics;
