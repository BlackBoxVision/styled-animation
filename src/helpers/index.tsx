const endEvents = {
  animation: 'animationend',
  OAnimation: 'oAnimationEnd',
  MozAnimation: 'animationend',
  WebkitAnimation: 'webkitAnimationEnd',
};

const startEvents = {
  animation: 'animationstart',
  OAnimation: 'oAnimationStart',
  MozAnimation: 'animationStart',
  WebkitAnimation: 'webkitAnimationStart',
};

function whichEvent(events) {
  const el = document.createElement('fakeelement');
  for (const t in events) {
    if (el.style[t] !== undefined) {
      return events[t];
    }
  }
}

export const whichStartEvent = _ => whichEvent(startEvents);
export const whichEndEvent = _ => whichEvent(endEvents);
