"use client"; // Use client-side rendering

import { useEffect, useState } from "react";

const SignUpButton = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Check if a user ID already exists in localStorage
    let storedUserId = localStorage.getItem("user_id");
    if (!storedUserId) {
      // Generate a new user ID if none exists
      storedUserId = `device-${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("user_id", storedUserId);
    }
    setUserId(storedUserId);
  }, []);

  const handleSignUp = async () => {
    if (!userId) return;

    // Push user ID to the dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "sign_up",
      user_id: userId, // This will be captured by GTM
    });

    // Optionally, trigger a GTM event if needed
    window.gtag("event", "sign_up", { user_id: userId });
    console.log("🚀 ~ handleSignUp ~ window.gtag:", window.gtag);
    console.log("🚀 ~ handleSignUp ~ window.dataLayer:", window.dataLayer);

    // Implement your sign-up logic here
    // For example, API call to create the user...
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

export default SignUpButton;
