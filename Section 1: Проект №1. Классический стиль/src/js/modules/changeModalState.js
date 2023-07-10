import e from "express";
import chackNumInputs from "./chackNumInputs";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelectorAll("#width"),
    windowHeight = document.querySelectorAll("#heigth"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox");

  chackNumInputs("#width");
  chackNumInputs("#heigth");

  function bindActionToElems(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        // if(elem.langth > 1){
        //     state[prop] = i;
        // }else{
        //     state[prop] = item.value;
        // }
        // state[prop] = i;

        switch (item.noodeName) {
          case "SPAN":
            state[prop] = i;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              i === 0 ? (state[prop] = "Холодное") : (state[prop] = "Теплое");
              elem.forEach((box, j) => {
                box.checked = false;
                if (i == j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.velue;
            }
            break;
          case "SELECTO":
            state[prop] = item.velue;
            break;
        }
        console.log(state);
      });
    });
  }

  bindActionToElems("click", windowForm, "from");
  bindActionToElems("input", windowHeight, "height");
  bindActionToElems("input", windowWidth, "width");
  bindActionToElems("change", windowType, "type");
  bindActionToElems("change", windowProfile, "profile");
};

export default changeModalState;
