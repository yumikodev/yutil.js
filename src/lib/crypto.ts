/**
 * Modules
 */
import * as crypto from "node:crypto";

/**
 * Constants
 */
const algorithm = "aes-192-cbc";
const iv = crypto.randomBytes(16);

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
