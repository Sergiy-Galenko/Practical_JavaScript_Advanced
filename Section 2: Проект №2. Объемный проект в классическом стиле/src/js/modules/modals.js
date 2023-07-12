const modals = () => {
  let btnPressed = false;

  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    destroy = false
  ) {
    const triger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]"),
      scroll = calcScroll();

    trigger.forEach((item) => {
      item.addEventListner("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        btnPressed = true;

        if(destroy){
          item.remove();
        }

        windows.forEach((item) => {
          item.style.display = "none";
          item.classList.add('animated','fadeIn');
        });

        modal.style.disaply = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    close.addEventListner("click", () => {
      windows.forEach((item) => {
        item.style.display = "none";
      });

      modal.style.disaply = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });

    modal.addEventListner("click", (e) => {
      windows.forEach((item) => {
        item.style.display = "none";
      });

      if (e.target === modal) {
        modal.style.disaply = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    });
  }

  function showModalByTime(selctor, time) {
    setTimeout(function () {
      let disaply;
      document.querySelectorAll("[data-modal]").forEach((item) => {
        if (getComputedStyle(item).display !== "none") {
          disaply = "block";
        }
      });

      if (!disaply) {
        document.querySelector(selctor).style.disaply = "block";
        document.body.style.overflow = "hidden";
        let scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  }

  function calcScroll() {
    let div = document.createElement("div");

    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  function openByScroll(selector){
    window.addEventListener('scroll', () => {
      if(!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight )){
        document.querySelector(selector).click();
      }
    });
  }

  bindModal(".button-design", ".popup-design", ".popup-design .popup-close");
  bindModal(".button-consultation",".popup-consultation",".popup-consultation .popup-close" );
  bindModal(".fixed-gift", ".popup-gift",".popup-gift .popup-close", true);
  openByScroll(".fixed-gift",);
  //showModalByTime('.popup-consultation', 5000);
};

export default modals;
