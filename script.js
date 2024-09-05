function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function morefunction() {
  var element = document.getElementById("more");
  element.classList.remove("hide");

  var hideMorebtn = document.getElementById("moreFunction");
  hideMorebtn.classList.add("hide");

  var showLessbtn = document.getElementById("lessFunction");
  showLessbtn.classList.remove("hide");
}

function lessfunction() {
  var element = document.getElementById("more");
  element.classList.add("hide");

  var hideMorebtn = document.getElementById("moreFunction");
  hideMorebtn.classList.remove("hide");

  var showLessbtn = document.getElementById("lessFunction");
  showLessbtn.classList.add("hide");
}
