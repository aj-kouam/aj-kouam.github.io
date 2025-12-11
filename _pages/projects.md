---
layout: page
title: Research Highlights
permalink: /projects/
description:
nav: true
nav_order: 3
display_categories: [code & datasets]
horizontal: false
---

My research centers on **mobile security and privacy** within wireless and cellular network environments. I investigate how mobile human behavior data can be harnessed to enhance security and network resilience, while proactively addressing emerging privacy threats—particularly in the context of growing AI-powered infrastructures. My approach draws on techniques from machine learning, statistics, graph theory, and time series modeling, and is structured around the following three axes:

**1. Data-driven Mobile Networks Security**: Leveraging behavioral data from mobile networks to detect fraud (e.g., SIMBox), identify anomalies, model normal usage patterns, and optimize network configurations for increased robustness and adaptability.

**2. Privacy-preserving Data Publishing**: Developing methods to safely release mobile datasets such as Call Detail Records (CDRs) by modeling user heterogeneity, synthesizing realistic and usable data traces, and minimizing the risk of re-identification or misuse.

**3. Mobile Users Privacy Protection**: Exploring privacy vulnerabilities arising from behavioral data and permission-less sensors, and designing novel, effective countermeasures to safeguard mobile users against adversarial tracking and information leakage.

<div class="projects">

  <a id="awards" href=".#awards">
    <h2 class="category">awards & distinctions</h2>
  </a>
  <ul>
    <li>
      <strong>Prix “Science ouverte de la thèse” 2025.</strong><br>
      National French award recognizing doctoral research. Awarded for my thesis on the understanding and mitigation of SIMBox fraud in mobile networks.
    </li>

    <li>
      <strong>Best Paper Award, MSWiM 2025 (CORE A).</strong><br>
      Awarded for the paper <em>"Beyond Aggregates: A Fine-Grained Analysis of Individual Mobility and Traffic Dependencies"</em>.
    </li>

    <li>
      <strong>Selected Young Researcher, Heidelberg Laureate Forum (HLF) 2024.</strong><br>
      One of only 200 young researchers worldwide selected to interact with Turing Award and ACM Prize laureates.
    </li>

    <li>
      <strong>Abbe Grant.</strong><br>
      Awarded by the Carl-Zeiss-Stiftung to only 20 participants of HLF 2024, funding full participation.
    </li>

    <li>
      <strong>SoBigData++ Fellowship.</strong><br>
      Transnational Access grant supporting a two-week research mission in Pisa, Italy.
    </li>

    <li>
      <strong>Student Grant:</strong> ACM Sigmetrics 2021.<br>
      <strong>Diversity Grants:</strong> USENIX SOUPS & USENIX ATC 2021.<br>
    </li>

    <li>
      <strong>Best Student Paper:</strong> CoRes 2023, for the paper <em>Signalisation cellulaire pour la détection des fraudes de contournement</em>.
    </li>

  </ul>
</div>




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
