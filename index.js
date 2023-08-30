let imageBox = document.getElementById("imageBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let qrGenBtn = document.getElementById("qrGenBtn");

//Get the QR api url
let qr_api_url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

//Create the function to generate code
function generateQrCode(){
    qrImage.src = qr_api_url + qrText.value;

}
qrGenBtn.addEventListener("click", function(){
    generateQrCode();
})

