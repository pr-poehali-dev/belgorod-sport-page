interface Props { onNavigate: (page: string) => void; }

export default function AthleteKhorkina({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <div className="max-w-5xl mx-auto px-4 pt-28 pb-20">

        <button onClick={() => onNavigate("home")} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 font-golos text-sm">
          ← Назад на главную
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div className="anim-slide-left">
            <div className="inline-block mb-3 px-3 py-1 rounded-full bg-yellow-500/15 border border-yellow-500/30">
              <span className="font-oswald text-yellow-400 text-xs uppercase tracking-widest">Художественная гимнастика</span>
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl font-bold leading-none mb-2">
              <span className="text-yellow-400">Светлана</span><br />
              <span className="text-foreground">Хоркина</span>
            </h1>
            <div className="stripe-divider w-20 my-5" />
            <p className="font-golos text-muted-foreground text-lg leading-relaxed">
              Легенда мировой гимнастики, двукратная олимпийская чемпионка, многократная 
              чемпионка мира и Европы. Символ грации, силы и несгибаемой воли белгородской земли.
            </p>
          </div>
          <div className="anim-scale-in delay-200 rounded-2xl overflow-hidden border border-yellow-500/20 card-glow">
            <img
              src="https://cdn.poehali.dev/files/26aeb608-6c37-4cf7-9f39-092cbf714578.png"
              alt="Светлана Хоркина"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { val: "1979", lbl: "Год рождения" },
            { val: "2×🥇", lbl: "Олимпийское золото" },
            { val: "6×", lbl: "Чемпионка мира" },
            { val: "13×", lbl: "Чемпионка Европы" },
          ].map((s) => (
            <div key={s.val} className="bg-card border border-border rounded-xl p-4 text-center">
              <div className="font-oswald text-2xl font-bold text-yellow-400 mb-1">{s.val}</div>
              <div className="font-golos text-xs text-muted-foreground uppercase tracking-wide">{s.lbl}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="font-oswald text-2xl font-bold text-yellow-400 mb-4">Биография</h2>
            <div className="font-golos text-muted-foreground leading-relaxed space-y-4">
              <p>
                Светлана Васильевна Хоркина родилась 19 января 1979 года в Белгороде. 
                С раннего детства занималась гимнастикой под руководством тренера Бориса Пилкина, 
                который разглядел в хрупкой девочке будущую чемпионку.
              </p>
              <p>
                Её карьера стала беспрецедентной в истории женской спортивной гимнастики. 
                Хоркина отличалась редким сочетанием технического мастерства, артистизма и 
                непоколебимой психологической стойкости.
              </p>
              <p>
                На Олимпийских играх 1996 года в Атланте она завоевала золото в упражнении 
                на разновысоких брусьях. В Сиднее в 2000 году повторила этот успех и стала 
                двукратной олимпийской чемпионкой. Элемент на брусьях назван в её честь — «элемент Хоркиной».
              </p>
              <p>
                После завершения спортивной карьеры Светлана активно занимается общественной 
                и политической деятельностью, является депутатом Государственной Думы.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="font-oswald text-2xl font-bold text-yellow-400 mb-4">Достижения</h2>
            <ul className="font-golos space-y-3">
              {[
                "Двукратная олимпийская чемпионка (Атланта 1996, Сидней 2000) — разновысокие брусья",
                "Серебряный призёр Олимпиады 2004 (Афины) в командном первенстве",
                "6-кратная чемпионка мира",
                "13-кратная чемпионка Европы",
                "Элемент на брусьях назван «элементом Хоркиной»",
                "Заслуженный мастер спорта России",
                "Орден Почёта и другие государственные награды",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-yellow-400 mt-0.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <button onClick={() => onNavigate("shved")} className="font-oswald text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
            ← Швед
          </button>
          <button onClick={() => onNavigate("emelianenko")} className="font-oswald text-sm uppercase tracking-wider text-primary hover:text-primary/70 transition-colors">
            Следующий: Емельяненко →
          </button>
        </div>
      </div>
    </div>
  );
}