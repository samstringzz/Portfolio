import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";

const AboutCounter = () => {
  useCountUp({ ref: "experienceCounter", end: 4, duration: 2 });
  useCountUp({ ref: "feedbackCounter", end: 15, duration: 2 });
  useCountUp({ ref: "projectsCounter", end: 99.5, duration: 2, decimals: 1 });

  return (
    <section className="bg-[#171310] px-4 py-20 text-stone-100 dark:bg-[#0e0c0a] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d8b35f]">
              Quick Metrics
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-stone-100 sm:text-5xl">
              A concise view of delivery volume, consistency, and experience.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-stone-300">
              This section is meant to reinforce the story on the page with a
              few memorable numbers that communicate output and quality fast.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <CounterItem
              title="Years of experience"
              counter={<span id="experienceCounter" />}
              measurement="+"
              detail="Hands-on delivery across mobile, web, and product interfaces."
            />

            <CounterItem
              title="Projects shipped"
              counter={<span id="feedbackCounter" />}
              measurement="+"
              detail="Production work across education, commerce, marketing, and internal tools."
            />

            <CounterItem
              title="Crash-free focus"
              counter={<span id="projectsCounter" />}
              measurement="%"
              detail="A quality benchmark that reflects performance and reliability discipline."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCounter;
