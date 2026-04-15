// js/utils/idGenerator.js

export function generateUniqueId(existingResults = []) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const existingIds = new Set(
    existingResults.map((item) => item.id).filter(Boolean)
  );

  let newId = "";

  do {
    newId = "";
    for (let i = 0; i < 6; i++) {
      newId += chars[Math.floor(Math.random() * chars.length)];
    }
  } while (existingIds.has(newId));

  return newId;
}