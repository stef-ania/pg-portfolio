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

/*
LEFT SIDE ANIMATION
*/
function showAfterScroll() {
  const animatedElement = document.querySelector(".animated-element");

  function handleScroll() {
    const elementoTop = animatedElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementoTop < windowHeight) {
      animatedElement.style.opacity = 1;
      animatedElement.style.transform = "translateX(0)";
      window.removeEventListener("scroll", handleScroll); // Remove the listener once the element has been shown
    }
  }

  // Add a listener for the 'scroll' event
  window.addEventListener("scroll", handleScroll);

  // Call handleScroll on page load to check if the element is already visible
  handleScroll();
}

// Call the function when the page loads
window.addEventListener("load", showAfterScroll);
