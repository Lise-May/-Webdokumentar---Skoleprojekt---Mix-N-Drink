//ER DU OVER 18 - STARTSSIDE (function)
function myFunction() {
    document.getElementById("startBox").style.display = "block"; //Alt indhold er skjult (KIG CSS), indtil der klikkes.
    document.getElementById("clickToStart").style.display = "none"; //Boksen forsvinder når der klikkes 
}

//SHORT VIDEO
window.onscroll =
    function () {
        var shortVideo = document.getElementById("myVideo");
        if (shortVideo.getBoundingClientRect().bottom < 250 || shortVideo.getBoundingClientRect().top > 250)
            shortVideo.pause(); //Når der er 250 px fra bunden og toppen, afspilles videoen. Hvis ikke, pauses den.
        else
            shortVideo.play();
    }


//SLIDESHOW - ANBEFALINGER (array)
var slideIndex = 1; //Første citat
showSlides(slideIndex); //Viser det første citat

function plusSlides(n) {
    showSlides(slideIndex += n); //Tilføjer eller fjerner én til SlideIndex, når der klikkes på pilene.
}

function currentSlide(n) {
    showSlides(slideIndex = n); //Viser det nuværende slide
}

function showSlides(n) { // Skifter korrekt slide 
    var i;
    var slides = document.getElementsByClassName("mySlides"); //Her kaldes alle citaterne (erklæret array, der er 4 lang)
    var dots = document.getElementsByClassName("dot"); //Her kaldes prikkerne (erklæret array)
    if (n > slides.length) { // Hvis den er mere end antallet af slides.
        slideIndex = 1
    }
    if (n < 1) { //Hvis den er mindre end antallet af slides.
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) { //(loop)
        slides[i].style.display = "none"; //Skjuler hvert slide
    }
    for (i = 0; i < dots.length; i++) { //(loop)
        dots[i].className = dots[i].className.replace(" active", ""); //Erstatter hver prik fra class "active" med "".
    }
    slides[slideIndex - 1].style.display = "block"; //Sætter det nuværende citat som et block element.
    dots[slideIndex - 1].className += " active"; //Viser den korrekte prik til det valgte citat.
}


//LYKKEHJUL
function myfunction() {
    var x = 1024; //min værdi (variabel)
    var y = 9999; //max værdi (variabel)

    var deg = Math.floor(Math.random() * (x - y)) + y; //random værdi ved at benytte "math" - Så den lander på noget forskelligt.

    //Sætter random værdi i CSS transform rotate
    document.getElementById("box").style.transform = "rotate(" + deg + "deg)";

    //Hvor lang tid hjulet må spinde eller er det en cooldown 
    var element = document.getElementById("mainbox");
    element.classList.remove("animate");
    setTimeout(function () {
        element.classList.add("animate");
    }, 5000); //5000 = 5 sekunder
}