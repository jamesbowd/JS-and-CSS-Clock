const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

const showTime = () => {
  let date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  hourRotate = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourRotate}deg)`;

  minuteRotate = (minute / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteRotate}deg)`;

  secondRotate = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondRotate}deg)`;
};

showTime(0);

setInterval(() => {
  showTime();
}, 1000);
