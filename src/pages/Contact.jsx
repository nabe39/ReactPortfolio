import { google, github, facebook } from "../assets/images";

export default function Contact() {
  return (
    <section className="contact">
      <span className="title">Let's work together</span>
      <div className="contact-context">
        <form className="form">
          <div className="form-group">
            <label htmlFor="" className="title-label">
              Name
            </label>
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="" className="title-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="email@gmail.com"
              required
            />
          </div>
          <button className="btn">Submit</button>
        </form>
        <div className="contact-social">
          <label htmlFor="" className="title-label">
            {" "}
            Social-contact
          </label>
          <div className="icon">
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
      </div>
    </section>
  );
}
