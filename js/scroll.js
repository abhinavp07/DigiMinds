$(document).ready(function() {

    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.information-fade-in',
        reverse: false
    })
        .setClassToggle('.information-fade-in', 'show')
        .addTo(controller);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.about-fade',
        reverse: false
    })
        .setClassToggle('.about-fade', 'show')
        .addTo(controller);

    

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.service',
        reverse: false
    })
        .setClassToggle('.service', 'show')
        .addTo(controller);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.finalask',
        reverse: false
    })
        .setClassToggle('.finalask', 'show')
        .addTo(controller);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.contact',
        reverse: false
    })
        .setClassToggle('.contact', 'show')
        .addTo(controller);
          
           

        


});