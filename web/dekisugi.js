$("#headbed").fadeOut('slow');
$("#headbed").fadeIn('slow');

const btn = document.getElementById("startStop");

let btnStatus = "stopped";

let inter = null;

function createHeart() {
  const heart = document.createElement("img");
  heart.src = "../images/studyfall.png";
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 5 + 3 + "s ";
  // heart.innerText = "🦄";
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 7000);
}

function startStop() {
  if (btnStatus === "stopped") {
    btn.innerHTML = "STOP";
    inter = setInterval(createHeart, 100);
    btnStatus = "started";
  } else {
    btn.innerHTML = "START";
    clearInterval(inter);
    btnStatus = "stopped";
  }
}

btn.addEventListener("click", startStop);


const btnn = document.getElementById("starts");

let btnnStatus = "stopped";

let interr = null;

function createHeartt() {
  const heartt = document.createElement("img");
  heartt.src = "../images/friendsfall.png";
  heartt.classList.add("heart");
  heartt.style.left = Math.random() * 100 + "vw";
  heartt.style.animationDuration = Math.random() * 5 + 3 + "s ";
  // heart.innerText = "🦄";
  document.body.appendChild(heartt);
  setTimeout(() => {
    heartt.remove();
  }, 7000);
}

function starts() {
  if (btnnStatus === "stopped") {
    btnn.innerHTML = "STOP";
    interr = setInterval(createHeartt, 100);
    btnnStatus = "started";
  } else {
    btnn.innerHTML = "START";
    clearInterval(interr);
    btnnStatus = "stopped";
  }
}

btnn.addEventListener("click", starts);






const butnn = document.getElementById("play");

let butnnStatus = "stopped";

let intterr = null;

function createHearttt() {
  const hearttt = document.createElement("img");
  hearttt.src = "../images/playfall.png";
  hearttt.classList.add("heart");
  hearttt.style.left = Math.random() * 100 + "vw";
  hearttt.style.animationDuration = Math.random() * 5 + 3 + "s ";
  // heart.innerText = "🦄";
  document.body.appendChild(hearttt);
  setTimeout(() => {
    hearttt.remove();
  }, 7000);
}

function play() {
  if (butnnStatus === "stopped") {
    butnn.innerHTML = "STOP";
    intterr = setInterval(createHearttt, 100);
    butnnStatus = "started";
  } else {
    butnn.innerHTML = "START";
    clearInterval(intterr);
    butnnStatus = "stopped";
  }
}

butnn.addEventListener("click", play);


