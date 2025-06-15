---
layout: page
title: Adaptive Detection of SIMBox Fraud in Mobile Networks
description: MLNS2-funded research tackling international bypass fraud through behavioral modeling and adaptive machine learning techniques.
img: assets/img/projects/simbox.png
importance: 1
category: projects
---

### Overview
The [MLNS2 Associate Team](https://team.inria.fr/mlns2/) focuses on the intersection of machine learning and network security. One of its core research directions is the detection of **international bypass frauds**, commonly known as **SIMBox frauds**. These attacks occur when fraudsters reroute international calls through SIMBox devices to avoid operator fees—causing billions in revenue loss annually.

This project develops novel, ML-based detection techniques using real-world signaling, traffic, and metadata. By analyzing user behavior and fraud adaptation strategies, we aim to detect evolving attack patterns while minimizing false positives in mobile networks.

---

### Research Contributions

##### 1. SIMBox Bypass Frauds in Cellular Networks: Strategies, Evolution, Detection, and Future Directions
Due to their complexity and opaqueness, cellular networks have been subject to numerous attacks over the past few decades. These attacks are a real problem to telecom operators and cost them about USD 28.3 Billion annually, as reported by the Communications Fraud Control Association. SIMBox fraud is one of the most prevalent of these telephone frauds. It consists of diverting international calls on the VoIP network and terminating them as local calls using an off-the-shelf device, referred to as SIMBox. This paper surveys both the existing literature and the major SIMBox manufacturers to provide comprehensive and analytical knowledge on SIMBox fraud, fraud strategies, fraud evolution, and fraud detection methods. We provide the necessary background on the telephone ecosystem while extensively exploring the SIMBox architecture required to understand fraud strategies. Our goal is to provide a complete introductory guide for research on SIMBox fraud and stimulate interest for SIMBox fraud detection, which remains little investigated. In this vein, we conclude the paper by presenting insights into tomorrow’s SIMBox fraud detection challenges and research directions.
<p class="text-end"><em>Published in IEEE Communications Surveys & Tutorials (COMST), 2021. <a href="https://doi.org/10.1109/COMST.2021.3100916">[DOI]</a></em></p>


##### 2. Battle of Wits: To What Extent Can Fraudsters Disguise Their Tracks in International bypass Fraud? 
International bypass fraud, also known as SIMBox fraud, involves diverting international cellular voice traffic from regulated routes and rerouting it as local calls in the destination country. It has significantly affected cellular networks worldwide, generating $3.11 Billion of losses annually and threats to national security. Yet, SIMBox fraud remains an ongoing challenge, eluding operators detection due to the continual refinement of fraudulent behavior that is often overlooked in the design and validation of detection methods.
This paper introduces a game-based formalization of the SIMBox fraud problem, delineating two key players-the adversary and the investigator-along with their strategies and a set of metrics gauging their efficacy in the game. We develop a practical framework for the empirical evaluation of the fraud, incorporating current adversary and investigator capabilities and accommodating seamless adaptation to the evolving nature of fraud. Our analysis identifies up to 345,600,000 possible adversary strategies from in-market SIMBox appliances functionalities. The most sophisticated strategies decisively outperform the most efficient existing detection methods, underscoring the literature's lack of awareness of fraud capabilities. Furthermore, we uncover fraud vulnerabilities and discuss their implications for enhancing future detection strategies in practice. In essence, our work introduces a novel paradigm in SIMBox fraud detection that adapts seamlessly to the ever-changing landscape of fraud, treating it as a fundamental aspect of the detection strategy.
<p class="text-end"><em>Published in ACM AsiaCCS, 2024. <a href="https://doi.org/10.1145/3634737.3657023">[DOI]</a></em></p>



##### 3. SigN: SIMBox Activity Detection Through Latency Anomalies at the Cellular Edge
Despite their widespread adoption, cellular networks face growing vulnerabilities due to their inherent complexity and the integration of advanced technologies. One of the major threats in this landscape is Voice over IP (VoIP) to GSM gateways, known as SIMBox devices. These devices use multiple SIM cards to route VoIP traffic through cellular networks, enabling international bypass fraud with losses of up to $3.11 billion annually. Beyond financial impact, SIMBox activity degrades network performance, threatens national security, and facilitates eavesdropping on communications. Existing detection methods for SIMBox activity are hindered by evolving fraud techniques and implementation complexities, limiting their practical adoption in operator. This paper addresses the limitations of current detection methods by introducing SigN , a novel approach to identifying SIMBox activity at the cellular edge. The proposed method focuses on detecting remote SIM card association, a technique used by SIMBox appliances to mimic human mobility patterns. The method detects latency anomalies between SIMBox and standard devices by analyzing cellular signaling during network attachment. Extensive indoor and outdoor experiments demonstrate that SIMBox devices generate significantly higher attachment latencies, particularly during the authentication phase, where latency is up to 23 times greater than that of standard devices. We attribute part of this overhead to immutable factors such as LTE authentication standards and Internet-based communication protocols. Therefore, our approach offers a robust, scalable, and practical solution to mitigate SIMBox activity risks at the network edge.
<p class="text-end"><em>To appear in ACM AsiaCCS 2025. <a href="https://asiaccs2025.hust.edu.vn/cycle-2-papers/">[Conference site]</a></em></p>

---

### Team & Role
- **Host**: TRIBE Team, Inria Saclay  
- **Funding**: MLNS2 Associate Team  
- **Role**: PhD student researcher
