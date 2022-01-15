import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

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
