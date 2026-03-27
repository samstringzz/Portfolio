import { achievementsData } from "../data/portfolioData";

const Achievements = () => {
  return (
    <section className="bg-[#f8f4ed] px-4 py-24 dark:bg-[#120f0d] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 dark:text-emerald-300">
              Achievements
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-stone-950 dark:text-stone-100 sm:text-5xl">
              Outcomes that make the portfolio feel earned.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-600 dark:text-stone-300">
              These highlights emphasize delivery impact, engineering quality,
              and product usefulness. The aim is to make the value visible fast,
              especially to someone reviewing many portfolios in a short time.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {achievementsData.map((achievement, index) => (
              <article
                key={index}
                className="rounded-[30px] border border-stone-200/80 bg-white/90 p-7 shadow-[0_24px_80px_rgba(28,25,23,0.08)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-4xl">{achievement.icon}</div>
                  <span className="rounded-full bg-[#fff3db] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-700 dark:bg-[#1d1815] dark:text-stone-200">
                    Highlight
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-stone-950 dark:text-stone-100">
                  {achievement.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-stone-600 dark:text-stone-300">
                  {achievement.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
