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

My research focuses on the **security and privacy of mobile human behavior data**—the digital reflection created as billions of users interact with mobile devices and wireless infrastructures. I study how such behavioral signals can strengthen mobile network security while also introducing new privacy vulnerabilities, particularly in AI-driven ecosystems. My work is organized around three complementary axes:

**1. Mobile Users Privacy Protection**: Investigating privacy risks arising from behavioral signals and sensors, and designing practical defenses against adversarial tracking and information leakage.

**2. Privacy-Preserving User Data Sharing**: Developing safe data publishing methods for mobility and network datasets through realistic synthetic data generation, exposure modeling, and memorization auditing, with a focus on mitigating re-identification risks.

**3. Data-Driven Mobile Networking Security**: Leveraging behavioral and network-level data to detect fraud, characterize anomalies, and build more resilient mobile infrastructures, including emerging AI-enabled attack surfaces.


<div class="projects">

  <a id="awards" href=".#awards">
    <h2 class="category">awards & distinctions</h2>
  </a>
  <div class="award-list">

    <div class="award-item">
      <strong>Prix “Science ouverte de la thèse” 2025</strong> - National French award recognizing doctoral research.
    </div>

    <div class="award-item">
      <strong>Best Paper Award, MSWiM 2025 (CORE A)</strong> <em>"Beyond Aggregates: A Fine-Grained Analysis of Individual Mobility and Traffic Dependencies"</em>.
    </div>

    <div class="award-item">
      <strong>Selected Young Researcher, Heidelberg Laureate Forum (HLF) 2024</strong> - 
      One of 200 young researchers worldwide selected to interact with Turing Award and ACM Prize laureates.
    </div>

    <div class="award-item">
      <strong>Abbe Grant</strong> - 
      Awarded by the Carl-Zeiss-Stiftung to only 20 HLF 2024 participants, funding full participation.
    </div>

    <div class="award-item">
      <strong>SoBigData++ Fellowship</strong> - 
      Transnational Access grant supporting a two-week research mission in Pisa, Italy.
    </div>

    <div class="award-item">
      <strong>Student Grant</strong> — ACM Sigmetrics 2021<br>
      <strong>Diversity Grants</strong> — USENIX SOUPS & USENIX ATC 2021
    </div>

    <div class="award-item">
      <strong>Best Student Paper, CoRes 2023</strong> <em>"Signalisation cellulaire pour la détection des fraudes de contournement"</em>.
    </div>

  </div>
  
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
