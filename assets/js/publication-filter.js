(function () {
  "use strict";

  var topicSlugs = {
    "AI for Science": "ai-for-science",
    "Multimodal": "multimodal",
    "LLMs": "llms",
    "NLP": "nlp",
    "Efficient MLLMs": "efficient-mllms",
    "Embodied AI": "embodied-ai",
    "Agents": "agents",
    "Video": "video",
    "OCR": "ocr",
    "Machine Learning": "machine-learning",
    "Generative Modeling": "generative-modeling",
    "Survey": "survey"
  };

  var authorRanks = {
    "An Open-Ended Benchmark and Formal Framework for Adjuvant Research with MLLM": 1,
    "SAVANT: A Neuro-Symbolic Verification Framework for Adjuvant Design": 1,
    "Topology-Aware Visual Prompts are Weakly Supervised Spatial Grounding Learners": 1,
    "ElementCheck: Long-Form Text Factuality Evaluation via Sentence-Level Fact Elements": 3,
    "Generation-Augmented Generation: A Plug-and-Play Framework for Private Knowledge Injection in Large Language Models": 3,
    "BioChartBench: A Benchmark for Structured Quantitative Extraction from Biomedical Charts": 4,
    "OpenFC: Learning Verification Policies for Open-Search Fact Checking": 5,
    "One Patch Doesn't Fit All: Adaptive Patching for Native-Resolution Multimodal Large Language Models": 6,
    "Fine-Grained Post-Training Quantization for Large Vision Language Models with Integrated Gradients": 6,
    "MR-ALIGN: Meta-Reasoning Informed Factuality Alignment for Large Reasoning Models": 6,
    "Recoverable Compression: A Multimodal Vision Token Recovery Mechanism Guided by Text Information": 1,
    "Sparsity Meets Similarity: Leveraging Long-Tail Distribution for Dynamic Optimized Token Representation in Multimodal Large Language Models": 1,
    "An Efficient Strategy for Data-Constrained Machine Learning in Materials Science": 2,
    "RANGER: A Monocular Zero-Shot Semantic Navigation Framework through Visual Contextual Adaptation": 2,
    "ChartAgent: A Chart Understanding Framework with Tool Integrated Reasoning": 3,
    "VAGU & GtS: LLM-Based Benchmark and Framework for Joint Video Anomaly Grounding and Understanding": 3,
    "MeteorPred: A Meteorological Multimodal Large Model and Dataset for Severe Weather Event Prediction": 4,
    "CL-OCR: Fusing Layout Analysis and Adapting Recognition for Document Parsing in the Wild": 4,
    "MapGPT: A Map-Centric Multimodal Model and Benchmark for Indoor Spatial Reasoning": 5,
    "ManiNet: Manifold Network for Few-Shot Learning": 3,
    "Decoupling Layout from Glyph in Online Chinese Handwriting Generation": 3,
    "The Evolution of Video Anomaly Detection: A Unified Framework from DNN to MLLM": 5,
    "Recognition of Online Handwritten Chinese Texts in Any Writing Direction via Stroke Classification Based Over-Segmentation": 1,
    "Context-Aware Confidence Estimation for Rejection in Handwritten Chinese Text Recognition": 2,
    "The Hitchhiker's Guide to Scientific Agents: A Journey Through the Cosmos of Research Automation": 4,
    "Improved Learning for Online Handwritten Chinese Text Recognition with Convolutional Prototype Network": 1
  };

  document.addEventListener("DOMContentLoaded", function () {
    var panel = document.querySelector("[data-publication-filter]");
    if (!panel) return;

    var section = panel.closest("section");
    var buttons = Array.prototype.slice.call(panel.querySelectorAll("[data-filter]"));
    var groups = Array.prototype.slice.call(section.querySelectorAll(".publication-group"));
    var items = Array.prototype.slice.call(section.querySelectorAll(".publication-list > li"));
    var status = panel.querySelector(".publication-filter-status");
    var counts = {};
    var records = [];

    items.forEach(function (item, originalIndex) {
      var title = item.querySelector(".publication-entry__title").textContent.trim();
      var venue = item.querySelector(".venue");
      var yearMatch = venue ? venue.textContent.match(/\b(20\d{2})\b/) : null;
      var topics = Array.prototype.slice.call(item.querySelectorAll(".topic-label")).map(function (label) {
        var topic = label.textContent.trim();
        var slug = topicSlugs[topic] || topic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        label.setAttribute("data-topic", slug);
        counts[slug] = (counts[slug] || 0) + 1;
        return slug;
      });
      item.setAttribute("data-topics", topics.join(" "));
      item.setAttribute("data-year", yearMatch ? yearMatch[1] : "0");
      item.setAttribute("data-author-rank", authorRanks[title] || 99);
      records.push({
        item: item,
        title: title,
        topics: topics,
        year: yearMatch ? Number(yearMatch[1]) : 0,
        authorRank: authorRanks[title] || 99,
        originalIndex: originalIndex
      });
    });

    records.sort(function (a, b) {
      return b.year - a.year ||
        a.authorRank - b.authorRank ||
        a.originalIndex - b.originalIndex;
    });

    var resultGroup = document.createElement("div");
    resultGroup.className = "publication-group publication-group--results";
    resultGroup.setAttribute("data-publication-results", "");
    var resultList = document.createElement("ul");
    resultList.className = "publication-list";
    resultGroup.appendChild(resultList);
    panel.insertAdjacentElement("afterend", resultGroup);
    records.forEach(function (record) {
      resultList.appendChild(record.item);
    });
    groups.forEach(function (group) {
      group.hidden = true;
    });

    buttons.forEach(function (button) {
      var filter = button.getAttribute("data-filter");
      var count = filter === "all" ? items.length : (counts[filter] || 0);
      var countNode = button.querySelector(".publication-filter__count");
      button.setAttribute("data-count", count);
      if (countNode) countNode.textContent = count;
      if (filter !== "all" && count === 0) button.hidden = true;
    });

    function currentLanguage() {
      return document.documentElement.lang.indexOf("zh") === 0 ? "zh" : "en";
    }

    function updateStatus(filter, visibleCount, button) {
      if (!status) return;
      var label = button.textContent.replace(/\d+$/, "").trim();
      if (currentLanguage() === "zh") {
        status.textContent = filter === "all" ? "显示全部 " + visibleCount + " 篇论文" : "显示 " + label + " 方向的 " + visibleCount + " 篇论文";
      } else {
        status.textContent = filter === "all" ? "Showing all " + visibleCount + " publications" : "Showing " + visibleCount + " publications in " + label;
      }
    }

    function applyFilter(button) {
      var filter = button.getAttribute("data-filter");
      var visibleCount = 0;

      records.forEach(function (record) {
        var visible = filter === "all" || record.topics.indexOf(filter) !== -1;
        record.item.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      buttons.forEach(function (candidate) {
        var active = candidate === button;
        candidate.classList.toggle("is-active", active);
        candidate.setAttribute("aria-pressed", active ? "true" : "false");
      });

      panel.setAttribute("data-active-filter", filter);
      resultGroup.hidden = visibleCount === 0;
      updateStatus(filter, visibleCount, button);
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        applyFilter(button);
      });

      button.addEventListener("keydown", function (event) {
        var available = buttons.filter(function (candidate) {
          return !candidate.hidden;
        });
        var currentIndex = available.indexOf(button);
        var targetIndex = currentIndex;

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          targetIndex = (currentIndex + 1) % available.length;
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          targetIndex = (currentIndex - 1 + available.length) % available.length;
        } else if (event.key === "Home") {
          targetIndex = 0;
        } else if (event.key === "End") {
          targetIndex = available.length - 1;
        } else {
          return;
        }

        event.preventDefault();
        available[targetIndex].focus();
      });
    });

    document.addEventListener("site:languagechange", function () {
      var active = panel.querySelector(".publication-filter.is-active") || buttons[0];
      updateStatus(active.getAttribute("data-filter"), Number(active.getAttribute("data-count")), active);
    });

    applyFilter(buttons[0]);
  });
})();
