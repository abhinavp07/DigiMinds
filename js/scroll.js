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

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.team-title h1',
        reverse: false
    })
        .setClassToggle('.team-title h1', 'show')
        .addTo(controller);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.card',
        reverse: false
    })
        .setClassToggle('.card', 'show')
        .addTo(controller);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.program-head h1',
        reverse: false
    })
        .setClassToggle('.program-head h1', 'show')
        .addTo(controller);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.program-details',
        reverse: false
    })
        .setClassToggle('.program-details', 'show')
        .addTo(controller);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.note p',
        reverse: false
    })
        .setClassToggle('.note p', 'show')
        .addTo(controller);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.cover',
        reverse: false
    })
        .setClassToggle('.cover', 'show')
        .addTo(controller);
        
           

        


});