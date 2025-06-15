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
        },{id: "nav-teaching-amp-service",
          title: "Teaching &amp; Service",
          description: "Overview of my teaching experiences and scientific service to the community.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-outreach",
          title: "Outreach",
          description: "I actively engage in science communication and public outreach, aiming to make computer science accessible to a wider audience. I particularly enjoy inspiring young girls to consider careers in science and technology. Below are some selected highlights from my outreach work, including public talks, workshops, and educational media.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/outreach/";
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
          section: "News",},{id: "projects-privacy-preserving-generation-of-realistic-mobile-network-datasets",
          title: 'Privacy-Preserving Generation of Realistic Mobile Network Datasets',
          description: "STIC-AmSud LINT project exploring AI-based modeling and synthesis of complete mobile datasets with privacy guarantees.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cdr_generation/";
            },},{id: "projects-en-wdm-mobility-model",
          title: 'En-WDM Mobility Model',
          description: "Enhanced Working Day Mobility simulator for generating mobility-rich mobile datasets.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/code_en_wdm/";
            },},{id: "projects-fraudzen-simulator",
          title: 'FraudZen Simulator',
          description: "Simulator for traffic and mobility of legitimate and SIMBox users in cellular networks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/code_fraudzen/";
            },},{id: "projects-msmdf-dataset",
          title: 'MSMDF Dataset',
          description: "Motion sensor fingerprinting dataset collected across 42 smartphones under diverse conditions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/code_msmdf/";
            },},{id: "projects-sign-latency-based-simbox-detection",
          title: 'SigN: Latency-Based SIMBox Detection',
          description: "Dataset and scripts for SIMBox latency anomaly detection at the cellular edge.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/code_sign/";
            },},{id: "projects-machine-learning-for-offensive-computer-security-malfoy",
          title: 'Machine Learning for Offensive Computer Security (MALFOY)',
          description: "ERC-funded research exploring how ML can be misused by attackers to reveal vulnerabilities and build automated threats.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/malfoy/";
            },},{id: "projects-adaptive-detection-of-simbox-fraud-in-mobile-networks",
          title: 'Adaptive Detection of SIMBox Fraud in Mobile Networks',
          description: "MLNS2-funded research tackling international bypass fraud through behavioral modeling and adaptive machine learning techniques.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/simbox_fraud/";
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
