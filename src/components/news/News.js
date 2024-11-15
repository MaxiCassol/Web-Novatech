import Card from "./Card";
import Button from "../Button/Button";
import Link from "next/link";
import style from "./new.module.css";
import React from "react";

const News = () => {
  const news = [
    {
      title: "Exploring the Advantages of 5G for the Mobile App Development Industry",
      description:
        "5G technology is transforming mobile app development, enhancing speeds, reducing latency, and supporting features like AR and high-definition streaming. This technology shift also facilitates more responsive, real-time user interactions",
      list: [
        "Unprecedented Speed",
        "Reduced Latency",
        "Enhanced AR/VR Capabilities",
        "Increased User Engagement"
      ],
      image: "/news/5g.jpg",
      date: new Date("2024-03-01"),
    },
    {
      title: "Game Patching Tech from EA Minimizes Disk Requirements and Patch Sizes",
      description:
        "EA’s new in-place updates technology reduces game patch sizes and storage requirements, helping developers manage updates efficiently and improve the user experience for gamers across platforms like Unity​",
      list: [
        "Reduced Disk Space Requirements",
        "Smaller Patch Sizes",
        "Enhanced User Experience"
      ],
      image: "/news/game.jpeg",
      date: new Date("2024-05-01"),
    },
    {
      title: "Embracing Edge Computing for Enhanced App Performance in IT Migrations",
      description:
        "Edge computing integration in IT migrations allows data processing closer to the end user, which reduces latency and improves performance, making it ideal for cloud services and application scalability.",
      list: [
        
      ],
      image: "/news/migration.jpg",
      date: new Date("2024-04-07"),
    },
    {
      title: "Bottom-Up Design: Enhancing Website Accessibility and Inclusivity",
      description:
        "A user-centric, bottom-up approach to web design improves accessibility, reaching broader audiences by embedding inclusivity features directly into the structure and interface of websites​.",
      list: [
      ],
      image: "/news/ai.jpg",
      date: new Date("2024-02-01"),
    },
  ];

  const sortedNews = news.sort((a, b) => b.date - a.date);
  const lastestNews = sortedNews.slice(0, 3);

  return (
    <section id="blog-section" className={style.container}>
      <div>
        <span>Blog</span>
      </div>

      <h3>LATEST NEWS</h3>
      <svg
        width="943"
        height="1"
        viewBox="0 0 943 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <line y1="0.500061" x2="943" y2="0.500061" stroke="#D6D6D6" />
      </svg>
      {lastestNews.map((data, index) => (
        <React.Fragment key={index}>
          <Card data={data} />
          <svg
            width="943"
            height="1"
            viewBox="0 0 943 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line y1="0.500061" x2="943" y2="0.500061" stroke="#D6D6D6" />
          </svg>
        </React.Fragment>
      ))}
      <Link role="button" href="https://novatech/quote">
        <Button>MORE NEWS</Button>
      </Link>
    </section>
  );
};

export default News;
