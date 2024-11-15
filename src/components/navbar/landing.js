import style from "./landing.module.css";
import Link from "next/link";

export default function Landing() {
  return (
    <div className={style.landing}>
      <video
        autoPlay
        muted
        loop
        id="background-video"
        src="landing/video3.mp4"
        type="video/mp4"
        alt="Tu navegador no soporta el elemento de video"
        className={style.video}></video>
      <div className={style.centeredItems}>
        <div className={style.container}>
          <h1>United to take technology to another level</h1>
          <div className={style.containerSpan}>
            <h4>
              Offering the most advanced tech team, available for any company
              and budget, Novatech is always your best option.
            </h4>
            <h4>
              Our aim is to provide top-tier service through our AI platform and
              new tools, giving customers all they need, maximizing efficiency,
              transparency, and offering customized solutions globally.
            </h4>
          </div>
          <div className={style.buttons}>
            <Link href="#contact-section">
              <button className={style.blackButton}>CONTACT</button>
            </Link>
            <Link href="#contact-section">
              <button className={style.greyButton}>BE PART</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
