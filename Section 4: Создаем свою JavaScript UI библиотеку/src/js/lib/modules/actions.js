import $  from "../core"; 

$.prototype.on  = function(eventName, callbeck){
    if(!eventName || !callbeck){
        return this;
    }
    for (let i = 0; i < this.length; i++){
        this[i].addEventListener(eventName, callbeck);
    }

    return this;
}

$.prototype.off  = function(eventName, callbeck){
    if(!eventName || !callbeck){
        return this;
    }
    for (let i = 0; i < this.length; i++){
        this[i].removeEventListener(eventName, callbeck);
    }

    return this;
}

$.prototype.click  = function(hendlr){
    for (let i = 0; i < this.length; i++){
        if(hendlr){
            this[i].addEventListener('click', hendlr);
        } else {
            this[i].click();
        }
    }

    return this;
}