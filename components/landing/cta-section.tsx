"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const content = {
  en: {
    title: "Ready to transform your",
    titleHighlight: "supply chain transparency?",
    subtitle: "Join leading food producers who trust GS1 Trace for complete traceability and compliance.",
    cta: {
      primary: "Start Free Trial",
      secondary: "Schedule Demo",
    },
    benefits: [
      "14-day free trial",
      "No credit card required",
      "Full feature access",
      "Dedicated onboarding support",
    ],
    note: "Enterprise plans available for large-scale operations",
  },
  vi: {
    title: "Sẵn sàng chuyển đổi",
    titleHighlight: "minh bạch chuỗi cung ứng?",
    subtitle: "Tham gia cùng các nhà sản xuất thực phẩm hàng đầu tin tưởng GS1 Trace cho truy xuất nguồn gốc và tuân thủ toàn diện.",
    cta: {
      primary: "Dùng thử miễn phí",
      secondary: "Đặt lịch Demo",
    },
    benefits: [
      "Dùng thử 14 ngày miễn phí",
      "Không cần thẻ tín dụng",
      "Truy cập đầy đủ tính năng",
      "Hỗ trợ onboarding riêng",
    ],
    note: "Gói doanh nghiệp cho hoạt động quy mô lớn",
  },
}

interface CTASectionProps {
  locale: "en" | "vi"
  onGetStarted: () => void
}

export function CTASection({ locale, onGetStarted }: CTASectionProps) {
  const t = content[locale]

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-foreground rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-background rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          {/* Content */}
          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-6 text-balance">
              {t.title}{" "}
              <span className="text-accent">{t.titleHighlight}</span>
            </h2>

            <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10 text-pretty">
              {t.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button
                size="lg"
                onClick={onGetStarted}
                className="w-full sm:w-auto px-8 h-12 text-base bg-background text-foreground hover:bg-background/90 shadow-lg"
              >
                {t.cta.primary}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-8 h-12 text-base border-background/30 text-background hover:bg-background/10"
              >
                {t.cta.secondary}
              </Button>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-6">
              {t.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-background/80">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  {benefit}
                </div>
              ))}
            </div>

            <p className="text-sm text-background/50">
              {t.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
