// Global parameters
window.params = {
  widthFull: 750,
  maxRowHeight: 0,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};

function Main() {

  // Modules initialization
  var maxRowHeight = new MaxHeight($('.cross-row'));


  // polyfills
  window.viewportUnitsBuggyfill.init();

  // add conditional classes
  if (params.isIOS) $('html').addClass('-ios');
  if (params.isMobile) $('html').addClass('-mobile');

}

$(function(){
  Main();
});

$(window).on('load', function(){
  setTimeout(function(){
    $(window).trigger('resize');
  }, 500);
});

// Áðàóçåð Internet Explorer?
$(function(){
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null) {
      var v = parseFloat( RegExp.$1 );
      $('html').addClass("ie");
      $('html').addClass("ie"+v);
    }
  } else if (navigator.appName == 'Netscape') {
    var ua = navigator.userAgent;
    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null) {
      var v = parseFloat( RegExp.$1 );
      $('html').addClass("ie");
      $('html').addClass("ie"+v);
    }
  }
});



/*
#############################
#   Main JS for ____________   #
#############################
*/

jQuery(document).ready(function($) {

  $('.slider').slick({
    arrows: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4000
  });



/*-----------------------------------------------------------------*/  
  $('.magnific').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',
    modal: true,

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

$('#Map area').magnificPopup();


/********************************************************************************************/
//-------------------------Google Карта география производства ---------------------------------
  function map_initialize() {

      var mapCenterCoord = new google.maps.LatLng(59.937065, 30.329153);

      var mapOptions = {
        center: mapCenterCoord,
        zoom: 16,
        disableDefaultUI: true,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      
      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

      var mainMarker = new google.maps.MarkerImage('images/map/main-marker.png');
      var park = new google.maps.MarkerImage('images/map/park-marker.png');
      var restraunt = new google.maps.MarkerImage('images/map/restraunt-marker.png');
      var shop = new google.maps.MarkerImage('images/map/shop-marker.png');
      var theatre = new google.maps.MarkerImage('images/map/theatre-marker.png');


      var infowindow = new google.maps.InfoWindow();

  // Маркеры на карте (места добычи и перевалки в Mосковской области)
      var markers = [
        ['ДОМ ЖАКО', 59.937065, 30.329153, mainMarker, 'box-1'],
        ['Мама Рома', 59.937884, 30.326095, restraunt, 'box-2'],
        ['Михайловский сквер', 59.937372, 30.331626, park, 'box-3'],
        ['Михайловский сад', 59.939745, 30.332492, park, 'box-3']

      ];

      
      for (var i = 0; i < markers.length; i++) {
        var point = markers[i];
        var marker = new google.maps.Marker({
          position: {lat: point[1], lng: point[2]},
          map: map,
          icon: point[3],
          title: point[0]
        });

        google.maps.event.addListener(marker,'click', (function(marker,content){ 
          return function() {
            $('.'+content).css('display', 'inline-block').siblings('.box').css('display', 'none');
            $('.'+content).find('.mini-slider').get(0).slick.setPosition();
            
          };
          
        })(marker, point[4])); 
      }


      $(window).resize(function (){
        map.setCenter(mapCenterCoord);
      });
  };

  if ($('#map-canvas').length > 0) {
    map_initialize();
  };

  $('.close-box').on('click', function(event) {
    event.preventDefault();
      $(this).parent('.box').fadeOut('fast', function() { 
    });
  });
  

/***********************************************************************/


  $(".floor-nav ul li").click(function(e){
      e.preventDefault();
      slideIndex = $(this).index();
      $('.slider').slick('slickGoTo', slideIndex);
  });

  /*Toggle menu with .menu-button*/
  $('.menu-button').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).siblings('.menu').fadeToggle('fast');
  });

  if ($('.slim').length > 0) {
    $('.slim').slimScroll({
      color: '#000',
      size: '3px',
      height: '100%'
    });
  };
  

  /*if ($('img[usemap]').length > 0) {
    $('img[usemap]').rwdImageMaps();
  };*/
  
  /*if ($('.MapImg').length > 0) {
    $(function () {
        var data = {};
        $('.MapImg').maphilight({
        fillColor: '928148',
        strokeColor: 'rgba(152,136,83, 0.5)',
        fillOpacity: 0.5
      });
        data.alwaysOn = true;
        $('area[alt="sold"]').data('maphilight', data).trigger('alwaysOn.maphilight');
    });  
  };*/

  if ($('.mini-slim').length > 0) {
    $('.mini-slim').slimScroll({
      color: '#000',
      size: '3px',
      height: '150'
    });
  };
  
  /*if ($('#img').length > 0) {
    $('#img').mapster({
      render_highlight: {
          stroke: true,
          strokeWidth: 3,
          strokeColor: 'ffffff',
          fill: true,
          fillColor: 'ffffff',
          fillOpacity: 0.5
      },
      isSelectable: false,
      clickNavigate: true
    });

    var wd = $(window).width();
    var imght = $('#img').height()
    $('.map-wrap').css('margin-top', '-' + (imght/2) + 'px');

    $(window).resize(function(event) {
      wd = $(this).width();
      imght = $('#img').height()
      $('#img').mapster('resize',wd,imght,0); 
      $('.map-wrap').css('margin-top', '-' + (imght/2) + 'px');
    });
  };*/
  var wd = $(window).width();
  var imght = $('#img').height()
  
  if (imght < $(window).height()) {
    $('.map-wrap #img').add('.map-wrap #img-svg').css({
      'margin-top': '-' + ($(window).height()/2) + 'px',
      height: $(window).height() + 'px',
      width: 'auto',
      left: '50%'
    });
    $('.map-wrap #img').add('.map-wrap #img-svg').css('margin-left', '-' + ($('.map-wrap #img').width()/2) + 'px');
  };
  if (imght > $(window).height()) {
    $('.map-wrap #img').add('.map-wrap #img-svg').css({
      'margin-top': '-' + (imght/2) + 'px',
      height: 'auto',
      width: '100%',
      left: '0'
    });
    $('.map-wrap #img').add('.map-wrap #img-svg').css('margin-left', '0px');
  };


  $(window).resize(function(event) {
      wd = $(this).width();
      imght = $('#img').height()
      $('.map-wrap #img').add('.map-wrap #img-svg').css('margin-top', '-' + (imght/2) + 'px');

      if (imght < $(window).height()) {
        $('.map-wrap #img').add('.map-wrap #img-svg').css({
          'margin-top': '-' + ($(window).height()/2) + 'px',
          height: $(window).height() + 'px',
          width: 'auto',
          left: '50%'
        });
        $('.map-wrap #img').add('.map-wrap #img-svg').css('margin-left', '-' + ($('.map-wrap #img').width()/2) + 'px');
      };
      if (imght > $(window).height()) {
        $('.map-wrap #img').add('.map-wrap #img-svg').css({
          'margin-top': '-' + (imght/2) + 'px',
          height: 'auto',
          width: '100%',
          left: '0'
        });
        $('.map-wrap #img').add('.map-wrap #img-svg').css('margin-left', '0px');
      };

      $('.map-wrap').css('height', ($(window).height()) + 'px');
    });



  $(function(){
    $('polygon').on('click', function(event) {
      /* Act on the event */
      $('#house').css('display', 'none').siblings('.flats').fadeIn('fast');
      $('.slider').get(0).slick.setPosition();
      $('.slider').get(0).slick.slickGoTo(1)
    });
  })





  if ($('#fullpage').length > 0) {
    $('#fullpage').fullpage({
      anchors: ['firstPage', 'secondPage', 'thirdPage'],
      navigationTooltips: ['First', 'Second', 'Third'],
      menu: '#myMenu',
      slideSelector: '.fp-slide',
      scrollOverflow: false,
      responsiveWidth: 1200,
      responsiveHeight: 750,
      normalScrollElements: '.mini-slim'
    });
  };

  if ($('.mini-slider').length > 0) {
    $('.mini-slider').slick({
      arrows: false,
      dots: true,
      autoplay: false,
      fade: true,
      autoplaySpeed: 4000
    });
  };


 if($('#Map')) {
        $('#Map area').each(function() {
            var id = $(this).attr('id');
            $(this).mouseover(function() {
                $(this).parent().siblings('.tip-'+id).show();
            });

            $(this).mouseout(function() {
                var id = $(this).attr('id');
                $(this).parent().siblings('.tip-'+id).hide();
            });

        });
    }


});




