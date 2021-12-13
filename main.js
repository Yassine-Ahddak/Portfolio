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

    const plus = document.getElementsByClassName("dut_formation");
    const zonePlus = document.getElementsByClassName("zone_plus");
    const imgLess = document.getElementsByClassName("img_moins");
    const imgDroite = document.getElementsByClassName("img_plus");
    let estOuvert = false;
    let estOuvert2 = false;

    plus[0].addEventListener("click", () =>{
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

    plus[1].addEventListener("click", () =>{
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
});









