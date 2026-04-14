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
              <span className="font-oswald text-blue-400 text-xs uppercase tracking-widest">Тяжёлая атлетика</span>
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl font-bold leading-none mb-2">
              <span className="text-blue-400">Сергей</span><br />
              <span className="text-foreground">Кисляк</span>
            </h1>
            <div className="stripe-divider w-20 my-5" />
            <p className="font-golos text-muted-foreground text-lg leading-relaxed">
              Белгородский богатырь, чемпион мира и Европы по тяжёлой атлетике. 
              Его результаты — свидетельство невероятной целеустремлённости и каждодневного труда 
              на благо отечественного спорта.
            </p>
          </div>
          <div className="anim-scale-in delay-200 rounded-2xl overflow-hidden border border-blue-600/20 card-glow">
            <img
              src="https://cdn.poehali.dev/projects/15e1d2fc-9f54-427a-b725-1847b7fc302f/files/74db247e-e94f-4040-b76d-65434abf1682.jpg"
              alt="Сергей Кисляк"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { val: "🌍", lbl: "Чемпион мира" },
            { val: "🇪🇺", lbl: "Чемпион Европы" },
            { val: "Белгород", lbl: "Родной город" },
            { val: "🏋️", lbl: "Тяжёлая атлетика" },
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
                Сергей Кисляк — белгородский спортсмен, прославивший родной город на всероссийском 
                и международном уровне в тяжёлой атлетике. Его путь в спорте — пример настоящего 
                характера и профессиональной дисциплины.
              </p>
              <p>
                Тяжёлая атлетика требует не только огромной физической силы, но и безупречной техники, 
                способности концентрироваться в решающий момент. Сергей обладает всеми этими качествами 
                в полной мере.
              </p>
              <p>
                Выступая за сборную России, Кисляк не раз поднимался на высшую ступень пьедестала, 
                доказывая, что белгородская спортивная школа воспитывает чемпионов мирового класса.
              </p>
              <p>
                Его достижения вдохновляют молодых спортсменов региона продолжать заниматься 
                тяжёлой атлетикой и стремиться к вершинам мирового спорта.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="font-oswald text-2xl font-bold text-blue-400 mb-4">Достижения</h2>
            <ul className="font-golos space-y-3">
              {[
                "Чемпион мира по тяжёлой атлетике",
                "Чемпион Европы по тяжёлой атлетике",
                "Многократный чемпион России",
                "Заслуженный мастер спорта России",
                "Участник крупнейших международных соревнований",
                "Представитель белгородской спортивной школы",
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
