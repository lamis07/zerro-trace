console.log("javascript is working");

document.addEventListener("DOMContentLoaded", function() {
  const heroHeading = document.querySelector("#hero h2");
  if (heroHeading) {
    heroHeading.textContent = "ZeroTrace Activated";
  }

  const startButton = document.querySelector("#hero a");
  if (startButton) {
    startButton.addEventListener("click", function(event) {
      event.preventDefault();
      alert("Welcome to ZeroTrace!");
      window.location.href = startButton.href;
    });
  }

  const themeButton = document.querySelector("#theme-btn");
  if (themeButton) {
    themeButton.addEventListener("click", function() {
      document.body.classList.toggle("dark-theme");
    });
  }

  const panelButton = document.querySelector("#toggle-panel-btn");
  const secretPanel = document.querySelector("#secret-panel");
  if (panelButton && secretPanel) {
    panelButton.addEventListener("click", function() {
      secretPanel.classList.toggle("show-secret-panel");
    });
  }

  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const challengesCards = document.querySelectorAll(".challenge-card");
  if (filterButtons.length && challengesCards.length) {
    const showAllCards = function() {
      challengesCards.forEach(function(card) {
        card.style.display = "block";
      });
    };

    showAllCards();

    filterButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const category = button.dataset.category;
        challengesCards.forEach(function(card) {
          if (category === "all" || card.dataset.category === category) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  const challengeButtons = document.querySelectorAll(".start-challange-btn");
  if (challengeButtons.length) {
    challengeButtons.forEach(function(button) {
      button.addEventListener("click", function(event) {
        event.preventDefault();
        const card = button.closest(".challenge-card");
        const title = card ? card.querySelector("h3")?.textContent.trim() : "this challenge";
        alert("Starting " + title + "...");
      });
    });
  }
}); 