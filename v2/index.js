$.getJSON('https://geoip-db.com/json/')
         .done (function(location) {
           var today = new Date();
           var dd = String(today.getDate()).padStart(2, '0');
           var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
           var yyyy = today.getFullYear();
           today = mm + '/' + dd + '/' + yyyy;

           var final = location.country_name + ", " + location.state + ", " + location.city;
           var commentsRef = firebase.database().ref();
           var newRef = commentsRef.push();
           newRef.child("ip").set(location.IPv4);
           newRef.child("coord").child("longitude").set(location.longitude);
           newRef.child("coord").child("latitude").set(location.latitude);
           newRef.child("position").set(final);
           var hour = new Date()

            var d = new Date();
            var x = document.getElementById("demo");
            var h = (d.getHours());
            var m = (d.getMinutes());
            var s = (d.getSeconds());

           newRef.child("date").set(today + ":" + h + "." + m);

});





function scrollToSmoothly(pos, time) {
  /*Time is only applicable for scrolling upwards*/
  /*Code written by hev1*/
  /*pos is the y-position to scroll to (in pixels)*/
  if (isNaN(pos)) {
    throw "Position must be a number";
  }
  if (pos < 0) {
    throw "Position can not be negative";
  }
  var currentPos = window.scrollY || window.screenTop;
  if (currentPos < pos) {
    var t = 10;
    for (let i = currentPos; i <= pos; i += 10) {
      t += 10;
      setTimeout(function() {
        window.scrollTo(0, i);
      }, t / 2);
    }
  } else {
    time = time || 2;
    var i = currentPos;
    var x;
    x = setInterval(function() {
      window.scrollTo(0, i);
      i -= 10;
      if (i <= pos) {
        clearInterval(x);
      }
    }, time);
  }
}

window.onload = function(){
  setLanguage();
  if (isMobile()){
    document.getElementsByClassName("menu")[0].style.display = 'none';
    document.getElementsByTagName("H1")[0].style.width = '100%';
    document.getElementsByTagName("H1")[0].style.fontSize = '38px';
    document.getElementsByTagName("H1")[0].style.height = '75px';
    document.getElementsByTagName("H1")[0].style.overflow = 'hidden';
    document.getElementsByTagName("H1")[0].style.left = '0px';
    document.getElementsByTagName("H2")[0].style.width = '100%';
    document.getElementsByTagName("H2")[0].style.left = '0px';
    document.getElementsByTagName("H2")[0].style.fontSize = '16px';
    document.getElementsByTagName("H2")[0].style.height = '81px';
    document.getElementsByTagName("H2")[0].style.overflow = 'hidden';
    document.getElementsByTagName("H3")[0].style.width = '80%';
    document.getElementsByTagName("H3")[0].style.left = '10%';
    document.getElementsByTagName("H3")[0].style.height = '500px';
    document.getElementsByTagName("H3")[0].style.fontSize = '22px';
    document.getElementsByTagName("H3")[0].style.overflow = 'hidden';
    document.getElementsByTagName("H3")[0].style.textAlign = 'center';
    document.getElementsByTagName("H4")[0].style.width = '80%';
    document.getElementsByTagName("H4")[0].style.left = '10%';
    document.getElementsByTagName("H4")[0].style.fontSize = '22px';
    document.getElementsByTagName("H4")[0].style.height = '500px';
    document.getElementsByTagName("H4")[0].style.overflow = 'hidden';
    document.getElementsByTagName("H4")[0].style.padding = '0';
    document.getElementsByTagName("H4")[0].style.margin = '0';
    document.getElementsByTagName("LI")[0].style.fontSize = '22px';
    document.getElementsByClassName("bottom")[0].style.height = "350px";
    document.getElementsByClassName("social")[0].style.maxHeight = "85px";
    document.getElementsByClassName("social")[0].style.overflow = "hidden";
    document.getElementsByClassName("social")[0].style.width = "90%";
    document.getElementsByClassName("social")[0].style.marginTop = "40px";

    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[0].style.margin = '0px';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[1].style.margin = '0px';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[2].style.margin = '0px';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[3].style.margin = '0px';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[4].style.margin = '0px';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[0].style.fontSize = '22px';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[1].style.fontSize = '22px';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[2].style.fontSize = '22px';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[3].style.fontSize = '22px';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[4].style.fontSize = '22px';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[0].style.width = '80%';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[1].style.width = '80%';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[2].style.width = '80%';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[3].style.width = '80%';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[4].style.width = '80%';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[0].style.marginLeft = '10%';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[1].style.marginLeft = '10%';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[2].style.marginLeft = '10%';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[3].style.marginLeft = '10%';
    document.getElementsByClassName("experience")[0].getElementsByTagName("LI")[4].style.marginLeft = '10%';

    document.getElementsByClassName("programing")[0].style.display = 'none';
    document.getElementsByClassName("terminal")[0].style.display = 'none';
  }

}
function loadJSON(callback) {

   var xobj = new XMLHttpRequest();
       xobj.overrideMimeType("application/json");
   xobj.open('GET', 'language.json', true); // Replace 'my_data' with the path to your file
   xobj.onreadystatechange = function () {
         if (xobj.readyState == 4 && xobj.status == "200") {
           // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
           callback(xobj.responseText);
         }
   };
   xobj.send(null);
}
function setLanguage(){
  if (window.location.search == "?eng"){
    document.getElementsByClassName("language")[0].innerText = "Français";

    document.getElementsByTagName("LI")[0].innerHTML = languages().english.menu.con;
    document.getElementsByTagName("LI")[1].innerHTML = languages().english.menu.pro;
    document.getElementsByTagName("LI")[2].innerHTML = languages().english.menu.exp;
    document.getElementsByTagName("LI")[3].innerHTML = languages().english.menu.know;
    document.getElementsByTagName("LI")[4].innerHTML = languages().english.menu.pres;
    document.getElementsByTagName("H2")[0].innerHTML = languages().english.quote;
    document.getElementsByTagName("H3")[0].innerHTML = languages().english.para1;
    document.getElementsByTagName("H4")[0].innerHTML = languages().english.para2;
    document.getElementsByTagName("H7")[0].innerHTML = languages().english.proj;
    document.getElementsByTagName("H8")[0].innerHTML = languages().english.com;
    document.getElementsByTagName("H8")[1].innerHTML = languages().english.anti;
    document.getElementsByTagName("LI")[5].innerHTML = languages().english.lists["0"];
    document.getElementsByTagName("LI")[6].innerHTML = languages().english.lists["1"];
    document.getElementsByTagName("LI")[7].innerHTML = languages().english.lists["2"];
    document.getElementsByTagName("LI")[8].innerHTML = languages().english.lists["3"];
    document.getElementsByTagName("LI")[9].innerHTML = languages().english.lists["4"];
    document.getElementsByTagName("H5")[0].innerHTML = languages().english.contact;
    document.getElementsByTagName("H6")[0].innerHTML = languages().english.made;
  }else{
    document.getElementsByClassName("language")[0].innerText = "English";

    document.getElementsByTagName("LI")[0].innerHTML = languages().francais.menu.con;
    document.getElementsByTagName("LI")[1].innerHTML = languages().francais.menu.pro;
    document.getElementsByTagName("LI")[2].innerHTML = languages().francais.menu.exp;
    document.getElementsByTagName("LI")[3].innerHTML = languages().francais.menu.know;
    document.getElementsByTagName("LI")[4].innerHTML = languages().francais.menu.pres;
    document.getElementsByTagName("H2")[0].innerHTML = languages().francais.quote;
    document.getElementsByTagName("H3")[0].innerHTML = languages().francais.para1;
    document.getElementsByTagName("H4")[0].innerHTML = languages().francais.para2;
    document.getElementsByTagName("H7")[0].innerHTML = languages().francais.proj;
    document.getElementsByTagName("H8")[0].innerHTML = languages().francais.com;
    document.getElementsByTagName("H8")[1].innerHTML = languages().francais.anti;
    document.getElementsByTagName("LI")[5].innerHTML = languages().francais.lists["0"];
    document.getElementsByTagName("LI")[6].innerHTML = languages().francais.lists["1"];
    document.getElementsByTagName("LI")[7].innerHTML = languages().francais.lists["2"];
    document.getElementsByTagName("LI")[8].innerHTML = languages().francais.lists["3"];
    document.getElementsByTagName("LI")[9].innerHTML = languages().francais.lists["4"];
    document.getElementsByTagName("H5")[0].innerHTML = languages().francais.contact;
    document.getElementsByTagName("H6")[0].innerHTML = languages().francais.made;
  }
}
function change() {
  if (document.getElementsByClassName("language")[0].innerText == "English") {
    window.location = "index.html?eng";
  } else {
    window.location = "index.html?fra";
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
  return JSON.parse('{"english":{"com":"Compiler", "anti":"Antisnoring", "menu":{"pres":"Presentation","know":"Knowledge","exp":"Experience", "pro":"Projects","con":"Contact"},"quote": "The developer you must hire","para1": "I’m a fullstack developer who loves to develope responsive web apps and attractive mobile apps. Over the years, I learned to code cleanly in different languages.", "proj":"Projects","para2":"I have a lot of experience with <a>Swift</a> and <a>HTML(css&js)</a>. I’m proficient in <a>Python</a>, and I have experience with <a>node.js</a> and with the <a>electron</a> framework. I’ve experienced working with <a>Java</a>. I know how to use <a>git</a>, <a>npm</a>, <a>cocoapod</a>, and <a>pip</a> properly.","lists":{"0":"Won a hackathon organized at Polytechnique Montreal in collaboration with my school in 2017","1":"Part of the programming team for DROIDE 5865 (College Saint Sacrement) Our robot was qualified for VEX WORLDS 2019","2":"Won a hckathon at Polytechnique Montreal in collaboration with my school in 2019","3":"Participation to the Concordia’s artificial inteligence hackathon (ConcordAI) 2019","4":"Me and my team won judge\'s favorite project at Hackatown 2020 at Polytechnique Montreal (800$)"},"contact":"Reach Out","made":"This website was programmed with ❤️ by Adrien Trahan in js"},"francais":{"com":"Compiler", "anti":"Antironflement", "menu":{"pres":"Présentation","know":"Connaissances","exp":"Expérience", "pro":"Projets","con":"Contact"},"quote": "Le développeur que vous devez embaucher","para1": "Je suis un développeur fullstack qui adore développer des apps webs 《responsives》 et des apps mobiles attrayantes. À travers les années, J\'ai appris à coder proprement dans différents languages.", "proj":"Projets","para2":"J\'ai beaucoup d\'expérience avec <a>Swift</a> et <a>HTML(css&js)</a>. Je maitrise <a>Python</a> et j\'ai de l\'expérience avec <a>node.js</a> et avec le framework: <a>electron</a>. J\'ai déjà expérimenté à plusieurs reprises <a>Java</a> et je sais comment utiliser <a>git</a>, <a>npm</a>, <a>cocoapods</a> et <a>pip</a> correctement.","lists":{"0":"J\'ai gagné un hackathon à la Polytechnique de Montréal en collaboration avec mon école en 2019","1":"Membre de l\'équipe de programmation pour l\'équipe DROIDE 5865. (College Saint Sacrement) Notre robot s\'est qualifié pour VEX WORLDS 2019","2":"J\'ai gagné un hackathon à la Polytechnique de Montréal en collaboration avec mon école en 2017","3":"Participation au hackathon de Concordia sur l\'inteligence artificielle (ConcordAI) 2019","4":"Moi et mon équipe avons remporté le prix coup de coeur de Hackatown 2020 à la Polytechnique de Montréal (800$)"},"contact":"Me Contacter","made":"Ce site a été programmé avec ❤️ par Adrien Trahan en js"}}')
}
