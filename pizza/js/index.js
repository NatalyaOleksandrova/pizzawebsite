$(".menu-btn").on("click",function(){
		$(".menu-btn__burger").toggleClass('change');
		$('.list').toggleClass('opening');  
	   });	  
$('.slider-menu').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows:false
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false
          }
        }
      ]
      });
$('.nav-tabs a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        e.target
        e.relatedTarget
        $('.slider-menu').slick('setPosition');
}); 

 

$('.slider-offer').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1060,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      
      infinite: true
      }
    },
    {
      breakpoint: 769,
      settings: {
      
      slidesToShow: 1,
      slidesToScroll: 1
      }
    }
    ]
});


var myCol = document.getElementsByClassName('tistotype__btn');

function getTarget(e) {
  if (!e) {
    e = window.event;
  }
  return e.target || e.srcElement;
}

function setActive(e) {
	var target = getTarget(e),
      section = target.parentNode;
  
  for (i = 0; i < myCol.length; i++) {
    if (myCol[i].parentNode === section) {
      myCol[i].className = ' tistotype__btn';
    }
  }
  
  target.className = 'tistotype__btn active';
}

for (j = 0; j < myCol.length; j++) {
  myCol[j].addEventListener('click', function(e) {
    setActive(e);
  }, false);
}



wow = new WOW(
 {
   boxClass: 'wow',      // default
   animateClass: 'animate__animated', // default
   offset: 0,          // default
   mobile: true,       // default
   live: true        // default
 }
)
wow.init();


$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  $('.slider-menu').slick('setPosition');
  }) 
   
 //Slider
 $('.slider__items').on(`init reInit`, function(event, slick) {
  $('.counter').text(1 + ' / ' + slick.slideCount);
})
$('.slider__items').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
  $('.counter').text(currentSlide + 1 + ' / ' + slick.slideCount);
})


$('.slider__items').slick({
  arrows:true,
  dots:false,
  slidesToShow:1,
  slidesToScroll: 1,
  accessibility: true,
  autoplay:false,
});


function qPopup() {
  $(' .open').click(function() {
      $('.overlay').fadeToggle(600);
      $('.popup').fadeToggle(600);
  });
  $('.close').click(function() {
      $('.overlay').fadeToggle(500);
      $('.popup').fadeToggle(500);
  });
}


qPopup();


$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

  
