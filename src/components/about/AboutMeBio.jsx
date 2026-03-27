import profileImage from "../../images/profile.jpg";
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";

const focusAreas = [
  "React Native delivery",
  "Frontend systems thinking",
  "API integration and data flow",
  "Performance and UX polish",
];

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);
  const [intro, ...restBio] = aboutMe;

  return (
    <section className="px-4 pb-12 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 dark:text-emerald-300">
              About Me
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-stone-950 dark:text-stone-100 sm:text-6xl">
              Building products that feel reliable, considered, and ready for real users.
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-700 dark:text-stone-300">
              {intro?.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-stone-300/80 px-4 py-2 text-sm text-stone-700 dark:border-white/10 dark:text-stone-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-stone-200/80 bg-white/90 p-6 shadow-[0_26px_90px_rgba(28,25,23,0.08)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_26px_90px_rgba(0,0,0,0.35)] sm:p-8">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[280px] overflow-hidden rounded-[28px] bg-[#f3ede3] dark:bg-[#171310]">
                <img
                  src={profileImage}
                  className="h-[360px] w-full object-cover object-center"
                  alt="Oluwatosin Ayinde portrait"
                />
              </div>

              <div className="mt-8 w-full">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-stone-500 dark:text-stone-400">
                  Profile
                </p>
                <div className="mt-5 space-y-4">
                  {restBio.map((bio) => (
                    <p
                      className="text-sm leading-8 text-stone-700 dark:text-stone-300"
                      key={bio.id}
                    >
                      {bio.bio}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeBio;
