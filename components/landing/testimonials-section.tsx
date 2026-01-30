"use client"

import { Quote } from "lucide-react"

const content = {
  en: {
    badge: "Success Stories",
    title: "Trusted by industry",
    titleHighlight: "leaders",
    subtitle: "See how leading food producers are transforming their supply chain transparency with our platform.",
    testimonials: [
      {
        quote: "GS1 Trace revolutionized how we manage traceability. What used to take hours now happens in seconds. Our US export compliance went from stressful to seamless.",
        author: "Nguyen Van Minh",
        role: "Operations Director",
        company: "Da Lat Premium Coffee Co.",
        industry: "Coffee Export",
      },
      {
        quote: "The voice input feature is a game-changer for our farm workers. They can record harvest events in Vietnamese without any training. Data quality improved by 40%.",
        author: "Tran Thi Lan",
        role: "Quality Assurance Manager",
        company: "Mekong Rice Federation",
        industry: "Rice Production",
      },
      {
        quote: "When FDA requested a traceback, we provided complete documentation in under 2 hours. Our auditor was genuinely impressed. This platform pays for itself.",
        author: "Le Hoang Nam",
        role: "Compliance Officer",
        company: "VietSeafood Export JSC",
        industry: "Seafood Processing",
      },
    ],
  },
  vi: {
    badge: "Câu chuyện thành công",
    title: "Được tin tưởng bởi",
    titleHighlight: "doanh nghiệp hàng đầu",
    subtitle: "Xem các nhà sản xuất thực phẩm hàng đầu đang chuyển đổi minh bạch chuỗi cung ứng như thế nào.",
    testimonials: [
      {
        quote: "GS1 Trace đã cách mạng hóa cách chúng tôi quản lý truy xuất nguồn gốc. Những gì từng mất hàng giờ giờ chỉ còn vài giây. Tuân thủ xuất khẩu Mỹ từ căng thẳng thành trơn tru.",
        author: "Nguyễn Văn Minh",
        role: "Giám đốc Vận hành",
        company: "Công ty Cà phê Cao cấp Đà Lạt",
        industry: "Xuất khẩu Cà phê",
      },
      {
        quote: "Tính năng nhập giọng nói là bước đột phá cho công nhân nông trại. Họ ghi nhận sự kiện thu hoạch bằng tiếng Việt mà không cần đào tạo. Chất lượng dữ liệu cải thiện 40%.",
        author: "Trần Thị Lan",
        role: "Quản lý Đảm bảo Chất lượng",
        company: "Liên đoàn Gạo Mekong",
        industry: "Sản xuất Gạo",
      },
      {
        quote: "Khi FDA yêu cầu truy xuất ngược, chúng tôi cung cấp tài liệu đầy đủ trong chưa đầy 2 giờ. Kiểm toán viên thực sự ấn tượng. Nền tảng này tự trả tiền cho chính nó.",
        author: "Lê Hoàng Nam",
        role: "Chuyên viên Tuân thủ",
        company: "CTCP Xuất khẩu VietSeafood",
        industry: "Chế biến Thủy sản",
      },
    ],
  },
}

interface TestimonialsSectionProps {
  locale: "en" | "vi"
}

export function TestimonialsSection({ locale }: TestimonialsSectionProps) {
  const t = content[locale]

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-muted/30">
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

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-accent" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-foreground leading-relaxed mb-8 flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-border pt-6">
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-muted-foreground">
                      {testimonial.author.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-accent mt-0.5">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
