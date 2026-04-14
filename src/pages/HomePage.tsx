interface HomePageProps {
  onNavigate: (page: string) => void;
}

const athletes = [
  {
    id: "shved",
    name: "Алексей Швед",
    sport: "Баскетбол",
    title: "Лучший баскетболист Европы",
    emoji: "🏀",
    color: "from-orange-600/20 to-red-700/20",
    border: "border-orange-500/30",
    accent: "text-orange-400",
  },
  {
    id: "khorkina",
    name: "Светлана Хоркина",
    sport: "Гимнастика",
    title: "Двукратная олимпийская чемпионка",
    emoji: "🤸",
    color: "from-yellow-600/20 to-amber-700/20",
    border: "border-yellow-500/30",
    accent: "text-yellow-400",
  },
  {
    id: "emelianenko",
    name: "Фёдор Емельяненко",
    sport: "MMA / Самбо",
    title: "Величайший боец всех времён",
    emoji: "🥊",
    color: "from-red-700/20 to-rose-800/20",
    border: "border-red-500/30",
    accent: "text-red-400",
  },
  {
    id: "kislyak",
    name: "Матвей Кисляк",
    sport: "Футбол",
    title: "Игрок ЦСКА и сборной России",
    emoji: "⚽",
    color: "from-blue-700/20 to-indigo-800/20",
    border: "border-blue-500/30",
    accent: "text-blue-400",
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen hero-bg noise-overlay">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 anim-fade-up">
            <span className="font-oswald text-primary text-sm tracking-widest uppercase">Белгород — Город Чемпионов</span>
          </div>
          <h1 className="font-oswald text-5xl md:text-8xl font-bold leading-none mb-6 anim-fade-up delay-100">
            <span className="text-gradient">Гордость</span>
            <br />
            <span className="text-foreground">Белогорья</span>
          </h1>
          <p className="font-golos text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 anim-fade-up delay-200">
            Они покорили мировые арены, завоевали золото Олимпиад и стали символом
            силы и воли белгородского спорта. Узнайте их истории.
          </p>
          <div className="stripe-divider w-32 mx-auto mb-10 anim-fade-up delay-300" />

          <div className="flex flex-wrap justify-center gap-3 anim-fade-up delay-300">
            <button
              onClick={() => onNavigate("shved")}
              className="px-6 py-3 bg-primary text-primary-foreground font-oswald uppercase tracking-wider text-sm rounded-lg hover:bg-primary/80 transition-all hover:scale-105"
            >
              Познакомиться со спортсменами
            </button>
          </div>
        </div>
      </section>

      {/* Athletes grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="font-oswald text-3xl md:text-4xl font-bold text-center mb-3 anim-fade-up">
          Наши <span className="text-gradient">Чемпионы</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 anim-fade-up delay-100">Нажмите на карточку, чтобы узнать больше</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {athletes.map((a, i) => (
            <button
              key={a.id}
              onClick={() => onNavigate(a.id)}
              className={`group relative text-left p-6 rounded-2xl border ${a.border} bg-gradient-to-br ${a.color} card-glow cursor-pointer anim-fade-up delay-${(i + 2) * 100}`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl">{a.emoji}</span>
                <span className="font-oswald text-xs uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1">
                  {a.sport}
                </span>
              </div>
              <h3 className={`font-oswald text-2xl font-bold mb-1 ${a.accent}`}>{a.name}</h3>
              <p className="font-golos text-muted-foreground text-sm">{a.title}</p>
              <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className={`text-xs font-oswald uppercase tracking-wider ${a.accent}`}>Читать историю</span>
                <span className={`text-lg ${a.accent}`}>→</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "4", label: "Великих спортсмена" },
            { value: "12+", label: "Олимпийских наград" },
            { value: "30+", label: "Лет побед" },
            { value: "1", label: "Родной город" },
          ].map((s, i) => (
            <div key={i} className={`anim-fade-up delay-${i * 100}`}>
              <div className="font-oswald text-4xl md:text-5xl font-bold text-gradient mb-1">{s.value}</div>
              <div className="font-golos text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}