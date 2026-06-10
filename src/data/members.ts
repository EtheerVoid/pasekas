// ───────────────────────────────────────────────────────────────────
//  EDIT EVERYTHING HERE. This is the only file you need to touch for content.
// ───────────────────────────────────────────────────────────────────

export const SITE = {
  // ↓↓↓ your group name. shows huge in the hero. ↓↓↓
  name: "greatest.local",
  // deadpan one-liner under the title
  tagline: "self-proclaimed greatest engineers, programmers, and weebs of all time. allegedly.",
  // shows in the browser tab
  meta: "a fastfetch of the finest people alive (according to them)",
};

export type Member = {
  handle: string;        // username@host  → the fetch header
  host: string;
  accent: AccentKey;     // which catppuccin color this person glows
  sigil: string;         // ASCII logo, left side of the fetch card
  specs: [string, string][]; // [label, value] — the actual jokes go here
  quote?: string;        // optional inside-joke line, shown in the wall
};

// accent keys map to catppuccin palette (works in both Latte + Mocha)
export type AccentKey = "mauve" | "blue" | "pink" | "peach" | "green" | "red";

export const MEMBERS: Member[] = [
  {
    handle: "kiwikoktail",
    host: "arch",
    accent: "peach",
    sigil: String.raw`
   .---.
  /  o  \    [⚙]
  |__~__|   ===
   |||||   gacha`,
    specs: [
      ["Title", "Best Mechanical Engineer 2028 (self-proclaimed)"],
      ["Builds", "microcontrollers, from sand basically"],
      ["Steam", "∞ games · owns all of them"],
      ["Gacha", "pulling… whale detected 🐋"],
      ["Uptime", "soldering since boot"],
    ],
    quote: "it's not gambling if you're the best engineer of 2028",
  },
  {
    handle: "bigsamuel",
    host: "void",
    accent: "blue",
    sigil: String.raw`
   /\        { }
  /  \      < / >
 / /\ \     pixels
/_/  \_\   from scratch`,
    specs: [
      ["Title", "Greatest Programmer Who Ever Lived"],
      ["Graphics", "written from scratch, no engine"],
      ["Hates", "Microsoft Access (forced, at work, daily)"],
      ["IDE", "spite + raw willpower"],
      ["Status", "still mad about Access"],
    ],
    quote: "i could write this in assembly faster than Access opens",
  },
  {
    handle: "vata",
    host: "nixos",
    accent: "mauve",
    sigil: String.raw`
  _____      [home]
 /     \    >--o--<
 | [+] |    automate
 |_____|     all things`,
    specs: [
      ["Title", "Best Smart-Home Engineer Alive"],
      ["Anime", "seen basically everything. yes, that one too"],
      ["Games", "automation / factory-builder fundamentalist"],
      ["Home", "fully automated · lights obey on sight"],
      ["Vibe", "avid enjoyer of all things"],
    ],
    quote: "why press a switch when a script can press it for you",
  },
  {
    handle: "viglory",
    host: "gentoo",
    accent: "green",
    sigil: String.raw`
   \   /     ___
    \ /     |WIN|
   --o--    BAR #1
    / \     run.exe`,
    specs: [
      ["Title", "Greatest Beyond All Reason Player Ever"],
      ["Record", "undefeated (citation: himself)"],
      ["Discipline", "diligent · hard-working · terrifying"],
      ["IRL", "actually fast, runs real distances"],
      ["Anime", "watches between victories"],
    ],
    quote: "skill issue — and i mean that with love",
  },
  {
    handle: "etheer",
    host: "arch",
    accent: "red",
    sigil: String.raw`
  $ _         ___
  >|||       |TUX|
  homelab    rack
  ~/.config  whirr`,
    specs: [
      ["Title", "Greatest Linux Admin Who Ever Lived"],
      ["Shell", "does literally everything in the terminal"],
      ["Distros", "has run all of them. all of them."],
      ["Homelab", "online · open-source maximalist"],
      ["BAR", "humbling, deeply humbling"],
    ],
    quote: "i can fix your whole network but BAR fixes me",
  },
];
