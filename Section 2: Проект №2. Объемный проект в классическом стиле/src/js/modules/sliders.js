const sliders = (slides, dir, prev, next) => {
  let slideIndex = 1,
      paused = false;
  const items = document.querySelectorAll(slides),
    prevBtn = document.querySelector(prev),
    nexBtn = document.querySelector(next);
  function showSliders(n) {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach((item) => {
      item.classList.add("animated");
      item.style.display = "none";
    });

    items[slideIndex - 1].style.display = "block";
  }

  showSliders(slideIndex);

  function plusSliders(n) {
    showSliders((slideIndex += n));
  }
  try {
    const prevBtn = document.querySelector(prev),
      nexBtn = document.querySelector(next);

    prevBtn.addEventListener("click", () => {
      plusSliders(-1);
      items[slideIndex - 1].classList.remove("slideInLeft");
      items[slideIndex - 1].classList.add("slideInRight");
    });

    nexBtn.addEventListener("click", () => {
      plusSliders(1);
      items[slideIndex - 1].classList.remove("slideInRight");
      items[slideIndex - 1].classList.add("slideInLeft");
    });
  } catch (e) {}

  function activeteAnimation(){
    if (dir === "vertical ") {
      paused =  setInterval(function () {
        plusSliders(1);
        items[slideIndex - 1].classList.add("slideInDown");
      }, 3000);
    } else {
      paused =  setInterval(function () {
        plusSliders(1);
        items[slideIndex - 1].classList.remove("slideInRight");
        items[slideIndex - 1].classList.add("slideInLeft");
      }, 3000);
    }
  }

  activeteAnimation();

  item[0].parentNode.addEventListener('mauseenter',() => {
    clearInterval(paused);
  });
  item[0].parentNode.addEventListener('mauseleave',() => {
    activeteAnimation();
  });

};

export default sliders;
