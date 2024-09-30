// globals.d.ts
export {};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    userId?: string;
  }
}
