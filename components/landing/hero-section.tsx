"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Shield, Zap, BarChart3 } from "lucide-react"

const content = {
  en: {
    badge: "FDA FSMA 204 Compliant",
    headline: "End-to-End Food Traceability",
    headlineHighlight: "Powered by AI",
    subheadline: "Transform your supply chain with the most advanced traceability platform. From farm to fork, every step is recorded, verified, and auditable.",
    cta: {
      primary: "Start Free Trial",
      secondary: "Watch Demo",
    },
    features: [
      { icon: Shield, text: "GS1 EPCIS 2.0" },
      { icon: Zap, text: "AI-Powered" },
      { icon: BarChart3, text: "Real-time Analytics" },
    ],
  },
  vi: {
    badge: "Tuân thủ FDA FSMA 204",
    headline: "Truy xuất nguồn gốc thực phẩm",
    headlineHighlight: "Tích hợp AI",
    subheadline: "Chuyển đổi chuỗi cung ứng với nền tảng truy xuất nguồn gốc tiên tiến nhất. Từ nông trại đến bàn ăn, mọi bước đều được ghi nhận, xác minh và kiểm toán.",
    cta: {
      primary: "Dùng thử miễn phí",
      secondary: "Xem Demo",
    },
    features: [
      { icon: Shield, text: "GS1 EPCIS 2.0" },
      { icon: Zap, text: "Tích hợp AI" },
      { icon: BarChart3, text: "Phân tích thời gian thực" },
    ],
  },
}

interface HeroSectionProps {
  locale: "en" | "vi"
  onGetStarted: () => void
}

export function HeroSection({ locale = "vi", onGetStarted }: HeroSectionProps) {
  const t = content[locale] || content.vi

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-muted rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent mb-6">
              <Shield className="w-4 h-4" />
              {t.badge}
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
              <span className="text-balance">{t.headline}</span>
              <br />
              <span className="text-accent">{t.headlineHighlight}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              {t.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
              <Button size="lg" onClick={onGetStarted} className="w-full sm:w-auto px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all">
                {t.cta.primary}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 h-12 text-base group">
                <Play className="w-4 h-4 mr-2 group-hover:text-accent transition-colors" />
                {t.cta.secondary}
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
              {t.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground"
                >
                  <feature.icon className="w-4 h-4 text-accent" />
                  {feature.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Dashboard Preview */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                    <div className="w-3 h-3 rounded-full bg-accent/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="w-48 h-5 bg-muted rounded-md" />
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 space-y-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: locale === "vi" ? "Lo hoat dong" : "Active Batches", value: "1,247" },
                      { label: locale === "vi" ? "Su kien hom nay" : "Events Today", value: "3,891" },
                      { label: locale === "vi" ? "Ty le tuan thu" : "Compliance", value: "99.2%" },
                    ].map((stat, i) => (
                      <div key={i} className="bg-muted/30 rounded-lg p-3">
                        <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
                        <div className="text-lg font-semibold text-foreground">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Chart Placeholder */}
                  <div className="bg-muted/30 rounded-lg p-4 h-32">
                    <div className="flex items-end justify-between h-full gap-2">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-accent/60 rounded-t transition-all hover:bg-accent"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Event List */}
                  <div className="space-y-2">
                    {[
                      { type: "ObjectEvent", location: "Da Lat Farm", time: "2m" },
                      { type: "TransformEvent", location: "Processing Plant", time: "15m" },
                      { type: "ShippingEvent", location: "Distribution Center", time: "1h" },
                    ].map((event, i) => (
                      <div key={i} className="flex items-center justify-between py-2 px-3 bg-muted/20 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span className="text-sm font-medium text-foreground">{event.type}</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{event.location}</span>
                          <span>{event.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                {locale === "vi" ? "Thoi gian thuc" : "Real-time"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
