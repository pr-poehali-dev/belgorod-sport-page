interface Props { onNavigate: (page: string) => void; }

export default function AthleteKislyak({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <div className="max-w-5xl mx-auto px-4 pt-28 pb-20">

        <button onClick={() => onNavigate("home")} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 font-golos text-sm">
          ← Назад на главную
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div className="anim-slide-left">
            <div className="inline-block mb-3 px-3 py-1 rounded-full bg-blue-600/15 border border-blue-600/30">
              <span className="font-oswald text-blue-400 text-xs uppercase tracking-widest">Футбол</span>
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl font-bold leading-none mb-2">
              <span className="text-blue-400">Матвей</span><br />
              <span className="text-foreground">Кисляк</span>
            </h1>
            <div className="stripe-divider w-20 my-5" />
            <p className="font-golos text-muted-foreground text-lg leading-relaxed">
              Молодая звезда российского футбола, полузащитник ЦСКА и сборной России. 
              Уроженец Белгородской области, покоривший главную арену страны своим талантом, 
              скоростью и бесстрашием на поле.
            </p>
          </div>
          <div className="anim-scale-in delay-200 rounded-2xl overflow-hidden border border-blue-600/20 card-glow">
            <img
              src="https://cdn.poehali.dev/files/583e7f5b-9bbf-4483-9ebb-15d712fd9f0c.png"
              alt="Матвей Кисляк"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { val: "2003", lbl: "Год рождения" },
            { val: "ЦСКА", lbl: "Клуб" },
            { val: "🇷🇺", lbl: "Сборная России" },
            { val: "⚽", lbl: "Футбол" },
          ].map((s) => (
            <div key={s.lbl} className="bg-card border border-border rounded-xl p-4 text-center">
              <div className="font-oswald text-2xl font-bold text-blue-400 mb-1">{s.val}</div>
              <div className="font-golos text-xs text-muted-foreground uppercase tracking-wide">{s.lbl}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="font-oswald text-2xl font-bold text-blue-400 mb-4">Биография</h2>
            <div className="font-golos text-muted-foreground leading-relaxed space-y-4">
              <p>
                Матвей Кисляк родился в 2003 году и является воспитанником белгородского футбола. 
                Свой путь к вершинам он начал в родном регионе, откуда его талант был замечен 
                скаутами ведущих российских клубов.
              </p>
              <p>
                Полузащитник с мощным ударом, отличным видением поля и неуступчивым характером — 
                именно так описывают Матвея тренеры и партнёры по команде. В ЦСКА он быстро 
                стал одним из ключевых игроков средней линии.
              </p>
              <p>
                Вызов в национальную сборную России стал закономерным признанием его класса. 
                Кисляк с честью представляет страну на международном уровне, доказывая, 
                что белгородский футбол воспитывает игроков высочайшего уровня.
              </p>
              <p>
                Молодой возраст и уже достигнутые результаты говорят о том, что лучшее 
                в карьере Матвея Кисляка ещё впереди.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="font-oswald text-2xl font-bold text-blue-400 mb-4">Достижения</h2>
            <ul className="font-golos space-y-3">
              {[
                "Игрок основного состава ПФК ЦСКА",
                "Игрок сборной России по футболу",
                "Воспитанник белгородской футбольной школы",
                "Чемпион России в составе ЦСКА",
                "Обладатель Кубка России",
                "Один из самых перспективных полузащитников страны",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-blue-400 mt-0.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <button onClick={() => onNavigate("emelianenko")} className="font-oswald text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
            ← Емельяненко
          </button>
          <button onClick={() => onNavigate("author")} className="font-oswald text-sm uppercase tracking-wider text-primary hover:text-primary/70 transition-colors">
            Об авторе →
          </button>
        </div>
      </div>
    </div>
  );
}