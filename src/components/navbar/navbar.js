import Link from "next/link";
import style from "./navbar.module.css";
import Image from "next/image";
import frameImage2 from "../../../public/navbar/NovaTech logo.png";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.topNavbar}>
        <div className={style.centeredItems}>
          <div className={style.logoContainer}>
            <Link href="./" className={style.novatech}>
              <div>
                <Image
                  src={frameImage2}
                  alt="novatech logo"
                  width={300}></Image>
              </div>
            </Link>
          </div>
          <div className={style.rightTopNavbar}>
            <div className={style.centeredItems}>
              <div className={style.sections}>
                <a href="/about" className={style.sectionsOption} id="about">
                  About Us
                </a>
                <div id="menu" className={style.menu}>
                  <ul className={style.menup}>
                    <li className={style.dropdown}>
                      <a href="/services" className={style.dropdownMain}>
                        Services{" "}
                      </a>
                      <ul>
                        <li>
                          <span></span>
                          <a href="/services">-Web & Mobile Apps Development</a>
                        </li>
                        <li>
                          <span></span>
                          <a href="/services">-Video Game Development with Unity</a>
                        </li>
                        <li>
                          <span></span>
                          <a href="/services">-IT Migrations</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className={style.nothidden}>
                </div>
                <a className={style.sectionsOption} href="#blog-section">
                  Blog
                </a>
                <Link role="button" href="#contact-section">
                  <button className={style.quoteButton}>Contact</button>
                </Link>
                {/* <Link role="button" href="/login">
                  <button className={style.loginButton}>Login</button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
