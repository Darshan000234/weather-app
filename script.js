// import { createElement } from "react";
import { getData } from "./getData.js";
import { time_converter, Date as formatDate } from "./time_conv.js";

const weatherToAnimation = {
  Clear: "https://lottie.host/c11eaebc-d5c6-4d55-8ba3-5f6bba0c5fd5/ySdoDVlz09.lottie",
  Sunny: "https://lottie.host/ff4ce444-78a5-4ff9-83a1-bf650e0d04bd/bi2t6JgkD2.lottie",
  Rain: "https://lottie.host/da79d443-3d29-4482-b9c1-f7d627b9f718/e6LlRPrPAS.lottie",
  Thunderstorm: "https://lottie.host/4a2f7e66-3360-42ad-a266-a90bd08156c7/U5Ch2HdjRn.lottie",
  Snow: "https://lottie.host/e56d7fc2-5b2d-4dec-b806-c00a5f8f7d72/ZjXg972i3d.lottie",
  Cloudy: "https://lottie.host/2f5694b4-881d-4618-afd6-d1fc919bd6f2/2Frp4E79xR.lottie",
  Mist:"https://lottie.host/efcff27e-889d-431f-92f2-9c3c763a3936/OLrAc0ryVx.lottie",
  Default: "https://lottie.host/2f5694b4-881d-4618-afd6-d1fc919bd6f2/2Frp4E79xR.lottie"
};

async function Search() {
    let city_name = String(document.getElementById('input').value);
    let Data = await getData((city_name.toLowerCase()));
    console.log(Data);
    let element = document.querySelector('.container');
    element.style.visibility = 'visible';
    let cn_con = String(Data.location.name) + " " + String(Data.location.country);
    let [date, time] = (Data.location.localtime).split(' ');
    time = time_converter(time);
    console.log(date);
    date = formatDate(date);
    let image = Data.current.condition.icon.replace("64x64", "128x128");
    let condition = Data.current.condition.text;
    let shortCondition = condition.split(" ")[0];
    const animationURL = weatherToAnimation[shortCondition] || weatherToAnimation["Default"];
    let player = document.getElementById("weather-animation");
    player.load(animationURL);
    let temp = Data.current.temp_c;
    let img = document.createElement("img");
    img.src = image;
    let root = document.querySelector('.image');
    root.innerHTML = "";
    root.appendChild(img);
    console.log(time);
    document.getElementById('cname-contname').textContent = cn_con;
    document.getElementById('dt-ti').textContent = date + " " + time;
    document.getElementById('temp').textContent = temp;
    document.getElementById('condition').textContent = condition;
}

document.querySelector('.search-btn').addEventListener('click', Search);