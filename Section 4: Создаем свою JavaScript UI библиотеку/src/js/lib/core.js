// (() =>{
//     const $ = function(selector){
//         const elemnts = document.querySelectorAll(selector);
//         const obj = {};

//         obj.hide = () =>{
//             elemnts.forEach(elem => {
//                 elem.style.display = 'none';
//             });
//             return obj;
//         };
//         obj.show = () =>{
//             elemnts.forEach(elem => {
//                 elem.style.display = '';
//             });
//             return obj;
//         };

//         return obj;
//     };

//     window.$ = $;
// })();

const $ = function(selector){
    return new $.prototype.init(selector);
}

$.prototype.init = function(selector) {
    if (!selector){
        return this; //{}
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this; 
}


$.prototype.init.prototype = $.prototype;
window.$ = $;

export default $;