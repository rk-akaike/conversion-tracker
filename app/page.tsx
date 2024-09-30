"use client";

import { v4 as uuidv4 } from "uuid";

import { GA_TRACKING_ID } from "./constants";

const Buttons = () => {
  const handleSignUp = async () => {
    const userId = uuidv4();

    // Assuming you set this value in your app:
    window.userId = userId; // This sets the global variable

    // Optionally, trigger a GTM event if you need to
    window.dataLayer.push({
      event: "sign_up",
      user_id: userId,
    });

    // Track the User-ID in Google Analytics only after conversion
    window.gtag("config", GA_TRACKING_ID, {
      user_id: userId, // This will be captured by GTM
    });
  };

  return (
    <div className="flex gap-4">
      <button
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
      <button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
        Just Visit
      </button>
    </div>
  );
};

export default Buttons;
