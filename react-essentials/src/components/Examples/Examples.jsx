import "./Examples.css";
import { useState } from "react";
import TabButton from "./TabButton/TabButton.jsx";
import { EXAMPLES } from "../../data.js";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(value) {
    setSelectedTopic(value);
  }

  function isSelected(value) {
    return value === selectedTopic;
  }

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  const items = [
    { key: "components", name: "Components" },
    { key: "jsx", name: "JSX" },
    { key: "props", name: "Props" },
    { key: "state", name: "State" },
  ];

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {items.map((item) => (
          <TabButton
            onClick={() => handleSelect(item.key)}
            isSelected={isSelected(item.key)}
          >
            {item.name}
          </TabButton>
        ))}
      </menu>
      {tabContent}
    </section>
  );
}
