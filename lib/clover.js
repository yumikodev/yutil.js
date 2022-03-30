/**
 * Clover.js
 * Copyright(c) 2022 - Yasu Yumiko
 * MIT Licensed
 */

/**
 * @param {number} value Specifies the number of maximum digits to generate (by default 18)
 */
function Id1(value) {
  if (!value) {
    value = 18;
  } else if (value < 1) {
    throw new TypeError("value must be greater than 1");
  }

  let l = "0123456789";
  let q = "";
  for (let i = 0; i < value; i++) {
    q += l[Math.floor(Math.random() * 10)];
  }
  return q;
}

/**
 * @param {number} value Specifies the number of maximum digits to generate (by default 18)
 */
function Id2(value) {
  if (!value) {
    value = 18;
  } else if (value < 1) {
    throw new TypeError("value must be greater than 1");
  }

  let l = "0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz";
  let q = "";
  for (let i = 0; i < value; i++) {
    q += l[Math.floor(Math.random() * 60)];
  }
  return q;
}

/**
 * @param {string} bytes Bytes to convert (Bytes, KB, MB, GB, TB, PB, EB, ZB, YB)
 * @param {number} fixed The number of decimal places when converting the bytes (by default 2)
 */
function Size(bytes, fixed) {
  if (bytes == 0) return "0 Bytes";
  if (!bytes) throw new Error("you have to set a bytes");
  if (!fixed) fixed = 2;

  let k = 1024;
  let sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  let i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(fixed)) + " " + sizes[i];
}

/**
 * Percent converter
 * @param {number} portion Proportionality of the specified total.
 * @param {number} total Total of specified proportionality.
 * @param {number} fixed The number of decimal places when converting the bytes (by default 2)
 */

function Percent(portion, total, fixed) {
  if (!fixed) fixed = 2;
  if (!portion) throw new Error("you have to set a portion");
  if (!total) throw new Error("you have to set a total");
  if (portion < 1) throw new Error("portion must be greater than 1");
  if (total <= portion)
    throw new Error("the total must not be less than or equal to the portion");

  return ((portion / total) * 100).toFixed(fixed) + "%";
}

/**
 * @param {Date} date Date formats to convert (AM or PM).
 */

function format1(date) { 
  if (!date) throw new Error("you have to set a date");

  let ampm = date.getHours() > 12 ? "PM" : "AM";
  let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  let minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

    return `${hours}:${minutes} ${ampm}`;
}

/**
 * @param {Date} date Date formats to convert (Day / Month / Year).
 */

function format2(date) { 
  if (!date) throw new Error("you have to set a date");

  return `${date.toLocaleDateString()}`;
}

/**
 * Choose the version of the Id function you want to use (v1 or v2)
 */
const Id = {
  v1: Id1,
  v2: Id2,
};

/**
 * Choose the version of the Format function you want to use (v1 or v2)
 */
const Format = {
  v1: format1,
  v2: format2,
};

/**
 * Exports
 */
exports.Id = Id;
exports.Size = Size;
exports.Percent = Percent;
exports.Format = Format;
