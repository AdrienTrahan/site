window.onload = function(){
  window.addEventListener("orientationchange", function() {
    window.location = window.location;
  });
  setLanguage();
  if (isMobile()){
    if (window.innerHeight > window.innerWidth){
    document.getElementsByClassName("icon")[0].style.width = "calc(100% - 400px)";
    document.getElementsByClassName("icon")[0].style.position = "relative";
    document.getElementsByClassName("icon")[0].style.left = "50%";
    document.getElementsByClassName("icon")[0].style.top = "40px";
    document.getElementsByClassName("icon")[0].style.transform = "translateX(-50%)";
    document.getElementsByClassName("icon")[0].style.height = "auto";
    document.getElementsByTagName("H1")[0].style.width = "calc(100% - 400px)";
    document.getElementsByTagName("BUTTON")[0].style.fontSize = "40px";
    document.getElementsByTagName("BUTTON")[1].style.fontSize = "40px";
    document.getElementsByTagName("H1")[0].style.textAlign = "center";
    document.getElementsByTagName("H1")[0].style.position = "relative";
    document.getElementsByTagName("H1")[0].style.top = "50px";
    document.getElementsByTagName("H1")[0].style.fontSize = "70px";
    document.getElementsByTagName("H1")[0].style.left = "50%";
    document.getElementsByTagName("H1")[0].style.transform = "translateX(-50%)";
    document.getElementsByTagName("H2")[0].style.width = "80%";
    document.getElementsByTagName("H2")[0].style.textAlign = "center";
    document.getElementsByTagName("H2")[0].style.position = "relative";
    document.getElementsByTagName("H2")[0].style.top = "90px";
    document.getElementsByTagName("H2")[0].style.fontSize = "30px";
    document.getElementsByTagName("H2")[0].style.left = "50%";
    document.getElementsByTagName("H2")[0].style.height = "auto";
    document.getElementsByTagName("H2")[0].style.transform = "translateX(-50%)";
    document.getElementsByTagName("LI")[0].style.width = "100%";
    document.getElementsByTagName("LI")[0].style.margin = "0px";
    document.getElementsByTagName("LI")[0].style.padding = "0px";
    document.getElementsByTagName("LI")[0].style.position = "relative";
    document.getElementsByTagName("LI")[0].style.fontSize = "45px";
    document.getElementsByTagName("LI")[0].style.left = "50%";
    document.getElementsByTagName("LI")[0].style.marginLeft = "-40px";
    document.getElementsByTagName("LI")[0].style.textAlign = "center";
    document.getElementsByTagName("LI")[0].style.transform = "translateX(-50%)";
    document.getElementsByClassName("test")[0].style.width = "100%";
    document.getElementsByClassName("test")[0].style.position = "relative";
    document.getElementsByClassName("test")[0].style.left = "0px";
    document.getElementsByClassName("test")[0].style.top = "120px";

  }
  }
}
function setLanguage(){
  if (window.location.search == "?eng"){
    document.getElementsByClassName("language")[0].innerText = "Français";

    document.getElementsByTagName("H1")[0].innerHTML = languages().english.tit;
    document.getElementsByTagName("H2")[0].innerHTML = languages().english.desc;
    document.getElementsByTagName("BUTTON")[1].innerHTML = languages().english.back;
    document.getElementsByTagName("LI")[0].innerHTML = languages().english.info.proj;
  }else{
    document.getElementsByClassName("language")[0].innerText = "English";

        document.getElementsByTagName("H1")[0].innerHTML = languages().francais.tit;
        document.getElementsByTagName("H2")[0].innerHTML = languages().francais.desc;
        document.getElementsByTagName("BUTTON")[1].innerHTML = languages().francais.back;
        document.getElementsByTagName("LI")[0].innerHTML = languages().francais.info.proj;
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


function languages(){
  return JSON.parse('{"english":{"tit": "Compiler","desc": "The PEX programming language is an easy to learn language, and supports: primitive types such as numbers (integers/doubles), strings, arrays, booleans. It also supports classes, functions, and basic operations.","back":"back","info":{"git":"Github Repo","proj":"Download executable"}},"francais":{"tit": "Compiler","desc": "Le language de programmation PEX est un language facile à apprendre et supporte: les objets primitifs comme les nombres (integers/doubles), strings, arrays, booleans. Il supporte aussi les classes, les fonctions et les opérations de base.","back":"retour","info":{"git":"Repo Github","proj":"Télécharger l\'exécutable"}}}')
}

function Download(url) {
    document.getElementById('my_iframe').src = url;
};

function change() {
  if (document.getElementsByClassName("language")[0].innerText == "English") {
    window.location = "compiler.html?eng";
  } else {
    window.location = "compiler.html?fra";
  }
}
