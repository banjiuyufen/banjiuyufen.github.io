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

  document.addEventListener("DOMContentLoaded", function () {
    var panel = document.querySelector("[data-publication-filter]");
    if (!panel) return;

    var section = panel.closest("section");
    var buttons = Array.prototype.slice.call(panel.querySelectorAll("[data-filter]"));
    var groups = Array.prototype.slice.call(section.querySelectorAll(".publication-group"));
    var items = Array.prototype.slice.call(section.querySelectorAll(".publication-list > li"));
    var status = panel.querySelector(".publication-filter-status");
    var counts = {};

    items.forEach(function (item) {
      var topics = Array.prototype.slice.call(item.querySelectorAll(".topic-label")).map(function (label) {
        var topic = label.textContent.trim();
        var slug = topicSlugs[topic] || topic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        label.setAttribute("data-topic", slug);
        counts[slug] = (counts[slug] || 0) + 1;
        return slug;
      });
      item.setAttribute("data-topics", topics.join(" "));
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

      items.forEach(function (item) {
        var topics = (item.getAttribute("data-topics") || "").split(" ");
        var visible = filter === "all" || topics.indexOf(filter) !== -1;
        item.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      groups.forEach(function (group) {
        group.hidden = !group.querySelector(".publication-list > li:not([hidden])");
      });

      buttons.forEach(function (candidate) {
        var active = candidate === button;
        candidate.classList.toggle("is-active", active);
        candidate.setAttribute("aria-pressed", active ? "true" : "false");
      });

      panel.setAttribute("data-active-filter", filter);
      updateStatus(filter, visibleCount, button);
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        applyFilter(button);
      });
    });

    document.addEventListener("site:languagechange", function () {
      var active = panel.querySelector(".publication-filter.is-active") || buttons[0];
      updateStatus(active.getAttribute("data-filter"), Number(active.getAttribute("data-count")), active);
    });

    applyFilter(buttons[0]);
  });
})();
