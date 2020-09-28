const startBtnRef = document.querySelector('button[data-action=start]');
const stopBtnRef = document.querySelector('button[data-action=stop]');
stopBtnRef.disabled = true;
let intervalId = null;
let isActive = false;

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
  if (isActive) {
    return;
  }

  intervalId = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
  isActive = true;
  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;
}

stopBtnRef.addEventListener('click', () => {
  clearInterval(intervalId);
  isActive = false;
  startBtnRef.disabled = false;
  stopBtnRef.disabled = true;
});
