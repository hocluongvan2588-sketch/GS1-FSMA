"use client"

const content = {
  en: {
    badge: "How It Works",
    title: "From farm to fork in",
    titleHighlight: "4 simple steps",
    subtitle: "Our streamlined process makes traceability effortless for everyone in your supply chain.",
    steps: [
      {
        number: "01",
        title: "Capture",
        description: "Workers record events using voice, camera, or manual input via our Zalo Mini App or web dashboard. AI validates data in real-time.",
        details: ["Voice commands in Vietnamese", "Photo OCR scanning", "Offline-capable mobile app"],
      },
      {
        number: "02",
        title: "Process",
        description: "Our AI engine processes and enriches the data, auto-generating TLCs, linking events, and flagging anomalies for review.",
        details: ["Auto-generate batch codes", "Link related events", "Confidence scoring"],
      },
      {
        number: "03",
        title: "Verify",
        description: "Quality inspectors review AI suggestions. Approved data is cryptographically sealed in the blockchain audit trail.",
        details: ["Human-in-the-loop review", "Blockchain immutability", "Digital signatures"],
      },
      {
        number: "04",
        title: "Comply",
        description: "Generate compliance reports instantly. Full traceback available within seconds for auditors or recall situations.",
        details: ["One-click FSMA reports", "Instant traceback", "QR code transparency"],
      },
    ],
  },
  vi: {
    badge: "Cách hoạt động",
    title: "Từ nông trại đến bàn ăn trong",
    titleHighlight: "4 bước đơn giản",
    subtitle: "Quy trình tối ưu giúp truy xuất nguồn gốc dễ dàng cho mọi người trong chuỗi cung ứng.",
    steps: [
      {
        number: "01",
        title: "Thu thập",
        description: "Công nhân ghi nhận sự kiện bằng giọng nói, camera hoặc nhập thủ công qua Zalo Mini App hoặc dashboard web. AI xác thực dữ liệu theo thời gian thực.",
        details: ["Lệnh giọng nói tiếng Việt", "Quét OCR ảnh chụp", "App mobile hoạt động offline"],
      },
      {
        number: "02",
        title: "Xử lý",
        description: "Hệ thống AI xử lý và làm giàu dữ liệu, tự động tạo TLC, liên kết sự kiện và đánh dấu bất thường để xem xét.",
        details: ["Tự động tạo mã lô", "Liên kết sự kiện liên quan", "Chấm điểm độ tin cậy"],
      },
      {
        number: "03",
        title: "Xác minh",
        description: "Kiểm định viên chất lượng xem xét đề xuất AI. Dữ liệu được phê duyệt được niêm phong bằng mật mã trong nhật ký blockchain.",
        details: ["Con người duyệt AI", "Blockchain bất biến", "Chữ ký số"],
      },
      {
        number: "04",
        title: "Tuân thủ",
        description: "Tạo báo cáo tuân thủ ngay lập tức. Truy xuất ngược đầy đủ trong vài giây cho kiểm toán viên hoặc tình huống thu hồi.",
        details: ["Báo cáo FSMA một click", "Truy xuất ngược tức thì", "Minh bạch QR code"],
      },
    ],
  },
}

interface HowItWorksSectionProps {
  locale: "en" | "vi"
}

export function HowItWorksSection({ locale }: HowItWorksSectionProps) {
  const t = content[locale]

  return (
    <section id="how-it-works" className="py-20 lg:py-28">
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

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {t.steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="relative z-10 w-16 h-16 bg-card border-2 border-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-xl font-bold text-accent">{step.number}</span>
                </div>

                {/* Content Card */}
                <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, dIndex) => (
                      <li
                        key={dIndex}
                        className="text-xs text-muted-foreground flex items-center justify-center gap-2"
                      >
                        <span className="w-1 h-1 bg-accent rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
