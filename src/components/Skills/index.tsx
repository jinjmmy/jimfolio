// components/SkillsList.js

import React from "react";
import {
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaGit,
  FaDocker,
} from "react-icons/fa";
import { SiNextdotjs, SiFlutter, SiGithub, SiAmazon } from "react-icons/si";
import styles from "./Skills.module.css"; // Import the CSS module
import IconList from "../IconList";

const Skills = () => {
  const programmingLanguages = [
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: "📄" },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "SQL", icon: "📂" },
    { name: "C", icon: "👾" },
  ];

  const frameworks = [
    { name: "ReactJS", icon: <FaReact /> },
    { name: "NumPy", icon: "🧮" },
    { name: "pandas", icon: "🐼" },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "NextJS", icon: <SiNextdotjs /> },
    { name: "Node JS", icon: <FaNodeJs /> },
  ];

  const technologies = [
    { name: "Git", icon: <FaGit /> },

    { name: "GitHub", icon: <SiGithub /> },
    { name: "AWS", icon: <SiAmazon /> },
    { name: "REST API", icon: "🔄" },
    { name: "Docker", icon: <FaDocker /> },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold">skills</h2>
      <div className={styles.category}>
        <h className="text-xl font-bold">programming languages</h>
        <IconList list={programmingLanguages} />
      </div>

      <div className={styles.category}>
        <h4 className="text-xl font-bold">frameworks and libraries</h4>
        <IconList list={frameworks} />
      </div>

      <div className={styles.category}>
        <h4 className="text-xl font-bold">technologies</h4>
        <IconList list={technologies} />
      </div>
    </div>
  );
};

export default Skills;
