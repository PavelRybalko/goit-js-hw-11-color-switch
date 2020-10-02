// const startBtnRef = document.querySelector('button[data-action=start]');
// const stopBtnRef = document.querySelector('button[data-action=stop]');
// stopBtnRef.disabled = true;
// let intervalId = null;

// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// startBtnRef.addEventListener('click', changeBackground);

// function changeBackground() {
//   intervalId = setInterval(() => {
//     document.body.style.backgroundColor =
//       colors[randomIntegerFromInterval(0, 5)];
//   }, 1000);
//   startBtnRef.disabled = true;
//   stopBtnRef.disabled = false;
// }

// stopBtnRef.addEventListener('click', () => {
//   clearInterval(intervalId);
//   startBtnRef.disabled = false;
//   stopBtnRef.disabled = true;
// });

class ColorSwitch {
  constructor(startBtnSelector, stopBtnSelector) {
    this.colors = [
      '#FFFFFF',
      '#2196F3',
      '#4CAF50',
      '#FF9800',
      '#009688',
      '#795548',
    ];

    this.intervalId = null;
    this.startBtnRef = document.querySelector(startBtnSelector);
    this.stopBtnRef = document.querySelector(stopBtnSelector);
    this.stopBtnRef.setAttribute('disabled', 'true');
  }

  randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  run() {
    this.startBtnRef.addEventListener(
      'click',
      this.startChangeColor.bind(this),
    );
    this.stopBtnRef.addEventListener('click', this.stopChangeColor.bind(this));
  }

  startChangeColor() {
    this.intervalId = setInterval(() => {
      document.body.style.backgroundColor = this.colors[
        this.randomIntegerFromInterval(0, 5)
      ];
    }, 1000);

    this.startBtnRef.setAttribute('disabled', 'true');
    this.stopBtnRef.setAttribute('disabled', 'false');
  }

  stopChangeColor() {
    clearInterval(this.intervalId);
    this.startBtnRef.setAttribute('disabled', 'false');
    this.stopBtnRef.setAttribute('disabled', 'true');
  }
}

const colorSwitch = new ColorSwitch(
  'button[data-action=start]',
  'button[data-action=stop]',
);

colorSwitch.run();
