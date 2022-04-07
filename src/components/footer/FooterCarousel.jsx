import React from "react";
import "./footerCarousel.css";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineLocationOn,
} from "react-icons/md";

import { v4 as uuidv4 } from "uuid";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

let data = [
  {
    title: "The Stateman",
    image:
      "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVX6mW.img&ehk=FLGQ5sVJZy0JjdpiySXmjEvYCYR9I5GF6JdaJQy8D9o%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
    description: "India at par with world in disaster management: Amit Shah",
  },
  {
    title: "DNA",
    image:
      "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVXkPA.img&ehk=Jf78yIfjqVhXgGL1X7NiqxhU8FtaWuSAJxkKTOLBxXc%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
    description: "NTA JEE Main 2022 sessions rescheduled to June and July - …",
  },
  {
    title: "Zee News",
    image:
      "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVXpTF.img&ehk=uqRxozxpQxllJbRv2xxMQrYrb4U2ciWpYQJHMQ92ItQ%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
    description:
      "Air India cancels Delhi-Moscow flight to Russia over insurance v…",
  },
  {
    title: "The Stateman",
    image:
      "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVX6mW.img&ehk=FLGQ5sVJZy0JjdpiySXmjEvYCYR9I5GF6JdaJQy8D9o%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
    description: "India at par with world in disaster management: Amit Shah",
  },
  {
    title: "DNA",
    image:
      "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVXkPA.img&ehk=Jf78yIfjqVhXgGL1X7NiqxhU8FtaWuSAJxkKTOLBxXc%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
    description: "NTA JEE Main 2022 sessions rescheduled to June and July - …",
  },
  {
    title: "Zee News",
    image:
      "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVXpTF.img&ehk=uqRxozxpQxllJbRv2xxMQrYrb4U2ciWpYQJHMQ92ItQ%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
    description:
      "Air India cancels Delhi-Moscow flight to Russia over insurance v…",
  },
  {
    title: "The Stateman",
    image:
      "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVX6mW.img&ehk=FLGQ5sVJZy0JjdpiySXmjEvYCYR9I5GF6JdaJQy8D9o%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
    description: "India at par with world in disaster management: Amit Shah",
  },
  {
    title: "DNA",
    image:
      "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVXkPA.img&ehk=Jf78yIfjqVhXgGL1X7NiqxhU8FtaWuSAJxkKTOLBxXc%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
    description: "NTA JEE Main 2022 sessions rescheduled to June and July - …",
  },
  {
    title: "Zee News",
    image:
      "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVXpTF.img&ehk=uqRxozxpQxllJbRv2xxMQrYrb4U2ciWpYQJHMQ92ItQ%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
    description:
      "Air India cancels Delhi-Moscow flight to Russia over insurance v…",
  },
  {
    title: "The Stateman",
    image:
      "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVX6mW.img&ehk=FLGQ5sVJZy0JjdpiySXmjEvYCYR9I5GF6JdaJQy8D9o%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
    description: "India at par with world in disaster management: Amit Shah",
  },
  {
    title: "DNA",
    image:
      "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVXkPA.img&ehk=Jf78yIfjqVhXgGL1X7NiqxhU8FtaWuSAJxkKTOLBxXc%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
    description: "NTA JEE Main 2022 sessions rescheduled to June and July - …",
  },
  {
    title: "Zee News",
    image:
      "https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVXpTF.img&ehk=uqRxozxpQxllJbRv2xxMQrYrb4U2ciWpYQJHMQ92ItQ%3d&w=150&h=150&c=8&rs=2&o=6&pid=WP0",
    description:
      "Air India cancels Delhi-Moscow flight to Russia over insurance v…",
  },
];

function FooterCarousel() {
  return (
    <div className="footer-carousel">
      <div className="div-2">
        <div className="div-1">
          {" "}
          <MdKeyboardArrowDown className="arrow__style" />{" "}
        </div>

        <div className="div__flex">
          <div className="div-3">
            {" "}
            <MdOutlineLocationOn className="arrow__style" /> 2,800 years of
            history
          </div>
          <div className="div-1">
            {" "}
            <MdKeyboardArrowLeft className="arrow__style" />{" "}
          </div>
          <div className="div-1">
            {" "}
            <MdKeyboardArrowRight className="arrow__style" />{" "}
          </div>
        </div>
      </div>

      {/* ---- */}

      <Swiper
        modules={[Navigation]}
        spaceBetween={12}
        slidesPerView={4}
        navigation
        className="footerCarousel__container"
      >
        {data.map(({ title, image, description }) => {
          return (
            <SwiperSlide key={uuidv4()} className="fd-1">
              <div className="fd-title">{title}</div>
              <div className="fd-2">
                <img src={image} alt=".." />
                {description}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default FooterCarousel;
