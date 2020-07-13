
var submitEl = document.querySelector("#submit");
var locationEl = document.querySelector("#location");
var radiationEl = document.querySelector("#radiation");


function determineTips(event){
    event.preventDefault();
    var tipResult = "";
    var radiation = radiationEl.value;
    var location = locationEl.value;
    if (radiation <= 0 ){
        tipResult= "Unfortunately any number less than 0 is not a valid input, please check you UV index input again.";
    }
    else if (radiation > 0 && radiation<= 2){
        tipResult = "We recommend you use sunscreen SPF 30+ if you burn easily and wear sunglasses if it is a bright day.";
    }
    else if (radiation > 2 && radiation<= 5){
        tipResult = "We recommend you use sunscreen SPF 30+. Wear sunglasses and a hat if it is a bright day, and try to find shade when the sun is at its highest point during midday.";

    }
    else if (radiation> 5 && radiation <= 7){
        tipResult = "We recommend you use sunscreen SPF 30+ and wear sunglasses and a hat if it is a bright day.";

 }
 else if (radiation> 7 && radiation <= 10){
    tipResult = "We recommend you use sunscreen SPF 30+ and wear sunglasses and a hat if it is a bright day.";
 }
 else {
    tipResult = "We recommend you use sunscreen SPF 30+ and wear sunglasses and a hat if it is a bright day.";

 }
document.querySelector("#tips").textContent = "→ If you live in " + location + ", the UV index today is " + radiation + ". " + tipResult;


}

submitEl.addEventListener("click", determineTips);