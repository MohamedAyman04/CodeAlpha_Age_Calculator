const date = document.querySelector("#date");
const divs = Array.from(document.querySelectorAll("div"));
const data = document.querySelector(".data");

const calculateAge = () => {
  if (date.value != "") {
    past = new Date(date.value);
    let today = new Date();
    let diff = Math.floor(today.getTime() - past.getTime());
    let day = 1000 * 60 * 60 * 24;

    let numberOfDays = Math.floor(diff / day);
    let months = Math.floor((numberOfDays % 365) / 30);
    let years = Math.floor(numberOfDays / 365);
    let days = Math.floor((numberOfDays % 365) % 30);

    divs[0].firstElementChild.textContent = years;
    divs[1].firstElementChild.textContent = months;
    divs[2].firstElementChild.textContent = days;

    data.style.visibility = "visible";

    console.log(`${years}, ${months}, ${days}`);
  }
};
