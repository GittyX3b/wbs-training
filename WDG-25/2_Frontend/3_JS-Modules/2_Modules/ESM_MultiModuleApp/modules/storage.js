// Functions related to localStorage operations
import { STORAGE } from "./variables.js";

export const setStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data).trim());
  console.log("setStorage() ok");
};

export const getStorage = (key, data) => {
  STORAGE.data = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : { data: {} };
  console.log("getStorage() ok", STORAGE);
};
