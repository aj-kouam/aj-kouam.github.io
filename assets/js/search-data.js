// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications across all categories, i.e., national and international conferences, journals, workshops, preprints, and datasets.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching-amp-outreach",
          title: "Teaching &amp; Outreach",
          description: "Overview of my teaching experiences and outreach initiatives.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-successfully-defended-my-phd-thesis-entitled-bypass-frauds-in-cellular-networks-understanding-and-mitigation",
          title: 'Successfully defended my PhD thesis entitled “Bypass frauds in cellular networks: understanding and...',
          description: "",
          section: "News",},{id: "news-gave-a-talk-at-cores-2023-on-our-paper-signalisation-cellulaire-pour-la-détection-des-fraudes-de-contournement-and-received-the-best-student-paper-award",
          title: 'Gave a talk at CoRes 2023 on our paper “Signalisation cellulaire pour la...',
          description: "",
          section: "News",},{id: "news-excited-to-start-a-new-post-doc-position-at-tu-berlin-in-the-mlsec-group",
          title: 'Excited to start a new Post-Doc position at TU Berlin in the MLSec...',
          description: "",
          section: "News",},{id: "news-",
          title: '…',
          description: "",
          section: "News",},{id: "news-great-pleasure-to-co-organize-a-workshop-for-the-girls-day-in-berlin-mädchen-zukunftstag",
          title: 'Great pleasure to co-organize a workshop for the Girls’ Day in Berlin (Mädchen-Zukunftstag)....',
          description: "",
          section: "News",},{id: "news-glad-to-serve-as-external-reviewer-at-the-ieee-open-journal-of-the-communications-society-ojcoms",
          title: 'Glad to serve as External Reviewer at the IEEE Open Journal of the...',
          description: "",
          section: "News",},{id: "news-delighted-and-honored-to-be-a-selected-young-researcher-at-the-11th-heidelberg-laureate-forum-and-recipient-of-the-abbe-grant-2024-see-the-abbe-grant-certificate-pdf",
          title: 'Delighted and honored to be a selected young researcher at the 11th Heidelberg...',
          description: "",
          section: "News",},{id: "news-great-pleasure-to-visit-and-give-a-talk-on-bypass-frauds-at-the-tng-group-in-politecnico-di-torino",
          title: 'Great pleasure to visit and give a talk on bypass frauds at the...',
          description: "",
          section: "News",},{id: "news-glad-to-serve-as-part-of-the-tpc-of-acsac-2024",
          title: 'Glad to serve as part of the TPC of ACSAC 2024.',
          description: "",
          section: "News",},{id: "news-glad-to-serve-as-part-of-the-tpc-of-wimob-2024",
          title: 'Glad to serve as part of the TPC of WiMob 2024.',
          description: "",
          section: "News",},{id: "news-presenting-our-work-on-bypass-frauds-mitigation-at-asiaccs-24-in-singapore-amazing-experience",
          title: 'Presenting our work on bypass frauds mitigation at AsiaCCS 24 in Singapore. Amazing...',
          description: "",
          section: "News",},{id: "news-glad-to-serve-as-external-reviewer-at-the-ieee-transactions-on-mobile-computing",
          title: 'Glad to serve as External Reviewer at the IEEE Transactions on Mobile Computing....',
          description: "",
          section: "News",},{id: "news-had-an-amazing-experience-at-the-11th-heidelberg-laureate-forum-some-pictures",
          title: 'Had an amazing experience at the 11th Heidelberg Laureate Forum.  Some pictures!',
          description: "",
          section: "News",},{id: "news-great-pleasure-to-visit-and-give-a-talk-at-the-fun-team-of-inria-lille",
          title: 'Great pleasure to visit and give a talk at the Fun Team of...',
          description: "",
          section: "News",},{id: "news-great-pleasure-to-visit-and-give-a-talk-at-the-agora-team-of-inria-lyon",
          title: 'Great pleasure to visit and give a talk at the Agora Team of...',
          description: "",
          section: "News",},{id: "news-glad-to-serve-as-part-of-the-tpc-of-pam-2025",
          title: 'Glad to serve as part of the TPC of PAM 2025.',
          description: "",
          section: "News",},{id: "news-presented-our-abstract-paper-assessing-shadows-in-mobility-beyond-spatiotemporal-patterns-at-netmob-24",
          title: 'Presented our abstract paper “Assessing Shadows in Mobility: Beyond Spatiotemporal Patterns” at NetMob...',
          description: "",
          section: "News",},{id: "news-co-organized-the-fraudzen-hackathon-at-university-of-yaoundé-i-in-partnership-with-prof-tapamo",
          title: 'Co-organized the FraudZen Hackathon at University of Yaoundé I, in partnership with Prof....',
          description: "",
          section: "News",},{id: "news-led-a-workshop-for-high-school-students-at-lycée-d-elig-essono-as-part-of-animath-amp-amp-promomaths-international-outreach-actions",
          title: 'Led a workshop for high school students at Lycée d’Elig-Essono, as part of...',
          description: "",
          section: "News",},{id: "news-completed-a-one-month-research-stay-at-university-of-yaoundé-i-under-the-berlin-university-alliance-funding-program-fostering-collaborations-with-the-global-south",
          title: 'Completed a one-month research stay at University of Yaoundé I under the Berlin...',
          description: "",
          section: "News",},{id: "news-delivered-an-invited-talk-at-the-ztf-awards-sharing-with-4000-young-students-across-cameroon",
          title: 'Delivered an invited talk at the ZTF Awards, sharing with 4000+ young students...',
          description: "",
          section: "News",},{id: "news-honored-to-serve-on-the-tpc-of-algotel-2025",
          title: 'Honored to serve on the TPC of Algotel 2025.',
          description: "",
          section: "News",},{id: "news-presented-our-latest-research-on-traffic-mobility-dependencies-at-the-stic-amsud-lint-workshop-in-buenos-aires-grateful-for-the-continued-collaboration-with-latin-american-partners",
          title: 'Presented our latest research on traffic–mobility dependencies at the STIC-AmSud LINT Workshop in...',
          description: "",
          section: "News",},{id: "news-our-paper-the-silent-signature-behavior-based-user-exposure-in-mobility-data-is-accepted-to-mdm-2025-congrats-to-lucas-felix-for-leading-this-exciting-work",
          title: 'Our paper “The Silent Signature: Behavior-based User Exposure in Mobility Data” is accepted...',
          description: "",
          section: "News",},{id: "news-honored-to-serve-on-the-tpc-of-tma-2025",
          title: 'Honored to serve on the TPC of TMA 2025.',
          description: "",
          section: "News",},{id: "news-our-paper-sign-simbox-activity-detection-through-latency-anomalies-at-the-cellular-edge-is-accepted-to-asiaccs-2025",
          title: 'Our paper “SigN: SIMBox Activity Detection Through Latency Anomalies at the Cellular Edge”...',
          description: "",
          section: "News",},{id: "news-we-are-thrilled-to-launch-the-netmob-2025-data-challenge-explore-the-newly-released-dataset-and-join-the-community-in-tackling-exciting-mobility-and-privacy-research-questions-reference-paper-on-the-dataset-arxiv-2506-05903",
          title: 'We are thrilled to launch the NetMob 2025 Data Challenge! Explore the newly...',
          description: "",
          section: "News",},{id: "news-honored-to-take-part-in-the-panel-for-the-inauguration-of-the-just-do-maths-exposition-at-inria-saclay-on-june-3-2025-event-flyer-pdf",
          title: 'Honored to take part in the panel for the inauguration of the Just...',
          description: "",
          section: "News",},{id: "projects-generating-mobile-datasets-via-joint-modeling-of-mobility-and-traffic",
          title: 'Generating Mobile Datasets via Joint Modeling of Mobility and Traffic',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cdr_generation/";
            },},{id: "projects-modeling-and-mitigating-simbox-fraud-in-cellular-networks",
          title: 'Modeling and Mitigating SIMBox Fraud in Cellular Networks',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fraudzen/";
            },},{id: "projects-simbox-detection-via-authentication-latency-fingerprinting",
          title: 'SIMBox Detection via Authentication Latency Fingerprinting',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sign/";
            },},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/290/8069.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%6E%65-%6A%6F%73%69%61%6E%65.%6B%6F%75%61%6D@%69%6E%72%69%61.%66%72", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/anne-josiane-kouam-a1b668266", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=hiqdV_wAAAAJ&hl", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/josiane_kouam", "_blank");
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
