const navs = document.getElementsByClassName("nav-list");
// console.log(navs[0].children);
const cube = document.querySelector(".box");
const sections = document.querySelectorAll(".section");

const resumeBoxs = document.querySelectorAll(".resume-box");

const resumeLists = document.querySelectorAll(".resume-list");

const portfolioLists = document.querySelectorAll(".portfolio-list");
const portfolioBoxs = document.querySelectorAll(".portfolio-box");

//navbar actions and all section actions along with cube rotation when navbar is clicked
Array.from(navs[0].children).forEach((nav, idx) => {
  nav.addEventListener("click", () => {
    // console.log(document.querySelector(".nav-list li").classList);
    document.querySelector(".nav-list li.active")?.classList.remove("active");
    nav.classList.add("active");
    cube.style.transform = `rotateY(${idx * -90}deg)`;
    document.querySelector(".section.active").classList.remove("active");
    sections[idx].classList.add("active");
    const array = Array.from(sections);
    const arrSecs = array.slice(1, -1); // only requires indexes 1,2,3 or does not require start and end indexes
    arrSecs.forEach((arrSec) => {
      if (arrSec.classList.contains("active")) {
        sections[4].classList.add("action-contact");
      }
    });
    if (sections[0].classList.contains("active")) {
      sections[4].classList.remove("action-contact");
    }
  });
});

//resume section when clicking tab-list
resumeLists.forEach((list, idx) => {
  list.addEventListener("click", () => {
    document.querySelector(".resume-list.active").classList.remove("active");
    list.classList.add("active");

    document.querySelector(".resume-box.active").classList.remove("active");
    resumeBoxs[idx].classList.add("active");
  });
});

//portfolio section when clicking tab-list
portfolioLists.forEach((list, idx) => {
  console.log(list);
  list.addEventListener("click", () => {
    document.querySelector(".portfolio-list.active").classList.remove("active");
    list.classList.add("active");

    document.querySelector(".portfolio-box.active").classList.remove("active");
    portfolioBoxs[idx].classList.add("active");
  });
});

//visibility for contact section when reloading(cube reloading animation)
setTimeout(() => {
  sections[4].classList.remove("active");
}, 1500);

// show more button
const parentContainer = document.querySelector(".section about");
parentContainer.addEventListener("click", (event) => {
  const current = event.target;
  const isReadMoreBtn = current.className.includes("btn");

  if (!isReadMoreBtn) return;

  const currentText = event.target.parentNode.querySelector(".more-text");
  currentText.classList.toggle("more-text--show");
  current.textContent = current.textContent.includes("Read more")
    ? "Read less..."
    : "Read More...";
});
