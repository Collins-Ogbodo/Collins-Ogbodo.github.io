// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/epositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "A full-length academic-style CV is available on request, or just feel free to reach out on LinkedIn for more information!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-awards",
          title: "Awards",
          description: "Award and recongnitions",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Workshops, tutorials, and courses",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-digital-twins-blog-coming-soon",
        
          title: "Digital Twins Blog Coming Soon! ⏳",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2025/03/26/plotly.html";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-paper-on-mode-indicator-guided-sequential-modal-analysis-accepted-in-the-international-conference-on-noise-and-vibration-engineering-2024",
          title: 'Paper on Mode Indicator Guided Sequential Modal Analysis accepted in the International Conference...',
          description: "",
          section: "News",},{id: "news-paper-on-toward-dynamic-digital-twin-enhancing-model-accuracy-with-adaptive-sensor-steering-strategies-accepted-in-the-3rd-iacm-digital-twins-in-engineering-conference-dte-2025-amp-amp-1st-eccomas-artificial-intelligence-and-computational-methods-in-applied-science-aicomas-2025",
          title: 'Paper on Toward Dynamic Digital Twin: Enhancing Model Accuracy with Adaptive Sensor Steering...',
          description: "",
          section: "News",},{id: "news-won-the-2025-postgraduate-researcher-experience-programme-prep",
          title: 'Won the 2025 Postgraduate Researcher Experience Programme (PREP)',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%43%6F%6F%67%62%6F%64%6F%31@%73%68%65%66%66%69%65%6C%64.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Collins-Ogbodo", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/collins-ogbodo-8b163b145", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-3672-0240", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Collins O Ogbodo", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
