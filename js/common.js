$('.h-menu a').click(function(){
		$(this).addClass('active');
		$(this).parents('li').siblings('li').find('a').removeClass('active');
	});

$(document).ready(function(){
		var widthBtnTranspared = $('.btn-transparent').css('width');
		
		$('.wrap-btn').css('width',parseInt(widthBtnTranspared)+20+'px')
	});

$(".jump").click(function () {
		
		var id  = $(this).attr('data-section'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

    $(window).scroll(function(){

            if ( $(window).scrollTop() > 68 && $(".wrap-h-top").hasClass("default") ){
                $(".wrap-h-top").removeClass("default").addClass("fixed");
                $(".header").css('padding-top','90px');
                $('.logo>img').css({'height':'30px','marginTop':'5px'});
                $('.logo>span').css({'top':'-7px','fontSize':'20px'});
                $('.h-menu li').css('height','30px');
            } else if($(window).scrollTop() <= 68 && $(".wrap-h-top").hasClass("fixed")) {
                $(".wrap-h-top").removeClass("fixed").addClass("default");
                $(".header").css('padding-top','22px');
                $('.logo>img').css({'height':'68px','marginTop':'0'});
                $('.logo>span').css({'top':'-25px','fontSize':'24px'});
                $('.h-menu li').css('height','68px');
            }
        });

// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top;

  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 1500);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});
