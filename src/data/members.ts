// ───────────────────────────────────────────────────────────────────
//  EDIT EVERYTHING HERE. This is the only file you touch for content.
//  Swap the `sigil` ASCII freely — paste any monospace art between the
//  String.raw`  ...  ` backticks and it just works.
// ───────────────────────────────────────────────────────────────────

export const SITE = {
  name: "pasekas.clearings.net",
  tagline: "self-proclaimed greatest engineers, programmers, and weebs alive. allegedly.",
  meta: "a fastfetch of the finest people alive (according to them)",
};

export type AccentKey = "mauve" | "blue" | "pink" | "peach" | "green" | "red";

export type Member = {
  rank: string;          // "01" … shown as a badge number
  handle: string;        // username
  host: string;          // @host  → their distro
  title: string;         // the prestige line, shown big
  accent: AccentKey;     // which catppuccin color this person glows
  sigil: string;         // ASCII art — the centerpiece of the card
  specs: [string, string][]; // [label, value] — the stats / jokes
  quote: string;         // signature line, printed at the bottom
};

export const MEMBERS: Member[] = [
  {
    rank: "01",
    handle: "kiwikoktail",
    host: "cachyos",
    title: "Best Mechanical Engineer 2028",
    accent: "peach",
    sigil: String.raw`
      '  .  *  .  '
       \_________/
        \ o     /
         \ ~~~ /
          \___/
           | |
        ___| |___
       '---------'`,
    specs: [
      ["builds", "microcontrollers, from raw sand"],
      ["steam", "∞ games · owns all of them"],
      ["gacha", "pulling… whale detected"],
      ["bench", "looks like mission control"],
      ["soldering", "since boot · never desolders"],
      ["self-rated", "engineer of the year (2028)"],
    ],
    quote: "it's not gambling if you're the best engineer of 2028",
  },
  {
    rank: "02",
    handle: "bigsamuel",
    host: "cachyos",
    title: "Greatest Programmer Who Ever Lived",
    accent: "blue",
    sigil: String.raw`
     .-=========-.
     | M·ACCESS  |
     |   .---.   |
     |  ( o  )==<|
     |   '---' k |
     '-=========-'
       > send help <`,
    specs: [
      ["graphics", "written from scratch · no engine"],
      ["languages", "all of them, fluently"],
      ["nemesis", "Microsoft Access (daily, at work)"],
      ["access", "still open · still mad"],
      ["ide", "spite + raw willpower"],
      ["status", "could rewrite this in asm faster"],
    ],
    quote: "i could write this in assembly faster than Access opens",
  },
  {
    rank: "03",
    handle: "vata",
    host: "cachyos",
    title: "Best Smart-Home Engineer Alive",
    accent: "mauve",
    sigil: String.raw`
       ^         ^
        .-~~~~~-.
      .' .     . '.
     /   (o) (o)   \
    (       v       )
     \    \___/    /
      '.~~~~~~~.'
      / Frieren \
       '-------'`,
    specs: [
      ["anime", "seen everything · yes, that one too"],
      ["games", "automation / factory fundamentalist"],
      ["home", "fully automated · lights obey on sight"],
      ["sensors", "more than the ISS"],
      ["latency", "thought → action, instant"],
      ["taste", "Frieren-approved"],
    ],
    quote: "why press a switch when a script can press it for you",
  },
  {
    rank: "04",
    handle: "viglory",
    host: "cachyos",
    title: "Greatest Beyond All Reason Player Ever",
    accent: "green",
    sigil: String.raw`
        _________
       /         \
      /  BEYOND   \
     <  ALL   RSN  >
      \    #1     /
       \_________/
        undefeated.`,
    specs: [
      ["record", "undefeated (citation: himself)"],
      ["apm", "inhuman"],
      ["discipline", "diligent · hard-working · terrifying"],
      ["irl", "actually fast · runs real distances"],
      ["micro", "frame-perfect"],
      ["mercy", "none"],
    ],
    quote: "skill issue — and i mean that with love",
  },
  {
    rank: "05",
    handle: "etheer",
    host: "nixos",
    title: "Greatest Linux Admin Who Ever Lived",
    accent: "red",
    sigil: String.raw`
       .-~~~~~-.
      / /     \ \
     | | _   _ | |
     | |(o) (o)| |
      \|   .   |/
       \  '-'  /
        '-----'
     present day,
     present time.`,
    specs: [
      ["shell", "does literally everything in terminal"],
      ["distros", "has run all of them · all of them"],
      ["config", "declarative · nixos · reproducible"],
      ["homelab", "online 24/7 · open-source maximalist"],
      ["uptime", "longer than most relationships"],
      ["bar", "humbling · deeply humbling"],
    ],
    quote: "i can fix your whole network but BAR fixes me",
  },
];
