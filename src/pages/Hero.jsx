import { header1 } from "../assets/images";

export default function Hero() {
  return (
    <section className="hero">
      <div className="introduction">
        <div className="text-box">
          <h1>VO HONG DUC</h1>
          <h3>Developer</h3>
          <span className="text-sub">
            I have 3 years of experience working with code at university. I am
            an enthusiastic, honest, and patient person who loves to learn. I
            work with discipline and take my tasks seriously, but sometimes I’m
            afraid of making mistakes. My strength is front-end development. I
            am good at HTML and CSS, and I’m still learning JavaScript, SASS,
            ReactJS, and Git.
          </span>
          <span className="text-sub-mobile">
            I have 3 years of experience working with code at university. I am
            an enthusiastic, honest, and patient person who loves to learn.
          </span>
        </div>
        <button className="btn btn-contact">Contact</button>
      </div>
      <figure className="avatar">
        <img
          src={header1}
          alt="avatar"
          className="img-main"
        />
      </figure>
    </section>
  );
}
