import React from "react";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";

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
