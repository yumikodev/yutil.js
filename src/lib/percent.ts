/**
 * @param portion - Proportionality of the specified total.
 * @param total - Total of specified proportionality.
 * @param fixed - The number of digits to appear after the decimal point (default 2, to remove set to 0)
 */
export function percent(portion: number, total: number, fixed: number = 2) {
  if (!portion) throw new Error('you have not defined the "portion" parameter');
  if (!total) throw new Error('you have not defined the "total" parameter');
  return parseFloat(((portion / total) * 100).toFixed(fixed));
}
