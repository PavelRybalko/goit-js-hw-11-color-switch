const startBtnRef = document.querySelector('button[data-action=start]');
const stopBtnRef = document.querySelector('button[data-action=stop]');
stopBtnRef.setAttribute('disabled', 'disabled');
let intervalId = null;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtnRef.addEventListener('click', changeBackground);

function changeBackground() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
  startBtnRef.setAttribute('disabled', 'disabled');
  stopBtnRef.removeAttribute('disabled');
}

stopBtnRef.addEventListener('click', () => {
  clearInterval(intervalId);
  startBtnRef.removeAttribute('disabled');
  stopBtnRef.setAttribute('disabled', 'disabled');
});
