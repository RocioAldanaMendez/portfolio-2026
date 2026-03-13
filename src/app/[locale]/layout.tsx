import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SetLocale } from "@/components/layout/SetLocale";
import { SpotifyPlayer } from "@/components/layout/SpotifyPlayer";
import { BackToTop } from "@/components/layout/BackToTop";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: "System Engineer",
    description: isEs
      ? "Portfolio de Rocio Mendez. Ingeniera en Sistemas enfocada en IA, backend e infraestructura cloud."
      : "Portfolio of Rocio Mendez. Systems Engineer focused on AI, backend architecture, and cloud infrastructure.",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <SetLocale locale={locale} />
      <Navbar dict={dict.nav} locale={locale} />
      <main className="overflow-x-hidden">{children}</main>
      <Footer dict={dict.footer} />
      <BackToTop />
      <SpotifyPlayer />
    </>
  );
}
