(function () {
  "use strict";

  var agendaContent = {
    adjuvant: {
      label: {
        en: "AI for adjuvant design research path",
        zh: "佐剂设计人工智能研究路径"
      },
      steps: [
        {
          en: ["Formalize", "Represent adjuvant design principles and immune mechanisms."],
          zh: ["形式化", "表示佐剂设计原则与免疫机制。"]
        },
        {
          en: ["Benchmark", "Evaluate open-ended, multimodal scientific reasoning."],
          zh: ["评测", "评估开放式、多模态科学推理能力。"]
        },
        {
          en: ["Verify", "Check proposed designs against precedent, outcomes, and mechanisms."],
          zh: ["验证", "依据既有研究、免疫结果与机制检查候选设计。"]
        }
      ]
    },
    multimodal: {
      label: {
        en: "Structured multimodal modeling research path",
        zh: "结构化多模态建模研究路径"
      },
      steps: [
        {
          en: ["Represent", "Build efficient and adaptive multimodal representations."],
          zh: ["表示", "构建高效、自适应的多模态表示。"]
        },
        {
          en: ["Ground", "Expose spatial relations and connect language to visual evidence."],
          zh: ["定位", "显式建模空间关系，并将语言连接到视觉证据。"]
        },
        {
          en: ["Align", "Improve factuality, robustness, and model efficiency."],
          zh: ["对齐", "提升事实性、鲁棒性与模型效率。"]
        }
      ]
    },
    broader: {
      label: {
        en: "Science, action, and sequential data research path",
        zh: "科学、动作与序列数据研究路径"
      },
      steps: [
        {
          en: ["Model", "Structure scientific, temporal, and handwriting data."],
          zh: ["建模", "结构化科学、时序与手写数据。"]
        },
        {
          en: ["Act", "Connect perception to navigation, tools, and sequential decisions."],
          zh: ["行动", "将感知连接到导航、工具使用与序列决策。"]
        },
        {
          en: ["Transfer", "Reuse modeling ideas across scientific and embodied domains."],
          zh: ["迁移", "在科学与具身领域复用建模方法。"]
        }
      ]
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    var switcher = document.querySelector("[data-agenda-switcher]");
    var path = document.getElementById("agenda-path");
    if (!switcher || !path) return;

    var cards = Array.prototype.slice.call(switcher.querySelectorAll("[data-agenda]"));
    var titles = path.querySelectorAll("[data-path-title]");
    var descriptions = path.querySelectorAll("[data-path-description]");
    var activeKey = "adjuvant";
    var updateTimer;
    var supportsPointerMotion = window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function currentLanguage() {
      return document.documentElement.lang.indexOf("zh") === 0 ? "zh" : "en";
    }

    function renderPath(key, animate) {
      var content = agendaContent[key];
      var language = currentLanguage();
      if (!content) return;

      window.clearTimeout(updateTimer);

      function updateContent() {
        content.steps.forEach(function (step, index) {
          titles[index].textContent = step[language][0];
          descriptions[index].textContent = step[language][1];
        });
        path.setAttribute("aria-label", content.label[language]);
        path.classList.remove("is-updating");
      }

      if (animate) {
        path.classList.add("is-updating");
        updateTimer = window.setTimeout(updateContent, 90);
      } else {
        updateContent();
      }
    }

    function activate(card, animate) {
      var key = card.getAttribute("data-agenda");
      if (!agendaContent[key]) return;

      activeKey = key;
      cards.forEach(function (item) {
        var isActive = item === card;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
      renderPath(key, animate);
    }

    cards.forEach(function (card) {
      card.addEventListener("mouseenter", function () {
        activate(card, true);
      });

      card.addEventListener("focus", function () {
        activate(card, true);
      });

      card.addEventListener("click", function () {
        activate(card, true);
      });

      card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          activate(card, true);
        }
      });

      if (supportsPointerMotion) {
        card.addEventListener("pointermove", function (event) {
          var bounds = card.getBoundingClientRect();
          var x = (event.clientX - bounds.left) / bounds.width;
          var y = (event.clientY - bounds.top) / bounds.height;
          card.style.setProperty("--agenda-rx", ((0.5 - y) * 3.2).toFixed(2) + "deg");
          card.style.setProperty("--agenda-ry", ((x - 0.5) * 3.2).toFixed(2) + "deg");
          card.style.setProperty("--agenda-mx", (x * 100).toFixed(1) + "%");
          card.style.setProperty("--agenda-my", (y * 100).toFixed(1) + "%");
        });

        card.addEventListener("pointerleave", function () {
          card.style.setProperty("--agenda-rx", "0deg");
          card.style.setProperty("--agenda-ry", "0deg");
          card.style.setProperty("--agenda-mx", "50%");
          card.style.setProperty("--agenda-my", "50%");
        });
      }
    });

    document.addEventListener("site:languagechange", function () {
      renderPath(activeKey, false);
    });

    renderPath(activeKey, false);
  });
})();
