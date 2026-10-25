export type RankingSignals = { value: number; trend: number; quality: number; affordability: number; reliability: number };
export const RANKING_WEIGHTS = { value:.35, trend:.25, quality:.20, affordability:.15, reliability:.05 } as const;
export function scoreProduct(signals: RankingSignals): number {
  for (const [key, value] of Object.entries(signals)) {
    if (!Number.isFinite(value) || value < 0 || value > 100) throw new RangeError(`Invalid ${key} score`);
  }
  return Math.round((Object.keys(RANKING_WEIGHTS) as (keyof RankingSignals)[]).reduce((total, key) => total + signals[key] * RANKING_WEIGHTS[key], 0) * 10) / 10;
}
