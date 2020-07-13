
var submitEl = document.querySelector("#submit");
var locationEl = document.querySelector("#location");
var radiationEl = document.querySelector("#radiation");


function determineTips(event){
    event.preventDefault();
    var tipResult = "";
    var radiation = radiationEl.value;
    var location = locationEl.value;
    if (radiationEl < 0 ){
        tipResult= "ERROR: Please check you UV index input. ";
    }
    else if (radiationEl >0 && radiationEl<= 2){
        tipResult = "We recommend youuse sunscreen SPF 30+ and wear sunglasses and a hat if it is a bright day.";
    }
    else if (radiationEl > 2 && radiationEl<= 5){
        tipResult = "We recommend youuse sunscreen SPF 30+ and wear sunglasses and a hat if it is a bright day.";

    }
    else if (radiationEl> 5 && radiationEl <= 7){
        tipResult = "We recommend youuse sunscreen SPF 30+ and wear sunglasses and a hat if it is a bright day.";

 }
 else if (radiationEl> 7 && radiationEl <= 10){
    tipResult = "We recommend youuse sunscreen SPF 30+ and wear sunglasses and a hat if it is a bright day.";
 }
 else {
    tipResult = "We recommend youuse sunscreen SPF 30+ and wear sunglasses and a hat if it is a bright day.";

 }
document.querySelector("#tips").textContent = "If you live in " + location + ", the UV index today is " + radiation + ". " + tipResult;


}

submitEl.addEventListener("click", determineTips);