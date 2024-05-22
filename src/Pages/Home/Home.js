import React from "react";
import "./Home.css";
import fbImg from "../../Assests/Facebook_icon.svg.png";
import instrgrm from "../../Assests/instrgram.avif";
import twitr from "../../Assests/twiter.jpg";
import linktin from "../../Assests/linkedin.webp";
import tiktok from "../../Assests/tiktok.jpg";

const socialMediaLinks = [
  { url: "https://www.facebook.com", image: fbImg, alt: "Facebook" },
  { url: "https://twitter.com", image: twitr, alt: "Twitter" },
  { url: "https://www.instagram.com", image: instrgrm, alt: "Instagram" },
  { url: "https://www.tiktok.com/", image: tiktok, alt: "TikTok" },
  { url: "https://www.linkedin.com/", image: linktin, alt: "LinkedIn" },
];

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Welcome to the Social Media Dashboard...</h1>
        <p>Access Your favorite platform from here 🥰</p>
      </div>
      <div className="linkContainer">
        {socialMediaLinks.map((socialMedia, index) => (
          <a
            key={index}
            href={socialMedia.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="link">
              <img src={socialMedia.image} alt={socialMedia.alt} />
            </div>
          </a>
        ))}
      </div>
      <p>
        In this site you can go to Facebook Instergram Twitter LinkedIn
        TikTok..also You Can Search And Watch YouTube Videos......
      </p>
    </div>
  );
};

export default Home;
