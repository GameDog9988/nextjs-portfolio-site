export const projectsList = [
  {
    id: 1,
    name: "Pitt CSC",
    description:
      "Redesigned and developed the website for the Pitt Computer Science Club that helps advertise its efforts to support computer science and technology-related initiatives.",
    longDescription:
      "I was appointed as a club officer for the Pitt Computer Science Club, both to support initiatives and to redesign the club website.\nBesides upgrading the technology from an outdated Jekyll site to a modern Gatsby site, I wanted the design to represent the student spirit of Pitt Computer Science Club.\nI iterated with different designs, gaining feedback from members on how the club should be advertised.\nSome new things I experimented with for this project were svg animations and SEO analysis using Google Search Console, Google Analytics, and Hotjar.",
    image: "/images/Pitt_CSC_Screenshot.png",
    figma: "/images/Pitt_CSC_Figma_Screenshot.png",
    old: "/images/Original_CSC_Site_Screenshot.png",
    link: "https://pittcsc.org/",
    project: "pitt-csc",
    GitHub: "https://github.com/pittcsc/pittcsc-website",
    tools: ["Gatsby", "Tailwind CSS", "Notion API", "Framer Motion"],
  },
  {
    id: 2,
    name: "Resu.me",
    description:
      "Steelhacks hackathon winning website that acts as a resume repository for students and employers.\nBuilt the website and app in 24 hours with three other teammates.",
    image: "/images/resu_me_Screenshot.png",
    link: "https://shielded-chamber-18134.herokuapp.com/",
    project: "resu_me",
    GitHub: "https://github.com/AlexWang18/Steelhacks",
    tools: ["React", "Express", "Sass", "Heroku"],
  },
  {
    id: 3,
    name: "Grademyaid",
    description:
      "A website that allows students to grade their college financial aid packages using data from the US Department of Education.\nThis was built for Pitt CSC Hacks, a competition sponsored by the University of Pittsburgh's Computer Science Club.",
    image: "/images/www.grademyaid.com_.png",
    longDescription:
      "This was built for Pitt CSC Hacks, a competition sponsored by the University of Pittsburgh's Computer Science Club and was my first time participating in a coding competition. Going into this experience I was quite nervous.\nI stuck to my guns and went with an idea that I had the past summer which was a website that helps students analyze their financial aid package based on information about the school, similar to how Niche.com grades colleges and universities.\nI ended up finding a partner who didn't know much about web development, but was willing to work with me in developing this idea.\nThis was my first foray into handling large amounts of data and trying to contextualize it for a user. If I were to fix one thing about the site, it would be effectively distinguishing the grades between each other so that a user's result is crystal clear.",
    figma: "/images/Grademyaid_Figma_Screenshot.png",
    link: "https://www.grademyaid.com/",
    project: "grademyaid",
    GitHub: "https://github.com/GameDog9988/grade-my-aid",
    tools: ["React", "Framer Motion", "Sass"],
  },

  {
    id: 4,
    name: "Green Pages",
    description:
      "Cooperated with another developer and two pharmacy students to create a website that tracks cannabis strain availability in the Pennsylvania area. Helped create the REST API and backend with Django Rest Framework.",
    longDescription:
      "When joining this endeavor, I knew very little about cannabis and the business surrounding it. The extent of my knowledge went as far as knowing Jim Belushi became a huge grower and that's pretty much it.\nI was brought on to work as a front-end developer and to help construct the interface for a website that tracks cannabis strain availability in the Pennsylvania area.\nI knew HTML, CSS, JavaScript, and React at this time but the project required me to learn and understand Django. To make this a nonissue, I went ahead and learned all I could about how MVCs work and how a REST API can be built with Django.\nMy goal for the site's frontend was for it to be pleasing, yet recognizable as far as its theme and function. I ended up learning a whole lot with this project including how the pharmaceutical cannabis industry works, user authentication, the transfer of data from backend to frontend, and much more.",
    image: "/images/Green_Pages_Screenshot.png",
    figma: "/images/Green_Pages_Figma_Screenshot.png",
    link: "https://green-pages-infotender.herokuapp.com/",
    project: "green-pages",
    GitHub: "https://github.com/CQS-Software/Green-Pages",
    tools: ["React", "Django", "Sass", "Redux", "Framer Motion", "Heroku"],
  },
  {
    id: 5,
    name: "The New York Times Critic's Picks",
    description:
      "A website that showcases movies that The New York Times considers critic's picks. Uses the newspaper's REST API in order to gather the data.\nThe cards can be sorted in multiple ways and each link to the corresponding review on The New York Time's website.",
    image: "/images/NYT_Critic_Picks.png",
    link: "https://nytcriticpicks.netlify.app",
    project: "nyt-movie-critics",
    GitHub: "https://github.com/GameDog9988/Movie-Review-App",
    tools: ["React", "Framer Motion", "The New York Times API"],
  },
  {
    id: 6,
    name: "Virtual Safari",
    description:
      "A recreation of Timon and Pumbaa's Virtual Safari, a choose-your-own adventure from The Lion King DVD.\nI edited the choices into individual clips using the video editor, DaVinci Resolve, and used JavaScript to develop the site interaction.",
    image: "/images/Virtual_Safari_Screenshot.png",
    link: "https://virtualsafari.netlify.app/",
    project: "virtual-safari",
    GitHub: "https://github.com/GameDog9988/Virtual-Safari",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  // {
  //   name: "Danny's Subs",
  //   description:
  //     "This ficticious restaurant website was my first foray into learning React and using the GreenSock Animation Platform.\nThe photos came from Unsplash, a site that I love using to find high quality photos.",
  //   image: "/images/Danny_Subs.png",
  //   link: "https://dannysubs.netlify.app",
  //   page: "https://github.com/GameDog9988/Restaurant-React",
  //   tools: ["React", "GSAP"],
  // },
  // {
  //   name: "Tiny Jim's Smokehouse",
  //   description:
  //     "One of my first multi-page fully responsive websites for a ficticious restaurant.\nUses the Google Maps API to show the restaurant location.",
  //   image: "/images/Tiny_Jims_Smokehouse.png",
  //   link: "https://tinyjimsbbq.netlify.app",
  //   page: "https://github.com/GameDog9988/Tiny-Jims-Smokehouse",
  //   tools: ["HTML", "CSS", "JavaScript", "Google Maps API"],
  // },
];
