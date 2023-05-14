const nav=$(".navbar");
$(document).scroll(function(e) {
    if($(this).scrollTop() > 600) {
        nav.addClass("bg-black");
    } else {
        nav.removeClass("bg-black");
    }
});