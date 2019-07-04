window.onload= function () {

  var photoId= document.getElementsByClassName("photos");
  var photoDescription= document.getElementsByClassName("photoDescription");

        for (i=0; i<photoId.length; i++) {
        for (j=0; j<photoId.length; j++) {
          photoId[0].style.border="0.15em solid orange";
          photoId[j].mainPhotoDescription=photoDescription[j].innerHTML;
        }
        photoId[i].onmouseover= function () {
            for (k=0; k<photoId.length; k++) {
            photoId[k].style.border="0em";
            }
        document.getElementById("placeholder").src=this.src;
        this.style.border="0.15em solid orange";
        document.getElementById("mainPhotoDescription").innerHTML=this.mainPhotoDescription;
        }
        photoId[i].onmouseout= function () {
        this.style.border="0em";
        }
      }


  var dropdown= document.getElementById("dropdown");
  var submenu = document.getElementById("submenu");

  dropdown.onmouseover= function() {
    submenu.style.display="block";

  }
  dropdown.onmouseout= function() {
    submenu.style.display="none";
  }
}
