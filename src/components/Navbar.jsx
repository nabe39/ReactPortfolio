export default function Navbar({ items = [] }) {
  return (
    <nav>
      <ul>
        {items.map((label) => (
          <li key={label}>
            <a href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}