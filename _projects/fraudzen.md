---
layout: page
title: Modeling and Mitigating SIMBox Fraud in Cellular Networks
description:
img: assets/img/simbox_fraud_cube.png
importance: 1
category: projects
related_publications: true
---

**SIMBox fraud**—where fraudsters reroute international calls via VoIP to appear as local ones—costs telecom operators over **$3 billion annually** and threatens **data integrity**, **user privacy**, and even **national security**.

<div class="row justify-content-center">
  <div class="col-sm-8 mt-3 mt-md-0 text-center">
    <div style="max-width: 100%;">
      {% include figure.liquid loading="eager" path="assets/img/simbox_fraud_operation.png" title="SIMBox Fraud Mechanism" class="img-fluid rounded z-depth-1" %}
    </div>
  </div>
</div>
<div class="caption text-center">
  <strong>Figure 1.</strong> SIMBox fraud mechanism: F1 shows a standard international call routing through legitimate transit carriers to the recipient’s mobile operator. In contrast, F2 depicts a fraudulent carrier diverting the call via VoIP to a SIMBox in the destination country, re-originating it as a local call. This results in either (F2-1) an on-net termination if the SIM matches the recipient's operator, or (F2-2) an off-net termination if it uses a different local operator.
</div>

This project tackles SIMBox fraud through three key contributions:

- **Mapping the Fraud Ecosystem**  
  We conducted the first **systematic technical study** of SIMBox fraud, analyzing **50+ devices** across **19 manufacturers** and synthesizing insights from **scientific literature, industry reports**, and even **underground sources**.

- **Realistic Fraud Simulation with FraudZen**  
  We developed [**FraudZen**](https://gitlab.inria.fr/simbox-fraud-mitigation/fraudzen), a **19K-line open-source simulator** that models realistic mobile network traces (CDRs) for **both legitimate and fraudulent users**. It supports **122+ real-world parameters** for scalable simulation and reproducible fraud experiments.

- **Predictive Fraud Modeling**  
  We introduced the first framework for **predicting the evolution of SIMBox behaviors**, enabling proactive and robust detection strategies that go beyond static rule-based systems.

This work was the core of my **doctoral research**, presented in **top-tier venues** and used in research and outreach activities, including the **FraudZen Hackathon** ([details](https://aj-kouam.github.io/fraudzen-hackathon/)).

---

<!-- ### 📝 References

- [Kouam et al., *IEEE Communications Surveys and Tutorials*, 2021](https://hal.science/hal-03473114)
- [Kouam et al., *ACM CoNEXT Student Workshop*, 2022](https://hal.science/hal-03838853)
- [Kouam et al., *ACM AsiaCCS*, 2024 (to appear)](https://hal.science/hal-04554809)
- [FraudZen GitLab Repository](https://gitlab.inria.fr/simbox-fraud-mitigation/fraudzen)
- [FraudZen Software Entry on INRIA BIL](https://bil.inria.fr/fr/software/view/4029/tab) -->

---

_This project highlights my broader research on data-driven mobile network security. It is a cornerstone of my work combining behavioral modeling, fraud mitigation, and privacy-preserving data analysis._
