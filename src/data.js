import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import addressInfoIcon from "./icons/address-info.svg";
import profileInfoIcon from "./icons/profile-info.svg";
import hobbiesInfoIcon from "./icons/hobbies-info.svg";

export const links = [
  {
    id: 1,
    url: "/home",
    text: "home",
  },
  {
    id: 2,
    url: "/home#about",
    text: "about",
  },
  {
    id: 3,
    url: "/home#skills",
    text: "skills",
  },
  {
    id: 4,
    url: "/home#services",
    text: "services",
  },
  {
    id: 5,
    url: "/projects",
    text: "projects",
  },
  {
    id: 6,
    url: "/contact",
    text: "contact",
  },
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
