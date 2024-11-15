"use client"; // Error components must be Client components

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Correct import path for useRouter in Next.js App Router

export default function Error({ reset }) {
  const router = useRouter();

  useEffect(() => {
    // Automatically navigate to the homepage after 3 seconds
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }, [router]);

  return (
    <div className="not-found">
      <h1>Ooooops...</h1>
      <h2>Something went wrong!😮 That page cannot be found.</h2>
      <button
        onClick={() => reset()} // Correct syntax for onClick handler
      >
        Try again
      </button>
      <p>
        Or go back to{" "}
        <Link href="/" className="underline">
          Home 🏠
        </Link>
      </p>
    </div>
  );
}
