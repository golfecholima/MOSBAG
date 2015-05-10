// FIX FOR MODAL SCROLLING ISSUE

$("#MENU").on("show", function () {
  $("body").addClass("modal-open");
}).on("hidden", function () {
  $("body").removeClass("modal-open");
});

$("#ABOUT").on("show", function () {
  $("body").addClass("modal-open");
}).on("hidden", function () {
  $("body").removeClass("modal-open");
});

$("#PRAISE").on("show", function () {
  $("body").addClass("modal-open");
}).on("hidden", function () {
  $("body").removeClass("modal-open");
});

$("#CONTACT").on("show", function () {
  $("body").addClass("modal-open");
}).on("hidden", function () {
  $("body").removeClass("modal-open");
});

$("#EMPLOYMENT").on("show", function () {
  $("body").addClass("modal-open");
}).on("hidden", function () {
  $("body").removeClass("modal-open");
});

$(document).ready(function(){
  var height = $('.bubble').width();
  $('.bubble').css('height', height);
  $('.bubble').css('width', '100%');
});

window.addEventListener("resize", function() {
  var height = $('.bubble').width();
  $('.bubble').css('height', height);
  $('.bubble').css('width', '100%');
});

// COLLAPSE NAV ON CLICK

$('.nav a').on('click', function(){
  $('.btn-navbar').click();
});

// FADE ITEMS IN AND OUT

$('.nav a.nav-hours').on('click',function(){
  $('.menu').fadeOut(400);
  $('.mosbaglogo-top img').fadeIn(400);
  $('.hours').fadeIn(400);
  $('.about').fadeOut(400);
  $('.praise').fadeOut(400);
  $('.employment').fadeOut(400);
  $('.contact').fadeOut(400);
});

$('.nav a.nav-menu').on('click',function(){
  $('.menu').fadeIn(400);
  $('.mosbaglogo-top img').fadeOut(400);
  $('.hours').fadeOut(400);
  $('.about').fadeOut(400);
  $('.praise').fadeOut(400);
  $('.employment').fadeOut(400);
  $('.contact').fadeOut(400);
});

$('.nav a.nav-about').on('click',function(){
  $('.menu').fadeOut(400);
  $('.mosbaglogo-top img').fadeOut(400);
  $('.hours').fadeOut(400);
  $('.about').fadeIn(400);
  $('.praise').fadeOut(400);
  $('.employment').fadeOut(400);
  $('.contact').fadeOut(400);
});

$('.nav a.nav-praise').on('click',function(){
  $('.menu').fadeOut(400);
  $('.mosbaglogo-top img').fadeOut(400);
  $('.hours').fadeOut(400);
  $('.about').fadeOut(400);
  $('.praise').fadeIn(400);
  $('.employment').fadeOut(400);
  $('.contact').fadeOut(400);
});

$('.nav a.nav-employment').on('click',function(){
  $('.menu').fadeOut(400);
  $('.mosbaglogo-top img').fadeOut(400);
  $('.hours').fadeOut(400);
  $('.about').fadeOut(400);
  $('.praise').fadeOut(400);
  $('.employment').fadeIn(400);
  $('.contact').fadeOut(400);
});

$('.nav a.nav-contact').on('click',function(){
  $('.menu').fadeOut(400);
  $('.mosbaglogo-top img').fadeOut(400);
  $('.hours').fadeOut(400);
  $('.about').fadeOut(400);
  $('.praise').fadeOut(400);
  $('.employment').fadeOut(400);
  $('.contact').fadeIn(400);
});