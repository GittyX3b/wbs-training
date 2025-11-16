// Functions related to localStorage operations
import { STORAGE } from "./variables.js";

export const setStorage = () => {
  localStorage.setItem(
    STORAGE.key,
    JSON.stringify([...new Set(STORAGE.cartArray)])
  );
};

export const getStorage = () => {
  STORAGE.cartArray = localStorage.getItem(STORAGE.key)
    ? JSON.parse(localStorage.getItem(STORAGE.key)).map((id) => Number(id))
    : [];
};
