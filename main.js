console.log("wuttup");

// JQUERY
// BURGER ICON ANIMATION AND DROPDOWN MENU
$('.burger-lines').click(function() {
    // $('.burger-menu').css("display", "flex")
    // ================================================
    $('.burger-lines').toggleClass('active');
    // $('.burger-menu').toggle("show");
    // $('.burger-menu').css("display", "flex")
    // ================================================
    var menu = $('.burger-menu')[0];

    if (menu.getAttribute('style') === null) {
        menu.setAttribute('style', 'display: flex');
    } else if (menu.getAttribute('style') === ('display: none')) {
        menu.setAttribute('style', 'display: flex');
    } else {
        menu.setAttribute('style', 'display: none');
    }
});



// =============================================================
// CAROUSEL CODE
// =============================================================
// Auto Slideshow function
// array of project slides
var projects = $('.project');
// array of slider dots
var dots = $('.dot');
var slideIdx = 0;

function showSlides() {
    // debugger
    for (var i = 0; i < projects.length; i++) {
        projects[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = 'dot';
    }
    slideIdx++;

    if (slideIdx > projects.length) { slideIdx = 1 };

    projects[slideIdx - 1].style.display = "block";
    dots[slideIdx-1].className += ' active';
    setTimeout(showSlides, 5000);
}

showSlides();

// Manual slideshow
function nextSlide(n) {
    var nextIdx = slideIdx + n;
    if (nextIdx < 6 && nextIdx > 0) {
        thisSlide(nextIdx);
    }
}

function thisSlide(num) {
    for (var i = 0; i < projects.length; i++) {
        projects[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = 'dot';
    }
    // debugger
    slideIdx = num % 4;
    projects[slideIdx].style.display = "block";
    dots[slideIdx].className += ' active';
}

// Slideshow dot clicking
$("#one").on('click', function() {
    thisSlide(0);
});

$("#two").on('click', function() {
    thisSlide(1);
});

$("#three").on('click', function() {
    thisSlide(2);
});

$("#four").on('click', function() {
    thisSlide(3);
});