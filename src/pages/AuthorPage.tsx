interface Props { onNavigate: (page: string) => void; }

export default function AuthorPage({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <div className="max-w-3xl mx-auto px-4 pt-28 pb-20">

        <button onClick={() => onNavigate("home")} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 font-golos text-sm">
          ← Назад на главную
        </button>

        {/* Author hero */}
        <div className="text-center mb-12 anim-fade-up">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 border-2 border-primary/50 flex items-center justify-center text-5xl mx-auto mb-6">
            👤
          </div>
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/15 border border-primary/30">
            <span className="font-oswald text-primary text-xs uppercase tracking-widest">Создатель сайта</span>
          </div>
          <h1 className="font-oswald text-4xl md:text-5xl font-bold mb-2">
            <span className="text-gradient">Об авторе</span>
          </h1>
          <div className="stripe-divider w-20 mx-auto mt-5" />
        </div>

        <div className="space-y-6 anim-fade-up delay-200">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="font-oswald text-xl font-bold text-primary mb-4">О проекте</h2>
            <p className="font-golos text-muted-foreground leading-relaxed">
              Этот сайт создан с любовью к родному Белгороду и его великим спортсменам. 
              Цель проекта — рассказать о людях, которые принесли городу и стране 
              мировую известность своим трудом, талантом и характером.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="font-oswald text-xl font-bold text-primary mb-6">Информация об авторе</h2>
            <div className="space-y-4">
              {[
                { icon: "📝", label: "Имя", value: "Шабатура Василий" },
                { icon: "🎓", label: "Учебное заведение", value: "Школа №2, г. Строитель" },
                { icon: "📚", label: "Класс", value: "11Б" },
                { icon: "📅", label: "Год создания", value: "2026" },
                { icon: "📍", label: "Город", value: "Строитель, Белгородская область" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-golos text-xs text-muted-foreground uppercase tracking-wide mb-0.5">{item.label}</div>
                    <div className="font-golos text-foreground">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="font-oswald text-xl font-bold text-primary mb-4">Источники</h2>
            <ul className="font-golos space-y-2 text-muted-foreground text-sm">
              {[
                "Официальный сайт Федерации баскетбола России",
                "Официальный сайт Федерации гимнастики России",
                "Официальный сайт Федерации самбо России",
                "Белгородская областная универсальная научная библиотека",
                "Открытые материалы спортивной прессы",
              ].map((src) => (
                <li key={src} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0">▸</span>
                  {src}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
            <div className="text-3xl mb-3">🏆</div>
            <p className="font-oswald text-lg text-foreground mb-1">Белгород — Город Чемпионов</p>
            <p className="font-golos text-sm text-muted-foreground">
              Гордимся нашими спортсменами и вдохновляемся их победами
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <button onClick={() => onNavigate("kislyak")} className="font-oswald text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
            ← Кисляк
          </button>
          <button onClick={() => onNavigate("home")} className="font-oswald text-sm uppercase tracking-wider text-primary hover:text-primary/70 transition-colors">
            На главную →
          </button>
        </div>
      </div>
    </div>
  );
}