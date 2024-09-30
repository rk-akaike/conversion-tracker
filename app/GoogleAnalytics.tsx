"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GA_TRACKING_ID = "G-7WFYRDDRL5";

const GoogleAnalytics = () => {
  const pathname = usePathname();

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

    handleRouteChange(pathname); // Handle the initial page load

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [pathname]);

  return null; // This component doesn't render anything in the DOM
};

export default GoogleAnalytics;
