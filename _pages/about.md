---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# 👋 About Me

I am currently a PhD student jointly affiliated with the **State Key Laboratory of Multimodal Artificial Intelligence Systems** at the **Institute of Automation, Chinese Academy of Sciences (CASIA)** and **Zhongguancun Academy**, under the supervision of Prof. [Cheng-Lin Liu](https://scholar.google.com/citations?user=8r3y8IMAAAAJ&hl=zh-CN).

I received my B.E. degree from the **School of Space Science and Technology** at **Xidian University** in 2021. Subsequently, I earned my Master's degree in **Electronic Information** from the **National Laboratory of Pattern Recognition (NLPR), CASIA** in 2024, also advised by Prof. [Cheng-Lin Liu](https://scholar.google.com/citations?user=8r3y8IMAAAAJ&hl=zh-CN).

My Ph.D. research focuses on artificial intelligence and deep learning methodologies, specifically at the intersection of **Large Language Models (LLMs)** and **Adjuvant Science** (**AI for Adjuvant Discovery**). Additionally, I investigate the fundamental theories of **Multimodal Large Language Models (MLLMs)**, including reliable reasoning and inference acceleration.

You can find my publications on <a href='https://scholar.google.com/citations?user=XoiT9wMAAAAJ&hl=zh-CN'>Google Scholar</a> and connect with me through various academic platforms listed in the sidebar.


# 🔥 News
- *2026.01*: &nbsp;🎉🎉 Three papers accepted to **ICLR 2026**! Including our work on adjuvant research benchmark and adaptive patching for MLLMs.
- *2025.12*: &nbsp;🎉🎉 Our paper "Recoverable Compression" has been accepted to **AAAI 2025**.
- *2025.11*: &nbsp;🎉🎉 Serving as **Program Committee Member** for **AAAI 2026** and **Reviewer** for **ICLR 2026**, **CVPR 2026**, **ICML 2026**, and **ECCV 2026**.
- *2025.10*: &nbsp;🎉🎉 Multiple papers accepted to top-tier conferences including **CVPR 2026** and **ICRA 2026**. 

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/adj_bench.png' alt="adjuvant framework" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[An Open-Ended Benchmark and Formal Framework for Adjuvant Research with MLLM](https://arxiv.org/)

**Yi Chen\***, Yu Zhang\*, Jian Xu, Xu-Yao Zhang, Hua Yue, Xinming Wang, Zequan Lyu, Wei Wei, Cheng-Lin Liu

**ICLR 2026** <strong><span class='show_paper_citations' data='XoiT9wMAAAAJ:PAPER_ID_1'></span></strong>
- First benchmark dedicated to adjuvant research using multimodal large language models
- Formal framework for representing adjuvant design principles and immune mechanisms
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2025</div><img src='images/Recoverable Compression.png' alt="recoverable compression" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Recoverable Compression: A Multimodal Vision Token Recovery Mechanism Guided by Text Information](https://ojs.aaai.org/index.php/AAAI/article/view/32229)

**Yi Chen**, Jian Xu, Xu-Yao Zhang, Wen-Zhuo Liu, Yang-Yang Liu, Cheng-Lin Liu

**AAAI 2025** <strong><span class='show_paper_citations' data='XoiT9wMAAAAJ:PAPER_ID_2'></span></strong> | [**Code**](https://github.com/banjiuyufen/Recoverable-Compression)
- Text-guided dynamic visual token recovery mechanism for multimodal models
- Achieves comparable performance while compressing visual tokens to 10% of original quantity
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv</div><img src='images/VisTopo.png' alt="vistopo framework" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[VisTopo: Dynamic Spatial Topology Modeling for Fine-Grained Visual Prompting in Multimodal Reasoning](https://arxiv.org/abs/2409.01162)

**Yi Chen**, MingMing Yu, Jie Gu, Chu Tang, Jingmin Chen, Rui-Qi Wang

**arXiv 2024** <strong><span class='show_paper_citations' data='XoiT9wMAAAAJ:PAPER_ID_3'></span></strong>
- Dual-stream prompting mechanism for modeling visual scene structure
- Achieves state-of-the-art 97.6% precision in mitigating visual hallucination
</div>
</div>

## 🤖 AI for Science & Scientific Computing

- [An Open-Ended Benchmark and Formal Framework for Adjuvant Research with MLLM](https://arxiv.org/), **Yi Chen\***, Yu Zhang\*, Jian Xu, et al. **ICLR 2026**

- [An Efficient Strategy for Data-constrained Machine Learning in Materials Science](https://arxiv.org/), ChunTing Shao\*, **Yi Chen\***, ShanMan Song, et al. **arXiv 2024**

- [MeteorPred: A Meteorological Multimodal Large Model and Dataset for Severe Weather Event Prediction](https://arxiv.org/abs/2508.06859), Shuo Tang, Jian Xu, Jiadong Zhang, **Yi Chen**, et al. **CVPR 2026**

## 🔍 Multimodal Large Language Models

- [Recoverable Compression: A Multimodal Vision Token Recovery Mechanism Guided by Text Information](https://ojs.aaai.org/index.php/AAAI/article/view/32229), **Yi Chen**, Jian Xu, Xu-Yao Zhang, et al. **AAAI 2025** | [**Code**](https://github.com/banjiuyufen/Recoverable-Compression)

- [VisTopo: Dynamic Spatial Topology Modeling for Fine-Grained Visual Prompting in Multimodal Reasoning](https://arxiv.org/abs/2409.01162), **Yi Chen**, MingMing Yu, Jie Gu, et al. **arXiv 2024**

- [Sparsity Meets Similarity: Leveraging Long-Tail Distribution for Dynamic Optimized Token Representation in Multimodal Large Language Models](https://arxiv.org/abs/2409.01162), **Yi Chen\***, Gao-Tong Yu\*, Jian Xu. **arXiv 2024**

- [One Patch Doesn't Fit All: Adaptive Patching for Native-Resolution Multimodal Large Language Models](https://arxiv.org/), Wenzhuo Liu, Weijie Yin, Fei Zhu, Shijie Ma, Haiyang Guo, **Yi Chen**, et al. **ICLR 2026**

- [Fine-Grained Post-Training Quantization for Large Vision Language Models with Integrated Gradients](https://arxiv.org/abs/2507.21649), Ziwen Xiang, Fanhu Zeng, Hongjian Fang, Rui-Qi Wang, Renxing Chen, **Yi Chen**, et al. **CVPR 2026**

## 🧠 Machine Learning & Few-Shot Learning

- [ManiNet: Manifold Network for Few-Shot Learning](https://arxiv.org/), Ruiqi Wang, Hengcan Shi, **Yi Chen**, YaoNan Wang. **AIHCIR 2025** (**Best Paper Award**)

## 🎯 Computer Vision & Robotics

- [RANGER: A Monocular Zero-Shot Semantic Navigation Framework through Contextual Adaptation](https://arxiv.org/abs/2512.24212), Ming-Ming Yu, **Yi Chen**, Börje F. Karlsson, Wenjun Wu. **ICRA 2026**

- [ChartAgent: A Chart Understanding Framework with Tool Integrated Reasoning](https://arxiv.org/abs/2512.14040), Boran Wang, Xinming Wang, **Yi Chen**, et al. **CVPR Finding 2026**

- [VAGU & GtS: LLM-Based Benchmark and Framework for Joint Video Anomaly Grounding and Understanding](https://arxiv.org/abs/2507.21507), Shibo Gao, Peipei Yang, **Yi Chen**, et al. **AAAI 2026**

- [The Evolution of Video Anomaly Detection: A Unified Framework from DNN to MLLM](https://arxiv.org/abs/2507.21649), Shibo Gao, Peipei Yang, Haiyang Guo, Yangyang Liu, **Yi Chen**, et al. **arXiv 2024**

## 📊 NLP & Information Processing

- [ElementCheck: Long-Form Text Factuality Evaluation via Sentence-Level Fact Elements](https://arxiv.org/abs/2512.14040), Xinming Wang, Haoran Du, **Yi Chen**, et al. **arXiv 2024**

- [MR-ALIGN: Meta-Reasoning Informed Factuality Alignment for Large Reasoning Models](https://arxiv.org/abs/2510.24794), Xinming Wang, Jian Xu, Bin Yu, Sheng Lian, Hongzhu Yi, **Yi Chen**, et al. **arXiv 2024**

- [The Hitchhiker's Guide to Scientific Agents: A Journey Through the Cosmos of Research Automation](https://www.techrxiv.org/users/951553/articles/1320864-the-hitchhiker-s-guide-to-autonomous-research-a-survey-of-scientific-agents), Xinming Wang, Aslan Feng, Jian Xu, **Yi Chen**, et al. **TechRxiv 2024** | [**GitHub**](https://github.com/gudehhh666/Awesome_Scientific_Agent)

## ✍️ Handwritten Text Recognition & Generation

- [Recognition of Online Handwritten Chinese Texts in Any Writing Direction via Stroke Classification Based Over-Segmentation](https://link.springer.com/chapter/10.1007/978-3-031-78183-4_24), **Yi Chen**, Heng Zhang, Min-Si Ren, Cheng-Lin Liu. **ICPR 2024**

- [Improved Learning for Online Handwritten Chinese Text Recognition with Convolutional Prototype Network](https://link.springer.com/chapter/10.1007/978-3-031-41685-9_3), **Yi Chen**, Heng Zhang, Cheng-Lin Liu. **ICDAR 2023**

- [Context-Aware Confidence Estimation for Rejection in Handwritten Chinese Text Recognition](https://link.springer.com/chapter/10.1007/978-3-031-70533-5_9), Yang-Yang Liu, **Yi Chen**, Fei Yin, Cheng-Lin Liu. **ICDAR 2024**

- [Decoupling Layout from Glyph in Online Chinese Handwriting Generation](https://arxiv.org/abs/2410.02309), Min-Si Ren, Yan-Ming Zhang, **Yi Chen**. **ICLR 2025** | [**Code**](https://github.com/singularityrms/OLHWG)

# 🎖 Honors and Awards
- *2025* **Best Paper Award**, AIHCIR 2025 (for "ManiNet: Manifold Network for Few-Shot Learning")
- *2024* **Outstanding Graduate Student**, National Laboratory of Pattern Recognition, CASIA
- *2021* **Outstanding Graduate**, Xidian University 

# 📖 Education
- *2024.09 - Present*, **Ph.D. in Pattern Recognition and Intelligent Systems**  
  State Key Laboratory of Multimodal Artificial Intelligence Systems (MAIS), Institute of Automation, Chinese Academy of Sciences & Zhongguancun Academy  
  Supervisor: Prof. [Cheng-Lin Liu](https://scholar.google.com/citations?user=8r3y8IMAAAAJ&hl=zh-CN)

- *2021.09 - 2024.06*, **M.S. in Electronic Information**  
  National Laboratory of Pattern Recognition (NLPR), Institute of Automation, Chinese Academy of Sciences  
  Supervisor: Prof. [Cheng-Lin Liu](https://scholar.google.com/citations?user=8r3y8IMAAAAJ&hl=zh-CN)

- *2017.09 - 2021.06*, **B.E. in Space Science and Technology**  
  School of Space Science and Technology, Xidian University 

# 🔬 Research Interests
- **AI for Science**: Applying artificial intelligence to scientific discovery, particularly in adjuvant research and materials science
- **Multimodal Large Language Models (MLLMs)**: Developing robust and efficient multimodal AI systems
- **Online Handwritten Text Recognition**: Recognition and generation of handwritten Chinese text
- **Computer Vision**: Image understanding, visual reasoning, and multimodal perception

# 🤝 Academic Service
- **Program Committee Member**: AAAI 2026
- **Reviewer**: ICLR 2026, CVPR 2026, ICML 2026, ECCV 2026

# 🌟 Open Source Contributions
- **PaddleScience Contributor**: Integrated Crystal Graph CNN (CGCNN) model for materials chemistry applications | [PR #977](https://github.com/PaddlePaddle/PaddleScience/pull/977)
  - Implemented full pipeline for crystal structure data processing and graph neural network training
  - Code merged into official repository and featured as an official case study

# 📧 Contact
- **Email**: yi.chen@nlpr.ia.ac.cn
- **Office**: State Key Laboratory of Multimodal Artificial Intelligence Systems, Institute of Automation, Chinese Academy of Sciences
- **Address**: Beijing 100190, China

---

*Open to collaboration and academic exchange. Please feel free to contact me via email.*