import { logo, icMobile } from "../assets/images";

export default function Header() {
  return (
    <header>
      <figure>
        <a href="#">
          <img src={logo} alt="logo" className="img-main" />
        </a>
      </figure>

      <include src="./components/navbar.html"></include>

      <figure className="link-direct-mobile">
        <img src={icMobile} alt="ic_plus_mobile" className="img-main" />
      </figure>
    </header>
  );
}
