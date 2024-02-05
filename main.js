console.log("OK");
$(document).ready(function () {

    //Navbar sticky
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
    });

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    /*$('.img_gauche').click(function () {
        document.getElementById('img_droite').style.display=none;
        document.getElementById('clic_img_droite').style.display=inline;

    });*/

    //const plus = document.querySelectorAll(".dut_formation");
    //const zonePlus = document.querySelectorAll(".zone_plus");

    const plus_formation = document.getElementsByClassName("dut_formation");
    const plus_experience = document.getElementsByClassName("dut_experiences");
    const zonePlus = document.getElementsByClassName("zone_plus");
    const imgLess = document.getElementsByClassName("img_moins");
    const imgDroite = document.getElementsByClassName("img_plus");
    let estOuvert = false;
    let estOuvert2 = false;
    let estOuvert3 = false;
    let estOuvert4 = false;
    let estOuvert5 = false;

    plus_formation[0].addEventListener("click", () =>{
        estOuvert = !estOuvert;
        if(estOuvert){
            zonePlus[0].style.display = "block";
            imgDroite[0].style.display="none";
            imgLess[0].style.display="block";
        } else {
            zonePlus[0].style.display = "none";
            imgDroite[0].style.display="block";
            imgLess[0].style.display="none";
        }
    })

    plus_formation[1].addEventListener("click", () =>{
        estOuvert2 = !estOuvert2;
        if(estOuvert2){
            zonePlus[1].style.display = "block";
            imgDroite[1].style.display="none";
            imgLess[1].style.display="block";
        } else {
            zonePlus[1].style.display = "none";
            imgDroite[1].style.display="block";
            imgLess[1].style.display="none";
        }
    })

    plus_formation[2].addEventListener("click", () =>{
        estOuvert3 = !estOuvert3;
        if(estOuvert3){
            zonePlus[2].style.display = "block";
            imgDroite[2].style.display="none";
            imgLess[2].style.display="block";
        } else {
            zonePlus[2].style.display = "none";
            imgDroite[2].style.display="block";
            imgLess[2].style.display="none";
        }
    })

    plus_experience[0].addEventListener("click", () =>{
        estOuvert4 = !estOuvert4;
        if(estOuvert4){
            zonePlus[3].style.display = "block";
            imgDroite[3].style.display="none";
            imgLess[3].style.display="block";
        } else {
            zonePlus[3].style.display = "none";
            imgDroite[3].style.display="block";
            imgLess[3].style.display="none";
        }
    })

    plus_experience[1].addEventListener("click", () =>{
        estOuvert5 = !estOuvert5;
        if(estOuvert5){
            zonePlus[4].style.display = "block";
            imgDroite[4].style.display="none";
            imgLess[4].style.display="block";
        } else {
            zonePlus[4].style.display = "none";
            imgDroite[4].style.display="block";
            imgLess[4].style.display="none";
        }
    })

    // Partie bouton projet lors d'un clic sur fermer la fenêtre
    //const iframe1 = getElementsByClassName("");

    //Partie Modal
    // Get the modal
    const modal = document.getElementById("myModal");

    // Get the modal
    const modal2 = document.getElementById("myModal2");

    // Get the modal
    const modal3 = document.getElementById("myModal3");

    // Get the modal
    const modal4 = document.getElementById("myModal4");

    // Get the button that opens the modal
    const btn = document.getElementById("myBtn");

    // Get the button that opens the modal
    const btn2 = document.getElementById("myBtn2");

    // Get the button that opens the modal
    const btn3 = document.getElementById("myBtn3");

    // Get the button that opens the modal
    const btn4 = document.getElementById("myBtn4");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // Get the <span> element that closes the modal
    const span2 = document.getElementsByClassName("close")[1];

    // Get the <span> element that closes the modal
    const span3 = document.getElementsByClassName("close")[2];

    // Get the <span> element that closes the modal
    const span4 = document.getElementsByClassName("close")[3];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks the button, open the modal
    btn2.onclick = function() {
        modal2.style.display = "block";
    }

    // When the user clicks the button, open the modal
    btn3.onclick = function() {
        modal3.style.display = "block";
    }

    // When the user clicks the button, open the modal
    btn4.onclick = function() {
        modal4.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks on <span> (x), close the modal
    span2.onclick = function() {
        modal2.style.display = "none";
    }

    // When the user clicks on <span> (x), close the modal
    span3.onclick = function() {
        modal3.style.display = "none";
    }

    // When the user clicks on <span> (x), close the modal
    span4.onclick = function() {
        modal4.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
        if (event.target === modal2) {
            modal2.style.display = "none";
        }
        if (event.target === modal3) {
            modal3.style.display = "none";
        }
        if (event.target === modal4) {
            modal4.style.display = "none";
        }
    }
});









