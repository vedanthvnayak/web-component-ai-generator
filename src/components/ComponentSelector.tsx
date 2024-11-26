import React, { useState, useEffect } from "react";

const predefinedComponents = [
  "Button",
  "Input",
  "Card",
  "Navbar",
  "Footer",
  "Modal",
  "Dropdown",
  "Tabs",
];

const sampleCode: Record<string, string> = {
  Button: "<button className='btn'>Click Me</button>",
  Input: "<input type='text' className='input' />",
  Card: "<div className='card'>Card Content</div>",
  Navbar: "<nav className='navbar'>Navbar Content</nav>",
  Footer: "<footer className='footer'>Footer Content</footer>",
  Modal: "<div className='modal'>Modal Content</div>",
  Dropdown: "<div className='dropdown'>Dropdown Menu</div>",
  Tabs: "<div className='tabs'>Tabs Content</div>",
};

export default function ComponentSelector({
  selectedComponent,
  setSelectedComponent,
  customComponentName,
  setCustomComponentName,
  customComponentCode,
  setCustomComponentCode,
}: {
  selectedComponent: string;
  setSelectedComponent: (component: string) => void;
  customComponentName: string;
  setCustomComponentName: (name: string) => void;
  customComponentCode: string;
  setCustomComponentCode: (code: string) => void;
}) {
  const [isCustom, setIsCustom] = useState(false);

  // Effect to load the sample code when a predefined component is selected
  useEffect(() => {
    if (selectedComponent && selectedComponent !== "custom") {
      setCustomComponentCode(sampleCode[selectedComponent] || "");
    }
  }, [selectedComponent, setCustomComponentCode]);

  const handleComponentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedComponent(value);
    setIsCustom(value === "custom");
    if (value === "custom") {
      setCustomComponentCode(""); // Clear the custom code when switching to custom
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="component-select"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Select a component or create custom
        </label>
        <select
          id="component-select"
          value={isCustom ? "custom" : selectedComponent}
          onChange={handleComponentChange}
          className="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select a component</option>
          {predefinedComponents.map((component) => (
            <option key={component} value={component}>
              {component}
            </option>
          ))}
          <option value="custom">Custom Component</option>
        </select>
      </div>

      {isCustom ? (
        <div className="space-y-4">
          <div>
            <label
              htmlFor="custom-component-name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Custom Component Name
            </label>
            <input
              type="text"
              id="custom-component-name"
              value={customComponentName}
              onChange={(e) => setCustomComponentName(e.target.value)}
              className="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter component name"
            />
          </div>
          <div>
            <label
              htmlFor="custom-component-code"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Sample Code (optional)
            </label>
            <textarea
              id="custom-component-code"
              value={customComponentCode}
              onChange={(e) => setCustomComponentCode(e.target.value)}
              className="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="Enter sample code (optional)"
            />
          </div>
        </div>
      ) : (
        // When a predefined component is selected, allow editing of the sample code
        <div>
          <label
            htmlFor="sample-component-code"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Sample Code
          </label>
          <textarea
            id="sample-component-code"
            value={customComponentCode}
            onChange={(e) => setCustomComponentCode(e.target.value)}
            className="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={4}
            placeholder="Edit the sample code here"
          />
        </div>
      )}
    </div>
  );
}
