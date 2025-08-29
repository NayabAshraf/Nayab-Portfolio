import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import FakeNewDetectionImg from "@/public/FakeNewsDetection.png";
// import SmartSummarizerImg from "@/public/SmartSummarizer.png";
import SmartSummarizerImg from "/public/SmartSummarizer.png";
// import AIContentDetectorImg from "@/public/AIContentDetector.png";
import AIContentDetectorImg from "/public/AIContentDetector.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "National University of Modern Languages",
    location: "Rawalpindi, Pakistan",
    description: "Relevant coursework: Algorithms, Data Structures, Machine Learning, Artificial Intelligence",
    date: "2021 - 2025",
    gradeScored: "3.78/4.00 CGPA",
  },
  {
    degree: "Data Analytics",
    institution: "Leverify Quest",
    location: "Rawalpindi, Pakistan",
    description: "Data Visualization, Interpretation, PowerBI",
    date: "2024",
  },
  {
    degree: "Python Basics - Coursera",
    institution: "University of Michigan",
    location: "USA",
    description: "Python Programming, Variables, Loops, Functions",
    date: "2023",
  },

] as const;


export const experiencesData = [

  {
    title: "AI Machine Learning Developer",
    location: "Ash Tech's",
    description:
      "Worked on developing and implementing AI/ML models, while also collaborating with the team to integrate the solutions into real-world applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2025",
  },


  {
    title: "Machine Learning Intern",
    location: "Inotech Solutions",
    description:
      "Developed and implemented a machine learning model, built a user-friendly frontend with React.js for model interaction, and collaborated with a team to integrate the solution into a real-world application.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },

] as const;

export const projectsData = [
  {
    title: "Fake News Detector",
    description:
      "Built a Fake News Detection system using ML models and NLP techniques, with a user-friendly React.js frontend, FastAPI, and MongoDB for real-time verification.",
    tags: ["React", "Next.js", "MongoDB", "Python", "FastAPI"],
    imageUrl: FakeNewDetectionImg,
  },
  {
    title: "Large Document Summarizer",
    description:
      "Developed a Large Document Summarizer using BART-large-CNN with PDF and DOCX support for efficient summarization of lengthy documents.",
    tags: ["React", "Python", "AI"],
    imageUrl: SmartSummarizerImg,
  },
  {
    title: "AI Content Detector",
    description:
      "Developed an AI Content Detector using GPT-2 and NLP techniques with perplexity, burstiness, and frequency analysis to identify AI-generated text.",
    tags: ["Python", "NLP", "AI"],
    imageUrl: AIContentDetectorImg,
  },
] as const;

export const skillsData = [
  "Python",
  "AI",
  "ML",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
] as const;
