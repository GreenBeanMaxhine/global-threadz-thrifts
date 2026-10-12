/** Scroll-driven visual journey for Global Threadz & Thrifts. */
import type { ScrollScrubScene, ScrollScrubTheme } from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#D66D55",
  background: "#153F38",
  ink: "#F0F3EF",
  muted: "#D0DAD5",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    body: "A downtown Fredericksburg shop for vintage clothing, vinyl, jewelry, and the unexpected things you came in hoping to find.",
    clip: "/assets/world/scene-01.mp4",
    id: "the-store",
    kicker: "Vintage, vinyl, and good finds",
    label: "The store",
    mobileClip: "/assets/world/scene-01.mp4",
    mobilePoster: "/assets/world/scene-01-mobile-poster.png",
    poster: "/assets/world/scene-01-poster.png",
    tags: ["Vintage + Y2K", "Records", "Collectibles"],
    title: "Find your kind of rare.",
    align: "left",
    scroll: 1.35,
    objectPosition: "50% 50%",
    mobileObjectPosition: "50% 50%",
  },
];
