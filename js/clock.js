const username = prompt("isim");

const capitalize = (string) =>
  string.charAt(0).toLocaleUpperCase() + string.slice(1).toLocaleLowerCase();

const myName = document.querySelector("#myName");

myName.innerHTML = capitalize(username);

// const time = new Date().toLocaleString();

// const myClock = document.querySelector("#myClock")

// myClock.innerHTML = time

let clockElement = document.getElementById("myClock");

const showTime = () => {
  setInterval(() => {
    let dateObj = new Date();

    let time = dateObj.toLocaleTimeString();
    let date = dateObj.toLocaleDateString();
    let day = dateObj.toLocaleDateString("tr-TR", { weekday: "long" });

    clockElement.innerHTML = `${date} ${day} </br> ${time}`;
  }, 999);
};

clockElement.addEventListener("onload", clockElement.onload());
