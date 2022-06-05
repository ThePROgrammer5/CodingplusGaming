document.getElementById('new').click();

function openCity(evt, cityName, doSomthing) {
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

  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

  function notifyMe(body, title, link) {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
    else {
      var notification = new Notification(title, {
      icon: 'img/favicon.jpg',
      body: body,
     });
     notification.onclick = function() {
      window.open(link)
     }
   }
  };
  
  notifyMe("Hello!👋 Did you know we have an AWSOME game, perfect for YOU!? It's called: Slither Snake! Click this notification to play it!", "Hello👋!", "https://theprogrammer5.github.io/Slither-Snake-Offical-Website/");