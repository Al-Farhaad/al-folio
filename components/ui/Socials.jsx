"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.youtube.com/",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/altamash-farhaad/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/Al-Farhaad",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com/altamash_farhaad/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
