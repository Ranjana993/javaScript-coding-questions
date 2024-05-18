// ? 1. Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame. 
function debounce(func, wait, immediate) {
  let timeout;

  return function (...args) {
    const context = this;
    const callNow = immediate && !timeout;
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}

function onResize() {
  console.log('Window resized');
}

const debouncedOnResize = debounce(onResize, 200);

window.addEventListener('resize', debouncedOnResize);
