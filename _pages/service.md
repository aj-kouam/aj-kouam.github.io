---
layout: page
permalink: /service/
title: Service
description: Scientific community service, conference organization, peer reviewing, and open science contributions.
nav: true
display_categories: [Open science & Open-source]
nav_order: 6
---

<div class="projects">
  <a id="community" href="#community">
    <h2 class="category">scientific community</h2>
  </a>
</div>

#### Conference & Event Organization

- **2026 — [IEEE MSWiM](https://mswimconf.com/2026/program.html)**, Paris, France: Session Chair, 5G Networks 2
- **2025 — [NetMob 2025](https://netmob.org/www25/)**: Data Challenge co-organizer; TPC Co-Chair, Web Chair, Publication Chair. [Data Challenge](https://netmob.org/www25/datachallenge)
- **2024 — [FraudZen Hackathon](https://aj-kouam.github.io/fraudzen-hackathon/)**, University of Yaoundé I, Cameroon: Co-organizer and Chair
- **2022 — [Computer Science Workshop](https://scienceprojectscmr.github.io/index.html)**, ENSPY, Cameroon: Co-organizer, including a Women in CS session
- **2022 — [ACM CoNEXT Student Workshop](https://conferences2.sigcomm.org/co-next/2022/#!/workshop-student)**, Rome, Italy: Session Chair, Machine Learning in and of Networks
- **2020 — [Feedback Days](https://sites.google.com/view/retourxpenspygi2020/accueil)**, ENSPY, Cameroon: Two-day scientific workshop

#### Program Committee Membership

- **2027:** [AsiaCCS](https://asiaccs2027.cityu.edu.mo/program-committee/index.html), [USENIX Security](https://www.usenix.org/conference/usenixsecurity27/call-for-papers)
- **2026:** [AsiaCCS](https://asiaccs2026.cse.iitkgp.ac.in/program-committee/), [EuroDW](https://eurodw.github.io/), [Algotel](https://algotel-cores26.sciencesconf.org/resource/page/id/3), [UrbCom](https://sites.google.com/view/urbcom2026/committees?authuser=0), [ACSAC](https://www.acsac.org/2026/committees/program/), [WiMob](http://www.wimob.org/wimob2026/committees.php), [NetMob](https://netmob.org/www26/), [IEEE iThings](https://ieee-cybermatics2026.org/committees/iThings)
- **2025:** [AISec](https://aisec25.hotcrp.com/u/1/users/pc), [WiMob](http://www.wimob.org/wimob2025/committees.php), [TMA](https://hotcrp.dacs.utwente.nl/tma2025/users/pc), [PAM](https://udesa.edu.ar/committees), [Algotel & CoRes](https://algotelcores2025.limos.fr/users/pc)
- **2024:** [ACSAC](https://www.acsac.org/2024/committees/program/), [WiMob](http://wimob.org/wimob2024/committees.php), [ICNS](https://www.iaria.org/conferences2024/ComICNS24.html), [EuroDW](https://2024.eurosys.org/euroDW.html)
- **2023:** [ICNS](https://www.iaria.org/conferences2023/ComICNS23.html)
- **2021:** [Algotel & CoRes](https://shadowpc-rsd.cnrs.fr/edition-2021/program-committee/) (Shadow PC)

#### Journal Reviewing

- **2026:** EPJ Data Science; Journal of Telecommunications and Information Technology
- **2024:** IEEE Open Journal of the Communications Society; IEEE/ACM Transactions on Mobile Computing; EPJ Data Science; Annals of Telecommunications
- **2021:** IEEE Transactions on Network and Service Management (sub-reviewer)

#### Artifact Evaluation Committees

- **2022:** [USENIX Security](https://www.usenix.org/conference/usenixsecurity22/call-for-artifacts), [CoNEXT](https://conferences2.sigcomm.org/co-next/2022/#!/artifact-committee)
- **2021:** [EuroSys](https://sysartifacts.github.io/eurosys2021/committee.html)


<!-- Open Science & Open Source -->

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
    <a id="{{ category | slugify }}" href="#{{ category | slugify }}">
      <h2 class="category">{{ category }}</h2>
    </a>

    {% assign categorized_projects = site.projects | where: "category", category %}
    {% assign sorted_projects = categorized_projects | sort: "importance" %}

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
  {% assign sorted_projects = site.projects | sort: "importance" %}

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
