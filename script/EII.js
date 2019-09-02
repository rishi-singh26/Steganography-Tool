var fgimage;

function readImage() {
   var imgcanvas = document.getElementById("can1");
   var fileinput = document.getElementById("ext_img_img");
   fgimage = new SimpleImage(fileinput);
   fgimage.drawTo(imgcanvas);
}

function getLowBits(dec){
  var mod = dec % 16;
  var multiply = mod * 16;
  return multiply;
}

function extract(show) {
  for(var px of show.values()) {
    // clear the low bits of red.
    px.setRed(getLowBits(px.getRed()));
    // clear the low bits of green
    px.setGreen(getLowBits(px.getGreen()));
    // clear the low bits of blue
    px.setBlue(getLowBits(px.getBlue()));
  }
  return show;
}

function extImgImg() {
  var res = extract(fgimage);
  var imgcanvas = document.getElementById("can2");
  res.drawTo(imgcanvas);
}
