"use client";

import { usePathname, useRouter } from "next/navigation";

interface LanguageToggleProps {
  locale: string;
}

export function LanguageToggle({ locale }: LanguageToggleProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = () => {
    const newLocale = locale === "en" ? "es" : "en";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    router.push(newPath);
  };

  return (
    <button
      onClick={switchLocale}
      className="rounded-full px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.14em] text-foreground-secondary transition-colors hover:bg-white/60 hover:text-foreground"
      aria-label={`Switch to ${locale === "en" ? "Spanish" : "English"}`}
    >
      {locale === "en" ? "ES" : "EN"}
    </button>
  );
}
