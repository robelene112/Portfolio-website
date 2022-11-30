const navbarElements = document.getElementsByClassName("nav-element");

function changeId(element) {
  document.getElementById("selected").id = null;
  element.target.id = "selected";
  console.log(element.target);
}

for (i = 0; i < navbarElements.length; i++) {
  navbarElements[i].addEventListener("click", changeId);
}

// document.getElementById("selected");
