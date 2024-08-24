const timeElement = document.getElementById("timeElement");

const date = new Date();

const currentHour = date.getHours();
const currentMinute = date.getMinutes();

const time = timeElement.textContent = `${currentHour}:${currentMinute}`

