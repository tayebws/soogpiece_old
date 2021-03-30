//search toggle button
$('.search-toggle').addClass('closed');

$('.search-toggle .search-icon').click(function (e) {
  if ($('.search-toggle').hasClass('closed')) {
    $('.dropdown1').css({ "display": "inline-block" });
    $('.search-toggle').removeClass('closed').addClass('opened');
    $('.search-toggle, .search-container').addClass('opened');
    // $('#search-terms').focus();
  } else {

    $('.search-toggle').removeClass('opened').addClass('closed');
    $('.search-toggle, .search-container').removeClass('opened');
  }
});

//cat toggle button
$('.cat-toggle').addClass('closed');

$('.cat-toggle-btn').click(function (e) {
  if ($('.cat-toggle').hasClass('closed')) {
    $('.cat-toggle').css({ "display": "block", "z-index": "10", "position": "absolute" });
    $('.cat-toggle-sub-menu').css({ "display": "block" });
    $('.cat-toggle').removeClass('closed').addClass('opened');
    $('.cat-toggle').addClass('opened');
    // $('#cat-terms').focus();
  } else {

    $('.cat-toggle').removeClass('opened').addClass('closed');
    $('.cat-toggle').css({ "display": "none" });
    // $('.cat-toggle').removeClass('opened');
  }
});

//mobile menu toggle button
$('.msubparent').click(function (e) {
  console.log('hello');
  $('.msubchild1').css({ "display": "none" });
  $('.msubchild').css({ "display": "block" });
});
$('.msubparent1').click(function (e) {
  console.log('hello');
  $('.msubchild').css({ "display": "none" });
  $('.msubchild1').css({ "display": "block" });
});

$(document).on("pagecreate", "#pageone", function () {
  $("body").on("swipe", function () {
    $('#open-sidebar').css({ "display": "block" });
    $('#close-sidebar').css({ "display": "none" });
    $('.ui-page').css({ "height": "100%", "overflow-y": "auto" });
    document.getElementById("mySidebar").style.display = "none";
    $('.header-mobile-main').css({ "position": "relative", "left": "0px" });
    $('#content').css({ "position": "relative", "left": "0px" });
  });
});

$(document).ready(function () {
  var id = '';
  var src = '';
  $('.dropdown .dropdown').hover(function () {
    id = $(this).attr('id');
    src = $("#" + id + "-img").attr('src');
    var res = src.replace("imgs/gray", "imgs/gcolor");
    // alert(id);
    $("#" + id + "-img").attr('src', res);
  }, function () {
    id = $(this).attr('id');
    src = $("#" + id + "-img").attr('src');
    var res = src.replace("imgs/gcolor", "imgs/gray");
    $("#" + id + "-img").attr('src', res);
  });
});

$('a[data-slide]').click(function (e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider-nav').slick('slickGoTo', slideno - 1);
});
$("#filter").click(function () {
  $(".filter-div").show();
});
$("#mobile-filter").click(function () {
  $(".dropdown1").show();
});
$(".dropdown1").mouseleave(function () {
  $(".dropdown1").hide();
});
$(".filter-div").mouseleave(function () {
  $(".filter-div").hide();
});

$('.slider-for').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  asNavFor: '.slider-nav',
  autoplay: true,
  autoplaySpeed: 2000,
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  arrows: false,
  centerMode: true,
  autoplaySpeed: 2000,
});

/******start-Big-Slider******/
$('#carouselExampleControls').carousel({
  interval: 4000,
  pause: false
})
// var slickopts = {
//   slidesToShow: 5, //change rows when slide move

//   // rows: 4,
//   // Removes the linear order. Would expect card 5 to be on next row, not stacked in groups.
//   responsive: [{
//     breakpoint: 1930,
//     settings: {
//       slidesToShow: 5,
//       slidesToScroll: 3,
//       rows: 8,
//       slidesToScroll: 3,
//     }
//   },
//   {
//     breakpoint: 992,
//     settings: {
//       slidesToShow: 4
//     }
//   },
//   {
//     breakpoint: 776,
//     settings: {
//       slidesToShow: 3,
//       infinite: true,
//       rows: 1 // This doesn't appear to work in responsive (Mac/Chrome)
//     }
//   }]
// };
// $('.carousel').slick(slickopts);
/******End-Big-Slider******/

$(document).ready(function () {
  $('#mySidebar').slideAndSwipe();
});

// $(document).ready(function() {
//   var pageWidth = $(window).width();
//   var body= document.getElementsByTagName("head")[0];
//   var script= document.createElement("script");
//   script.type= "text/javascript";
//   script.id = 'myjQuery';
//   if (pageWidth < 768) {
//     script.src= "http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js";
//   } else {};
//   body.appendChild(script);
// });

// function w3_open() {
//   document.getElementById("mySidebar").style.display = "block";
//   document.getElementById("close-sidebar").style.opacity = "1 !important";
//   $('#open-sidebar').css({ "display": "none" });
//   $('#close-sidebar').css({ "display": "block" });
//   $('.ui-page').css({ "height": "100%","overflow-y":"hidden" });
//   $('.header-mobile-main').css({ "position": "relative", "left": "260px" });
//   $('#content').css({ "position": "relative", "left": "260px" });
// }

// function w3_close() {
//   document.getElementById("mySidebar").style.display = "none";
//   document.getElementById("close-sidebar").style.opacity = "0 !important";
//   $('#open-sidebar').css({ "display": "block" });
//   $('#close-sidebar').css({ "display": "none" });
//   $('.ui-page').css({ "height": "100%","overflow-y":"auto" });
//   $('.header-mobile-main').css({ "position": "relative", "left": "0px" });
//   $('#content').css({ "position": "relative", "left": "0px" });
// }

// $('.open-sidebar').click(function () {
//   $("body").css('overflow', 'hidden')
// });

$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});

//filter button animation
$('.secondary-menu .dropdown a').click(function (e) {
  $('.secondary-menu .dfilter').addClass('dfilter-animate');
  setInterval(function () { $('.secondary-menu .dfilter').removeClass('dfilter-animate'); }, 3500);
});

//make phone number visible
$('.num-display').click(function (e) {
  $('.tele a').removeClass('blur');
  $('.tele span').css({ "display": "none" });
  $('.tele .num-holder').css({ "display": "none" });
});

// show singup form
$('.create').click(function (e) {
  $('.tele a').removeClass('blur');
  $('#signup').css({ "display": "block" });
  $('html,body').animate({
    scrollTop: $("#signup").offset().top
  }, 1200
  );
});

// show part market onclick
$('.pt-link').click(function (e) {
  $('.dropdown-menu-right').removeClass('dn');
});