import Quizify from "../assets/images/quizify.png"
import Cab from "../assets/images/cab.png"
import Food from "../assets/images/food.png"
import NexHolidays from "../assets/images/NexHolidays.png"
import AI_caption from "../assets/images/AI-caption.png"
import AI_chatbot from "../assets/images/chatbot.png"
const projects = [
  {
    title: "Quizify.io",
    desc: "Production-level internship project at Arham Web Works — a fast, scalable quiz platform with analytics, user roles, and responsive UI.",
    stack: ["Vue.js", "SCSS","Framer","PHP", "MySQL"],
    image: Quizify,
    live: "https://quizify.io/"
  },
  {
    title: "Cab Booking System",
    desc: "Inspired by Ola and Rapido — live tracking UI, fare estimates, and role-based dashboards for riders and drivers.",
    stack: ["React.js", "Node.js", "MongoDB", "Maps API","Socket.io"],
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
   {
    title: "Nex Holidays Tours & Travels(For Client)",
    desc: "A professional tours & travel business website developed for my client, Nex Holidays, featuring holiday packages, travel booking services, and a modern responsive user experience.",
    stack: ["React.js", "Tailwind",],
    image: NexHolidays,
    live: "https://visa-nex.vercel.app/"
  },
  {
    title: "AI Captionor – Smart AI Caption Generator",
    desc: "AI-powered app that generates creative social media captions instantly using AI.",
    stack: ["React.js", "Tailwind","Node.js", "Express","MongoDB", "Google AI"],
    image: AI_caption,
    live: "https://ai-rady-caption.vercel.app/"
  },
   {
    title: "AI ChatBot – Real-Time Conversational Assistant",
    desc: "Real-time AI chatbot built with React, Node.js, Express, and Socket.io featuring secure API handling and modern responsive UI.",
    stack: ["React.js", "Tailwind","Node.js", "Express","MongoDB", "Google AI", "Socket.io"],
    image: AI_chatbot,
    live: "https://your-chat-bot.vercel.app/"
  },
];

export default projects;