import Link from "next/link";
import Image from "next/image";
import image1 from "../../../public/our-services/image1.jpg";
import image2 from "../../../public/our-services/image2.png";
import image3 from "../../../public/our-services/image3.jpg";
import image4 from "../../../public/our-services/image4.jpg";
import style from "./services.module.css";
import Button from "../Button/Button";

const Services = () => {
  return (
    <section className={style.container}>
      <div className={style.service}>
        <div>
          <span>What We Do</span>
          <h3>Web and Mobile App Development</h3>
          <p>
          The company specializes in building custom web and mobile applications for iOS and Android. They focus on delivering user-friendly, high-performance solutions tailored to meet the specific needs of businesses, ensuring seamless experiences across devices and platforms.
          </p>
          <Link role="button" href="/services">
            <Button>LEARN MORE</Button>
          </Link>
        </div>
        <div>
          <Image
            src={image1}
            width={400}
            height={400}
            style={{ borderRadius: "20px" }}
            alt="novatech logo"></Image>
        </div>
      </div>

      <div className={style.drive}>
        <div>
          <span>What We Do</span>
          <h3>Video Game Development with Unity</h3>
          <p>
          With expertise in Unity, the company develops engaging and interactive video games. They offer full-cycle game development, from concept to launch, creating high-quality games for various platforms, including mobile, desktop, and VR, while ensuring immersive user experiences.
          </p>
          <Link role="button" href="/services">
            <Button>LEARN MORE</Button>
          </Link>
        </div>
        <div>
          <Image
            src={image2}
            width={400}
            height={400}
            style={{ borderRadius: "20px" }}
            alt="novatech logo"></Image>
        </div>
      </div>

      <div className={style.service}>
        <div>
          <span>What We Do</span>
          <h3>IT Migrations</h3>
          <p>
          The company provides IT migration services, helping businesses seamlessly transition from legacy systems to modern platforms. This includes data migration, system upgrades, cloud transitions, and ensuring minimal disruption during the process, with a focus on enhancing security, performance, and scalability.
          </p>
          <Link role="button" href="/services">
            <Button>LEARN MORE</Button>
          </Link>
        </div>
        <div>
          <Image
            src={image3}
            width={400}
            height={400}
            style={{ borderRadius: "20px" }}
            alt="novatech logo"></Image>
        </div>
      </div>

      <div className={style.drive}>
        <div>
          <span>What We Do</span>
          <h3>General IT Solutions</h3>
          <p>
          Offering a broad range of IT services, the company provides tailored IT solutions to optimize business processes. This includes IT consulting, infrastructure management, cybersecurity, system integrations, and custom software development, all aimed at improving efficiency, security, and innovation for clients.
          </p>
          <Link role="button" href="/services">
            <Button>LEARN MORE</Button>
          </Link>
        </div>
        <div>
          <Image
            src={image4}
            width={400}
            height={400}
            style={{ borderRadius: "20px" }}
            alt="novatech logo"></Image>
        </div>
      </div>
    </section>
  );
};

export default Services;
