import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="space-y-4">
        <p className="text-gray-700">
          Welcome to our offline-first application! This page demonstrates how our service worker
          caches content for offline access.
        </p>
        <p className="text-gray-700">
          Our application uses IndexedDB for storing form data and Service Workers for caching
          static assets and pages, ensuring a seamless experience even when you're offline.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Offline form submission</li>
            <li>Page caching</li>
            <li>Real-time data updates</li>
            <li>Responsive design</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 