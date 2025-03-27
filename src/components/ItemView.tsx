"use client";

import { db } from "@/utils/db";
import { useLiveQuery } from "dexie-react-hooks";

export default function ItemView() {
  // Fetch all items from the "formData" table
  const items = useLiveQuery(() => db.table("formData").toArray(), []);

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shado">
      <h1 className="text-2xl font-bold mb-4">Stored Data</h1>
      {items?.length ? (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={item.id || index}
              className="p-3 border rounded shadow-sm flex gap-4"
            >
              <div>
                <p>
                  <strong>Name:</strong> {item.name}
                </p>
                <p>
                  <strong>Email:</strong> {item.email}
                </p>
                <p>
                  <strong>Message:</strong> {item.message}
                </p>
              </div>
              <button
                className="bg-red-500 p-2 py-2 items-center rounded-lg text-white"
                onClick={() => db.table("formData").delete(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No data found in the database.</p>
      )}
    </div>
  );
}
