"use client"

import { 
  Mic, 
  Camera, 
  BarChart3, 
  Shield, 
  Globe, 
  Smartphone,
  QrCode,
  Link2,
  FileCheck
} from "lucide-react"

const content = {
  en: {
    badge: "Platform Features",
    title: "Everything you need for",
    titleHighlight: "complete traceability",
    subtitle: "A comprehensive suite of tools designed for modern food supply chains, from AI-powered data capture to regulatory compliance.",
    features: [
      {
        icon: Mic,
        title: "Voice AI Input",
        description: "Record traceability events naturally using voice commands. Our AI understands context and auto-fills forms.",
        highlight: "Hands-free data entry",
      },
      {
        icon: Camera,
        title: "Vision AI Capture",
        description: "Scan products, labels, and documents. Computer vision extracts data automatically with high accuracy.",
        highlight: "OCR & barcode scanning",
      },
      {
        icon: Shield,
        title: "Blockchain Audit Trail",
        description: "Every change is cryptographically secured with immutable hash chains. Complete audit history you can trust.",
        highlight: "Tamper-proof records",
      },
      {
        icon: QrCode,
        title: "GS1 Digital Link",
        description: "Generate compliant QR codes linking to product information, certifications, and full trace history.",
        highlight: "Consumer transparency",
      },
      {
        icon: BarChart3,
        title: "Real-time Analytics",
        description: "Monitor your supply chain with live dashboards. Track events, quality metrics, and compliance scores.",
        highlight: "Actionable insights",
      },
      {
        icon: Globe,
        title: "Multi-location Support",
        description: "Manage farms, factories, warehouses, and retailers across regions with GLN-based location tracking.",
        highlight: "Global supply chains",
      },
      {
        icon: FileCheck,
        title: "Export Documents",
        description: "Generate FSMA 204 and EUDR compliance reports automatically. Ready for regulatory submission.",
        highlight: "One-click exports",
      },
      {
        icon: Smartphone,
        title: "Zalo Mini App",
        description: "Field workers capture data via familiar Zalo interface. No training needed, works offline.",
        highlight: "Vietnam-optimized",
      },
      {
        icon: Link2,
        title: "API Integration",
        description: "Connect with your existing ERP, WMS, and IoT systems. RESTful APIs with webhook support.",
        highlight: "Enterprise ready",
      },
    ],
  },
  vi: {
    badge: "Tính năng nền tảng",
    title: "Tất cả những gì bạn cần cho",
    titleHighlight: "truy xuất nguồn gốc toàn diện",
    subtitle: "Bộ công cụ toàn diện được thiết kế cho chuỗi cung ứng thực phẩm hiện đại, từ thu thập dữ liệu AI đến tuân thủ quy định.",
    features: [
      {
        icon: Mic,
        title: "Nhập liệu bằng giọng nói",
        description: "Ghi nhận sự kiện truy xuất tự nhiên bằng giọng nói. AI hiểu ngữ cảnh và tự động điền form.",
        highlight: "Không cần dùng tay",
      },
      {
        icon: Camera,
        title: "Nhận diện hình ảnh AI",
        description: "Quét sản phẩm, nhãn mác và tài liệu. Thị giác máy tính trích xuất dữ liệu tự động với độ chính xác cao.",
        highlight: "OCR & quét mã vạch",
      },
      {
        icon: Shield,
        title: "Nhật ký kiểm toán Blockchain",
        description: "Mọi thay đổi được bảo mật bằng chuỗi hash bất biến. Lịch sử kiểm toán hoàn chỉnh đáng tin cậy.",
        highlight: "Không thể giả mạo",
      },
      {
        icon: QrCode,
        title: "GS1 Digital Link",
        description: "Tạo mã QR tuân thủ liên kết đến thông tin sản phẩm, chứng nhận và lịch sử truy xuất đầy đủ.",
        highlight: "Minh bạch cho người tiêu dùng",
      },
      {
        icon: BarChart3,
        title: "Phân tích thời gian thực",
        description: "Giám sát chuỗi cung ứng với dashboard trực tiếp. Theo dõi sự kiện, chỉ số chất lượng và điểm tuân thủ.",
        highlight: "Thông tin hữu ích",
      },
      {
        icon: Globe,
        title: "Hỗ trợ đa địa điểm",
        description: "Quản lý nông trại, nhà máy, kho và cửa hàng bán lẻ trên nhiều vùng với theo dõi GLN.",
        highlight: "Chuỗi cung ứng toàn cầu",
      },
      {
        icon: FileCheck,
        title: "Xuất hồ sơ tuân thủ",
        description: "Tạo báo cáo tuân thủ FSMA 204 và EUDR tự động. Sẵn sàng nộp cho cơ quan quản lý.",
        highlight: "Xuất một click",
      },
      {
        icon: Smartphone,
        title: "Zalo Mini App",
        description: "Công nhân hiện trường thu thập dữ liệu qua giao diện Zalo quen thuộc. Không cần đào tạo, hoạt động offline.",
        highlight: "Tối ưu cho Việt Nam",
      },
      {
        icon: Link2,
        title: "Tích hợp API",
        description: "Kết nối với hệ thống ERP, WMS và IoT hiện có. API RESTful với hỗ trợ webhook.",
        highlight: "Sẵn sàng doanh nghiệp",
      },
    ],
  },
}

interface FeaturesSectionProps {
  locale: "en" | "vi"
}

export function FeaturesSection({ locale }: FeaturesSectionProps) {
  const t = content[locale]

  return (
    <section id="features" className="py-20 lg:py-28">
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

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-xl hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Highlight Tag */}
              <div className="inline-flex items-center text-xs font-medium text-accent">
                {feature.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
