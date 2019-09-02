var show, hide;

function readFgImage() {
   var imgcanvas = document.getElementById("can1");
   var fileinput = document.getElementById("hide_img_img_1");
   show = new SimpleImage(fileinput);
   show.drawTo(imgcanvas);
}
console.log(show);
function readBgImage() {
   var imgcanvas = document.getElementById("can2");
   var fileinput = document.getElementById("hide_img_img_2");
   hide = new SimpleImage(fileinput);
   hide.drawTo(imgcanvas);
}

function clearLowBits(dec){
  var divide = Math.floor(dec/16);
  var multiply = divide * 16;
  return multiply;
}

function chopToHide(show) {
  for(var px of show.values()) {
    // clear the low bits of red.
    px.setRed(clearLowBits(px.getRed()));
    // clear the low bits of green
    px.setGreen(clearLowBits(px.getGreen()));
    // clear the low bits of blue
    px.setBlue(clearLowBits(px.getBlue()));
  }
  // return image after the above computation
  return show;
}

function shift(hide) {
  for(var px of hide.values()) {
    // shift the red bits over
    px.setRed(px.getRed()/16);
    // shift the green bits over
    px.setGreen(px.getGreen()/16);
    // shift the blue bits over
    px.setBlue(px.getBlue()/16);
  }
  // return image after the above computation
  return hide;
}

function combine(show, hide) {
  // make a new image the same sixe as show (call it answer)
  var answer = new SimpleImage(show.getWidth(), show.getHeight());
  for(var px of answer.values()) {
    var x = px.getX();
    var y = px.getY();
    // get the pixel from same place from show
    var showPixel = show.getPixel(x,y);
    // get the pixel from same place from hide
    var hidePixel = hide.getPixel(x,y);
    // set the red pixel to the dum of showPixel's red + hidePixel's red
    px.setRed(showPixel.getRed() + hidePixel.getRed());
    // set the green pixel to the dum of showPixel's green + hidePixel's green
    px.setGreen(showPixel.getGreen() + hidePixel.getGreen());
    // set the blue pixel to the dum of showPixel's blue + hidePixel's blue
    px.setBlue(showPixel.getBlue() + hidePixel.getBlue());
  }
  // after doing this to each pixel, return the answer images
  return answer;
}

function hideImgImg() {
  var visible = chopToHide(show);
  var invisible = shift(hide);
  var res = combine(visible, invisible);
  var imgcanvas = document.getElementById("can3");
  res.drawTo(imgcanvas);
}
