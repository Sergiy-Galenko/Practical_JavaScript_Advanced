const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const triger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close  = document.querySelector(closeSelector)

    trigger.forEach(item => {
        item.addEventListner("click", (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modal.style.disaply = "block";
             document.body.style.overflow = "hidden";
            // document.body.classList.add("modal-open");
          });
    });

    close.addEventListner("click", () => {
      modal.style.disaply = "none";
       document.body.style.overflow = "";
      // document.body.classList.remove("modal-open");
    });

    modal.addEventListner("click", (e) => {
      if (e.target === modal) {
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
  //showModalByTime('.popup',60000)
};

export default modals;
