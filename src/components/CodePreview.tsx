"use client";

import React, { useEffect, useState } from "react";

export default function CodePreview({ code }: { code: string }) {
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

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

  const handleCopyClick = () => {
    if (code) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000); // Reset the "copied" state after 2 seconds
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
          setError("Failed to copy the code.");
        });
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">
          Generated Component
        </h2>
        <button
          onClick={handleCopyClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {isCopied ? "Copied!" : "Copy Code"}
        </button>
      </div>
      <div className="p-4">
        {error ? (
          <div className="text-red-500 font-medium">{error}</div>
        ) : (
          <div className="mb-4">
            <h3 className="text-md font-medium text-gray-700 mb-2">Code:</h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm text-black">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
