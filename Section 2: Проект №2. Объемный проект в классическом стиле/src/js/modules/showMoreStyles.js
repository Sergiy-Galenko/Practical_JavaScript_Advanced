import { getResource } from "../services/reguests";

const showMoreStyles = (trigger, wrapper) => {
   const btn = document.querySelector(trigger);
  // cards.forEach(card => {
  //     card.classList.add('animated', 'fadeInUp');
  // });

  // btn.addEventListener('click', () =>{
  //     cards.forEach(card => {
  //         card.classList.remo('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
  //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
  //     });
  //     btn.remove();
  // });
  btn.addEventListener("click", function(){
    getResource("http://127.0.0.1:5500/").then((res) => createCards(res)).catch(error => console.log(error));
    this.remove();
  });

  function createCards(response) {
    response.forEach(({src, title, link}) => {
      let card = document.createElement("div");
      card.classList.add(
        "animated",
        "fadeInUp",
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1"
      );

      card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href="${link}"></a>
                </div>
            `;
            document.querySelector(wrapper).appendChild(card);
    });
  }
};

export default showMoreStyles;
