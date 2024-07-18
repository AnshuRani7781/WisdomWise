document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".resources .card-container .card");

  cards.forEach((card, index) => {
    const textArea = card.querySelector(".text-part");
    console.log(`Card ${index + 1} data-gif:`, card.getAttribute("data-gif"));

    card.addEventListener("mouseenter", function () {
      const gifUrl = this.getAttribute("data-gif");
      this.style.backgroundImage = `url(${gifUrl})`;
      if (textArea) {
        textArea.style.opacity = "0"; // Fade the text instead of hiding it completely
      }
    });

    card.addEventListener("mouseleave", function () {
      this.style.backgroundImage = "none";
      if (textArea) {
        textArea.style.opacity = "1";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");
  const cards = document.querySelectorAll(".card"); // 'Document' should be lowercase 'document'

  cards.forEach((card) => {
    const gifs = card.querySelectorAll(".gif");
    let currentGifIndex = 0;

    function updateGif() {
      gifs[currentGifIndex].classList.remove("active");
      currentGifIndex = (currentGifIndex + 1) % gifs.length;
      gifs[currentGifIndex].classList.add("active");
    }

    gifs[0].classList.add("active");
    setInterval(updateGif, 5000);
  });
});

const slides = document.querySelectorAll(".slide");
const radioButtons = document.querySelectorAll(
  ".slider-nav input[type='radio']"
);
let currentSlide = 0;

slides.forEach((element, index) => {
  element.style.left = `${index * 100}%`;
});

const updateSlide = () => {
  slides.forEach((element) => {
    element.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
};

const autoSlider = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
  radioButtons[currentSlide].checked = true;
};

radioButtons.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    currentSlide = index;
    updateSlide();
  });
});

setInterval(autoSlider, 4500);
// Add event listeners to each link
document.getElementById("loans-link").addEventListener("click", function () {
  document.getElementById("loans-modal").style.display = "block";
});

document
  .getElementById("insurance-link")
  .addEventListener("click", function () {
    document.getElementById("insurance-modal").style.display = "block";
  });

// Add more event listeners for each link

// Add a function to close the modal window
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Add a click event listener to the modal window to close it when clicked outside
window.addEventListener("click", function (event) {
  if (event.target.className === "modal") {
    closeModal(event.target.id);
  }
});

// import LocomotiveScroll from "locomotive-scroll";
// // Initialize Locomotive Scroll
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
//   smartphone: {
//     smooth: true,
//   },
//   tablet: {
//     smooth: true,
//   },
// });

// // Select all cards within the card-container
// const cards = document.querySelectorAll(".resources .card-container .card");

// cards.forEach((card) => {
//   card.addEventListener("mouseenter", () => {
//     scroll.scrollTo(card, {
//       offset: -100,
//       duration: 1000,
//       easing: [0.25, 0.0, 0.35, 1.0],
//     });

//     card.style.transform = "scale(1.05)";
//     const background = card.querySelector(".card-background");
//     if (background) {
//       background.style.opacity = "0";
//     }
//     card.style.setProperty("--after-opacity", "1");
//   });

//   card.addEventListener("mouseleave", () => {
//     card.style.transform = "scale(1)";
//     const background = card.querySelector(".card-background");
//     if (background) {
//       background.style.opacity = "1";
//     }
//     card.style.setProperty("--after-opacity", "0");
//   });
// });

// // Update Locomotive Scroll
// scroll.update();
