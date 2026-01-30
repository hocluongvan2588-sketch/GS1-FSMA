"use client"

const content = {
  en: {
    title: "Trusted by Leading Food Producers",
    subtitle: "Join hundreds of companies transforming their supply chain transparency",
    stats: [
      { value: "50M+", label: "Events Recorded", description: "Traceability events captured" },
      { value: "2,500+", label: "Active Locations", description: "Farms, factories & warehouses" },
      { value: "99.8%", label: "Uptime", description: "Platform availability" },
      { value: "<2s", label: "Trace Time", description: "Full supply chain trace" },
    ],
  },
  vi: {
    title: "Được tin dùng bởi các nhà sản xuất hàng đầu",
    subtitle: "Cùng hàng trăm doanh nghiệp chuyển đổi minh bạch chuỗi cung ứng",
    stats: [
      { value: "50M+", label: "Sự kiện ghi nhận", description: "Sự kiện truy xuất nguồn gốc" },
      { value: "2,500+", label: "Địa điểm hoạt động", description: "Nông trại, nhà máy & kho" },
      { value: "99.8%", label: "Thời gian hoạt động", description: "Độ sẵn sàng hệ thống" },
      { value: "<2s", label: "Thời gian truy xuất", description: "Truy xuất toàn chuỗi" },
    ],
  },
}

interface StatsSectionProps {
  locale: "en" | "vi"
}

export function StatsSection({ locale }: StatsSectionProps) {
  const t = content[locale]

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 text-balance">
            {t.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-8">
            {locale === "vi" ? "Đối tác công nghệ & tiêu chuẩn" : "Technology & Standards Partners"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-60">
            {["GS1", "FDA", "EPCIS", "ISO 22000", "EUDR"].map((partner) => (
              <div
                key={partner}
                className="text-lg font-bold text-muted-foreground tracking-wider"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
