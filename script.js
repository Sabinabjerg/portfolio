const slides = Array.from(document.querySelectorAll(".slide"));
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

function updateClasses() {
  const len = slides.length;

  slides.forEach(s => s.classList.remove("active", "prev", "next"));

  const prevIndex = (currentIndex - 1 + len) % len;
  const nextIndex = (currentIndex + 1) % len;

  slides[currentIndex].classList.add("active");
  slides[prevIndex].classList.add("prev");
  slides[nextIndex].classList.add("next");
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateClasses();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateClasses();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") prevBtn.click();
  if (e.key === "ArrowRight") nextBtn.click();
});

updateClasses();
