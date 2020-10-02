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
    this.stopBtnRef.setAttribute('disabled', 'disabled');
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

    this.startBtnRef.setAttribute('disabled', 'disabled');
    this.stopBtnRef.removeAttribute('disabled');
  }

  stopChangeColor() {
    clearInterval(this.intervalId);
    this.startBtnRef.removeAttribute('disabled');
    this.stopBtnRef.setAttribute('disabled', 'disabled');
  }
}

const colorSwitch = new ColorSwitch(
  'button[data-action=start]',
  'button[data-action=stop]',
);

colorSwitch.run();
