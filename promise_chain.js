const wait = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

wait(200).then(() => {
  console.log("Done!");
});

const go = document.querySelector(".go");

function animate(e) {
  const el = e.currentTarget;
  // 1. Change the text to GO when clicked.
  el.textContent = "GO";
  // 2. Make it a circle after 2 seconds
  wait(200)
    .then(() => {
      el.classList.add("circle");
      return wait(500);
    })
    .then(() => {
      // 3. Make it red after 0.5s
      el.classList.add("red");
      return wait(250);
    })
    .then(() => {
      el.classList.remove("circle");
      return wait(500);
    })
    .then(() => {
      el.classList.remove("red");
      el.classList.add("purple");
      return wait(500);
    })
    .then(() => {
      el.classList.add("fadeOut");
    });
}

go.addEventListener("click", animate);

go.addEventListener("clickXXXX", function go(e) {
  const el = e.currentTarget;
  // 1. Change the text to GO when clicked.
  el.textContent = "GO";
  setTimeout(function () {
    // 2. Make it a circle after 2 seconds
    el.classList.add("circle");
    setTimeout(function () {
      // 3. Make it red after 0.5s
      el.classList.add("red");
      setTimeout(function () {
        // 4. make it square after 0.25s
        el.classList.remove("circle");
        setTimeout(function () {
          // 5. make it purple
          el.classList.remove("red");
          el.classList.add("purple");
          setTimeout(function () {
            // 6. fade out after 0.5s
            el.classList.add("invisible");
            setTimeout(function () {
              console.log("You have reacted the 7th layer of callback hell");
              el.classList.remove("invisible", "purple");
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }, 500);
});
