"use client"
import React from 'react'
import { useAuth } from '@/libs/context/AuthContext'
import LoadingPage from '@/components/loading'
import { useRouter } from 'next/navigation'

function layout() {

  const router = useRouter()
  const { user, loading } = useAuth()

  if (loading) {
    return <div> <LoadingPage/> </div>
  }
  if (!user) {
    return <div>Redirecting to login...</div>


  }

  if (user.userRole === 'recruiter') {
    return router.push('/dashboard/recruiter')
      
  
  }
  if (user.userRole === 'freelancer') {
    return router.push('/dashboard/freelancer')
  }

  return <div>Unknown user role. Please contact support.</div>
}
export default layout