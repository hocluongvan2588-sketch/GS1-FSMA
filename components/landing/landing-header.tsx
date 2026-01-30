"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const content = {
  en: {
    nav: {
      features: "Features",
      compliance: "Compliance",
      howItWorks: "How It Works",
      testimonials: "Success Stories",
    },
    cta: {
      login: "Log In",
      getStarted: "Get Started",
      dashboard: "Dashboard",
    },
  },
  vi: {
    nav: {
      features: "Tính năng",
      compliance: "Tuân thủ",
      howItWorks: "Cách hoạt động",
      testimonials: "Câu chuyện thành công",
    },
    cta: {
      login: "Đăng nhập",
      getStarted: "Bắt đầu ngay",
      dashboard: "Bảng điều khiển",
    },
  },
}

interface LandingHeaderProps {
  locale: "en" | "vi"
  onLocaleChange: (locale: "en" | "vi") => void
  isAuthenticated: boolean
  onGetStarted: () => void
  onLogin: () => void
}

export function LandingHeader({ 
  locale = "vi", 
  onLocaleChange, 
  isAuthenticated,
  onGetStarted,
  onLogin 
}: LandingHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = content[locale] || content.vi

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-background" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-foreground tracking-tight">
              GS1 Trace
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.features}
            </button>
            <button
              onClick={() => scrollToSection("compliance")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.compliance}
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.howItWorks}
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.testimonials}
            </button>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground">
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{locale === "vi" ? "Tiếng Việt" : "English"}</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => onLocaleChange("vi")}>
                  Tiếng Việt
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onLocaleChange("en")}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={onLogin}>
                {isAuthenticated ? t.cta.dashboard : t.cta.login}
              </Button>
              {!isAuthenticated && (
                <Button size="sm" onClick={onGetStarted} className="shadow-sm">
                  {t.cta.getStarted}
                </Button>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("features")}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg text-left transition-colors"
              >
                {t.nav.features}
              </button>
              <button
                onClick={() => scrollToSection("compliance")}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg text-left transition-colors"
              >
                {t.nav.compliance}
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg text-left transition-colors"
              >
                {t.nav.howItWorks}
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg text-left transition-colors"
              >
                {t.nav.testimonials}
              </button>
              <div className="flex gap-2 mt-4 px-4">
                <Button variant="outline" size="sm" className="flex-1" onClick={onLogin}>
                  {isAuthenticated ? t.cta.dashboard : t.cta.login}
                </Button>
                {!isAuthenticated && (
                  <Button size="sm" className="flex-1" onClick={onGetStarted}>
                    {t.cta.getStarted}
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
