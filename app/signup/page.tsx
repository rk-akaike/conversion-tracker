"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";

import { GA_TRACKING_ID } from "../constants";

const SignUpPage = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <button className="btn" onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUpPage;
