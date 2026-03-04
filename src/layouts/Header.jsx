import { logo, icMobile } from "../assets/images";
import Navbar from "../components/Navbar";

export default function Header() {
  return (
    <header>
      <figure>
        <a href="#">
          <img src={logo} alt="logo" className="img-main" />
        </a>
      </figure>

      <Navbar items={["About me" , "Skills", "Projects", "Contact Me"]}/>

      <figure className="link-direct-mobile">
        <img src={icMobile} alt="ic_plus_mobile" className="img-main" />
      </figure>
    </header>
  );
}
