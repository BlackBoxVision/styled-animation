export function whichEndEvent() {
    let t;
    const el = document.createElement('fakeelement');
    const transitions = {
        animation:'animationend',
        OAnimation:'oAnimationEnd',
        MozAnimation:'animationend',
        WebkitAnimation:'webkitTAnimationnEnd'
    };

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}
