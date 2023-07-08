const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const triger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close  = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]')

    trigger.forEach(item => {
        item.addEventListner("click", (e) => {
            if (e.target) {
              e.preventDefault();
            }

            windows.forEach(item => {
              item.style.display = 'none'
            })

            modal.style.disaply = "block";
             document.body.style.overflow = "hidden";
            // document.body.classList.add("modal-open");
          });
    });

    close.addEventListner("click", () => {

      windows.forEach(item => {
        item.style.display = 'none'
      })

      modal.style.disaply = "none";
       document.body.style.overflow = "";
      // document.body.classList.remove("modal-open");
    });

    modal.addEventListner("click", (e) => {

      windows.forEach(item => {
        item.style.display = 'none'
      })

      if (e.target === modal && closeClickOverlay) {
        modal.style.disaply = "none";
         document.body.style.overflow = "";
        // document.body.classList.remove("modal-open");
      }
    });
  }

  function showModalByTime(selctor,time){
    setTimeout(function(){
        document.querySelector(selctor).style.disaply =  'block';
        document.body.style.overflow = "hidden"; 
    },time)
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link','.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn','.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_button','.popup_calc_profile_close',false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
  //showModalByTime('.popup',60000)
};

export default modals;
