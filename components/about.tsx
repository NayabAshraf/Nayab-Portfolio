"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I am a <span className="font-medium"> Computer Science graduate</span> with a CGPA of{" "}
        <span className="font-medium">3.78</span>. I started my journey as an{" "}
        <span className="font-medium">AI & Machine Learning Developer</span> as well as a{" "}
        <span className="font-medium">Full Stack Developer</span>.{" "}
        <span className="italic">What excites me the most</span> is solving real-world problems
        through technology and creating applications that make an impact. My core stack is{" "}
        <span className="font-medium">Python, React.js, Next.js, and MongoDB</span>.{" "}
        I am always eager to explore and learn new technologies to grow as a developer.
        Currently, I am looking for a{" "}
        <span className="font-medium">full-time opportunity</span> where I can apply my skills
        and contribute to innovative projects.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy exploring new
        technologies, traveling, and reading books. I am also
        passionate about <span className="font-medium">learning and improving
        </ span> my knowledge in areas like data science, AI, and modern web development.
      </p>

    </motion.section>
  );
}
