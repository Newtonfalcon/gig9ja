"use client"

import React, { useEffect } from "react"
import { useAuth } from "@/libs/context/AuthContext"
import LoadingPage from "@/components/loading"
import { useRouter } from "next/navigation"

function DashboardPage() {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading && user) {
      if (user.userRole === "recruiter") {
        router.push("/dashboard/recruiter")
      } else if (user.userRole === "freelancer") {
        router.push("/dashboard/freelancer")
      }
    }

    if (!loading && !user) {
      router.push("/login")
    }
  }, [loading, user, router])

  
  if (loading) {
    return <LoadingPage />
  }

  return <div className="text-center py-10 bg-white text-black justify-center items-center w-full h-screen ">Redirecting...</div>
}

export default DashboardPage
