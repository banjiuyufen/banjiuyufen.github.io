(function () {
  "use strict";

  var STORAGE_KEY = "preferred-language";
  var supportedLanguages = ["en", "zh"];

  function getInitialLanguage() {
    var savedLanguage = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("lang");
    if (supportedLanguages.indexOf(savedLanguage) !== -1) return savedLanguage;
    return document.documentElement.lang === "zh" ? "zh" : "en";
  }

  function applyLanguage(language) {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

    document.querySelectorAll(".lang-switch").forEach(function (element) {
      var content = element.getAttribute("data-lang-" + language);
      if (content) element.innerHTML = content;
    });

    var toggle = document.getElementById("langToggle");
    if (toggle) {
      var nextLanguage = language === "en" ? "中文" : "EN";
      toggle.textContent = nextLanguage;
      toggle.setAttribute("aria-label", language === "en" ? "切换至中文" : "Switch to English");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var currentLanguage = getInitialLanguage();
    var toggle = document.getElementById("langToggle");

    applyLanguage(currentLanguage);

    if (toggle) {
      toggle.addEventListener("click", function () {
        currentLanguage = currentLanguage === "en" ? "zh" : "en";
        localStorage.setItem(STORAGE_KEY, currentLanguage);
        localStorage.removeItem("lang");
        applyLanguage(currentLanguage);
      });
    }
  });
})();
