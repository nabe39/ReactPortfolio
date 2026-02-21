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
            <include
              src="./components/list-icon.html"
              locals='{"list":[
            {"icon":"facebook-icon.svg"},
            {"icon":"google-icon.svg"},
            {"icon":"githup-icon.svg"}
            ]}'
            ></include>
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
