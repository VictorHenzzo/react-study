import { CORE_CONCEPTS } from "../../data.js";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConceptList({ title }) {
  return (
    <section id="core-concepts">
      <h2>{title}</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept {...concept} />
        ))}
      </ul>
    </section>
  );
}
