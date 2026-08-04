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

### Publications Overview

This page provides a **manually curated** list of my research publications across different venues. For an up-to-date and automatically maintained view of my work, visit my [HAL profile](https://haltools.inria.fr/Public/afficheRequetePubli.php?idHal=anne-josiane-kouam&CB_auteur=oui&CB_titre=oui&CB_article=oui&CB_DOI=oui&langue=Anglais&tri_exp=annee_publi&tri_exp2=typdoc&tri_exp3=date_publi&ordre_aff=TA&Fen=Aff&css=../css/VisuRubriqueEncadre.css).

<div class="publications">

{% bibliography
  --file international
  --file national
  --file preprints
  --file thesis
  --group_by year
  --group_order descending
%}


</div>
