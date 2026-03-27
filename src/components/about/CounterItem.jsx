const CounterItem = ({ title, counter, measurement, detail }) => {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
      <div className="text-4xl font-semibold text-stone-50 sm:text-5xl">
        {counter}
        {measurement ? ` ${measurement}` : ""}
      </div>
      <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-200">
        {title}
      </h3>
      {detail ? (
        <p className="mt-3 text-sm leading-7 text-stone-400">{detail}</p>
      ) : null}
    </article>
  );
};

export default CounterItem;
