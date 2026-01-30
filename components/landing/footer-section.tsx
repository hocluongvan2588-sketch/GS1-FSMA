"use client"

import Link from "next/link"

const content = {
  en: {
    description: "The most advanced AI-powered food traceability platform. Built for global compliance and supply chain transparency.",
    sections: [
      {
        title: "Platform",
        links: [
          { label: "Features", href: "#features" },
          { label: "Compliance", href: "#compliance" },
          { label: "Pricing", href: "#" },
          { label: "API Documentation", href: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Contact", href: "#" },
          { label: "Partners", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "#" },
          { label: "Case Studies", href: "#" },
          { label: "Help Center", href: "#" },
          { label: "FSMA 204 Guide", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "Security", href: "#" },
          { label: "Compliance", href: "#" },
        ],
      },
    ],
    standards: "Compliant with GS1 EPCIS 2.0, FDA FSMA 204, and EUDR standards",
    copyright: "GS1 Trace. All rights reserved.",
  },
  vi: {
    description: "Nền tảng truy xuất nguồn gốc thực phẩm tích hợp AI tiên tiến nhất. Xây dựng cho tuân thủ toàn cầu và minh bạch chuỗi cung ứng.",
    sections: [
      {
        title: "Nền tảng",
        links: [
          { label: "Tính năng", href: "#features" },
          { label: "Tuân thủ", href: "#compliance" },
          { label: "Bảng giá", href: "#" },
          { label: "Tài liệu API", href: "#" },
        ],
      },
      {
        title: "Công ty",
        links: [
          { label: "Về chúng tôi", href: "#" },
          { label: "Tuyển dụng", href: "#" },
          { label: "Liên hệ", href: "#" },
          { label: "Đối tác", href: "#" },
        ],
      },
      {
        title: "Tài nguyên",
        links: [
          { label: "Blog", href: "#" },
          { label: "Nghiên cứu điển hình", href: "#" },
          { label: "Trung tâm trợ giúp", href: "#" },
          { label: "Hướng dẫn FSMA 204", href: "#" },
        ],
      },
      {
        title: "Pháp lý",
        links: [
          { label: "Chính sách bảo mật", href: "#" },
          { label: "Điều khoản dịch vụ", href: "#" },
          { label: "Bảo mật", href: "#" },
          { label: "Tuân thủ", href: "#" },
        ],
      },
    ],
    standards: "Tuân thủ tiêu chuẩn GS1 EPCIS 2.0, FDA FSMA 204 và EUDR",
    copyright: "GS1 Trace. Bảo lưu mọi quyền.",
  },
}

interface FooterSectionProps {
  locale: "en" | "vi"
}

export function FooterSection({ locale = "vi" }: FooterSectionProps) {
  const t = content[locale] || content.vi
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-background" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xl font-semibold text-foreground">
                  GS1 Trace
                </span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm">
                {t.description}
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {["linkedin", "twitter", "youtube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      {social === "linkedin" && (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      )}
                      {social === "twitter" && (
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      )}
                      {social === "youtube" && (
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {t.sections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-foreground mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, lIndex) => (
                    <li key={lIndex}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            {t.standards}
          </p>
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
