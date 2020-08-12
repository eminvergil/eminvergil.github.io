module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://eminvergil.github.io/`,
    name: `Emin Vergil`,
    role: `Software Developer`,
    email: `eminvergil@yahoo.com`,
    socialMedia: [
      { name: "linkedin", link: "https://linkedin.com/eminvergil" },
      { name: "github", link: "https://github.com/eminvergil" },
      { name: "twitter", link: "https://twitter.com/eminvergil" },
      { name: "stackoverflow", link: "https://stackoverflow.com/eminvergil" },
    ],
    about: `
      <p>
      Hi there 👋 This is Emin Vergil
      I'm a passionate software developer living in Adana, Turkey. I am currenty working on my game, side projects. I love being part of development of web technologies. I build things on my GitHub profile (<a href="https://github.com/eminvergil">here</a>). I love React and .Net Core.
      </p>

      <p> 
      <ul>
      <li>🔭 I’m currently working on: platformer game (name will be announced soon)
      </li>
      <li>🌱 I’m currently learning: React , Gatsby , Contentful , Firebase ...
      </li>
      <li>📫 How to reach me: eminvergil@yahoo.com
      </li>
      </ul>
      </p>
      
      <hr />
      <p>See the PDF version of my resume <a href="https://eminvergil.github.io/resume">here</a>.</p>
      `,
    education: [
      {
        degree: "B.Sc.",
        major: "Computer Engineering",
        when: "2017-2022",
        school: "Cukurova University",
        where: "Balcali, Adana",
        moreInfo: `<p></p>`,
      },
      {
        degree: "High School Diploma",
        when: "2012-2016",
        school: "FEAL High School",
        where: "Seyhan/Adana",
      },
    ],
    experience: [
      {
        role: "Web Developer",
        when: "2020-2020",
        company: "Remote Intern Company",
        where: "Adana",
        moreInfo: `See my <a href="#" target="_blank" rel="noopener noreferrer">work</a>.`,
      },
    ],
    skills: [
      {
        name: "JavaScript",
        level: "85",
        experience: "3 years",
      },
      {
        name: "Python",
        level: "25",
        experience: "1 years",
      },
      {
        name: ".Net Core",
        level: "45",
        experience: "2 years",
      },
      {
        name: "Java",
        level: "25",
        experience: "1 years",
      },
      {
        name: "React",
        level: "75",
        experience: "2 years",
      },
      {
        name: "Linux",
        level: "55",
        experience: "2 years",
      },
      {
        name: "C++",
        level: "40",
        experience: "2 years",
      },
    ],
    interests: [
      "Reading",
      "Programming",
      "Making Games",
      "Working Out",
      "Finance",
    ],
    projects: [
      {
        name: "Tetris",
        about: "it is a game",
        when: "2020",
        url: "#",
      },
    ],
    //available_themes: ["great-gatsby", "master-yoda", "wonder-woman", "darth-vader", "luke-lightsaber"],
    theme: "luke-lightsaber",
    //fonts. Available: [default, programmer]
    font: "default",
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111111111-1",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Mono`,
          },
        ],
      },
    },
  ],
}
