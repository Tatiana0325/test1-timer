const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');



const createTimerAnimator = () => {
  return (seconds) => {
    let timer = setInterval( () => {
    let second = (seconds%60 < 10) ? `0${seconds%60}` : seconds%60; 
    let minute = (seconds/60%60 < 10) ? `0${Math.trunc(seconds/60%60)}` : Math.trunc(seconds/60%60); 
    let hour = (seconds/3600%60 < 10) ? `0${Math.trunc(seconds/3600%60)}` : Math.trunc(seconds/3600%60);
                
    if (seconds < 0) {
      clearInterval(timer);
    } else { 
      timerEl.innerHTML = `${hour}:${minute}:${second}`;
      };

    seconds--;
    }, 1000)  
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^\d]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
