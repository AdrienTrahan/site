let locked = false
let siteContent = {
    0: {
        "hook-words": "Développeur fullstack passionné",
        "quick-desc": "Je m’appelle Adrien et je suis un développeur fullstack web & ios avec le goût d’apprendre et l’envie de concevoir des interfaces propres et attrayantes.",
        "experience-button": "mon porfolio",
    },
    1: {
        "hook-words": "Passionate fullstack developer",
        "quick-desc": "My name is Adrien and I am a full stack web & ios developer with a taste for learning and the desire to design clean and attractive interfaces.",
        "experience-button": "my porfolio",
    },
    links: {
        0: "cv",
        1: "resume"
    }
}
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
let currentLanguage = parseInt(getCookie("lang")) | 0;
function changeLanguage(language){
    currentLanguage = parseInt(language);
    eraseCookie("lang");
    setCookie("lang", language, 300);
    updatePage();
}
function updatePage(){
    let keys = Object.keys(siteContent[currentLanguage]);
    document.getElementsByClassName("selection-view")[0].value = currentLanguage;
    document.getElementsByClassName("chosen-element")[0].innerText = currentLanguage ? "🇺🇸" : "🇫🇷";
    for (var i = 0; i < keys.length; i++){
        document.getElementsByClassName(keys[i])[0].innerText = siteContent[currentLanguage][keys[i]];
    }
    document.getElementsByClassName("experience-button")[0].onclick = () => window.open("/" + siteContent.links[currentLanguage] + ".pdf")
}
window.onload = () => {
    document.querySelector('#player').defaultPlaybackRate = 10.0;
    updatePage()
};
window.onscroll = (e) => {
    var h = document.documentElement, 
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
    setState((h[st] - document.getElementsByClassName("fixed-presentation")[0].clientHeight + 200 > 0));

}

function setState(opened){
    let projectsWindow = document.getElementsByClassName("projects")[0];
    // console.log(getCoords(projectsWindow).top);
    if (opened){
        if (!locked){
            projectsWindow.style.height = "100%";
            projectsWindow.style.marginTop = "0px";
            scrollToY(getCoords(projectsWindow).top + 40, 100, 0)
        }
        locked = true
    }else{
        locked = false
        projectsWindow.style.height = "200px";
        projectsWindow.style.marginTop = "200px";
    }
}
function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var docEl = document.documentElement;
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;
    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;
    return { top: Math.round(top), left: Math.round(left) };
}
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();
  
  // main function
  function scrollToY(scrollTargetY, speed, easing) {
      // scrollTargetY: the target scrollY property of the window
      // speed: time in pixels per second
      // easing: easing equation to use
  
      var scrollY = window.scrollY,
          scrollTargetY = scrollTargetY || 0,
          speed = speed || 2000,
          easing = easing || 'easeOutSine',
          currentTime = 0;
  
      // min time .1, max time .8 seconds
      var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
  
      // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
      var PI_D2 = Math.PI / 2,
          easingEquations = {
              easeOutSine: function (pos) {
                  return Math.sin(pos * (Math.PI / 2));
              },
              easeInOutSine: function (pos) {
                  return (-0.5 * (Math.cos(Math.PI * pos) - 1));
              },
              easeInOutQuint: function (pos) {
                  if ((pos /= 0.5) < 1) {
                      return 0.5 * Math.pow(pos, 5);
                  }
                  return 0.5 * (Math.pow((pos - 2), 5) + 2);
              }
          };
  
      // add animation loop
      function tick() {
          currentTime += 1 / 60;
  
          var p = currentTime / time;
          var t = easingEquations[easing](p);
  
          if (p < 1) {
              requestAnimFrame(tick);
  
              window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
          } else {
              console.log('scroll done');
              window.scrollTo(0, scrollTargetY);
          }
      }
      tick();
  }
function openPlayer(){
    document.querySelector('#player').play();

    document.querySelector('#player').playbackRate = 2.0;
    document.getElementsByClassName("fullscreenplayer")[0].style.display = "block";
    document.getElementsByClassName("fullscreenplayer")[0].style.opacity = 1;
}
function closePlayer(){
    document.querySelector('#player').stop();
    document.getElementsByClassName("fullscreenplayer")[0].style.opacity = 0;
    setTimeout(() => {
        document.getElementsByClassName("fullscreenplayer")[0].style.display = "none";

    }, 200)
}