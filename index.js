let imageBox = document.getElementById("imageBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let qrGenBtn = document.getElementById("qrGenBtn");
let errorDisplay = document.querySelector(".error2");

//Get the QR api url
let qr_api_url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

//Create the function to generate code
function generateQrCode(){
    if(qrText.value.length > 0){
        qrImage.src = qr_api_url + qrText.value;
       imageBox.classList.add("show-img");
    } 
    // else {
    //     qrText.classList.add("error");
    //    setTimeout(function(){
    //     qrText.classList.remove("error");

    //    },1000);

    // }
    else{
        errorDisplay.style.display = "block";
        errorDisplay.style.color = "red";
        setTimeout(function(){
            errorDisplay.innerHTML = ""
        },2000)
        //console.log(Object)
    }

}
qrGenBtn.addEventListener("click", function(){
    generateQrCode();
})

