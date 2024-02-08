/**
 * @param date - Data of type Date.
 */
export function format(date: Date) {
  if (!date) throw new Error('you have not defined the "date" parameter');
  const dateHours: number = date.getHours();
  const dateMin: number = date.getMinutes();

  const hh = dateHours > 12 ? dateHours - 12 : dateHours;
  const mm = dateMin < 10 ? `0${dateMin}` : dateMin;
  const tt = dateHours >= 12 ? "PM" : "AM";

  const hour = `${hh}:${mm} ${tt}`;
  const d = date.toLocaleDateString();

  return { hour, date: d };
}
