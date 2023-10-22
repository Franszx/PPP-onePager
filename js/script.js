gsap.registerPlugin(ScrollTrigger);

// const sections = document.querySelectorAll("section");

// sections.forEach((section) => {
//   const h1 = section.querySelector("h1");
//   const h2 = section.querySelector("h2");
//   const ps = section.querySelectorAll("p");

//   gsap
//     ({
//       scrollTrigger: {
//         trigger: section,
//         start: "top 50%",
//         end: "+=600px",
//         scrub: true,
//         markers: true,
//       },
//     })
//     .fromTo(
//       h2,
//       {
//         opacity: 0,
//       },
//       {
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//       }
//     )
//     .fromTo(
//       h1,
//       {
//         opacity: 0,
//       },
//       { opacity: 1, duration: 1, ease: "power2.out" }
//     )
//     .from(
//       ps,
//       {
//         opacity: 0,
//         y: 100,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.5,
//         duration: 1,
//         ease: "power2.out",
//       }
//     );
// });

// const introText = document.querySelectorAll("section > *");

// introText.forEach((el) => {
//   gsap.from(el, {
//     y: 100,
//     opacity: 0,
//     ease: "power4.out",
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: el,
//       start: "top 50%",
//       end: "+=600px",
//       scrub: true,
//     },
//   });
// });
// ----------------- picture slide show -------------- //
let slideIndex = 0;
let slideshowInterval;

function startSlideshow() {
  showSlides();
  slideshowInterval = setInterval(showSlides, 4000);
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
}

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
}

startSlideshow();
// ---------------------------------- //
function toggleMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("active");
}
