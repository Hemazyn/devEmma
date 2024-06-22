import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaXTwitter } from "react-icons/fa6";
import {
     board, drone, fitnessApp, hopmercy, restaurant, wforecast,
     fmovie, frandomword,
     bootstrap, css, dart, git, github, html, javascript, reactImage, sass, tailwind,
     next, firebase, vercel, figma, netlify, flutter
} from "../assets";


const links = [
     {
          id: 1,
          link: "home",
     },
     {
          id: 2,
          link: "about",
     },
     {
          id: 3,
          link: "portfolio",
     },
     {
          id: 4,
          link: "experience",
     },
     {
          id: 5,
          link: "contact",
     },
];

const techs = [
     {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
     }, {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
     }, {
          id: 3,
          src: bootstrap,
          title: "Bootstrap",
          style: "shadow-purple-500",
     }, {
          id: 4,
          src: sass,
          title: "Sass",
          style: "shadow-pink-500",
     }, {
          id: 5,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
     }, {
          id: 6,
          src: git,
          title: "Git",
          style: "shadow-red-500",
     }, {
          id: 7,
          src: reactImage,
          title: "REACT",
          style: "shadow-blue-600",
     }, {
          id: 8,
          src: github,
          title: "GITHUB",
          style: "shadow-gray-400",
     }, {
          id: 9,
          src: tailwind,
          title: "TAILWIND",
          style: "shadow-sky-400",
     }, {
          id: 10,
          src: dart,
          title: "Dart",
          style: "shadow-sky-400",
     }, {
          id: 11,
          src: next,
          title: "NextJs",
          style: "shadow-gray-400",
     }, {
          id: 12,
          src: firebase,
          title: "Firebase",
          style: "shadow-yellow-400",
     }, {
          id: 13,
          src: vercel,
          title: "Vercel",
          style: "shadow-gray-400",
     }, {
          id: 14,
          src: figma,
          title: "Figma",
          style: "shadow-red-400",
     }, {
          id: 15,
          src: netlify,
          title: "Netlify",
          style: "shadow-sky-400",
     }, {
          id: 16,
          src: flutter,
          title: "Flutter",
          style: "shadow-sky-400",
     }, {
          id: 17,
          src: reactImage,
          title: "React - Native",
          style: "shadow-sky-400",
     }
]

const portfolioReact = [
     {
          id: 1,
          src: board,
          link: "https://github.com/Hemazyn/todo-advanced",
          view: "https://boardtodo.netlify.app"
     }, {
          id: 2,
          src: drone,
          link: "https://github.com/Hemazyn/3d-drone",
          view: "https://devemma-drone.netlify.app"
     }, {
          id: 3,
          src: wforecast,
          link: "https://github.com/Hemazyn/weather-forecast",
          view: "https://wforecast.vercel.app"
     }, {
          id: 4,
          src: fitnessApp,
          link: "https://github.com/Hemazyn/fitness-app",
          view: "https://devemma-exercise.netlify.app"
     }, {
          id: 5,
          src: restaurant,
          link: "https://github.com/Hemazyn/restaurant",
          view: "https://devemma-restaurant.netlify.app"
     }, {
          id: 6,
          src: hopmercy,
          link: "https://github.com/Hemazyn/house_of_prophet",
          view: "https://hopmercy.netlify.app"
     },
]
const portfolioFlutter = [
     {
          id: 1,
          src: frandomword,
          link: "https://github.com/Hemazyn/RandomWordGenerator_advanced"
     }, {
          id: 2,
          src: fmovie,
          link: "https://github.com/Hemazyn/movie_app"
     }
]

const linksIcons = [
     {
          id: 1,
          child: (
               <>
                    LinkedIn <FaLinkedin size={30} />
               </>
          ),
          href: "https://www.linkedin.com/in/devEmma/",
          style: 'rounded-tr-md'
     },
     {
          id: 2,
          child: (
               <>
                    Twitter <FaXTwitter size={30} />
               </>
          ),
          href: "https://twitter.com/imanuel_tofunmi",
     },
     {
          id: 3,
          child: (
               <>
                    Github <FaGithub size={30} />
               </>
          ),
          href: "https://github.com/Hemazyn",
     }, {
          id: 4,
          child: (
               <>
                    Mail <HiOutlineMail size={30} />
               </>
          ),
          href: "mailto:hemazyn@gmail.com",
          style: 'rounded-br-md'
     }
]

export { links, techs, portfolioReact, portfolioFlutter, linksIcons, FaGithub, FaLinkedin, HiOutlineMail, BsFillPersonLinesFill };
