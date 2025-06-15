---
layout: page
permalink: /publications/
title: Publications
description: Publications across all categories, i.e., national and international conferences, journals, workshops, preprints, and datasets.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->
{% include bib_search.liquid %}

<div class="publications">

<h3>International Conferences, Journals, and Workshops</h3>
{% bibliography --file international %}

<h3>National Conferences and Workshops</h3>
{% bibliography --file national %}

<h3>Technical Reports and Preprints</h3>
{% bibliography --file preprints %}

<h3>Thesis</h3>
{% bibliography --file thesis %}

</div>