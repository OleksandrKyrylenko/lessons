// Меню бургер
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});
// Фіксація Хедера
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
console.log(headerHeight)

window.addEventListener('scroll', ()=> {
    let scrollDistance = window.scrollY;
    console.log(scrollDistance);

    if (scrollDistance >= headerHeight) {
        header.classList.add('header--fixed');
    }
    else {
        header.classList.remove('header--fixed');
    }
});
// Скрол
var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}

