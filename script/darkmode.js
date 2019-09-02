
function dark_light() {
  var mode = 0;

  if(mode === 0) {
    mode = 1;
    document.getElementsByClassName("jumbotron").style.background = "black";
    document.getElementsByClassName("footer").style.background = "black";
    document.getElementsByClassName("navbar-dark").style.background = "black";
    document.querySelector("body").style.background = "black";
    document.querySelector("body").style.color = "floralwhite";
  }else {
    mode = 0;
    document.getElementsByClassName("jumbotron").style.background = "#484AB9";
    document.getElementsByClassName("footer").style.baclground = "#9692fc";
    document.getElementsByClassName("navbar-dark").style.background = "#3a3ac7";
    document.querySelector("body").style.background = "#fff";
    document.querySelector("body").style.color = "black";
  }
}
