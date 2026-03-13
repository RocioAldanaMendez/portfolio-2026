import { SITE_CONFIG } from "@/lib/constants";

interface FooterProps {
  dict: {
    copyright: string;
    resume: string;
  };
}

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="px-5 pb-8 pt-2 md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 sm:flex-row">
        <p className="text-sm text-foreground-muted">
          &copy; {new Date().getFullYear()} {dict.copyright}
        </p>

        <div className="flex items-center gap-6 text-sm">
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-secondary transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-secondary transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="text-foreground-secondary transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
