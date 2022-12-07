(function($) {
    $(window).resize(function() {
        size()
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('header').height() * 2) {
            $('header').addClass('fixed_nav');
        }
        else {
            $('header').removeClass('fixed_nav');
        }
    })
    size()
    function size() {
        $('header .header nav .menuText .topmenuBig > .submenu .submenuP').width($('.container').width())
        $('header .header nav .submenuL3 .submenu3 .submenu3-1 .line').width(($('body').width() - $('.container').width()) / 2)
        $('header .header nav .submenuL3 .submenu3').css({
            'top': $('header .header nav .menuText .topmenuBig > .submenu .submenu2').height()
        })
    }
    setTimeout(function() {
        $('header .header nav .submenuL3 .submenu3').css({
            'top': $('header .header nav .menuText .topmenuBig > .submenu .submenu2').height()
        })
    }, 10)
    $('.offcanvas#mobMenu .topmenu li .nextOpen > a').on('click', function() {
        console.log($(this).parent('.nextOpen').next('.submenu').toggleClass('open'))
    })
    $('.letsee-fontsize-small').on('click', function() {
        const root = document.querySelector(':root');
        const rootStyles = getComputedStyle(root);
        let fz = rootStyles.getPropertyValue('--fz120')
        fz = fz.slice(0, -2)
        document.body.style.setProperty('--fz120', fz + 'px');
    })
    $('.letsee-fontsize-medium').on('click', function() {
        const root = document.querySelector(':root');
        const rootStyles = getComputedStyle(root);
        let fz = rootStyles.getPropertyValue('--fz120')
        fz = fz.slice(0, -2)
        document.body.style.setProperty('--fz120', fz * 1.2 + 'px');
    })
    $('.letsee-fontsize-large').on('click', function() {
        const root = document.querySelector(':root');
        const rootStyles = getComputedStyle(root);
        let fz = rootStyles.getPropertyValue('--fz120')
        fz = fz.slice(0, -2)
        document.body.style.setProperty('--fz120', fz * 1.4 + 'px');
    })
    $('.banner .bannerBlock .btn').on('click', function() {
        if ($('.letsee-colors-bonw').hasClass('letsee-colors-active') && $('body').hasClass('letsee-active')) {
            $('header .header .logo img').attr('src', 'assets/img/other/logo2.svg')
        } else {
            $('header .header .logo img').attr('src', 'assets/img/other/logo.svg')
        }
    })
    
})(jQuery);