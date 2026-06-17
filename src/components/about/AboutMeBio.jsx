import profileImage from "../../images/profile.jpg";
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);
  const [intro, ...restBio] = aboutMe;

  return (
    <section className="px-4 pb-12 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              About Me
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {intro?.bio}
            </p>

            <div className="mt-6 space-y-4">
              {restBio.map((bio) => (
                <p
                  className="leading-relaxed text-gray-600 dark:text-gray-300"
                  key={bio.id}
                >
                  {bio.bio}
                </p>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[280px] lg:mx-0">
            <img
              src={profileImage}
              className="w-full rounded-xl object-cover object-center shadow-md"
              alt="Oluwatosin Ayinde"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeBio;
