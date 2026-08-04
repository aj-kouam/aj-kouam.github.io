---
layout: page
permalink: /teaching/
title:  Service
description: Overview of my teaching activities, service to the scientific community, and contributions to open science.
nav: true
display_categories: [Open science & Open-source]
nav_order: 6
---

<div class="projects">
  <a id="teaching" href=".#teaching">
    <h2 class="category">Teaching activities</h2>
  </a>
</div>


I had the opportunity to teach and supervice students cross multiple institutions and academic levels through a variety of course formats, including Massive Online Open Courses (**MOOC**), Practical Courses (**PC**), Seminar Courses (**SC**), and Lecture Tutorials (**TD**).
My teaching activities span undergraduate to graduate levels and cover topics in networking, security, privacy, and distributed systems. 

- **Mobile Privacy and Security** *(SC, L3)*; TU Berlin (Germany), Apr–Jul 2025  
- **Adversarial Machine Learning** *(TD, M2)*; TU Berlin (Germany), Oct 2024 – Feb 2025  
- **Unusual Side Channels and Privacy Leaks** *(SC, L3)*; TU Berlin (Germany), Oct 2024 – Feb 2025  
- **Mobile Privacy and Security** *(SC, L3)*; TU Berlin (Germany), Apr–Jul 2024  
- **Networking: Switching and Routing** *(TD, L2)*; Université Paris-Saclay (France), Sep – Dec 2021  
- **Fundamentals of Network and Information Systems** *(MOOC, CAPES)*; FUN-MOOC & YouTube, 2021 — *18,323 registrations*  
- **Distributed Systems and Virtualization** *(PC, M2)*; ENSPY (Cameroon), Oct – Dec 2019


<div class="projects">
  <a id="teaching" href=".#teaching">
    <h2 class="category">Scientific community</h2>
  </a>
</div>


#### Conference & Event Organization

- 2025: **[NetMob 2025](https://netmob.org/www25/)**: Data Challenge co-organizer; TPC Co-Chair, Web-Chair, Publication Chair. See the [Data Challenge page](https://netmob.org/www25/datachallenge).
- 2024: **[FraudZen Hackathon](https://aj-kouam.github.io/fraudzen-hackathon/)**, UY1 Cameroon: Hackathon Co-organizer and Chair.
- 2022: **[Computer Science Workshop](https://scienceprojectscmr.github.io/index.html)**, ENSPY Cameroon: Co-organizer; included a "Women in CS" session.
- 2022: **[Session Chair – Machine Learning in and of Networks](https://conferences2.sigcomm.org/co-next/2022/#!/workshop-student)**, ACM CoNEXT 2022 Student Workshop, Rome, Italy.
- 2020: **[Feedback Days](https://sites.google.com/view/retourxpenspygi2020/accueil)**, ENSPY Cameroon: Two-day scientific workshop with problem-solving sessions.

#### Program Committee Membership
- **2026**: [AsiaCCS'26](https://asiaccs2026.cse.iitkgp.ac.in/program-committee/), [EuroDW'26](https://eurodw.github.io/), [Algotel'26](https://algotel-cores26.sciencesconf.org/resource/page/id/3), [UrbCom'26](https://sites.google.com/view/urbcom2026/committees?authuser=0), [ACSAC'26](https://www.acsac.org/2026/committees/program/), [WiMob'26](http://www.wimob.org/wimob2026/committees.php), [Netmob'26](https://netmob.org/www26/)
- **2025**: [AISec'25](https://aisec25.hotcrp.com/u/1/users/pc), [WiMob'25](http://www.wimob.org/wimob2025/committees.php), [TMA'25](https://hotcrp.dacs.utwente.nl/tma2025/users/pc), [PAM'25](https://udesa.edu.ar/committees), [Algotel&Cores'25](https://algotelcores2025.limos.fr/users/pc) _(French national)_,
- **2024**: [ACSAC'24](https://www.acsac.org/2024/committees/program/) _(A-ranked)_, [WiMob'24](http://wimob.org/wimob2024/committees.php), [ICNS'24](https://www.iaria.org/conferences2024/ComICNS24.html), [EuroDW'24](https://2024.eurosys.org/euroDW.html) _(Workshop)_
- **2023**: [ICNS'23](https://www.iaria.org/conferences2023/ComICNS23.html)
- **2021**: [Algotel&Cores'21](https://shadowpc-rsd.cnrs.fr/edition-2021/program-committee/) _(**Shadow PC**, French national)_

#### Journal Reviewing
- 2026: EPJ Data Science (Q2)
- 2026: Journal of Telecommunications and Information Technology
- 2024: IEEE Open Journal of the Communications Society (Q1)
- 2024: IEEE/ACM Transactions on Mobile Computing (Q1)
- 2024: [EPJ Data Science](https://orcid.org/0000-0002-8803-6256) (Q1)
- 2024: [Annals of Telecommunications](https://orcid.org/0000-0002-8803-6256) (Q2)
- 2021: IEEE Transactions on Network and Service Management (Q1) _(as sub-reviewer)_

#### Artefact Evaluation Committee
- 2022: [USENIX Security '22](https://www.usenix.org/conference/usenixsecurity22/call-for-artifacts), [CoNEXT '22](https://conferences2.sigcomm.org/co-next/2022/#!/artifact-committee)
- 2021: [EuroSys '21](https://sysartifacts.github.io/eurosys2021/committee.html)

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>


