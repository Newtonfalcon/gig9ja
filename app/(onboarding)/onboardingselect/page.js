"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/libs/firebase-config";



export default function RoleSelectionPage() {
  useEffect(()=>{
    const user = auth.currentUser;
    if (!user) {
      router.push('/login');
    }

  }, [])


  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSelectRole = async (role) => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      setLoading(true);

      await updateDoc(doc(db, "users", user.uid), {
        role,
        onboardingCompleted: true,
        updatedAt: serverTimestamp(),
      });

      // Redirect based on role
      if (role === "freelancer") {
        router.push("/onboarding/freelancer");
      } else {
        router.push("/onboarding/recruiter");
      }
    } catch (error) {
      console.error("Error saving role:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black px-4">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-2 font-['Outfit',sans-serif] pb-6">
          gig<span className="text-green-500">9ja</span>
        </h1>
        <h1 className="text-2xl font-semibold mb-2">
          What are you here to do?
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Choose how you want to use the platform
        </p>

        <div className="space-y-4">
          <button
            disabled={loading}
            onClick={() => handleSelectRole("freelancer")}
            className="w-full border border-black py-4 rounded-lg hover:bg-black hover:text-white transition"
          >
            💼 I’m a Freelancer
          </button>

          <button
            disabled={loading}
            onClick={() => handleSelectRole("recruiter")}
            className="w-full border border-black py-4 rounded-lg hover:bg-black hover:text-white transition"
          >
            👤 I want to Hire (Recruiter)
          </button>
        </div>
      </div>
    </main>
  );
}
