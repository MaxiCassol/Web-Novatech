import Image from "next/image";
import style from "./page.module.css";
import Button from "@/components/Button/Button";
import Link from "next/link";

export default function Services() {
  const cards = [
    {
      icon: "/services/web-dev.png",
      title: "Web & Mobile App Development",
      list: [
        "Custom Web Applications",
        "Cross-Platform Mobile Apps",
        "User-Centric Design",
      ],
    },
    {
      icon: "/services/game-dev.png",
      title: "Video Game Development with Unity",
      list: [
        "3D Game Design",
        "Immersive Experiences",
        "Cross-Platform Gaming",
      ],
    },
    {
      icon: "/services/it-migrations.png",
      title: "IT Migrations",
      list: [
        "Cloud Migration",
        "Data Migration & Management",
        "System Upgrades",
      ],
    },
  ];

  const icons = [
    {
      icon: "/services/24.png",
      title: "24/7 Support",
    },
    {
      icon: "/services/security.png",
      title: "Data Security",
    },
    {
      icon: "/services/scalable.png",
      title: "Scalable Solutions",
    },
    {
      icon: "/services/collaborative.png",
      title: "Collaborative Tools",
    },
    {
      icon: "/services/automation.webp",
      title: "Process Automation",
    },
    {
      icon: "/services/integrations.png",
      title: "System Integrations",
    },
  ];

  const freightIcons = [
    {
      icon: "/services/cloud.png",
      name: "Cloud-Based Solutions",
    },
    {
      icon: "/services/infrastructure.png",
      name: "IT Infrastructure",
    },
    {
      icon: "/services/optimization.jpg",
      name: "Process Optimization",
    },
    {
      icon: "/services/tech-support.png",
      name: "Tech Support",
    },
  ];

  return (
    <main className={style.container}>
      <header className={style.header}>
        <h1>OUR SERVICES</h1>
      </header>

      <section className={style.shipper_service}>
        <h2>TECH SERVICES</h2>
        <div className={style.text_container}>
          <div>
            <p>
              At Novatech, we specialize in delivering cutting-edge technology
              solutions to meet your business needs. From web and mobile
              applications to Unity-powered video game development, we empower
              businesses to thrive in a digital-first world.
            </p>
            <Link role="button" href="\#contact-section">
              <Button>WORK WITH US</Button>
            </Link>
          </div>
          <div>
            <p>
              We also provide seamless IT migrations and comprehensive IT
              solutions, ensuring your systems are secure, scalable, and
              optimized for performance. Partner with us to drive innovation and
              efficiency in your operations.
            </p>
            <Link
              role="button"
              href="\#contact-section">
              <Button >
              GET QUOTE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className={style.items}>
        <div className={style.items_container}>
          <div className={style.icons_container}>
            <div className={style.column}>
              {icons.slice(0, 2).map((e, index) => (
                <div className={style.icon} key={index}>
                  <img src={e.icon} alt={e.title} width={50} />
                  <span>{e.title}</span>
                </div>
              ))}
            </div>
            <div className={style.column}>
              {icons.slice(2, 4).map((e, index) => (
                <div className={style.icon} key={index}>
                  <img src={e.icon} alt={e.title} width={50} />
                  <span>{e.title}</span>
                </div>
              ))}
            </div>
            <div className={style.column}>
              {icons.slice(4, 6).map((e, index) => (
                <div className={style.icon} key={index}>
                  <img src={e.icon} alt={e.title} width={50} />
                  <span>{e.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={style.cards_container}>
            {cards.map((card, index) => (
              <div key={index}>
                <h6>
                  <img src={card.icon} alt={card.title} width={50} />
                  {card.title}
                </h6>
                <ul>
                  {card.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={style.freight}>
        <div className={style.freight_container}>
          <h3>OUR TECHNOLOGY ADVANTAGE</h3>
          <div className={style.freight_icons}>
            {freightIcons.map((freight, index) => (
              <div key={index}>
                <img src={freight.icon} alt={freight.name} width={150} />
                <h5>{freight.name}</h5>
              </div>
            ))}
          </div>
          <Link
            role="button"
            href="\#contact-section"
            className={style.quoteButtonContainer}>
            <button className={style.quoteButton}>
              TALK TO ONE OF OUR EXPERTS
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
