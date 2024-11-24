import React from "react";

export default function StandardsInput({
  standards,
  setStandards,
}: {
  standards: string;
  setStandards: (standards: string) => void;
}) {
  return (
    <div className="mb-6">
      <label
        htmlFor="standards"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Standards to follow
      </label>
      <textarea
        id="standards"
        value={standards}
        onChange={(e) => setStandards(e.target.value)}
        className="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        rows={4}
        placeholder="Enter coding standards..."
      />
    </div>
  );
}
