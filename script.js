window.onload = function(){

    document.getElementById("theImage")
          .onclick = function(){
        changeImage();
      }

var i = 0;
function changeImage() {
    var list = ["eoe1.jpg","spongebob.jpg","spongebob 3.jpg","spongebob 4.jpg"];
    i++;
    if (i >= 4) {
        i = 0;
    }
    var newImg = list[i]
    document.getElementById("theImage").src = newImg
  }
}
