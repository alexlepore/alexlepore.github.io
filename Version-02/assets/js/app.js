let loader = $("#loader");

function hideGif(){
    return loader.fadeOut("slow");
}

setInterval(hideGif, 1000);

function makeHtmlVisible(){
    let html = $(".container-fluid")[0].style.display = "block";
    return html;
}

$(function(){

    setInterval(makeHtmlVisible, 1500);

    // scroll fade
    $(window).scroll(function(){
        $(".first-fade").css({
            'opacity' : 1-(($(this).scrollTop())/250)
        });    
    });

    // scroll functions
    $("#about").click(function(){
        $('html, body').animate({
            scrollTop : $(".about-wrapper").offset().top}, 3000)
    });

    $("#tech").click(function(){
        $('html, body').animate({
            scrollTop : $(".tech-wrapper").offset().top}, 3000)
    });

    $("#contact").click(function(){
        $('html, body').animate({
            scrollTop : $(".contact-wrapper").offset().top}, 3000)
    });

    // tech slideshow
    let slideIndex = 0;

    function moveSlides(){
        let i; 
        let slides = $('.slides-fade');
        for(i =0; i < slides.length; i++){
            slides[i].style.display ="none";
        }
        slideIndex++;
        if(slideIndex > slides.length){slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(moveSlides, 4000); 
    }

    moveSlides();

    //FS

    let contactForm = $('#contactform');
    contactForm.attr('action', 'https://formspree.io/' + 'alexlepore990' + '@' + 'gmail' + '.' +'com');

});