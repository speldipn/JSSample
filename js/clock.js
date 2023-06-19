const dateObj = document.querySelector("#date");
const clock = document.querySelector("#clock");

const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  dateObj.innerText = `${year}-${month}-${day}`;
};

const getClock = () => {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${minutes}:${seconds}`;
};

getDate();
getClock();
setInterval(getClock, 1000);
