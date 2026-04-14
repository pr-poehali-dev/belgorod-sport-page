interface Props { onNavigate: (page: string) => void; }

export default function AthleteShved({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <div className="max-w-5xl mx-auto px-4 pt-28 pb-20">

        {/* Back */}
        <button onClick={() => onNavigate("home")} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 font-golos text-sm">
          ← Назад на главную
        </button>

        {/* Hero block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div className="anim-slide-left">
            <div className="inline-block mb-3 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30">
              <span className="font-oswald text-orange-400 text-xs uppercase tracking-widest">Баскетбол</span>
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl font-bold leading-none mb-2">
              <span className="text-orange-400">Алексей</span><br />
              <span className="text-foreground">Швед</span>
            </h1>
            <div className="stripe-divider w-20 my-5" />
            <p className="font-golos text-muted-foreground text-lg leading-relaxed">
              Один из лучших баскетболистов в истории российского и европейского баскетбола. 
              Уроженец Белгорода, прошедший путь от дворовых площадок до мировых арен NBA и Евролиги.
            </p>
          </div>
          <div className="anim-scale-in delay-200 rounded-2xl overflow-hidden border border-orange-500/20 card-glow">
            <img
              src="https://cdn.poehali.dev/files/2990183d-e4be-4ee3-97be-6b78f5727d32.png"
              alt="Алексей Швед"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { val: "1988", lbl: "Год рождения" },
            { val: "NBA", lbl: "Высший уровень" },
            { val: "196 см", lbl: "Рост" },
            { val: "🏀×3", lbl: "Кубки России" },
          ].map((s) => (
            <div key={s.val} className="bg-card border border-border rounded-xl p-4 text-center">
              <div className="font-oswald text-2xl font-bold text-orange-400 mb-1">{s.val}</div>
              <div className="font-golos text-xs text-muted-foreground uppercase tracking-wide">{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* Biography */}
        <div className="space-y-8">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="font-oswald text-2xl font-bold text-orange-400 mb-4">Биография</h2>
            <div className="font-golos text-muted-foreground leading-relaxed space-y-4">
              <p>
                Алексей Юрьевич Швед родился 16 июля 1988 года в Белгороде. С детства проявлял незаурядные 
                спортивные способности и в юном возрасте начал заниматься баскетболом в родном городе.
              </p>
              <p>
                Профессиональную карьеру начал в московском ЦСКА, где вырос в одного из ведущих разыгрывающих 
                Европы. Его стремительный дриблинг, точные трёхочковые броски и умение создавать моменты для 
                партнёров сделали его любимцем болельщиков.
              </p>
              <p>
                В 2012 году Швед получил приглашение в NBA — клуб «Миннесота Тимбервулвз». Это стало 
                подтверждением его таланта мирового уровня. Выступал также за «Хьюстон Рокетс» и «Нью-Йорк Никс».
              </p>
              <p>
                Вернувшись в Европу, стал флагманом ЦСКА и «Химок». Его выступления в Евролиге 
                запомнятся фантастическими играми и рекордными личными показателями.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="font-oswald text-2xl font-bold text-orange-400 mb-4">Достижения</h2>
            <ul className="font-golos space-y-3">
              {[
                "Чемпион России по баскетболу (ЦСКА)",
                "Победитель Евролиги (ЦСКА)",
                "Участник NBA — «Миннесота Тимбервулвз», «Нью-Йорк Никс», «Хьюстон Рокетс»",
                "Чемпион мира в составе сборной России (2007, до 19 лет)",
                "Трёхкратный обладатель Кубка России",
                "Лучший игрок Евролиги по версии болельщиков",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-orange-400 mt-0.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nav between athletes */}
        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <div />
          <button onClick={() => onNavigate("khorkina")} className="font-oswald text-sm uppercase tracking-wider text-primary hover:text-primary/70 transition-colors">
            Следующий: Хоркина →
          </button>
        </div>
      </div>
    </div>
  );
}