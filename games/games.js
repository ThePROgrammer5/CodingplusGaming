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

function createGame(html) {
  const template = document.createElement("template");

  template.innerHTML = html.trim();

  return template.content.firstElementChild;
}