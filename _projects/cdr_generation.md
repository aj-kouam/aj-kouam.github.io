---
layout: page
title: Privacy-Preserving Generation of Realistic Mobile Network Datasets
description: STIC-AmSud LINT project exploring AI-based modeling and synthesis of complete mobile datasets with privacy guarantees.
img: assets/img/cdr_usefulness.png
importance: 2
category: projects
related_publications: true
---

### Overview

The **STIC-AmSud LINT** project focuses on the generation of realistic, privacy-preserving mobile datasets that combine **traffic** and **mobility data**. Real-world cellular datasets such as Call Detail Records (CDRs) or eXtended Data Records (XDRs) are crucial for studying human behavior, network optimization, and digital policy. However, their availability is often restricted due to **privacy** and **usability** concerns.

This project addresses these challenges by developing **generative models** that jointly reproduce traffic and mobility patterns while preserving statistical realism and protecting user identity. We combine machine learning with behavioral modeling to design **reproducible, anonymized datasets** that remain useful for urban-scale analysis and AI applications in networking.

---

### Research Contributions

##### LSTM-based generation of cellular network traffic

Domain-wide recognized by their high value in human activity and network monitoring studies, cellular network traffic (i.e., Charging Data Records, named CDRs), however, present accessibility and usability issues, restricting their exploitation and research reproducibility. This paper tackles such challenges by modeling CDRs that fulfill real-world data attributes. Our designed framework, named Zen leverages LSTM to realistically model network users’ traffic behavior through a 4-stage generative pipeline. Results show that Zen’s models accurately capture individual and global distributions of a fully anonymized real-world traffic CDRs dataset. Finally, we validate Zen CDRs ability of reproducing daily cellular behaviors of the urban population and its usefulness in practical networking applications such as Radio Access Network’s power savings, and anomaly detection as compared to real-world CDRs.

<p class="text-end"><em>Presented at IEEE WCNC 2023. <a href="https://ieeexplore.ieee.org/document/10119094">[IEEE]</a></em></p>

##### Zen: LSTM-based generation of individual spatiotemporal cellular traffic with interactions

Domain-wide recognized by their high value in human presence and activity studies, cellular network datasets (i.e., Charging Data Records, named CdRs), however, present accessibility, usability, and privacy issues, restricting their exploitation and research. This paper tackles such challenges by modeling Cdrs that fulfill real-world data attributes. Our designed framework, named Zen follows a four-fold methodology related to (i) the LTSM-based modeling of users' traffic behavior, (ii) the realistic and flexible emulation of spatiotemporal mobility behavior, (iii) the structure of lifelike cellular network infrastructure and social interactions, and (iv) the combination of the three previous modules into realistic Cdrs traces with an individual basis, realistically. Results show that Zen's first and third models accurately capture individual and global distributions of a fully anonymized real-world Cdrs dataset, while the second model is consistent with the literature's revealed features in human mobility. Finally, we validate Zen Cdrs ability of reproducing daily cellular behaviors of the urban population and its usefulness in practical networking applications such as dynamic population tracing, Radio Access Network's power savings, and anomaly detection as compared to real-world CdRs.

<p class="text-end"><em>Technical Report available on <a href="https://arxiv.org/abs/2301.02059">[Arxiv]</a></em></p>

##### Characterizing User Behavior: The Interplay Between Mobility Patterns and Mobile Traffic

Mobile devices have become essential for capturing human activity, and eXtended Data Records (XDRs) offer rich opportunities for detailed user behavior modeling, which is useful for designing personalized digital services. Previous studies have primarily focused on aggregated mobile traffic and mobility analyses, often neglecting individual-level insights. This paper introduces a novel approach that explores the dependency between traffic and mobility behaviors at the user level. By analyzing 13 individual features that encompass traffic patterns and various mobility aspects, we enhance the understanding of how these behaviors interact. Our advanced user modeling framework integrates traffic and mobility behaviors over time, allowing for fine-grained dependencies while maintaining population heterogeneity through user-specific signatures. Furthermore, we develop a Markov model that infers traffic behavior from mobility and vice versa, prioritizing significant dependencies while addressing privacy concerns. Using a week-long XDR dataset from 1,337,719 users across several provinces in Chile, we validate our approach, demonstrating its robustness and applicability in accurately inferring user behavior and matching mobility and traffic profiles across diverse urban contexts.

---

### Team & Role

- **Host**: STIC-AmSud LINT Associate Team
- **Role**: PhD student researcher and co-designer of the data synthesis pipeline
