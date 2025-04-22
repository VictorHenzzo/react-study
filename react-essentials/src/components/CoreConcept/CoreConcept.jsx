import "./CoreConcept.css";

export default function CoreConcept({ image, title, description }) {
  return (
    <li key={title}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}
