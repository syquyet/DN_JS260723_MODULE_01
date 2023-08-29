const inputCelcius = document.querySelector("#celcius");
const inputFahrenheit = document.querySelector("#fahrenheit");
const inputKelvin = document.querySelector("#kelvin");
function input() {
  const inputCelciusValue = Number(inputCelcius.value);
  inputFahrenheit.value = inputCelciusValue * 1.8 + 32;
  inputKelvin.value = inputCelciusValue + 273.15;
}
const secondElement = document.querySelector("#second");

setInterval(() => {
  const today = new Date();
  const second = today.getSeconds();
  const minute = today.getMinutes();
  const hour = today.getHours();

  const color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
  secondElement.textContent = `${hour}:${minute}:${second}`;
  if (second % 10 == 0) {
    document.body.style.background = color;
  }
  console.log(hour);
  console.log(minute);
  console.log(second);
}, 1000);
