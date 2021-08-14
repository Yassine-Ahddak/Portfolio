/*const divIcon = */



$(document).ready(function () {
    
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

    $('.img_gauche').click(function () {
        document.getElementById('img_droite').style.display=none;
        document.getElementById('clic_img_droite').style.display=inline;

    });
});

