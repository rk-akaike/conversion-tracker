"use client"; // Use client-side rendering

const SignUpButton = () => {
  const handleSignUp = async () => {
    const userId = "customer-12345"; // Replace with the actual user ID you get after signup.

    // Push user ID to the dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "sign_up",
      user_id: userId, // This will be captured by GTM
    });

    // Optionally, trigger a GTM event if needed
    window.gtag("event", "sign_up", { user_id: userId });

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
