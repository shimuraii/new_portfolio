export default class ModalContentProvider {
    constructor() {
      this.modalContents = {
        intro: {
          title: 'Introduction',
          description: 'Nice to meet you! I am Gustavo Kang Shim, a 4th year CS student at TRU.',
        },
        projects: {
          title: 'Projects',
          description: "<h2>IoT Workplace Safety and Security Monitoring using Cloud Processing </h2><br> Link: <a href='https://github.com/ZionC27/IoT-Workplace-Safety-and-Security--Monitoring-with-Cloud-Processing' target='_blank'> here </a><ul><li>Leveraged AWS services including IoT Core, Lambda, and Analytics for cloud processing and monitoring</li><li>Collaborated with team members for the development of a secure user-end website</li></ul> <h2>Dungeoneer</h2><br>link: <a href='https://darthpackman.itch.io/dungeoneer ' target='_blank'> here </a><br><ul><li>Developed proficiency in Procedural Content Generation techniques for maps, enhancing adaptability and creativity</li><li>Collaborated effectively within a team, ensuring the successful combination of diverse project elements using team working skills</li></ul>", //<h2></h2><br><ul><li></li><li></li></ul>
        },
        contactMe: {
          title: 'Contact Me',
          description: "<h2> GitHub link: <a href='https://github.com/shimuraii' target='_blank'> Link </a><h2> LinkedIn link: <a href='https://www.linkedin.com/in/gkangshim/' target='_blank'> Link </a><h2> Resume link: <a href='https://gustavokangshim.com/resume/web_resume_gkangshim.pdf' target='_blank'> Link </a>"
        },
        aboutMe: {
          title: 'About me',
          description: 'I am from Brazil, but my family is Korean.<br> I love soccer just like every other Brazillian out there! <br>I grew up in Brazil until I was 16, then finished my Highschool in Canada, then started university at Thompson Rivers University',
        },
        interests: {
          title: 'Interests',
          description: '<ul><li>Volleyball</li> <li>Japanese culture</li> <li>ThreeJS</li> <li>Web Development</li><li>cyber security</li> <li>computers</li> <li>videogames</li> <li>technology</li>',
        },
      }
    }
  
    getModalInfo(portalName) {
      return this.modalContents[portalName];
    }
  }
  