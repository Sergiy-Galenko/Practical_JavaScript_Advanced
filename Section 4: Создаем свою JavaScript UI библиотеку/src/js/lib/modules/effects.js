import $  from "../core";

$.prototype.animeteOverTime = function(dur, cb, fin){
    let timeStart;

    function _animeteOverTime(time){
        if(!timeStart){
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / dur, 1);

        cb(complection);

        if(timeElapsed < dur){
            requestAnimationFrame(animeteOverTime)
        }else{
            if(typeof fin === 'function'){
                fin();
            }
        }
    }

    return _animeteOverTime;
};

$.prototype.fideIn = function(dur, display, fin){
    for(let i = 0; i < this.length; i++){
        this[i].style.display = display || 'block';

        const _fideIn = (complection ) =>{
            this[i].style.opacity = complection;
        };


        const ani = this.animeteOverTime(dur, _fideIn, fin);
        requestAnimationFrame(ani);
    }
    
    return this;
}

$.prototype.fideOut = function(dur, display, fin){
    for(let i = 0; i < this.length; i++){
       

        const _fideOut = (complection ) =>{
            this[i].style.opacity = 1 - complection;
            if (complection === 1){
                this[i].style.display = 'none';
            }
        };


        const ani = this.animeteOverTime(dur, _fideOut, fin);
        requestAnimationFrame(ani);
    }
    
    return this;
}