import React from "react";

const About = React.lazy(() => import("./pages/about/About"));
const Projects = React.lazy(() => import("./pages/projects/Projects"));
const Skills = React.lazy(() => import("./pages/skills/Skills"));

const links = [
  {
    to: "/about",
    title: "Обо мне",
    exact: true,
    component: () => <About />
  },
  {
    to: "/projects",
    title: "Проекты",
    exact: true,
    component: () => <Projects />
  },
  {
    to: "/skills",
    title: "Навыки",
    exact: true,
    component: () => <Skills />
  }
];

export default links;
