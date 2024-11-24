"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

export default function CodePreview({ code }: { code: string }) {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (code) {
      try {
        setError(null);
      } catch (err) {
        console.error("Error processing code:", err);
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      }
    } else {
      setError("No code provided");
    }
  }, [code]);

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">
          Generated Component
        </h2>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <h3 className="text-md font-medium text-gray-700 mb-2">Code:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm text-black">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
