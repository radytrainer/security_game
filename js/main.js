function displayErrorSong() {
 
  if (sms.value === "") {
    sms.style.border = "3px solid red";
  } else {
    sms.style.border = "3px solid #10cc9d";
    for (var i = 0; i < checkVirus.length; i++) {
      if (checkVirus[i].checked) {
        if (checkVirus[i].value === "virus") {
          if (
            sms.value === "ransomware" ||
            sms.value === "trojanhorse" ||
            sms.value === "wannacry"
          ) {
            document.body.style.backgroundImage = "url('cong.jpg')";
            document.querySelector('video').style.display = "none";
            congrate.play();
            setTimeout(function () {
              document.querySelector('video').style.display = "block"
            }, 3000)
            
          } else if (
            sms.value === "searchengine" ||
            sms.value === "linuxubuntu" ||
            sms.value === "windowsos"
          ){
            setTimeout(errorSong.play(), 3000);
            document.body.style.backgroundImage = "url('bg.jpg')";
            document.querySelector('video').style.display = "none";
            setTimeout(function () {
              document.querySelector('video').style.display = "block"
            }, 5000)
            
          } else {
            alert("Not identify")
          }
        } else {
          if (
            sms.value === "searchengine" ||
            sms.value === "linuxubuntu" ||
            sms.value === "windowsos"
          ) {
            document.body.style.backgroundImage = "url('cong.jpg')";
            document.querySelector('video').style.display = "none";
            congrate.play();
            setTimeout(function () {
              document.querySelector('video').style.display = "block"
            }, 3000)
          }else if (
            sms.value === "ransomware" ||
            sms.value === "trojanhorse" ||
            sms.value === "wannacry"
          ){
            setTimeout(errorSong.play(), 3000);
            document.body.style.backgroundImage = "url('bg.jpg')";
            document.querySelector('video').style.display = "none";
            setTimeout(function () {
              document.querySelector('video').style.display = "block"
            }, 5000)
          }else {
            alert("Not identify")
          }
        }
      }
    }
  }
}

let errorSong = document.querySelector("#myAudio");
let congrate = document.querySelector("#con");
let btn = document.querySelector("button");

let sms = document.querySelector("#sms");
let checkVirus = document.querySelectorAll('input[name="virus"]');

btn.addEventListener("click", displayErrorSong);
