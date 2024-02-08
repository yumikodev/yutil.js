export interface SizeOptions {
  fixed?: number;
  gib?: boolean;
}

/**
 * @param bytes - The bytes to abbreviate
 * @param [options] - Optional options
 * @param [options.fixed=2] - The number of digits to appear after the decimal point (default 2, to remove set to 0)
 * @param [options.gib=true] - Use the binary conversion.
 * @returns A human-readable representation of the abbreviated bytes.
 */
export function size(bytes: number, options?: SizeOptions) {
  if (!bytes) throw new Error('you have not defined the "bytes" parameter');
  if (bytes == 0) return "0 Bytes";
  if (!options) options = {};
  if (options.fixed === undefined) options.fixed = 2;
  if (options.gib === undefined) options.gib = true;

  let k = 1024;
  let sizes = ["Bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];

  if (!options.gib) {
    k = 1000;
    sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  }

  const i = ~~(Math.log(bytes) / Math.log(k));
  const size = bytes / k ** i;

  return parseFloat(size.toFixed(options.fixed)) + " " + sizes[i];
}
