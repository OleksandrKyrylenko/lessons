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
// Таби
const tabNavItems = document.querySelectorAll('.tabs__button');
const tabItems = document.querySelectorAll('.item-benefits');
document.addEventListener("click", function (e) {
    const targetElement = e.target;
    let currentActiveIndex = null;
    let newActiveIndex = null;
    if (targetElement.closest('.tabs__button')) {
        tabNavItems.forEach((tabNavItem, index) => {
            if (tabNavItem.classList.contains('active')) {
                currentActiveIndex = index;
            }
            if (tabNavItem === targetElement) {
                newActiveIndex = index;
            }
            tabNavItem.classList.remove('active');
        });
        targetElement.classList.add('active');
        tabItems[currentActiveIndex].classList.remove('active');
        tabItems[newActiveIndex].classList.add('active');
    }
});
//Слайдер
$(document).ready(function(){
	$('.slider').slick({
		infinite:false,
		arrows:true,
		dots:false,
		speed:1000,
		slidesToShow: 4,
		TouchThreshold:15,
		draggable:false,
		prevArrow: '<button type="button" class="slick-slider__arrow"><div class="_icon-left"></div></button>',
		nextArrow: '<button type="button" class="slick-slider__arrow"><div class="_icon-right"></div></button>',
		responsive:[
			{
				breakpoint: 850,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 451,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
// Слайдер slider-testimonials
$(document).ready(function(){
	$('.slider-testimonials').slick({
		infinite:false,
		arrows:true,
		dots:true,		
		draggable:false,
		TouchThreshold:15,
		speed:1000,
		prevArrow: '<button type="button" class="slick-slider__arrow"><div class="_icon-left"></div></button>',
		nextArrow: '<button type="button" class="slick-slider__arrow"><div class="_icon-right"></div></button>',
		slidesToShow: 1,
	});
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

