$('#home').children().hide();
$('#home').children().show(1000);
$('#guidelines').children().hide();
$('#about').children().hide();
$('#contact').children().hide();
console.log("hiiii");

$('#register').click(function(event) {
    $('.registForm').css('visibility', 'visible');
    console.log("Test");
});

$('#closeButton').click(function(event) {
    $('.registForm').css('visibility', 'hidden');
});

$('#panduan').click(function(event) {
    $('#home').children().hide(1000);
    $('#about').children().hide(1000);
    $('#guidelines').children().show(1000);
});

$('#hubungi').click(function(event) {
    $('#home').children().hide(1000);
    $('#about').children().hide(1000);
    $('#guidelines').children().hide(1000);
    $('#contact').children().show(1000);
});

$('.aboutButton').click(function(event) {
    $('#home').children().hide(1000);
    $('#about').children().hide(1000);
    $('#contact').children().hide(1000);
    $('#guidelines').children().show(1000);
    console.log("Test");
});

$('#tentang').click(function(event) {
    $('#home').children().hide(1000);
    $('#guidelines').children().hide(1000);
    $('#contact').children().hide(1000);
    $('#about').children().show(1000);
    console.log("Test");
});

$('#beranda').click(function(event) {
    $('#guidelines').children().hide(1000);
    $('#about').children().hide(1000);
    $('#contact').children().hide(1000);
    $('#home').children().show(1000);
});