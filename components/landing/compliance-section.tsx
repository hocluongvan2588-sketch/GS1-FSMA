"use client"

import { CheckCircle2, FileText, Globe2, Shield } from "lucide-react"

const content = {
  en: {
    badge: "Regulatory Compliance",
    title: "Built for global",
    titleHighlight: "food safety standards",
    subtitle: "Our platform is designed from the ground up to meet the most stringent international food traceability regulations.",
    standards: [
      {
        icon: Shield,
        name: "FDA FSMA 204",
        fullName: "Food Safety Modernization Act",
        description: "Full compliance with US food traceability requirements including all Key Data Elements (KDEs) and Critical Tracking Events (CTEs).",
        features: [
          "Traceability Lot Code (TLC) auto-generation",
          "Harvest date & location tracking",
          "Cooling completion records",
          "24-hour traceback capability",
        ],
        compliance: "100%",
      },
      {
        icon: Globe2,
        name: "GS1 EPCIS 2.0",
        fullName: "Electronic Product Code Information Services",
        description: "Native support for GS1 standards ensuring global interoperability and data exchange with trading partners worldwide.",
        features: [
          "GTIN product identification",
          "GLN location numbering",
          "EPCIS event types support",
          "CBV (Core Business Vocabulary)",
        ],
        compliance: "90%",
      },
      {
        icon: FileText,
        name: "EU EUDR",
        fullName: "Deforestation-free Products Regulation",
        description: "Ready for European Union requirements on deforestation-free supply chains with geolocation and due diligence documentation.",
        features: [
          "Geo-coordinates tracking",
          "Due diligence statements",
          "Risk assessment support",
          "Customs integration ready",
        ],
        compliance: "85%",
      },
    ],
    cta: "View Compliance Documentation",
  },
  vi: {
    badge: "Tuân thủ quy định",
    title: "Xây dựng cho tiêu chuẩn",
    titleHighlight: "an toàn thực phẩm toàn cầu",
    subtitle: "Nền tảng được thiết kế từ đầu để đáp ứng các quy định truy xuất nguồn gốc thực phẩm quốc tế nghiêm ngặt nhất.",
    standards: [
      {
        icon: Shield,
        name: "FDA FSMA 204",
        fullName: "Luật Hiện đại hóa An toàn Thực phẩm",
        description: "Tuân thủ đầy đủ yêu cầu truy xuất nguồn gốc thực phẩm Hoa Kỳ bao gồm tất cả Yếu tố Dữ liệu Chính (KDE) và Sự kiện Theo dõi Quan trọng (CTE).",
        features: [
          "Tự động tạo Mã Lô Truy xuất (TLC)",
          "Theo dõi ngày & địa điểm thu hoạch",
          "Ghi nhận hoàn thành làm mát",
          "Khả năng truy xuất trong 24 giờ",
        ],
        compliance: "100%",
      },
      {
        icon: Globe2,
        name: "GS1 EPCIS 2.0",
        fullName: "Dịch vụ Thông tin Mã Sản phẩm Điện tử",
        description: "Hỗ trợ gốc tiêu chuẩn GS1 đảm bảo khả năng tương tác toàn cầu và trao đổi dữ liệu với đối tác thương mại trên toàn thế giới.",
        features: [
          "Định danh sản phẩm GTIN",
          "Đánh số địa điểm GLN",
          "Hỗ trợ các loại sự kiện EPCIS",
          "CBV (Từ vựng Kinh doanh Cốt lõi)",
        ],
        compliance: "90%",
      },
      {
        icon: FileText,
        name: "EU EUDR",
        fullName: "Quy định Sản phẩm Không gây Phá rừng",
        description: "Sẵn sàng cho yêu cầu Liên minh Châu Âu về chuỗi cung ứng không gây phá rừng với định vị địa lý và tài liệu thẩm định.",
        features: [
          "Theo dõi tọa độ địa lý",
          "Báo cáo thẩm định",
          "Hỗ trợ đánh giá rủi ro",
          "Sẵn sàng tích hợp hải quan",
        ],
        compliance: "85%",
      },
    ],
    cta: "Xem tài liệu tuân thủ",
  },
}

interface ComplianceSectionProps {
  locale: "en" | "vi"
}

export function ComplianceSection({ locale }: ComplianceSectionProps) {
  const t = content[locale]

  return (
    <section id="compliance" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent mb-6">
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.title}{" "}
            <span className="text-accent">{t.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t.subtitle}
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {t.standards.map((standard, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                  <standard.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-accent">{standard.compliance}</div>
                  <div className="text-xs text-muted-foreground">
                    {locale === "vi" ? "Tuân thủ" : "Compliant"}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-1">
                {standard.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {standard.fullName}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {standard.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {standard.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
