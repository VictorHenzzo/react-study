import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import CoreConceptList from "./components/CoreConcept/CoreConceptList.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <CoreConceptList />
        </section>
        <Examples />
      </main>
    </>
  );
}

export default App;
