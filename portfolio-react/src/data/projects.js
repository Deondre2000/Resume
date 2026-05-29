import coffeePic from "../assets/coffee-pic.png";
import spotsPic from "../assets/spots-pic.png";
import todoAppPic from "../assets/Todo-app.png";
import newsPic from "../assets/news.png";

export const projects = [
  {
    id: 1,
    title: "Coffee Shop Project",
    description:
      "A responsive website for a local coffee shop featuring a menu, about section, and online ordering capabilities.",
    imageUrl: coffeePic,
    link: "https://deondre2000.github.io/se_project_coffeeshop/",
    tags: ["CSS3", "Responsive Design"],
    status: "completed",
    githubLink: "https://github.com/Deondre2000/se_project_coffeeshop",
  },
  {
    id: 2,
    title: "Spots Project",
    description:
      "An interactive web application for discovering and sharing interesting locations and spots in your area.",
    imageUrl: spotsPic,
    link: "https://deondre2000.github.io/se_project_spots/",
    tags: ["JavaScript", "API Integration", "Maps"],
    status: "completed",
    githubLink: "https://github.com/Deondre2000/se_project_spots",
  },
  {
    id: 3,
    title: "Todo App",
    description:
      "A task management app for creating, organizing, and tracking daily to-dos with a clean, mobile-friendly interface.",
    imageUrl: todoAppPic,
    link: "https://deondre2000.github.io/My-Todo-List/",
    tags: ["React", "JavaScript", "Responsive Design"],
    status: "in-progress",
    githubLink: "https://github.com/Deondre2000/My-Todo-List",
  },
  {
    id: 4,
    title: "Final Project",
    description:
      "A polished news-focused web experience showcasing the final build with responsive layout and interactive sections.",
    imageUrl: newsPic,
    link: "https://deondre2000.github.io/finale-project/",
    tags: ["React", "Responsive Design", "JavaScript", "API Integration"],
    status: "completed",
    githubLink: "https://github.com/Deondre2000/finale-project/tree/stage-1",
  },
];
