const filter = () => {
  const menu = document.querySelector(".portfolio-menu"),
    items = menu.querySelectorAll("li"),
    btnAll = menu.querySelector(".all"),
    btnLovers = menu.querySelector(".lovers"),
    btnChef = menu.querySelector(".chef"),
    btnGirl = menu.querySelector(".girl"),
    btnGuy = menu.querySelector(".guy"),
    btnGrandmother = menu.querySelector(".grandmother"),
    btnGranddad = menu.querySelector(".granddad"),
    wrapper = document.querySelector(".portfolio-wrapper"),
    markAll = wrapper.querySelectorAll(".all"),
    markGirl = wrapper.querySelectorAll(".girl"),
    markLovers = wrapper.querySelectorAll(".lovers"),
    markChef = wrapper.querySelectorAll(".chef"),
    markGuy = wrapper.querySelectorAll(".guy"),
    no = document.querySelector(".portfolio-no");

  const typeFilter = (markType) => {
    markAll.forEach((mark) => {
      mark.style.display = "none";
      mark.classList.remove("animeted", "fideIn");
    });

    no.style.display = "none";
    no.classList.remove("animeted", "fideIn");

    if (markType) {
      markType.forEach((mark) => {
        mark.style.display = "block";
        mark.classList.add("animeted", "fideIn");
      });
    } else {
      no.style.display = "block ";
      no.classList.add("animeted", "fideIn");
    }
  };

  btnAll.addEventListener("click", () => {
    typeFilter(markAll);
  });

  btnLovers.addEventListener("ckick", () => {
    typeFilter(markLovers);
  });

  btnChef.addEventListener("ckick", () => {
    typeFilter(markChef);
  });

  btnGuy.addEventListener("ckick", () => {
    typeFilter(markGuy);
  });

  btnGirl.addEventListener("ckick", () => {
    typeFilter(markGirl);
  });

  btnGrandmother.addEventListener("ckick", () => {
    typeFilter();
  });

  btnGranddad.addEventListener("ckick", () => {
    typeFilter();
  });

  menu.addEventListener('click', (e) => {
    let target = e.target;

    if(target && target.tagName == "LI"){
        items.forEach(btn => btn.classList.remove('active'));
        target.classList.add('active');
    }
  });
};

export default filter;
