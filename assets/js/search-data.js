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
          description: "Recongnitions",
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
      },{id: "books-algorithms-for-decision-making",
          title: 'Algorithms for Decision Making',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Algorithms_for_Decision_Making.html";
            },},{id: "books-deep-reinforcement-learning-in-action",
          title: 'Deep Reinforcement Learning in Action',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Deep-Reinforcement-Learning-in-Action.html";
            },},{id: "books-grokking-deep-reinforcement-learning",
          title: 'Grokking Deep Reinforcement Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Grokking_Deep_Reinforcement_Learning.html";
            },},{id: "books-introduction-to-probability",
          title: 'Introduction to Probability',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Introduction_to_Probability.html";
            },},{id: "books-mechanical-vibration",
          title: 'Mechanical Vibration',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Mechanical_Vibration.html";
            },},{id: "books-multi-agent-reinforcement-learning",
          title: 'Multi-Agent Reinforcement Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Multi-Agent_Reinforcement_Learning.html";
            },},{id: "books-reinforcement-learning-an-introduction",
          title: 'Reinforcement Learning  An Introduction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Reinforcement_Learning-An_Introduction.html";
            },},{id: "books-theoretical-and-experimental-modal-analysis",
          title: 'Theoretical and Experimental Modal Analysis',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Theoretical_and_Experimental_Modal_Analysis.html";
            },},{id: "news-paper-on-mode-indicator-guided-sequential-modal-analysis-accepted-in-the-international-conference-on-noise-and-vibration-engineering-2024",
          title: 'Paper on Mode Indicator Guided Sequential Modal Analysis accepted in the International Conference...',
          description: "",
          section: "News",},{id: "news-paper-on-toward-dynamic-digital-twin-enhancing-model-accuracy-with-adaptive-sensor-steering-strategies-accepted-in-the-3rd-iacm-digital-twins-in-engineering-conference-dte-2025-amp-amp-1st-eccomas-artificial-intelligence-and-computational-methods-in-applied-science-aicomas-2025",
          title: 'Paper on Toward Dynamic Digital Twin: Enhancing Model Accuracy with Adaptive Sensor Steering...',
          description: "",
          section: "News",},{id: "news-won-the-2025-postgraduate-researcher-experience-programme-prep",
          title: 'Won the 2025 Postgraduate Researcher Experience Programme (PREP)',
          description: "",
          section: "News",},{id: "news-completed-my-first-peer-review-for-data-centric-engineering",
          title: 'Completed my first peer review for Data Centric Engineering.',
          description: "",
          section: "News",},{id: "news-industry-visit-to-edf-uk-bristol-amp-gloucester-facilities",
          title: 'Industry Visit to EDF UK – Bristol &amp;amp; Gloucester Facilities',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5.html";
            },},{id: "news-paper-on-decision-support-system-for-modal-testing-using-deep-reinforcement-learning-have-be-accepted-for-presentation-at-imac-xliv",
          title: 'Paper on “Decision Support System for Modal Testing using Deep Reinforcement Learning” have...',
          description: "",
          section: "News",},{id: "news-new-preprint-towards-agent-based-test-support-systems-an-unsupervised-environment-design-approach-on-arxiv",
          title: 'New preprint “Towards Agent-based Test Support Systems: An Unsupervised Environment Design Approach” on...',
          description: "",
          section: "News",},{id: "news-i-made-it-into-asml-phd-master-class-autum-session",
          title: 'I made it into ASML PhD Master Class Autum Session',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_9.html";
            },},{id: "news-flander-ai-research-day-2025-at-wintercircus-ghent-belgium",
          title: 'Flander AI Research Day 2025 at Wintercircus, Ghent, Belgium',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_8.html";
            },},{id: "news-asml-phd-masterclass-experience",
          title: 'ASML PhD Masterclass Experience',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_10.html";
            },},{id: "news-our-paper-on-adaptive-sensor-steering-strategy-using-deep-reinforcement-learning-for-dynamic-data-acquisition-in-digital-twins-has-now-been-accepted-and-published-in-the-royal-society-proceeding-a",
          title: 'Our paper on “Adaptive sensor steering strategy using deep reinforcement learning for dynamic...',
          description: "",
          section: "News",},{id: "news-our-paper-on-adaptive-sensor-steering-strategy-using-deep-reinforcement-learning-for-dynamic-data-acquisition-in-digital-twins-has-now-been-accepted-and-published-in-the-royal-society-proceeding-a",
          title: 'Our paper on “Adaptive sensor steering strategy using deep reinforcement learning for dynamic...',
          description: "",
          section: "News",},{id: "news-won-best-presentation-late-phds-category-at-the-2026-engineering-researcher-symposium",
          title: 'Won best presentation (late PhDs category) at the 2026 Engineering Researcher Symposium',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_13.html";
            },},{id: "projects-bae-hawk-full-body-structural-test",
          title: 'BAE Hawk Full Body Structural Test',
          description: "Modal analysis of an aircraft to understand dynamic behaviour. Facility - Laboratory for Verification and Validation (LVV)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/BAE%20Hawk%20Structural%20Test.html";
            },},{id: "projects-thermo-economic-analysis-of-stirling-enginer-integrated-power-plant",
          title: 'Thermo-economic Analysis of Stirling Enginer Integrated Power Plant',
          description: "BEng. (Hons) thesis project - Advised by Dr. Ofodu, J.C",
          section: "Projects",handler: () => {
              window.location.href = "/projects/BEng_Thesis.html";
            },},{id: "projects-development-of-simulation-based-digital-twin-for-smart-space-hvac-system-case-study-of-a-phytotron-system",
          title: 'Development of Simulation-based Digital Twin for Smart Space HVAC System - Case Study...',
          description: "MSc. (Hons) thesis project - Advised by Prof. Henni Ouerdane; Co-advised by Prof. Laurent Gentzbittel",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MSc_Thesis.html";
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
