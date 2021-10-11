$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});