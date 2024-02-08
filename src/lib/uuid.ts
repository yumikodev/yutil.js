/**
 * @param {number} length specifies the length of the string to return (if not specified, defaults to 18)
 */
export function v1(length: number = 18) {
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
export function v2(length: number = 18) {
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