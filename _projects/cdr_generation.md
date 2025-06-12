---
layout: page
title: Generating Mobile Datasets via Joint Modeling of Mobility and Traffic
description:
img: assets/img/cdr_usefulness.png
importance: 3
category: projects
---

To overcome the privacy and accessibility limitations of real-world mobile datasets, we developed **Zen**, the first framework to synthesize realistic Call Detail Records (CDRs) that jointly model human mobility and traffic behaviors. Zen simulates urban mobility using enhanced Working Day Mobility (En-WDM) models, integrates social interactions, and leverages LSTM-based generative models to produce realistic app usage and call activity.

A key innovation is the **explicit modeling of the mutual influence between mobility and traffic**, enabling the generation of user-level behaviors that mirror real-world heterogeneity. Zen also allows control over dataset scale and duration, making it a flexible tool for network simulation, privacy research, and urban mobility analysis.

<div class="row align-items-center">
  <div class="col-md-6 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/zen_behavior_reproduction.png" 
      title="Zen Reproduces Traffic Heterogeneity" 
      class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6 mt-3 mt-md-0">
    <p class="mb-2">
      <strong>Figure.</strong> Our model outperforms classical statistical baselines by reproducing the real-world diversity of user behaviors, especially in traffic burstiness and temporal dynamics. It accurately captures inter-user differences across both weekday and weekend usage.
    </p>
  </div>
</div>

**Research focus**: data generation, human mobility, usage modeling  
**Tools**: enhanced mobility models, LSTM traffic generators  
**Used in**: [FraudZen Hackathon](https://aj-kouam.github.io/fraudzen-hackathon/)  
**Code**: [GitLab – En-WDM](https://gitlab.inria.fr/simbox-fraud-mitigation/legitimate-mobile-datasets-generation/en-wdm)
