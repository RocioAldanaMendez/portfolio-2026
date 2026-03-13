"use client";

import { useEffect, useState } from "react";

const SPOTIFY_PLAYLIST_ID = "37i9dQZF1DWWQRwui0ExPn";

export function SpotifyPlayer() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isDockedToCorner, setIsDockedToCorner] = useState(false);

  useEffect(() => {
    const updateDocking = () => {
      const projectsSection = document.getElementById("projects");
      if (!projectsSection) {
        setIsDockedToCorner(window.scrollY > 240);
        return;
      }

      const rect = projectsSection.getBoundingClientRect();
      setIsDockedToCorner(rect.top <= window.innerHeight * 0.85);
    };

    updateDocking();
    window.addEventListener("scroll", updateDocking, { passive: true });
    window.addEventListener("resize", updateDocking);

    return () => {
      window.removeEventListener("scroll", updateDocking);
      window.removeEventListener("resize", updateDocking);
    };
  }, []);

  return (
    <div
      className={`fixed z-[60] flex flex-col items-end transition-all duration-500 ease-out ${
        isDockedToCorner
          ? "bottom-4 right-4 md:bottom-5 md:right-5"
          : "bottom-10 right-8 md:bottom-12 md:right-10"
      }`}
    >
      <div
        className={`mb-3 w-[340px] max-w-[calc(100vw-2rem)] rounded-[24px] border border-[color:rgba(255,255,255,0.14)] bg-[color:rgba(255,255,255,0.035)] p-3 shadow-[0_14px_34px_rgba(0,0,0,0.12)] backdrop-blur-[22px] backdrop-saturate-150 transition-all duration-300 dark:border-[color:rgba(255,255,255,0.10)] dark:bg-[color:rgba(18,18,18,0.045)] ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-accent">
              Spotify
            </p>
            <p className="mt-1 text-sm text-foreground-secondary">
              {expanded ? "Full playlist view" : "Now playing"}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setExpanded((current) => !current)}
              className="rounded-full border border-border px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-foreground-secondary transition-colors hover:bg-white/60 hover:text-foreground"
            >
              {expanded ? "Mini" : "Full"}
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground-secondary transition-colors hover:bg-white/60 hover:text-foreground"
              aria-label="Close Spotify player"
            >
              x
            </button>
          </div>
        </div>

        <iframe
          title="Spotify playlist"
          data-testid="embed-iframe"
          style={{ borderRadius: 12 }}
          src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`}
          width="100%"
          height={expanded ? 352 : 152}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1DB954] shadow-[0_18px_40px_rgba(29,185,84,0.35)] transition-transform hover:scale-105"
        aria-label={open ? "Hide Spotify player" : "Open Spotify player"}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M17.9 10.1a.9.9 0 0 1-1.24.3c-3.39-2.07-7.66-2.54-12.69-1.42a.9.9 0 0 1-.39-1.75c5.52-1.23 10.27-.69 14.02 1.59a.9.9 0 0 1 .3 1.28Z"
            fill="white"
          />
          <path
            d="M16.14 13.07a.75.75 0 0 1-1.03.25c-2.83-1.74-6.33-2.19-10.4-1.33a.75.75 0 0 1-.31-1.47c4.48-.95 8.38-.43 11.5 1.49a.75.75 0 0 1 .24 1.06Z"
            fill="white"
          />
          <path
            d="M14.67 15.88a.6.6 0 0 1-.82.2c-2.27-1.39-5.11-1.67-8.45-.84a.6.6 0 1 1-.29-1.17c3.65-.91 6.8-.58 9.37 1a.6.6 0 0 1 .19.81Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
