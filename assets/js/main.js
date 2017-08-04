$('#home').children().hide();
$('#home').children().fadeIn(1000);
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
    $('#home').children().hide();
    $('#about').children().hide();
    $('#contact').children().hide();
    $("#guidelines").children().fadeIn(1500);
    // $('#guidelines').children().fadeIn(1500);
});

$('#hubungi').click(function(event) {
    $('#home').children().hide();
    $('#about').children().hide();
    $('#guidelines').children().hide();
    $('#contact').children().fadeIn(1500);
});

$('.aboutButton').click(function(event) {
    $('#home').children().hide();
    $('#about').children().hide();
    $('#contact').children().hide();
    $('#guidelines').children().fadeIn(1500);
    console.log("Test");
});

$('#tentang').click(function(event) {
    $('#home').children().hide();
    $('#guidelines').children().hide();
    $('#contact').children().hide();
    $('#about').children().fadeIn(1500);
    console.log("Test");
});

$('#beranda').click(function(event) {
    $('#guidelines').children().hide();
    $('#about').children().hide();
    $('#contact').children().hide();
    $('#home').children().fadeIn(1500);
});