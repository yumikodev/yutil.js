/**
 * Yutil.js
 * Copyright(c) 2022 - Yasu Yumiko
 * MIT Licensed
 */

/**
 * Modules
 */
import * as crypto from "node:crypto";

/**
 * Constants
 */
const algorithm = "aes-192-cbc";
const iv = crypto.randomBytes(16);

/**
 * @param {number} length specifies the length of the string to return (if not specified, defaults to 18)
 */
function v1(length: number = 18) {
  let l = "0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += l[Math.floor(Math.random() * l.length)];
  }

  if (typeof length !== "number")
    throw new Error('the "length" parameter is not a number');
  if (length <= 0) throw new Error("value must be greater than 1");
  return id;
}

/**
 * @param {number} length specifies the length of the string to return (if not specified, defaults to 18)
 */
function v2(length: number = 18) {
  let l = "0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += l[Math.floor(Math.random() * l.length)];
  }

  if (typeof length !== "number")
    throw new Error('the "length" parameter is not a number');
  if (length <= 0) throw new Error("value must be greater than 1");
  return id;
}
export const uuid = { v1, v2 };

/**
 * @param {number} bytes the bytes to abbreviate (Bytes, KB, MB, GB, TB, PB, EB, ZB, YB)
 * @param {number} fixed the number of digits to appear after the decimal point (default 2, to remove set to 0)
 */
export function size(bytes: number, fixed: number = 2) {
  if (bytes == 0) return "0 Bytes";
  if (!bytes) throw new Error('you have not defined the "bytes" parameter');

  let k = 1024;
  let sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  let i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(fixed)) + " " + sizes[i];
}

/**
 * @param {number} portion Proportionality of the specified total.
 * @param {number} total Total of specified proportionality.
 * @param {number} fixed The number of digits to appear after the decimal point (default 2, to remove set to 0)
 */

export function percent(portion: number, total: number, fixed: number = 2) {
  if (!portion) throw new Error('you have not defined the "portion" parameter');
  if (!total) throw new Error('you have not defined the "total" parameter');
  return parseFloat(((portion / total) * 100).toFixed(fixed));
}

/**
 * @param {number} ms The time in milliseconds
 */
export function mstime(ms: number) {
  if (!ms) throw new Error('you have not defined the "ms" parameter');
  let ts = ms / 1000;

  const years = Math.floor(ts / 31557600);
  ts %= 31557600;
  const months = Math.floor(ts / 2629800);
  ts %= 2629800;
  const weeks = Math.floor(ts / 604800.02);
  ts %= 604800.02;
  const days = Math.floor(ts / 86400);
  ts %= 86400;
  const hours = Math.floor(ts / 3600);
  ts %= 3600;
  const minutes = Math.floor(ts / 60);
  const seconds = Math.floor(ts % 60);

  return { years, months, weeks, days, hours, minutes, seconds };
}

/**
 * @param {Date} date data of type Date.
 */
export function format(date: Date) {
  if (!date) throw new Error('you have not defined the "date" parameter');

  let hh = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  let mm = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  let tt = date.getHours() >= 12 ? "PM" : "AM";

  let hour = `${hh}:${mm} ${tt}`;
  let $date = date.toLocaleDateString();

  return { hour, date: $date };
}

export function encrypt(text: string, secret: string): Promise<string | null> {
  return new Promise((resolve, reject) => {
    if (!text || typeof text !== "string") return reject("invalid text string");
    if (!secret) return reject("'secret' key is required");

    crypto.scrypt(secret, "salt", 24, (err, key) => {
      if (err) return reject(err);

      const cipher = crypto.createCipheriv(algorithm, key, iv);

      let data = "";
      cipher.setEncoding("hex");

      cipher.on("data", (chunk) => (data += chunk));
      cipher.on("error", (err) => reject(err));

      cipher.write(text);
      cipher.end();

      if (!data) {
        resolve(null);
      } else {
        resolve(`${iv.toString("hex")}.${data}`);
      }
    });
  });
}

export function decrypt(
  encrypted: string,
  secret: string
): Promise<string | null> {
  return new Promise((resolve, reject) => {
    let data = encrypted && encrypted.split(".");
    if (!data || data.length !== 2) reject("invalid encrypted string");
    if (!secret) return reject("'secret' key is required");

    crypto.scrypt(secret, "salt", 24, (err, key) => {
      if (err) return reject(err);

      const decipher = crypto.createDecipheriv(
        algorithm,
        key,
        Buffer.from(data[0], "hex")
      );

      let decrypted = "";
      decipher.on("readable", () => {
        let chunk;

        while (null !== (chunk = decipher.read())) {
          decrypted += chunk.toString("utf8");
        }
      });
      decipher.on("error", (err) => reject(err));

      decipher.write(data[1], "hex");
      decipher.end();

      if (!decrypted) {
        resolve(null);
      } else {
        resolve(decrypted);
      }
    });
  });
}
