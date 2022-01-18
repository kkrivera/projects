interface CoursePageData {
  pathName: string;
  name: string;
  instructor: string;
  certPath: string;
  blurb: string;
  skillsLearned: string[];
  projectHighligts: Project[];
  githubLink: string;
}

interface Project {
  name: string;
  link: string;
}

const coursePageData: CoursePageData[] = [
  {
    pathName: 'HTML-CSS-JS-cert',
    name: 'HTML, CSS, and JavaScript - Certification Class for Beginners',
    instructor: 'YouAccel Training',
    certPath: '/beginner.png',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
    skillsLearned: [
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
    ],
    projectHighligts: [
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
    ],
    githubLink: 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/beginner-html-css-js',
  },
  {
    pathName: 'complete-frontend',
    name: 'The Complete Front-End Web Development Course!',
    instructor: 'Joseph Delgadillo',
    certPath: '/complete.png',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
    skillsLearned: [
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
    ],
    projectHighligts: [
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
    ],
    githubLink: 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/complete-front-end',
  },
  {
    pathName: 'JS-bootcamp',
    name: 'JavaScript Beginner Bootcamp',
    instructor: 'Rob Merrill',
    certPath: '/jsBootcamp.png',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
    skillsLearned: [
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
    ],
    projectHighligts: [
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
    ],
    githubLink: 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/javascript-beginner-bootcamp',
  },
  {
    pathName: 'build-20-websites',
    name: 'The Complete Web Developer Course: Build 20 Websites',
    instructor: 'John Bura',
    certPath: '/build20.png',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
    skillsLearned: [
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
    ],
    projectHighligts: [
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
    ],
    githubLink: 'https://github.com/srivera12/learn-to-code/tree/master/stackskills/make-20-websites',
  },
  {
    pathName: 'TS',
    name: "TypeScript: The Complete Developer's Guide",
    instructor: 'Stephen Grider',
    certPath: '/typescript.jpeg',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
    skillsLearned: [
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
    ],
    projectHighligts: [
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
    ],
    githubLink: 'https://github.com/srivera12/learn-to-code/tree/master/udemy/typescript',
  },
  {
    pathName: 'react-bootcamp',
    name: 'The Modern React Bootcamp',
    instructor: 'Colt Steele',
    certPath: '/reactBootcamp.png',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend. Tincidunt dui ut ornare lectus. Consectetur adipiscing elit ut aliquam purus. Bibendum est ultricies integer quis auctor elit sed vulputate.',
    skillsLearned: [
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
      'Nunc consequat interdum varius sit.',
    ],
    projectHighligts: [
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
      {
        name: 'Nunc consequat interdum varius sit.',
        link: 'https://www.google.com/',
      },
    ],
    githubLink: 'https://github.com/srivera12/learn-to-code/tree/master/udemy/modern-react-bootcamp',
  },
];

export default coursePageData;
