document.addEventListener("DOMContentLoaded", function () {
  const counterDisplay = document.querySelector(".counter");
  const resetBtn = document.querySelector(".reset");
  const bubbleContainer = document.querySelector(".bubble-container");

  let count = 0;

  function createBubbles() {
    // Document fragment
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      const pos = getRandomPos();
      const size = getRandomSize(25, 150);

      // Template literals
      bubble.style.cssText = `left:${pos.x}px; top:${pos.y}px; width:${size}px; height:${size}px;`;

      fragment.appendChild(bubble);
    }
    bubbleContainer.appendChild(fragment);
  }

  // click events
  bubbleContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("bubble")) {
      const bubble = e.target;
      bubble.classList.add("burst");

      // wait until burst effect finished
      setTimeout(() => {
        bubble.remove();
      }, 300);
      count++;
      counterDisplay.textContent = count;
    }
  });

  resetBtn.addEventListener("click", function () {
    bubbleContainer.innerHTML = "";
    count = 0;
    counterDisplay.textContent = count;
    createBubbles();
  });

  function getRandomPos() {
    const x = Math.floor(
      Math.random() * (document.documentElement.clientWidth - 100)
    );
    const y = Math.floor(
      Math.random() * (document.documentElement.clientHeight - 100)
    );
    return { x, y };
  }

  function getRandomSize(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  createBubbles();
});
