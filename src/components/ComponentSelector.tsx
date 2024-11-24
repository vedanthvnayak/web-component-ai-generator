import { table } from "console";
import React from "react";

const components = [
  "Button",
  "Input",
  "Card",
  "Modal",
  "Dropdown",
  "Tabs",
  "table",
];

export default function ComponentSelector({
  selectedComponent,
  setSelectedComponent,
}: {
  selectedComponent: string;
  setSelectedComponent: (component: string) => void;
}) {
  return (
    <div className="mb-6">
      <label
        htmlFor="component-select"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Select a component
      </label>
      <select
        id="component-select"
        value={selectedComponent}
        onChange={(e) => setSelectedComponent(e.target.value)}
        className="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Select a component</option>
        {components.map((component) => (
          <option key={component} value={component}>
            {component}
          </option>
        ))}
      </select>
    </div>
  );
}
