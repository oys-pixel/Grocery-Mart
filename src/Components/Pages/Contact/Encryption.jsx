import CryptoJS from "crypto-js";

const SECRET_KEY = "your-strong-secret-key";

export const encryptData = (key, data) => {
  const encrypted = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    SECRET_KEY
  ).toString();
  localStorage.setItem(key, encrypted);
};

export const decryptData = (key) => {
  try {
    const encrypted = localStorage.getItem(key);
    const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  } catch (err) {
    console.error("Decryption failed:", err);
    return null;
  }
};
