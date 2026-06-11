import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, SparklesIcon } from "lucide-react"
import DotPattern from "@/components/ui/dot-pattern"

type PricingCardProps = {
  titleBadge: string
  priceLabel: string
  priceSuffix?: string
  features: string[]
  cta?: string
  className?: string
}

function PricingCard({
  titleBadge,
  priceLabel,
  priceSuffix = "",
  features,
  cta = "Подписаться",
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "bg-white/5 border-white/10 relative overflow-hidden rounded-md border-2",
        "backdrop-blur-sm",
        className,
      )}
    >
      <DotPattern width={5} height={5} />
      <div className="flex items-center gap-3 p-3">
        <Badge variant="secondary" className="bg-white/10 text-white border-white/20 font-open-sans-custom text-xs">
          {titleBadge}
        </Badge>
        <div className="ml-auto">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/5 text-white border-white/20 hover:bg-white/10 font-open-sans-custom text-xs"
          >
            {cta}
          </Button>
        </div>
      </div>

      <div className="flex items-end gap-2 px-3 py-1">
        <span className="font-mono text-3xl font-semibold tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
          {priceLabel}
        </span>
        {priceSuffix && priceLabel.toLowerCase() !== "бесплатно" && priceLabel !== "0 ₽" && (
          <span className="text-gray-300 text-xs font-open-sans-custom">{priceSuffix}</span>
        )}
      </div>

      <ul className="text-gray-300 grid gap-2 p-3 text-xs font-open-sans-custom">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="w-[1.05rem] h-[1.05rem] text-white flex-shrink-0" strokeWidth={3} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function BentoPricing() {
  return (
    <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 lg:grid-cols-8">
      <div
        className={cn(
          "bg-white/5 border-white/10 relative w-full overflow-hidden rounded-md border-2",
          "backdrop-blur-sm",
          "lg:col-span-5",
        )}
      >
        <DotPattern width={5} height={5} />
        <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
          <div className="from-white/5 to-white/2 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0 size-full mix-blend-overlay",
                "bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)]",
                "bg-[size:24px]",
              )}
            />
          </div>
        </div>
        <div className="flex items-center gap-3 p-3">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 font-open-sans-custom text-xs">
            КОМПЛЕКС
          </Badge>
          <Badge
            variant="outline"
            className="hidden lg:flex bg-white/5 text-white border-white/20 font-open-sans-custom text-xs"
          >
            <SparklesIcon className="me-1 size-3" /> Выгодно
          </Badge>
          <div className="ml-auto">
            <Button size="sm" className="bg-white text-black hover:bg-gray-100 font-open-sans-custom text-xs">
              Заказать
            </Button>
          </div>
        </div>
        <div className="flex flex-col p-3 lg:flex-row">
          <div className="pb-2 lg:w-[30%]">
            <span className="font-mono text-3xl font-semibold tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              1 000 ₽
            </span>
            <span className="text-gray-300 text-xs font-open-sans-custom"> за 2 разбора</span>
          </div>
          <ul className="text-gray-300 grid gap-2 text-xs lg:w-[70%] font-open-sans-custom">
            {[
              "Натальная карта + Прогноз на год",
              "Натальная карта + Профориентация",
              "Натальная карта + Совместимость",
              "PDF + аудио + 3 вопроса в подарок",
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-[1.05rem] h-[1.05rem] text-white flex-shrink-0" strokeWidth={3} />
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PricingCard
        titleBadge="ОДИН ВОПРОС"
        priceLabel="270 ₽"
        priceSuffix=""
        features={[
          "Экспресс-разбор точечной ситуации",
          "Ответ в формате аудио или PDF",
          "Готово за 1–2 дня",
        ]}
        className="lg:col-span-3"
        cta="Заказать"
      />

      <PricingCard
        titleBadge="НАТАЛЬНАЯ КАРТА"
        priceLabel="500 ₽"
        priceSuffix=""
        features={[
          "Паспорт вашей личности",
          "Сильные стороны и скрытые таланты",
          "Финансовые блоки и точки роста",
        ]}
        className="lg:col-span-4"
        cta="Заказать"
      />

      <PricingCard
        titleBadge="ПРОГНОЗ / СОЛЯР"
        priceLabel="500 ₽"
        priceSuffix=""
        features={[
          "Главные тренды на год вперёд",
          "Где подстелить соломку, а где действовать",
          "Детская натальная карта — тоже 500 ₽",
        ]}
        className="lg:col-span-4"
        cta="Заказать"
      />

      <PricingCard
        titleBadge="СОВМЕСТИМОСТЬ / ПРОФОРИЕНТАЦИЯ"
        priceLabel="500 ₽"
        priceSuffix=""
        features={[
          "Синастрия: кризисы и путь к гармонии",
          "Профориентация: дело жизни и финансовый потенциал",
          "Смена профессии по натальной карте",
          "PDF + аудио, готово за 2–5 дней",
        ]}
        className="lg:col-span-8"
        cta="Заказать"
      />
    </div>
  )
}