import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaCodepen,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import addressInfoIcon from "./icons/address-info.svg";
import profileInfoIcon from "./icons/profile-info.svg";
import hobbiesInfoIcon from "./icons/hobbies-info.svg";
import penIcon from "./icons/design.svg";
import codeIcon from "./icons/code.svg";
import loudSpeakerIcon from "./icons/loud_speaker.svg";
import peopleIcon from "./icons/People.svg";

export const dataRotate = [
  "web developer",
  "UX & UI Designer",
  "frontend developer",
  "backend developer",
  "IT engineer",
  "full stack developer",
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com/profile.php?id=100008194816126",
    icon: <FaFacebook />,
    text: "Bence Pollák",
  },
  {
    id: 2,
    url: "https://www.instagram.com/polcsi01/",
    icon: <FaInstagram />,
    text: "@polcsi01",
  },
  {
    id: 3,
    url: "https://github.com/Polcsi",
    icon: <FaGithub />,
    text: "@Polcsi",
  },
  {
    id: 4,
    url: "https://www.tiktok.com/@polcsi.code?lang=en&is_copy_url=1&is_from_webapp=v1",
    icon: <FaTiktok />,
    text: "@polcsi.code",
  },
];
export const allContactsOportunity = [
  {
    id: 1,
    url: "https://www.facebook.com/profile.php?id=100008194816126",
    icon: <FaFacebook />,
    platform: "FaceBook",
    text: "Bence Pollák",
  },
  {
    id: 2,
    url: "https://www.instagram.com/polcsi01/",
    icon: <FaInstagram />,
    platform: "Instagram",
    text: "@polcsi01",
  },
  {
    id: 3,
    url: "https://github.com/Polcsi",
    icon: <FaGithub />,
    platform: "GitHub",
    text: "@Polcsi",
  },
  {
    id: 4,
    url: "https://www.tiktok.com/@polcsi.code?lang=en&is_copy_url=1&is_from_webapp=v1",
    icon: <FaTiktok />,
    platform: "TikTok",
    text: "@polcsi.code",
  },
  {
    id: 5,
    url: "https://twitter.com/Polcsi12",
    icon: <FaTwitter />,
    platform: "Twitter",
    text: "@Polcsi12",
  },
  {
    id: 6,
    url: "https://codepen.io/polcsi",
    icon: <FaCodepen />,
    platform: "Codepen",
    text: "@polcsi",
  },
  {
    id: 7,
    url: "+36/30 783 8220",
    icon: <BsFillTelephoneFill />,
    platform: "Mobile",
    text: "+36/30 783 8220",
  },
  {
    id: 8,
    url: "pollakbence12@gmail.com",
    icon: <HiOutlineMail />,
    platform: "Email",
    text: "pollakbence12@gmail.com",
  },
];
export const info = [
  {
    id: 1,
    icon: profileInfoIcon,
    title: "profile",
    text: "I do not know what should I write here but I guess I need to describe myself. I will draw up shorthly. I love learning new things which helps to me in the future. I am an overthinker person, I don't afraid of talking people. I do and push my tasks until I don't complete it.",
  },
  {
    id: 2,
    icon: addressInfoIcon,
    title: "address",
    text: "I am from Hungary and I live in Hidas. It is a village far from Budapest. This village is located southest part of Hungary. I grew up in this village. I attended grammer school the neighbor town it's called Bonyhád. And now I attend to University of Dunaújváros.",
  },
  {
    id: 3,
    icon: hobbiesInfoIcon,
    title: "hobbies & interests",
    text: "First of all creating web applications, automating some easy task on my computer which save time for me. I love to excerising, I almost run everyday. It keeps me and my mind healthy. Lastly I play on guitar I think learning music is the best thing to learn.",
  },
];
export const skillsInfo = [
  {
    id: 1,
    title: "html5 & css",
    progress: "90",
  },
  {
    id: 2,
    title: "javascript",
    progress: "95",
  },
  {
    id: 3,
    title: "react",
    progress: "70",
  },
  {
    id: 4,
    title: "python",
    progress: "30",
  },
  {
    id: 5,
    title: "php",
    progress: "50",
  },
  {
    id: 6,
    title: "adobe xd",
    progress: "90",
  },
  {
    id: 7,
    title: "node js",
    progress: "40",
  },
  {
    id: 8,
    title: "mysql",
    progress: "60",
  },
];
export const services = [
  {
    id: 1,
    title: "UI/UX Design",
    icon: penIcon,
    projects: 11,
  },
  {
    id: 2,
    title: "web development",
    icon: codeIcon,
    projects: 154,
  },
  {
    id: 3,
    title: "branding",
    icon: loudSpeakerIcon,
    projects: 0,
  },
  {
    id: 4,
    title: "logo design",
    icon: peopleIcon,
    projects: 3,
  },
];
export const achievements = [
  {
    id: 1,
    title: "years of experience",
    count: 1,
  },
  {
    id: 2,
    title: "satisfied customers",
    count: 0,
  },
  {
    id: 3,
    title: "design items",
    count: 30,
  },
  {
    id: 4,
    title: "client served",
    count: 0,
  },
];
export const plans = [
  {
    id: 1,
    name: "simple static site",
    price: "99",
    info: [
      "HTML / CSS",
      "desktop & mobile support",
      "no animations",
      "custom domain",
      "single page application",
    ],
  },
  {
    id: 2,
    name: "static site",
    price: "180",
    info: [
      "React",
      "full responsive",
      "simple animations",
      "custom domain",
      "multi page application",
      "custom logo design",
      "UI & UX design",
    ],
  },
  {
    id: 3,
    name: "full functional static site",
    price: "250",
    info: [
      "react",
      "full responsive",
      "any animations",
      "custom domain",
      "multi page application",
      "custom logo design",
      "UI & UX design",
      "serverless functions",
      "life service",
    ],
  },
];
