document.getElementById('new').click();

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

  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

function showNotification() {
    const notification = new Notification("TEST", {
    body: "Hello! welcom to Coding+Gaming this is a test to make our website better",
  });
}  

//default, garanted, denied
console.log(Notification.permission);

if(Notification.permission === "granted") {
  showNotification();
} 

else if (Notification.permission === "denied") {
  Notification.requestPermission().then(permission => {
      if(permission === "granted") {
        showNotification();
      }
  })
}