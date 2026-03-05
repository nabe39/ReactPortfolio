export default function Card({ imgSrc, title, description }) {
  return (
    <article className={"skills-card card ${className}".trim()}>
      {imgSrc ? (
        <figure>
          <img src={imgSrc} alt={title} className="card_icon" />
        </figure>
      ) : null}
      <div className="text-wrapper">
        <h3 className="card_title">{title}</h3>
        <span className="card_desc">{description}</span>
      </div>
      <button class="btn">Detail</button>
    </article>
  );
}
