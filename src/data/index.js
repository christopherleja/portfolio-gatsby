import React from "react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiGatsby,
  SiRuby,
  SiRubyonrails,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiTypescript,
  SiNodedotjs,
  SiDjango,
  SiSwift,
  SiMongodb,
  SiFirebase,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { BiEnvelope } from "react-icons/bi";

export const bio = [
  "I'm a software engineer with experience in JavaScript, Ruby, and mobile frameworks, particularly in the React family tree. I'm passionate about building apps that offer elegant, intuitive user experiences without sacrificing performance. I am solution-oriented, collaborative, and creative.",
  "My background as a writer informs my approach to programming — after all, both good programming and good writing are based around pillars of curiosity, creativity, and clarity. They’re both the pursuit of elegant solutions to abstract, complex problems. They’re both often derailed by typos.",
  "My favorite projects are creative, complex, and performant. My background has emphasized autonomy, curiosity, and malleability. I'm based in Somerville MA.",
];

export const jobs = [
  {
    year: "2020-Present",
    title: "Fullstack Software Engineer",
    company: "Future Foundry",
    body: [
      "Leveraged React Native, Next.js, Swift, Node, and Rails to architect and implement scalable, lean solutions for clients",
      "Built and optimized full stack applications, emphasizing performance, scalability, and user experience in weekly sprints",
      "Collaborated with designers, teammates, and clients to take applications from design to production",
    ],
  },
  {
    year: "2020-2021",
    title: "Cohort Coach, Software Engineering",
    company: "The Flatiron School",
    body: [
      "Taught fundamentals of programming in Ruby, Rails, SQL, JavaScript, and React/Redux",
      "Assessed student understanding with project reviews and technical assessments in Ruby and JavaScript",
      "Facilitated recurring meetings with students, individually and in groups, to assess progress and clarify confusion",
    ],
  },
  {
    year: "2019-2020",
    title: "Writer, IMPACT Conference 2019-20",
    company: "Sans Serif",
    body: [
      "Wrote and reviewed materials for Charles Schwab’s IMPACT Conference to ensure quality and clarity",
      "Created guide materials clarifying workshops and speaker biographies for thousands of conference attendees",
    ],
  },
  {
    year: "2019-2020",
    title: "Communications Consultant",
    company: "Clean Fuels Development Coalition",
    body: [
      "Collaboratively developed long-term media strategies and handled media outreach for a national ad campaign",
      "Oversaw social media campaigns that generated over 50,000 new engagements",
      "Collaborated on campaigns resulting in core messages appearing in Forbes, The Hill and the Des Moines Register",
    ],
  },
];

export const ed = [
  {
    year: "2020",
    title: "Software Engineering",
    company: "The Flatiron School",
  },
  {
    year: "2012",
    title: "English & Creative Writing",
    company: "Lewis & Clark College",
  },
];

const { sienna, blueDark, blueLight, grayLight } = {
  sienna: "#DD6E42",
  blueDark: "#4F6D7A",
  blueLight: "#C0D6DF",
  grayLight: "#EAEAEA",
};

export const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="skill-icon" size={40} />,
  },
  {
    name: "React",
    icon: <SiReact className="skill-icon" size={40} />,
  },
  {
    name: "Redux",
    icon: <SiRedux className="skill-icon" size={40} />,
  },

  {
    name: "React Native",
    icon: <SiReact className="skill-icon" size={40} />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="skill-icon" size={40} />,
  },
  {
    name: "Node/Express",
    icon: <SiNodedotjs className="skill-icon" size={40} />,
  },
  {
    name: "Gatsby",
    icon: <SiGatsby className="skill-icon" size={40} />,
  },
  {
    name: "Ruby",
    icon: <SiRuby className="skill-icon" size={40} />,
  },
  {
    name: "Ruby on Rails",
    icon: <SiRubyonrails className="skill-icon rails-icon" size={60} />,
  },
  {
    name: "HTML",
    icon: <SiHtml5 className="skill-icon" size={40} />,
  },
  {
    name: "CSS/SCSS",
    icon: <SiCss3 className="skill-icon" size={40} />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="skill-icon" size={40} />,
  },
];

export const workingKnowledge = [
  {
    name: "TypeScript",
    icon: <SiTypescript className="skill-icon" size={40} />,
  },
  {
    name: "Python/Django",
    icon: <SiDjango className="skill-icon" size={40} />,
  },
  {
    name: "Swift/SwiftUI",
    icon: <SiSwift className="skill-icon" size={40} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="skill-icon" size={40} />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="skill-icon" size={40} />,
  },
];

export const socials = [
  {
    icon: (
      <SiLinkedin
        size={30}
        title="LinkedIn"
        color={blueDark}
        className="social-icon"
      />
    ),
    link: "https://www.linkedin.com/in/christopherleja/",
  },
  {
    icon: (
      <SiGithub
        size={30}
        title="Github"
        color={blueDark}
        className="social-icon"
      />
    ),
    link: "https://github.com/christopherleja",
  },
  {
    icon: (
      <BiEnvelope
        size={30}
        title="Email"
        color={blueDark}
        className="social-icon"
      />
    ),
    link: "mailto:christopher.leja@gmail.com",
  },
];
