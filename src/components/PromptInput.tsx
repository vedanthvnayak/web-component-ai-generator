import React from "react";

export default function PromptInput({
  prompt,
  setPrompt,
}: {
  prompt: string;
  setPrompt: (prompt: string) => void;
}) {
  return (
    <div className="mb-6">
      <label
        htmlFor="prompt"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Prompt to tweak the component
      </label>
      <textarea
        id="prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        rows={4}
        placeholder="Enter your customization prompt..."
      />
    </div>
  );
}
