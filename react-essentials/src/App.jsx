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
        <CoreConceptList title="Core Concepts" />
        <Examples />
      </main>
    </>
  );
}

export default App;
