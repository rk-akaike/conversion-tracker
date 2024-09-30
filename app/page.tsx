"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <div className="flex gap-4">
      <button
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        onClick={handleSignup}
      >
        Go to Signup
      </button>
    </div>
  );
};

export default Home;
