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

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          onClick={() => handleSelect("components")}
          isSelected={isSelected("components")}
        >
          Components
        </TabButton>
        <TabButton
          onClick={() => handleSelect("jsx")}
          isSelected={isSelected("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          onClick={() => handleSelect("props")}
          isSelected={isSelected("props")}
        >
          Props
        </TabButton>
        <TabButton
          onClick={() => handleSelect("state")}
          isSelected={isSelected("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
