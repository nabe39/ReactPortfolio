import { useState } from "react";

export default function Navbar({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <nav>
      <ul>
        {items.map((label, index) => {
          const isActive = index === activeIndex;
          return (
            <li
              key={label}
              className={isActive ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              <a href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
