"use strict"; // setup language

var sentences = [["Je suis Adrien Trahan, un développeur qui code autant en front-end qu'en back-end. J'adore coder proprement et construire des interfaces attirantes.", "I'm Adrien Trahan, a developer who codes in front-end and in back-end. I love to code properly and to build some responsive interfaces."], ["J'ai gagné le hackathon de la polytechnique en 2017. J'ai gagné une bourse d'étude à la Polytechnique en 2018. J'ai gagné le hackathon en java de la polytechnique en 2019, ainsi j'ai gagné une bourse d'étude. J'ai participé à un hackathon d'inteligence artificielle à concordia (CONCORDAI) en python en 2019", "I won the hackathon from polytechnique in 2017. I won a bourse from polytechnique in 2018. I won the polytechnique hackathon in java in 2019: I got an other bourse at polytechnique. I participated to the concordia's artificial inteligence hackathon (CONCORDAI) in python in 2019."], ["Je code en Html/Css/Js, Swift, Python, Java et en NodeJs. <br> Je suis famillier avec npm, git, pip, cocoa pod et les requests aux serveurs. <br><br>J'ai créé un système pour gèrer des compagnies, ainsi qu'un réseau social de messages pour ma classe. J'ai créé un app d'anti-ronflement et un api pour avoir des infos sur des musiques.<br><br> Je suis interessé par l'informatique, les arts, les langues, les sciences en général et les maths.", "I'm coding in Html/Css/Js, Swift, Python, Java and in NodeJs. <br> I'm familiar with npm, git, pip, cocoa pod and with requests to servers. <br><br>I created a system to manage compagnies, I also created a social messaging app for my class. I created an anti-snoring app and an api to retrieve infos from musics.<br><br> I'm interested in informatic, arts, languages, science in general and math."], ["Suivez moi sur <span onclick='window.location = 'https://github.com/AdrienTrahan''>Github</span>, <span onclick='window.location = 'https://stackoverflow.com/users/11266658/adrien-trahan''>Stackoverflow</span> ou envoyez-moi un <a href='mailto:com.adrien.trahan@gmail.com'>email</a> !", "Follow me on <span onclick='window.location = 'https://github.com/AdrienTrahan''>Github</span>, <span onclick='window.location = 'https://stackoverflow.com/users/11266658/adrien-trahan''>Stackoverflow</span> or send me an <a href='mailto:com.adrien.trahan@gmail.com'>email</a> !"], ["<h1 class='left'>Créé avec plaisir par Adrien Trahan</h1><h1 class='right'>Copyright 2019</h1>", "<h1 class='left'>Created with pleasure by Adrien Trahan</h1><h1 class='right'>Copyright 2019</h1>"]]; // change languages

function change() {
  if (document.getElementsByClassName("language")[0].innerText == "english") {
    window.location = "index.html?eng";
  } else {
    window.location = "index.html?fra";
  }
}

window.addEventListener("load", load);

function load() {
  var language = window.location.search.replace("?", "");

  if (language == "" || language == "fra") {
    document.getElementsByClassName("language")[0].innerText = "english";
    document.getElementsByClassName("topBlock1")[0].innerHTML = sentences[0][0];
    document.getElementsByClassName("topBlock2")[0].innerHTML = sentences[1][0];
    document.getElementsByClassName("topBlock3")[0].innerHTML = sentences[2][0];
    document.getElementsByClassName("topBlock4")[0].innerHTML = sentences[3][0];
    document.getElementsByClassName("footer")[0].innerHTML = sentences[4][0];
  } else {
    document.getElementsByClassName("language")[0].innerText = "francais";
    document.getElementsByClassName("topBlock1")[0].innerHTML = sentences[0][1];
    document.getElementsByClassName("topBlock2")[0].innerHTML = sentences[1][1];
    document.getElementsByClassName("topBlock3")[0].innerHTML = sentences[2][1];
    document.getElementsByClassName("topBlock4")[0].innerHTML = sentences[3][1];
    document.getElementsByClassName("footer")[0].innerHTML = sentences[4][1];
  }

  if (isMobile()) {
    document.getElementById("alert").style.display = "block";
  }
} // custom animations


window.addEventListener("scroll", scroll);

function scroll() {
  // What % down is it?
  // presentation
  var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  var draw = scrollpercent;
  document.getElementsByClassName('indicator')[0].innerText = "1/4"; // prices

  if (draw > 0.15) {
    document.getElementsByClassName("dot")[0].style.width = "40000px";
    document.getElementsByClassName('indicator')[0].style.color = "white";
    document.getElementsByClassName("dot")[0].style.height = "40000px";
    document.getElementsByClassName('indicator')[0].innerText = "2/4";
  } else {
    document.getElementsByClassName("dot")[0].style.width = 0 + "px";
    document.getElementsByClassName("dot")[0].style.height = 0 + "px";
  } // accomplishment


  if (draw > 0.35) {
    document.getElementsByClassName('indicator')[0].style.color = "black";
    document.getElementsByClassName('indicator')[0].innerText = "3/4";
    document.getElementsByClassName("row")[0].style.height = "100%";
  } else {
    document.getElementsByClassName("row")[0].style.height = 0 + "px";
  } // follow me


  if (draw > 0.70) {
    document.getElementsByClassName('indicator')[0].style.color = "white";
    document.getElementsByClassName('indicator')[0].innerText = "4/4";
    document.getElementsByClassName("middleOpener")[0].style.height = "100%";
    document.getElementsByClassName("middleOpener")[0].style.width = "100%";
  } else {
    document.getElementsByClassName("middleOpener")[0].style.height = 0 + "px";
    document.getElementsByClassName("middleOpener")[0].style.width = "100%";
  } // copyright


  if (draw > 0.8) {
    document.getElementsByClassName("footer")[0].style.height = 500 * (draw - 0.9) + "px";
  } else {
    document.getElementsByClassName("footer")[0].style.height = 0 + "px";
  }
}

function isMobile() {
  ///<summary>Detecting whether the browser is a mobile browser or desktop browser</summary>
  ///<returns>A boolean value indicating whether the browser is a mobile browser or not</returns>
  if (sessionStorage.desktop) // desktop storage
    return false;else if (localStorage.mobile) // mobile storage
    return true; // alternative

  var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];

  for (var i in mobile) {
    if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
  } // nothing found.. assume desktop


  return false;
}
