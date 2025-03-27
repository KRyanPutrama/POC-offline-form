import Dexie from "dexie";

export const db = new Dexie("SimpleFormDB");

db.version(1).stores({
  formData: "++id, name, email, message", // Define schema
});
