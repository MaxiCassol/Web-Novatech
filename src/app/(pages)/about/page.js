import style from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import frameImage1 from "../../../../public/about/buy.png";
import frameImage2 from "../../../../public/about/Join.jpg";

const About = () => {
  return (
    <main className={style.container}>
      <header className={style.header}>
        <h1>ABOUT US</h1>
      </header>
      <section className={style.carrier_container}>
        <p>
          Our organization is driven by the vision of leading the market in
          software development and technology solutions, being recognized for
          our capacity for innovation and our commitment to quality. We want to
          be the first choice for companies looking for a solid, efficient and
          secure digital transformation. Our core values ​​– innovation,
          responsibility, integrity and commitment to the client – ​​guide each
          project and drive us to build relationships based on trust and mutual
          growth. We provide comprehensive services, covering mobile application
          development for iOS and Android, web development, integration of IoT
          solutions, e-commerce in Shopify and security audits. We also offer IT
          consulting to optimize the efficiency and effectiveness of our clients
          technological processes. We were born with the purpose of combining
          high-performance development with secure and effective solutions,
          seeing in this an opportunity to add value at each stage of the
          digital transformation of companies. Our founding team brings together
          solid experience in software development, computer security and
          project management. We have worked with companies in sectors such as
          finance, technology and startups, offering solutions tailored to their
          needs. To date, we have recognized certifications such as Certified
          Mobile App Developer, AWS Certified Solutions Architect and Certified
          Shopify Expert, and we are constantly seeking new recognitions that
          support our experience and dedication to the highest quality
          standards.
        </p>
        <Button>CONTACT</Button>
      </section>
      <section className={style.shipper_container}>
        <div className={style.background_container}>
          <div className={style.always_active}>
            <div>
              <h3>
                Partner with Us for Reliable and Secure Digital Transformation
              </h3>
              <p>
                Drive your business forward with a trusted partner in software
                development and technology solutions. Our expertise spans mobile
                and web applications, IoT integration, e-commerce, and security,
                tailored to ensure efficient, innovative, and secure results.
                With certifications and industry experience across finance,
                technology, and startups, we are committed to delivering the
                quality you need. Ready to transform your business? Contact us
                today and start your journey with a partner dedicated to
                excellence.
              </p>
              <Button>CONTACT</Button>
            </div>
            <div>
              <Image
                  src={frameImage1}
                  alt="choose us"
                  width={400}></Image>
            </div>
          </div>
        </div>
        <div className={style.we_drive}>
          <div>
            <h3>
              Join Our Team of Innovators in Technology and Software Development
            </h3>
            <p>
              Are you passionate about creating impactful solutions and
              advancing your expertise in a collaborative, quality-focused
              environment? We’re looking for talented professionals in software
              development, cybersecurity, and project management to join our
              team. With a culture rooted in innovation, integrity, and client
              commitment, we offer a space where your skills can grow alongside
              industry-leading certifications and real-world projects. Apply now
              and be part of a team that values trust, creativity, and
              continuous growth.
            </p>
            <Button>JOIN US</Button>
          </div>
          <div>
            <Image
                  src={frameImage2}
                  alt="choose us"
                  width={400}></Image>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
