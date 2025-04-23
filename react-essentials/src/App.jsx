import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>{getConcepts()}</ul>
        </section>
        <Examples />
      </main>
    </>
  );
}

function getConcepts() {
  return CORE_CONCEPTS.map((concept) => <CoreConcept {...concept} />);
}

export default App;
