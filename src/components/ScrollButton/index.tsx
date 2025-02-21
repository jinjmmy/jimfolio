"use client";
import React, { FC, ReactNode, RefObject } from "react";
import styles from "./ScrollButton.module.css";

interface ScrollButtonProps {
  scrollRef?: RefObject<HTMLDivElement | null>; // Make it optional
  children: ReactNode;
}

const ScrollButton: FC<ScrollButtonProps> = ({ scrollRef, children }) => {
  const handleClick = () => {
    if (children === "about me") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
    } else {
      scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a className={styles.button} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollButton;
