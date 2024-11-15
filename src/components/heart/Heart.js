import style from "./heart.module.css";
import Button from "../Button/Button";
import Link from "next/link";

const Heart = () => {
  return (
    <section className={style.container}>
      <div>
        <h3>WHAT IS OUR HEART</h3>
        <p>
        Novatech was founded with a vision to drive innovation and collaboration in the tech industry. Our platform meets the diverse needs of businesses, supported by a team of experts focused on long-term growth and fostering future industry leaders.
        </p>
        <Link role="button" href="#contact-section">
            <Button>START</Button>
        </Link>
      </div>
    </section>
  );
};

export default Heart;
