"use client";

import { useState } from "react";
import ComponentSelector from "./ComponentSelector";
import StandardsInput from "./StandardsInput";
import PromptInput from "./PromptInput";
import CodePreview from "./CodePreview";

export default function ComponentGenerator() {
  const [selectedComponent, setSelectedComponent] = useState("");
  const [standards, setStandards] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          component: selectedComponent,
          standards,
          prompt,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setGeneratedCode(data.code);
      } else {
        console.error("Failed to generate code");
      }
    } catch (error) {
      console.error("Error generating code:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <ComponentSelector
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
        />
        <StandardsInput standards={standards} setStandards={setStandards} />
        <PromptInput prompt={prompt} setPrompt={setPrompt} />
        <button
          onClick={handleGenerate}
          disabled={isLoading || !selectedComponent}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? "Generating..." : "Generate Component"}
        </button>
      </div>
      <CodePreview code={generatedCode} />
    </div>
  );
}
