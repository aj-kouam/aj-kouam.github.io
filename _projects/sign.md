---
layout: page
title: SIMBox Detection via Authentication Latency Fingerprinting
description:
img: assets/img/sign_latency_visual.png
importance: 2
category: projects
giscus_comments: false
---

This project introduces **SigN**, a lightweight, real-time method for detecting SIMBox fraud directly at the mobile network edge. Unlike traditional detection approaches based on Call Detail Records (CDRs)—which fraudsters can easily evade—SigN leverages unique authentication latency patterns caused by **remote SIM-card association**, a core technique used by fraudsters to decouple SIM cards from physical antennas.

To validate this approach, we conducted extensive real-world experiments using SIMBox appliances and standard mobile devices, both in controlled lab settings (Faraday cage) and operational LTE environments. We show that **SIMBox devices exhibit significantly higher authentication latency**, up to 23× longer than legitimate users.

SigN is designed for **scalable deployment** by mobile operators: it requires no additional infrastructure and incurs negligible overhead. Its effectiveness has led to a technology transfer effort under Inria Studio and ongoing discussions with operators in Senegal and Cuba.

<div style="text-align: center; width: 80%; margin: auto;" class="my-4">
  {% include figure.liquid 
    loading="eager" 
    path="assets/img/sign_pipeline.png" 
    title="SigN Analysis Pipeline" 
    class="img-fluid rounded z-depth-1" 
  %}
  <div class="caption text-center mt-2">
    <strong>Figure.</strong> Overview of the SigN detection pipeline. Authentication latency is extracted at the network edge and used to distinguish SIMBox devices from legitimate users through statistical analysis and real-time thresholding.
  </div>
</div>

**Research focus**: scalable fraud detection using behavioral indicators  
**Award**: Best Paper Award at CoRes 2023  
**Resources**: [Code & data (open access)](https://gitlab.inria.fr/simbox-fraud-mitigation/sign)
