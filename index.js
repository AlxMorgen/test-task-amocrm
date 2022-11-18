const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");
let timer;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    timer = setInterval(() => {
      let hour = Math.floor(seconds / 60 / 60);
      if (hour < 10) {
        hour = `0${hour}`;
      }
      let minute = Math.floor((seconds - hour * 60 * 60) / 60);
      if (minute < 10) {
        minute = `0${minute}`;
      }
      let second = Math.floor(seconds - hour * 60 * 60 - minute * 60);
      if (second < 10) {
        second = `0${second}`;
      }

      if (seconds < 0) {
        clearInterval(timer);
        alert("Время вышло");
      } else {
        timerEl.innerHTML = `${hour}:${minute}:${second}`;
      }

      seconds--;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^\d]/g, "");
});

buttonEl.addEventListener("click", () => {
  clearInterval(timer);

  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
