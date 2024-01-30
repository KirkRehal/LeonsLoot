const BADGE_LIST = [
  "OATHKEEPER",
  "DOUBLE DOWN",
  "NARC",
  "WHISPERS",
  "CHIHUAHUA",
  "PUPPETEER",
  "DECEIVER",
  "RECOLLECTOR",
  "GOBLET",
  "GUARDIAN",
  "SCHEMER",
  "FOUNDER",
  "HEIST",
  "DESTROYER",
  "NIGHT OWL",
  "INCOGNITO",
  "2023 Winner"
] as const;

type InternalBadgeType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer BadgeType> ? BadgeType : never;
export type BadgeType = InternalBadgeType<typeof BADGE_LIST>;
