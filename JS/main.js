let sectionOffsetTop = $('.about').offset().top;
$(window).scroll( function(){
    let windowScrollTop = $(window).scrollTop();
    if (windowScrollTop > sectionOffsetTop -74 && $('.navbar').innerWidth() > 768){
        $('.navbar').css('backgroundColor' , '#fff')
        $('.navbar').css('boxShadow' , ' 0 1px 8px 3px rgba(0, 0, 0, 0.050980392156862744)')
        $('.navbar-brand').css('color' , 'black')
        $('.nav-link').css('color' , 'black')
        $('.navbar-toggler-icon > i').css('color', 'black')
    } else if (windowScrollTop < sectionOffsetTop -74 && $('.navbar').innerWidth() > 768) {
        $('.navbar').css('backgroundColor' , 'transparent')
        $('.navbar').css('boxShadow' , ' none')
        $('.navbar-brand').css('color' , 'white')
        $('.nav-link').css('color' , 'white')
    }


})

console.log();
