const header = document.querySelector("header"),
  links = Array.from(document.querySelectorAll("#links li"));
/*    UTILS      */

links.forEach((li) => {
  li.addEventListener("click", removeActiveLinks);
});
function removeActiveLinks() {
  links.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
    header.querySelector("nav ul").classList.remove("active");
  });
}
window.onscroll = function () {
  if (window.scrollY === 0) {
    document.querySelector("header").classList.remove("active");
  } else {
    document.querySelector("header").classList.add("active");
  }
};

function scrollto(id, n) {
  if (document.querySelector(id) === null) {
    return false;
  }
  var sn = n !== undefined && n !== null ? n : 0;

  window.scrollTo(0, document.querySelector(id).offsetTop - 68 + sn);
}

header.querySelector(".container nav .toggle").onclick = function () {
  document.querySelector("header nav ul").classList.toggle("active");
  // console.log(document.querySelector("header nav ul"));
  // console.log("HELLO");
};

function hide(d) {
  d.classList.toggle("showen");
  document.body.classList.remove("unscrollable");
}
/*
document.onclick = function (e){
  if(e.target.tagName.toLowerCase() === 'img' && e.target !== document.querySelector('.floated > img')){
    document.querySelector('.floated > img').src = e.target.src;
    document.querySelector('.floated').classList.add('showen');
    document.body.classList.add('unscrollable');
  }
}
*/
Array.from(document.querySelectorAll("#projects img")).forEach((e) => {
  e.addEventListener("click", (event) => {
    document.querySelector(" .specilization .box .modal").style.display =
      "block";
    document.querySelector(".modal .madal-content").src = event.target.src;
  });
});

var close = document.querySelector(".modal .close");
close.onclick = function () {
  document.querySelector(" .specilization .box .modal").style.display = "none";
};

function ering(t, suc) {
  var time = 3000;
  document.querySelector(".contact .container .one form p").innerHTML = t;
  document
    .querySelector(".contact .container .one form p")
    .classList.add("showen");

  if (suc !== undefined && suc !== null && suc === "SUC") {
    document
      .querySelector(".contact .container .one form p")
      .classList.add("suc");
    time = 5000;
  } else {
    document
      .querySelector(".contact .container .one form p")
      .classList.remove("suc");
  }

  var timeOUT = setTimeout(() => {
    document
      .querySelector(".contact .container .one form p")
      .classList.remove("showen");
    document
      .querySelector(".contact .container .one form p")
      .classList.remove("suc");
    clearTimeout(timeOUT);
  }, time);
}

// SLIDER
var val,
  isPause = false;
function slider(dir) {
  var showen = document.querySelector(".landing > img.showen"),
    side = showen.nextElementSibling;

  if (dir !== null && dir !== undefined) {
    isPause = true;
    setTimeout(() => {
      isPause = false;
    }, 2500);
  }

  if (dir === "from") {
    side = showen.previousElementSibling;

    if (side.tagName.toLocaleLowerCase() !== "img") {
      document
        .querySelectorAll(".landing > img")
        [document.querySelectorAll(".landing > img").length - 1].classList.add(
          "showen"
        );
    } else {
      side.classList.add("showen");
    }
  } else {
    if (side.tagName.toLocaleLowerCase() !== "img") {
      document.querySelectorAll(".landing > img")[0].classList.add("showen");
    } else {
      side.classList.add("showen");
    }
  }

  showen.classList.remove("showen");
}

// choose
var switcherlist = document.querySelectorAll(".switcher li");
var imglist = Array.from(document.querySelectorAll(".specilization .content"));

switcherlist.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageimg);
});

function removeActive() {
  switcherlist.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function manageimg() {
  imglist.forEach((imger) => {
    imger.style.display = "none";
  });
  document.querySelectorAll(this.dataset.work).forEach((el) => {
    el.style.display = "block";
  });
}
//ALT
let ourProjects = document.querySelectorAll("#projects img");

for (i = 0; i < ourProjects.length; i++) {
  if (ourProjects[i].hasAttribute("alt")) {
    ourProjects[i].setAttribute("alt", "Coordination");
  }
}
//ALT
let ourTeam = document.querySelectorAll("#team img");

for (i = 0; i < ourTeam.length; i++) {
  if (ourTeam[i].hasAttribute("alt")) {
    ourTeam[i].setAttribute("alt", "team");
  }
}
//ALT
let ourPartners = document.querySelectorAll("#partners img");

for (i = 0; i < ourPartners.length; i++) {
  if (ourPartners[i].hasAttribute("alt")) {
    ourPartners[i].setAttribute("alt", "Partners");
  }
}
//specilization
document
  .querySelector(".specilization button")
  .addEventListener("click", () => {
    if (
      !document
        .querySelector(".specilization .box")
        .classList.contains("active")
    ) {
      document.querySelector(".specilization .box").classList.add("active");
      document.querySelector(".specilization button").textContent = "اخفاء";
    } else {
      document.querySelector(".specilization .box").classList.remove("active");
      document.querySelector(".specilization button").textContent = "عرض الكل";
    }
  });
