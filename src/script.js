/*
SCROLL REVEAL ANIMATION
*/
function revealOnScroll() {
  const revealElements = document.querySelectorAll(".reveal-element");

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const delay = parseInt(element.getAttribute("data-delay"));

    if (elementTop < windowHeight) {
      setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
      }, delay);
    }
  });
}

// Calls the function when the page loads and when it scrolls
window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);
