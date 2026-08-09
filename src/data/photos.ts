import portraitWebp from "@/assets/story/portrait.webp";
import portraitWebp2x from "@/assets/story/portrait@2x.webp";
import portraitJpg from "@/assets/story/portrait.jpg";
import portraitJpg2x from "@/assets/story/portrait@2x.jpg";

import deskWebp from "@/assets/story/desk.webp";
import deskWebp2x from "@/assets/story/desk@2x.webp";
import deskJpg from "@/assets/story/desk.jpg";
import deskJpg2x from "@/assets/story/desk@2x.jpg";

import mountainsWebp from "@/assets/story/mountains.webp";
import mountainsWebp2x from "@/assets/story/mountains@2x.webp";
import mountainsJpg from "@/assets/story/mountains.jpg";
import mountainsJpg2x from "@/assets/story/mountains@2x.jpg";

import communityWebp from "@/assets/story/community.webp";
import communityJpg from "@/assets/story/community.jpg";

export interface Photo {
  /** webp sources, [1x] or [1x, 2x] */
  webp: string[];
  /** jpeg fallbacks, same order */
  jpg: string[];
  /** intrinsic size of the 1x source, used to reserve layout space */
  width: number;
  height: number;
  alt: string;
  caption?: string;
}

export const photos = {
  portrait: {
    webp: [portraitWebp, portraitWebp2x],
    jpg: [portraitJpg, portraitJpg2x],
    width: 560,
    height: 747,
    alt: "Kirti Purohit seated at a café table beside a window, greenery outside.",
  },
  desk: {
    webp: [deskWebp, deskWebp2x],
    jpg: [deskJpg, deskJpg2x],
    width: 700,
    height: 933,
    alt: "A laptop open on a glass table in a sunlit living room, an editor full of text on the screen.",
    caption: "Most of the work happens here, not in an office.",
  },
  mountains: {
    webp: [mountainsWebp, mountainsWebp2x],
    jpg: [mountainsJpg, mountainsJpg2x],
    width: 800,
    height: 1067,
    alt: "Kirti standing on a rock beside a glacial stream in Ladakh, arms out, mountains and snow behind her.",
    caption: "Ladakh, above the tree line. No pager, no network.",
  },
  community: {
    webp: [communityWebp],
    jpg: [communityJpg],
    width: 900,
    height: 537,
    alt: "A room full of women working on laptops at a tech meetup, city skyline through floor-to-ceiling windows.",
    caption: "A room full of women building things.",
  },
} satisfies Record<string, Photo>;
