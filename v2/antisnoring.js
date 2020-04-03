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
    document.getElementsByTagName("LI")[1].style.width = "100%";
    document.getElementsByTagName("LI")[1].style.margin = "0px";
    document.getElementsByTagName("LI")[1].style.marginLeft = "-40px";
    document.getElementsByTagName("LI")[1].style.padding = "0px";
    document.getElementsByTagName("LI")[1].style.position = "relative";
    document.getElementsByTagName("LI")[1].style.fontSize = "45px";
    document.getElementsByTagName("LI")[1].style.left = "50%";
    document.getElementsByTagName("LI")[1].style.textAlign = "center";
    document.getElementsByTagName("LI")[1].style.transform = "translateX(-50%)";
    document.getElementsByTagName("LI")[2].style.width = "100%";
    document.getElementsByTagName("LI")[2].style.margin = "0px";
    document.getElementsByTagName("LI")[2].style.marginLeft = "-40px";
    document.getElementsByTagName("LI")[2].style.padding = "0px";
    document.getElementsByTagName("LI")[2].style.position = "relative";
    document.getElementsByTagName("LI")[2].style.fontSize = "45px";
    document.getElementsByTagName("LI")[2].style.left = "50%";
    document.getElementsByTagName("LI")[2].style.textAlign = "center";
    document.getElementsByTagName("LI")[2].style.transform = "translateX(-50%)";
    document.getElementsByClassName("test")[0].style.width = "100%";
    document.getElementsByClassName("test")[0].style.position = "relative";
    document.getElementsByClassName("test")[0].style.left = "0px";
    document.getElementsByClassName("test")[0].style.top = "120px";
    document.getElementsByClassName("previews")[0].style.position = "relative";
    document.getElementsByClassName("previews")[0].style.top = "200px";
    document.getElementsByClassName("previews")[0].style.left = "0px";
    document.getElementsByClassName("previews")[0].style.width = "100%";
    document.getElementsByClassName("previewsList")[0].style.position = "relative";
    document.getElementsByClassName("previewsList")[0].style.top = "0px";
    document.getElementsByClassName("previewsList")[0].style.width = "100%";
    document.getElementsByClassName("previewsList")[0].style.left = "0px";
    document.getElementsByClassName("previewsList")[0].style.padding = "0px";
    document.getElementsByClassName("previewsList")[0].style.width = "100%";
    document.getElementsByClassName("previewsList")[0].getElementsByTagName("LI")[0].style.width = "60%";
    document.getElementsByClassName("previewsList")[0].getElementsByTagName("LI")[1].style.width = "60%";
    document.getElementsByClassName("previewsList")[0].getElementsByTagName("LI")[0].style.height = "700px";
    document.getElementsByClassName("previewsList")[0].getElementsByTagName("LI")[1].style.height = "700px";
    document.getElementsByClassName("previewsList")[0].getElementsByTagName("LI")[0].style.padding = "0px";
    document.getElementsByClassName("previewsList")[0].getElementsByTagName("LI")[1].style.padding = "0px";
    document.getElementsByClassName("previewsList")[0].getElementsByTagName("LI")[0].style.width = "100%";
    document.getElementsByClassName("previewsList")[0].getElementsByTagName("LI")[1].style.width = "100%";
    document.getElementsByClassName("previewsList")[0].getElementsByTagName("IMG")[0].style.width = "60%";
    document.getElementsByClassName("previewsList")[0].getElementsByTagName("IMG")[1].style.width = "60%";
    document.getElementsByClassName("previewsList")[0].getElementsByTagName("IMG")[0].style.left = "50%";
    document.getElementsByClassName("previewsList")[0].getElementsByTagName("IMG")[1].style.left = "50%";
    document.getElementsByClassName("previewsList")[0].getElementsByTagName("IMG")[0].style.transform = "translateX(-50%)";
    document.getElementsByClassName("previewsList")[0].getElementsByTagName("IMG")[1].style.transform = "translateX(-50%)";

  }
  }
}
function setLanguage(){
  if (window.location.search == "?eng"){
    document.getElementsByClassName("language")[0].innerText = "Français";

    document.getElementsByTagName("H1")[0].innerHTML = languages().english.tit;
    document.getElementsByTagName("H2")[0].innerHTML = languages().english.desc;
    document.getElementsByTagName("BUTTON")[1].innerHTML = languages().english.back;
    document.getElementsByTagName("LI")[0].innerHTML = languages().english.info.git;
    document.getElementsByTagName("LI")[1].innerHTML = languages().english.info.proj;
    document.getElementsByTagName("LI")[2].innerHTML = languages().english.info.ipa;
  }else{
    document.getElementsByClassName("language")[0].innerText = "English";

        document.getElementsByTagName("H1")[0].innerHTML = languages().francais.tit;
        document.getElementsByTagName("H2")[0].innerHTML = languages().francais.desc;
        document.getElementsByTagName("BUTTON")[1].innerHTML = languages().francais.back;
        document.getElementsByTagName("LI")[0].innerHTML = languages().francais.info.git;
        document.getElementsByTagName("LI")[1].innerHTML = languages().francais.info.proj;
        document.getElementsByTagName("LI")[2].innerHTML = languages().francais.info.ipa;
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
  return JSON.parse('{"english":{"tit": "Antisnoring<br>IOS App","desc": "Antisnoring is an app that wakes you up using the apple watch\'s vibration system when you snore. Many options are available.","back":"back","info":{"git":"Github Repo","proj":"Download Xcode Project","ipa": "Download IPA"}},"francais":{"tit": "Antironflement<br>App IOS","desc": "Antironflement est une app qui te réveille quand tu ronfles en utilisant le mécanisme de vibration d\'un apple watch. Il y a plusieurs options ce qui permet d\'avoir une expérience personalisée.","back":"retour","info":{"git":"Repo Github","proj":"Télécharger Xcode Project","ipa": "Télécharger IPA"}}}')
}

function change() {
  if (document.getElementsByClassName("language")[0].innerText == "English") {
    window.location = "antisnoring.html?eng";
  } else {
    window.location = "antisnoring.html?fra";
  }
}

function Download(url) {
    document.getElementById('my_iframe').src = url;
};
