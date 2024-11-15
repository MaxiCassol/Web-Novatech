import style from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import WaveBanner from '../WaveBanner/WaveBanner';
import frameImage1 from "../../../public/footer/NovaTech logo.png";
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';


const Footer = () => {
  const socialNetworks = [
    {
      icon: "/footer/linkedin.png",
      url: "https://www.linkedin.com/company/Novatech",
    },
    {
      // icon: "/footer/insta.png",
      url: "https://www.instagram.com/nova_tech80/profilecard/?igsh=NGJqdGRxOXh3NWs1",
    },
    {
      icon: "/footer/facebook.png",
      url: "https://www.facebook.com/share/1RJ2jBiYsM/?mibextid=LQQJ4d",
    },
  ];

  const links = [
    { name: "About Us", pathname: "/about" },
    { name: "Services", pathname: "/services" },
  ];

  return (
    <footer className={style.container}>
      <WaveBanner />
      
      <div className={style.background}>
        <div className={style.footer}>
          <div className={style.flex}>
            
            <div className={style.logo}>
              {" "}
              <Image src={frameImage1} alt="novatech logo" width={300}></Image>
              <p className={style.text}>
                Leverage agile frameworks to provide a robust synopsis for
                strategy collaborative thinking to further the overall value
                proposition.
              </p>
              <div className={style.email}>
                <img src="/footer/email-icon.png" />
                <p>
                  Email <br />
                  contacto@novatech.com{" "}
                </p>
              </div>
            </div>
            <div className={style.grid}>
              <div>
                <h6>Pages</h6>
                <svg
                  width="111"
                  height="6"
                  viewBox="0 0 111 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <line
                    x1="0.980152"
                    y1="3.61777"
                    x2="110.975"
                    y2="2.52613"
                    stroke="white"
                    strokeWidth="4"
                  />
                </svg>
                <ul className={style.page_list}>
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.pathname}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h6>Follow Us</h6>
                <svg
                  width="153"
                  height="5"
                  viewBox="0 0 153 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <line
                    y1="2.526"
                    x2="152.067"
                    y2="2.526"
                    stroke="white"
                    strokeWidth="4"
                  />
                </svg>

                <div className={style.social}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <a href="https://www.instagram.com/nova_tech80/profilecard/?igsh=NGJqdGRxOXh3NWs1" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.linkedin.com/company/Novatech" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.facebook.com/share/1RJ2jBiYsM/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.copyright}>
        <p>Copyright © 2024 Novatech</p>
      </div>
    </footer>
  );
};

export default Footer;
