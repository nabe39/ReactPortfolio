import { google, github, facebook } from "../assets/images";

export default function Contact() {
  return (
    <section className="contact">
      <span className="title">Let work together</span>
      <div className="contact-context">
        <div className="context">
          <span>
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com This is a template Figma file, turned into code
            using Anima. Learn more at AnimaApp.com
          </span>
          <div className="contact-social">
            <figure>
              <img src={facebook} alt="facebook" class="img-main" />
            </figure>
            <figure>
              <img src={github} alt="github" class="img-main" />
            </figure>
            <figure>
              <img src={google} alt="google" class="img-main" />
            </figure>
          </div>
        </div>
        <form className="form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="email@gmail.com"
              required
            />
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    </section>
  );
}
