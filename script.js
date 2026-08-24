onload = () => {
  const introScreen = document.getElementById("intro-screen");
  const introBtn = document.getElementById("intro-btn");
  const loveScreen = document.getElementById("love-screen");
  const florescerBtn = document.getElementById("florescer-btn");

  const startFlowerAnimation = () => {
    document.body.classList.remove("container");
  };

  if (introBtn && introScreen) {
    introBtn.addEventListener("click", () => {
      introScreen.classList.add("intro-hide");

      if (loveScreen && florescerBtn) {
        loveScreen.classList.add("love-show");

        florescerBtn.addEventListener(
          "click",
          () => {
            loveScreen.classList.add("love-hide");
            startFlowerAnimation();
          },
          { once: true }
        );
      } else {
        startFlowerAnimation();
      }
    });
  } else {
    startFlowerAnimation();
  }
};
