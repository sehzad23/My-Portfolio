import Quizify from "../assets/images/quizify.png"
import Cab from "../assets/images/cab.png"
import Food from "../assets/images/food.png"
const projects = [
  {
    title: "Quizify.io",
    desc: "Production-level internship project at Arham Web Works — a fast, scalable quiz platform with analytics, user roles, and responsive UI.",
    stack: ["Vue.js", "SCSS"],
    image: Quizify,
    live: "https://quizify.io/"
  },
  {
    title: "Cab Booking System",
    desc: "Inspired by Ola and Rapido — live tracking UI, fare estimates, and role-based dashboards for riders and drivers.",
    stack: ["React.js", "Node.js", "MongoDB", "Maps API"],
    image: Cab,
    live: "https://public-transportation.vercel.app"
  },
  {
    title: "Recipe Web App",
    desc: "Clean CRUD app to create, edit, and share recipes with images, categories, and search — built with React.",
    stack: ["React.js", "Tailwind",],
    image: Food,
    live: "https://cookrecipe.netlify.app/"
  },
];

export default projects;