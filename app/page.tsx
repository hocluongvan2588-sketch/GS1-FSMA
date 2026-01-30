"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/data/supabase-client"
import { LandingHeader } from "@/components/landing/landing-header"
import { HeroSection } from "@/components/landing/hero-section"
import { StatsSection } from "@/components/landing/stats-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { ComplianceSection } from "@/components/landing/compliance-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { CTASection } from "@/components/landing/cta-section"
import { FooterSection } from "@/components/landing/footer-section"

export default function LandingPage() {
  const [locale, setLocale] = useState<"en" | "vi">("vi")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const supabase = createClient()
        const { data: { session } } = await supabase.auth.getSession()
        if (session) {
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.error("Auth check error:", error)
      }
    }
    checkAuth()
  }, [])

  const handleGetStarted = () => {
    if (isAuthenticated) {
      router.push("/dashboard")
    } else {
      router.push("/auth/signup")
    }
  }

  const handleLogin = () => {
    if (isAuthenticated) {
      router.push("/dashboard")
    } else {
      router.push("/auth/login")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <LandingHeader 
        locale={locale} 
        onLocaleChange={setLocale} 
        isAuthenticated={isAuthenticated}
        onGetStarted={handleGetStarted}
        onLogin={handleLogin}
      />
      <main>
        <HeroSection locale={locale} onGetStarted={handleGetStarted} />
        <StatsSection locale={locale} />
        <FeaturesSection locale={locale} />
        <ComplianceSection locale={locale} />
        <HowItWorksSection locale={locale} />
        <TestimonialsSection locale={locale} />
        <CTASection locale={locale} onGetStarted={handleGetStarted} />
      </main>
      <FooterSection locale={locale} />
    </div>
  )
}
