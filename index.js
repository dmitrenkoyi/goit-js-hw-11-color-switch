const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
};

const INTERVAL_DELAY = 1000;
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener("click", onBtnStartClick);
refs.stopBtn.addEventListener("click", onBtnStopClick);

function onBtnStartClick() {
  refs.startBtn.setAttribute("disabled", true);


  intervalId = setInterval(() => {
    refs.body.style.background = colors[randomIntegerFromInterval(0, 5)];
  }, INTERVAL_DELAY);
}

function onBtnStopClick() {
  refs.startBtn.removeAttribute("disabled");
  clearInterval(intervalId);
}