const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circules = document.querySelectorAll(".circule");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circules.length) {
    currentActive = circules.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

const update = () => {
  circules.forEach((circule, idx) => {
    if (idx < currentActive) {
      circule.classList.add("active");
    } else {
      circule.classList.remove("active");
    }
  });

  let actives = document.querySelectorAll(".active");

  progress.style.width =
    (actives.length - 1) / (circules.length - 1) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circules.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
