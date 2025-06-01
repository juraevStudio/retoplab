$(function(){
    $('.ul .item').click(function(){
        $(".header__burgir").removeClass("rotate");
        $(".header__box").removeClass("transform");
        $(".header__navbar").removeClass("active");
        setTimeout(function() {
            $(".header__burgir").removeClass("active");
            $(".header__navbar").removeClass("opacity");
        }, 500);
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });
});

// Open Services Blocks
$('.services-open').click(function(){
    $(this).addClass("none");
    $(".services__box").addClass("active");
});

// Burgir
$(".header__burgir").click(function() {
    if($(".header__burgir").hasClass("active")) {
        $(".header__burgir").removeClass("rotate");
        $(".header__box").removeClass("transform");
        $(".header__navbar").removeClass("active");
        setTimeout(function() {
            $(".header__burgir").removeClass("active");
            $(".header__navbar").removeClass("opacity");
        }, 500);
    } else {
        $(".header__burgir").addClass("active");
        $(".header__box").addClass("transform");
        $(".header__navbar").addClass("active");
        setTimeout(function() {
            $(".header__burgir").addClass("rotate");
        }, 500);
        setTimeout(function() {
            $(".header__navbar").addClass("opacity");
        }, 1);
    };
});


if (window.innerWidth > 768) {
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100) {
            $(".banner__btn_fixed").addClass("fixed");
        } else {
            
            $(".banner__btn_fixed").removeClass("fixed");
        }
    });
} else {
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 500) {
            $(".banner__btn_fixed").addClass("fixed");
        } else {
            
            $(".banner__btn_fixed").removeClass("fixed");
        }
    });
}
$(window).scroll(function(){
    if ( $(this).scrollTop() > 50) {
        $('.header').addClass("fixed")
        // $('.besamogas').css({bottom : '20px'});
    } else {
        $('.header').removeClass("fixed")
        // $('.besamogas').css({bottom : '-100%'});
    }
});
$('.besamogas').on('click', function(){
    $('html, body').animate({
        scrollTop: 0
    }, 500);
});

// modal
$(".open-modal").click(function() {
    $(".modal").addClass("active");
    setTimeout(function() {
        $(".modal").addClass("opacity");
    }, 1);
});
$(".modal .close").click(function() {
    $(".modal").removeClass("opacity");
    setTimeout(function() {
        $(".modal").removeClass("active");
        
    }, 400);
});

// Animate Elements
$(window).scroll(function() {
    let st = $(this).scrollTop();

    $(".star1").css({
        "transform" : "translate(0px, -" + st/15 + "px"
    });
    $(".star2").css({
        "transform" : "translate(0px, -" + st/20 + "px"
    });
    $(".star3").css({
        "transform" : "translate(0px, -" + st/25 + "px"
    });
    $(".star4").css({
        "transform" : "translate(0px, -" + st/12 + "px"
    });
    $(".banner__img .man").css({
        "transform" : "translate(0px, " + st/15 + "px"
    });
});

// Phone Number
if(document.querySelector('.input_phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });
};