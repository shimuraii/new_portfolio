export default class ModalContentProvider {
    constructor() {
      this.modalContents = {
        intro: {
          title: 'Introduction',
          description: 'Nice to meet you! I am Gustavo Kang Shim, a 4th year CS student at TRU.',
        },
        projects: {
          title: 'Projects',
          description: `
            <div class="projects-grid">
              <article class="project-card">
                <div class="project-body">
                  <h3>IoT Workplace Safety & Security (Cloud)</h3>
                  <p>Cloud-based monitoring platform using AWS (IoT Core, Lambda, Analytics) with a secure user web UI.</p>
                  <div class="project-meta">
                    <span class="project-tag">AWS</span>
                    <span class="project-tag">IoT</span>
                    <span class="project-tag">Serverless</span>
                  </div>
                  <div class="project-actions">
                    <a href="https://github.com/ZionC27/IoT-Workplace-Safety-and-Security--Monitoring-with-Cloud-Processing" target="_blank" rel="noreferrer noopener">View</a>
                  </div>
                </div>
              </article>
              <article class="project-card">
                <div class="project-body">
                  <h3>Dungeoneer</h3>
                  <p>Team-built dungeon crawler featuring procedural map generation and cohesive multi-discipline collaboration.</p>
                  <div class="project-meta">
                    <span class="project-tag">Game Dev</span>
                    <span class="project-tag">PCG</span>
                    <span class="project-tag">Teamwork</span>
                  </div>
                  <div class="project-actions">
                    <a href="https://darthpackman.itch.io/dungeoneer" target="_blank" rel="noreferrer noopener">View</a>
                  </div>
                </div>
              </article>
              <article class="project-card">
                <div class="project-body">
                  <h3>Computer Science Club’s Website</h3>
                  <p>Developed and implemented market-level features for the Computer Science Club’s website improving user engagement</p>
                  <div class="project-meta">
                    <span class="project-tag">TailwindCSS</span>
                    <span class="project-tag">Web Dev</span>
                    <span class="project-tag">NodeJS</span>
                  </div>
                  <div class="project-actions">
                    <a href="https://trucsclub.github.io/" target="_blank" rel="noreferrer noopener">View</a>
                  </div>
                </div>
              </article>
            </div>
          `,
        },
        contactMe: {
          title: 'Contact Me',
          description: `
            <div class="contact-grid">
              <a class="contact-card" href="https://github.com/shimuraii" target="_blank" rel="noreferrer noopener" aria-label="Open GitHub profile">
                <span class="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.55v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.53-1.35-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.35.96.1-.76.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.28 1.2-3.08-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.57.23 2.73.11 3.02.75.8 1.2 1.82 1.2 3.08 0 4.44-2.69 5.41-5.25 5.7.41.35.77 1.04.77 2.11v3.13c0 .31.21.67.8.55A11.5 11.5 0 0 0 12 .5Z"/></svg>
                </span>
                <span class="contact-text">
                  <span class="contact-label">GitHub</span>
                  <span class="contact-value">@shimuraii</span>
                </span>
              </a>
              <a class="contact-card" href="https://www.linkedin.com/in/gkangshim/" target="_blank" rel="noreferrer noopener" aria-label="Open LinkedIn profile">
                <span class="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.83v2.11h.05c.53-1 1.83-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V24h-4v-6.76c0-1.61-.03-3.68-2.24-3.68-2.24 0-2.58 1.75-2.58 3.56V24h-4V8.5z"/></svg>
                </span>
                <span class="contact-text">
                  <span class="contact-label">LinkedIn</span>
                  <span class="contact-value">/in/gkangshim</span>
                </span>
              </a>
              <a class="contact-card" href="" target="_blank" rel="noreferrer noopener" aria-label="Open resume PDF">
                <span class="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 0v6h6"/><path d="M16 13H8m8 4H8M9 9h1" stroke="currentColor" stroke-width="1" stroke-linecap="round"/></svg>
                </span>
                <span class="contact-text">
                  <span class="contact-label">Resume</span>
                  <span class="contact-value">PDF</span>
                </span>
              </a>
            </div>
          `
        },
        aboutMe: {
          title: 'About Me',
          description: `
            <div class="about-layout">
              <div class="about-portrait" aria-hidden="true">GKS</div>
              <div class="about-body">
                <p>
                  I’m Gustavo Kang Shim — born and raised in Brazil with Korean roots. I’m a 4th‑year Computer Science student at TRU, passionate about Web Development, Three.js, Software Development and bringing playful, interactive ideas to life. When I’m not building, I’m likely out going to the gym or exploring tech that blends design and engineering.
                </p>
                <ul class="about-list">
                  <li>Brazil → Canada journey; bilingual background</li>
                  <li>Enjoys Soccer, Gym, Rock Climbing, Volleyball, Videogames</li>
                  <li>Focus on polished Software Development</li>
                </ul>
              </div>
            </div>
          `,
        },
        interests: {
          title: 'Interests',
          description: '<ul><li>Gym</li> <li>Japanese culture</li> <li>ThreeJS</li> <li>Web Development</li><li>Software Development</li> <li>Computers</li> <li>Videogames</li> <li>Technology</li></ul>',
        },
      }
    }
  
    getModalInfo(portalName) {
      return this.modalContents[portalName];
    }
  }
  
