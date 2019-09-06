var titel = document.getElementById("myTitle");
var klick = document.getElementById("myBtn");

function ageCheck(){
    var myAge = document.getElementById("myInput").value;
    if (isNaN(myAge) === false){
        if (myAge < 18)
        {
            titel.innerHTML = "Du är för ung!";
        }

        else if (myAge >= 18 && myAge <= 66)
        {
            titel.innerHTML = "Du är precis lagom gammal!";
        }

        else if (myAge > 66)
        {
            titel.innerHTML = "Du är för gammal!";
        }
    }

    else {
        titel.innerHTML = "Vänligen skriv en siffra eller heltal!";
    }
};

klick.addEventListener("click", ageCheck)