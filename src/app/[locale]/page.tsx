import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { Hero } from "@/components/sections/Hero";
import { PhotoCarousel } from "@/components/sections/PhotoCarousel";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Hero dict={dict.hero} />
      <PhotoCarousel dict={dict.projects} />
      <Projects dict={dict.projects} />
      <Experience dict={dict.experience} />
      <About dict={dict.about} />
      <Contact dict={dict.contact} />
    </>
  );
}
