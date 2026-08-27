import AboutMeBio from "@/components/about/AboutMeBio";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export const metadata = {
  title: "About",
  description:
    "Mobile and full-stack developer at YIP Online — React Native, React, Next.js, and production delivery.",
};

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <AboutMeBio />
      <Experience />
      <Skills />
    </div>
  );
}
