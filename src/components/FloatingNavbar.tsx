import { Button } from "@/components/ui/button"

export function FloatingNavbar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
    }
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto max-w-7xl rounded-2xl border-2 border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection("home")} className="cursor-pointer">
            <div className="flex items-center gap-2 text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_40%)]">
              <svg
                fill="currentColor"
                height="1.75em"
                style={{ flexShrink: 0, lineHeight: 1 }}
                viewBox="0 0 24 24"
                width="1.75em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Звёздная карта</title>
                <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.9"/>
                <path d="M12 2 L13.5 8.5 L20 7 L15 11.5 L18 18 L12 14.5 L6 18 L9 11.5 L4 7 L10.5 8.5 Z" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="1" fill="currentColor" opacity="0.6"/>
                <circle cx="20" cy="4" r="0.8" fill="currentColor" opacity="0.5"/>
                <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.6"/>
                <circle cx="4" cy="20" r="0.7" fill="currentColor" opacity="0.4"/>
              </svg>
              <span className="font-semibold text-lg font-open-sans-custom tracking-tight">Астролог</span>
            </div>
          </button>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              Тарифы
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              Обо мне
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              Контакты
            </button>
          </div>

          {/* CTA Button */}
          <Button
            size="sm"
            className="bg-white text-black hover:bg-gray-100 [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)] font-open-sans-custom"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })}
          >
            Записаться
          </Button>
        </div>
      </div>
    </nav>
  )
}