var qrcode = new QRCode("qrcode");

function makeCode() {
  var elText = document.getElementById("val-qr");

  // if (!elText.value) {
  //   alert("Input a text");
  //   elText.focus();
  //   return;
  // }

  qrcode.makeCode(elText.value);
}

makeCode();

$("#val-qr")
  .on("blur", function () {
    makeCode();
  })
  .on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });
