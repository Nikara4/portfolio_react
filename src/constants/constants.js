import { v4 as uuidv4 } from 'uuid';

export const projects = [
  {
    title: 'IT Memes Website',
    description: "MERN website using Node.js, Next.js with Typescript, Express & MongoDB created to gather the best memes about IT world in one place. You can upload, create and vote on the funniest memes.",
      image: '/images/1.png',
      tags: ['MongoDB', 'Express', 'Node', 'Next.js', 'TypeScript'],
    source: '/',
    visit: '/',
    id: uuidv4(),
  },
  {
    title: 'MERN Memories',
    description: "Full Stack MERN Application created using React, Node.js, Express & MongoDB. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
      image: '/images/1.png',
      tags: ['Mongo', 'Express', 'React', 'Node'],
    source: 'https://github.com/Nikara4/Memories_App_FullStack_MERN',
    visit: 'https://mern-prj-memories.netlify.app/',
    id: uuidv4(),
  },
  {
    title: 'Rock, paper, scissors, lizard, Spock',
    description: `Advanced "rock, paper, scissors" game with two more elements: lizard and Spock, which are known from "The Big Bang Theory". This project mostly focuses on JS functions, probability and implementation of choice.`,
      image: '/images/icon_rock-paper-scis.png',
      tags: ['JavaScript', 'HTML', 'CSS'],
      source: 'https://github.com/Nikara4/rock_paper_scissors_lizard_spock',
      visit: 'https://nikara4.github.io/rock_paper_scissors_lizard_spock/',
    id: uuidv4(),
  },
  {
    title: 'Finances Balance',
    description: "This app is a part of the React School 4 month course completed in 2021. The current consists of four sections: financial balance, finance form, incomes and expenses. It is a simple react-hook-form which helps you to calculate your own budget.",
    image: '/images/finance.png',
    tags: ['React'],
    source: 'https://github.com/Nikara4/financial_balance_MERN/tree/main/',
    visit: 'https://finances-balance.netlify.app/',
    id: uuidv4(),
  },
];

export const TimeLineData = [
  { year: 2020, text: 'Started my journey', id: uuidv4(), },
  { year: 'half 2021', text: 'Completed HTML, CSS & JavaScript courses', id: uuidv4(), },
  { year: 2021, text: 'Created my first portfolio', id: uuidv4(), },
  { year: 'end 2021', text: 'Completed School of React course', id: uuidv4(), },
  { year: 2022, text: 'Started working with ReCodeIT', id: uuidv4(), },
];

export const courses = [
  {
    title: 'Node and Express with MongoDB',
    scope: ['Node.js', 'Express', 'MongoDB'],
    date: '02/2022',
    platform: 'freeCodeCamp.org & John Smilga',
    course: 'https://www.johnsmilga.com/',
    id: uuidv4(),
  },
  {
    title: 'React Basic & Advanced',
    scope: ['React', 'Next.js'],
    date: '12/2021',
    link: '/images/Szkola_Reacta_Aleksandra_Szczur.pdf',
    platform: 'Szkoła Reacta',
    course: 'https://szkolareacta.pl/',
    id: uuidv4(),
  },
  {
    title: 'JavaScript programming',
    scope: ['JavaScript'],
    date: '09/2021',
    link: '/images/JS_programming.png',
    platform: 'Udemy',
    course: 'https://www.udemy.com/course/kurs-programowanie-w-javascript/',
    id: uuidv4(),
  },
  {
    title: 'Advanced Front-end in 15 days',
    scope: ['Adv. CSS', 'Animations', 'jQuery'],
    date: '06/2021',
    link: '/images/advanced_css.png',
    platform: 'Udemy',
    course: 'https://www.udemy.com/course/front-end-zaawansowany/',
    id: uuidv4(),
  },
  {
    title: 'Web developer from basics in 15 days',
    scope: ['HTML', 'CSS'],
    date: '04/2021',
    link: '/images/webdev_basics.jpg',
    platform: 'Udemy',
    course: 'https://www.udemy.com/course/kurs-web-developer-od-podstaw-w-15-dni/',
    id: uuidv4(),
  },
  {
    title: 'Introduction to Git and GitHub',
    scope: ['Git', 'Github'],
    date: '12/2020',
    platform: 'Udemy',
    course: 'https://www.udemy.com/course/kurs-git-i-github-od-podstaw/',
    id: uuidv4(),
  },
];