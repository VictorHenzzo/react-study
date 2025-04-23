import { CORE_CONCEPTS } from "../../data.js";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConceptList() {
  return (
    <ul>
      {CORE_CONCEPTS.map((concept) => (
        <CoreConcept {...concept} />
      ))}
    </ul>
  );
}
