import { useState, useEffect, useRef } from "react";
import { statsData } from "../data/portfolioData";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const Counter = ({ end, duration = 2, suffix = "", decimals = 0 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

        setCount(
          Math.floor(progress * end * Math.pow(10, decimals)) /
            Math.pow(10, decimals)
        );

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [isVisible, end, duration, decimals]);

    return (
      <span>
        {decimals > 0 ? count.toFixed(decimals) : count}
        {suffix}
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#171310] px-4 py-20 text-stone-100 dark:bg-[#0e0c0a] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d8b35f]">
              Snapshot
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-stone-100 sm:text-5xl">
              Numbers that reinforce product credibility.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-stone-300">
              The goal of this section is not just to show activity, but to
              communicate execution quality, consistency, and the scale of work
              already delivered across web and mobile products.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {statsData.map((stat) => (
              <article
                key={stat.id}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-400">
                      {stat.title}
                    </p>
                    <div className="mt-4 text-4xl font-semibold text-stone-50 sm:text-5xl">
                      {isVisible && (
                        <Counter
                          end={stat.value}
                          duration={2.3}
                          suffix={stat.suffix}
                          decimals={stat.suffix.includes(".") ? 1 : 0}
                        />
                      )}
                    </div>
                  </div>
                  <span className="text-4xl">{stat.icon}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
