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
  {
    id: 5,
    url: "https://twitter.com/Polcsi12",
    icon: <FaTwitter />,
    text: "@Polcsi12",
  },
  {
    id: 6,
    url: "https://codepen.io/polcsi",
    icon: <FaCodepen />,
    text: "@polcsi",
  },
  {
    id: 7,
    url: "",
    icon: <BsFillTelephoneFill />,
    text: "+36/30 783 8220",
  },
  {
    id: 8,
    url: "",
    icon: <HiOutlineMail />,
    text: "pollakbence12@gmail.com",
  },
];
export const info = [
  {
    id: 1,
    icon: profileInfoIcon,
    title: "profile",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea",
  },
  {
    id: 2,
    icon: addressInfoIcon,
    title: "address",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea",
  },
  {
    id: 3,
    icon: hobbiesInfoIcon,
    title: "hobbies & interests",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea",
  },
];
export const skillsInfo = [
  {
    id: 1,
    title: "html5 & css",
    progress: "80",
  },
  {
    id: 2,
    title: "javascript",
    progress: "95",
  },
  {
    id: 3,
    title: "react",
    progress: "60",
  },
  {
    id: 4,
    title: "python",
    progress: "40",
  },
  {
    id: 5,
    title: "php",
    progress: "30",
  },
  {
    id: 6,
    title: "adobe xd",
    progress: "90",
  },
];
export const services = [
  {
    id: 1,
    title: "UI/UX Design",
    icon: penIcon,
    projects: 110,
  },
  {
    id: 2,
    title: "web development",
    icon: codeIcon,
    projects: 221,
  },
  {
    id: 3,
    title: "branding",
    icon: loudSpeakerIcon,
    projects: 40,
  },
  {
    id: 4,
    title: "logo design",
    icon: peopleIcon,
    projects: 331,
  },
];
export const achievements = [
  {
    id: 1,
    title: "years of experience",
    count: 9,
  },
  {
    id: 2,
    title: "satisfied customers",
    count: 200,
  },
  {
    id: 3,
    title: "design items",
    count: 734,
  },
  {
    id: 4,
    title: "client served",
    count: 124,
  },
];
export const plans = [
  {
    id: 1,
    name: "simple static site",
    price: "99",
    info: [
      "HTML / CSS",
      "desktop and mobile support",
      "no animations",
      "custom domain",
      "single page application",
    ],
  },
  {
    id: 2,
    name: "static site",
    price: "120",
    info: [
      "HTML / CSS",
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
    price: "160",
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
