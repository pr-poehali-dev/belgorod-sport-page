interface Props { onNavigate: (page: string) => void; }

export default function AthleteEmelianenko({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <div className="max-w-5xl mx-auto px-4 pt-28 pb-20">

        <button onClick={() => onNavigate("home")} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 font-golos text-sm">
          ← Назад на главную
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div className="anim-slide-left">
            <div className="inline-block mb-3 px-3 py-1 rounded-full bg-red-600/15 border border-red-600/30">
              <span className="font-oswald text-red-400 text-xs uppercase tracking-widest">MMA / Самбо / Дзюдо</span>
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl font-bold leading-none mb-2">
              <span className="text-red-400">Фёдор</span><br />
              <span className="text-foreground">Емельяненко</span>
            </h1>
            <div className="stripe-divider w-20 my-5" />
            <p className="font-golos text-muted-foreground text-lg leading-relaxed">
              «Последний Царь» — признанный величайшим бойцом смешанных единоборств всех времён. 
              Уроженец Белгородской области, покоривший весь мир спокойствием духа и сокрушительной мощью.
            </p>
          </div>
          <div className="anim-scale-in delay-200 rounded-2xl overflow-hidden border border-red-600/20 card-glow">
            <img
              src="https://cdn.poehali.dev/files/4cc8a73f-c197-4aaa-b2ea-3eecfb9c747d.png"
              alt="Фёдор Емельяненко"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { val: "1976", lbl: "Год рождения" },
            { val: "40-7", lbl: "Рекорд боёв" },
            { val: "GOAT", lbl: "Статус в MMA" },
            { val: "4×", lbl: "Чемпион мира самбо" },
          ].map((s) => (
            <div key={s.val} className="bg-card border border-border rounded-xl p-4 text-center">
              <div className="font-oswald text-2xl font-bold text-red-400 mb-1">{s.val}</div>
              <div className="font-golos text-xs text-muted-foreground uppercase tracking-wide">{s.lbl}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="font-oswald text-2xl font-bold text-red-400 mb-4">Биография</h2>
            <div className="font-golos text-muted-foreground leading-relaxed space-y-4">
              <p>
                Фёдор Владимирович Емельяненко родился 28 сентября 1976 года в городе Рубежное 
                (Украинская ССР), но вырос и сформировался как спортсмен в Белгороде. 
                Именно этот город стал для него настоящей родиной.
              </p>
              <p>
                Начав с самбо и дзюдо, Фёдор быстро стал непревзойдённым бойцом. 
                Его стиль отличается уникальным сочетанием: мощные руки бьют с точностью снайпера, 
                а исключительная техника борьбы позволяла контролировать любого соперника.
              </p>
              <p>
                На протяжении почти десяти лет — с 2000 по 2010 год — Емельяненко был признан 
                лучшим бойцом тяжёлого веса в мире. Серия из 28 побед подряд по-прежнему остаётся 
                одним из самых великих достижений в истории боёв.
              </p>
              <p>
                За пределами клетки Фёдор известен глубокой верой, смирением и благотворительностью. 
                Он — не только великий спортсмен, но и образец нравственности.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="font-oswald text-2xl font-bold text-red-400 mb-4">Достижения</h2>
            <ul className="font-golos space-y-3">
              {[
                "Признан лучшим бойцом MMA всех времён (GOAT) по версии многочисленных изданий",
                "Чемпион PRIDE FC в тяжёлом весе (2003–2007)",
                "4-кратный чемпион мира по боевому самбо",
                "2-кратный чемпион Европы по дзюдо",
                "Серия 28 победных боёв подряд",
                "Чемпион Bellator MMA",
                "Герой труда Российской Федерации",
                "Президент Союза MMA России",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-red-400 mt-0.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <button onClick={() => onNavigate("khorkina")} className="font-oswald text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
            ← Хоркина
          </button>
          <button onClick={() => onNavigate("kislyak")} className="font-oswald text-sm uppercase tracking-wider text-primary hover:text-primary/70 transition-colors">
            Следующий: Кисляк →
          </button>
        </div>
      </div>
    </div>
  );
}