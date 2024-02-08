/**
 * @param ms - The time in milliseconds
 */
export function mstime(ms: number) {
  if (!ms) throw new Error('you have not defined the "ms" parameter');
  let ts = ms / 1000;
  const hs = 60 * 60;

  const years = ~~(ts / (hs * 24 * 30 * 12));
  ts %= hs * 24 * 30 * 12;
  const months = ~~(ts / (hs * 24 * 30));
  ts %= hs * 24 * 30;
  const weeks = ~~(ts / (hs * 24 * 7));
  ts %= hs * 24 * 7;
  const days = ~~(ts / (hs * 24));
  ts %= hs * 24;
  const hours = ~~(ts / hs);
  ts %= hs;
  const minutes = ~~(ts / 60);
  const seconds = ~~(ts % 60);

  return { years, months, weeks, days, hours, minutes, seconds };
}
