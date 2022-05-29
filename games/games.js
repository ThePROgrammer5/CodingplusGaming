function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

function handleScreenMode(game) {
    document.getElementById(game).style.width = "2000px";
    document.getElementById(game).style.display = "block";
}

const logo = "ThePROgrammer5/CodingplusGaming/logo.ico"
const img = null;
const text = "This is a test, do not worry.";
const title = "TEST";
const options = {
    body: text,
    icon: logo,
    vibrate: [200, 100, 200],
    tag: title,
    image: img,
    badge: null,
    actions: [{ action: "Detail", title: "View", icon: logo }]
 };

navigator.serviceWorker.ready.then(function(serviceWorker) {
  serviceWorker.showNotification(title, options);
});