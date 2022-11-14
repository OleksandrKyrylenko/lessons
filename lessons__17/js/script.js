// ============= Меню бургер =============
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});
// ============= Фіксація Хедера =============
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
//============ Скрол =============
var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}
//============ Таймер =================
const endtime = 'Jan 1 2023, 00:00 UTC+2';
function makeCorrectDate(uncorrectDate) {
    let correctDate = uncorrectDate;
    if (uncorrectDate < 10) {
    correctDate = '0' + uncorrectDate;
    }
    return correctDate;
}
// Скільки часу залишилось
function getDateRemaining(timesup) {
// total = залишок часу
    var total = Date.parse(timesup) - Date.now();
    var seconds = Math.floor((total / 1000) % 60);
    var minutes = Math.floor((total / 1000 / 60) % 60);
    var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    var days = Math.floor(total / (1000 * 60 * 60 * 24));
// вивід об'єктів
    return {
        'total': total,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

// Ініціалізація таймера на сайті
function setTime(id, timesup) {
    let timer = document.getElementById(id),
    days = timer.querySelector('.days'),
    hours = timer.querySelector('.hours'),
    minutes = timer.querySelector('.minutes'),
    seconds = timer.querySelector('.seconds'),
// оновлення таймера через кожні 1000 мс 
    timeInterval = setInterval(update, 1000);

function update() {
// результат функції getDateRemaining
    let total = getDateRemaining(timesup);
// Перевірка на нуль
    var nowdate = Date.now();
    if (nowdate <= Date.parse(endtime)) {
        var nowdate = Date.now();
        days.textContent = makeCorrectDate(total.days);
        hours.textContent = makeCorrectDate(total.hours);
        minutes.textContent = makeCorrectDate(total.minutes);
        seconds.textContent = makeCorrectDate(total.seconds);
} else {
    days.textContent = 0;
    hours.textContent = 0;
    minutes.textContent = 0;
    seconds.textContent = 0;
}
// Закінчення часу
    switch (total.days) {
        case 1:
        case 21:
        case 31:
        case 41:
        case 51:
    correctDays = "Days";
        break;
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
        case 24:
        case 32:
        case 33:
        case 34:
        case 42:
        case 43:
        case 44:
        case 52:
        case 53:
        case 54:
    correctDays = "Days";
        break;
        default:
        correctDays = "Days";
    }
    document.querySelector('.uncorrectDays').textContent = correctDays;

    // Закінчення часу
    switch (total.hours) {
        case 1:
        case 21:
        case 31:
        case 41:
        case 51:
    correctHours = "Hours";     
        break;
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
        case 24:
        case 32:
        case 33:
        case 34:
        case 42:
        case 43:
        case 44:
        case 52:
        case 53:
        case 54:
    correctHours = "Hours";
        break;
        default:
    correctHours = "Hours";
    }
        document.querySelector('.uncorrectHours').textContent = correctHours;

    // Закінчення хвилин
    switch (total.minutes) {
        case 1:
        case 21:
        case 31:
        case 41:
        case 51:
    correctMinutes = "Mins";
        break;
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
        case 24:
        case 32:
        case 33:
        case 34:
        case 42:
        case 43:
        case 44:
        case 52:
        case 53:
        case 54:
    correctMinutes = "Mins";
        break;
        default:
    correctMinutes = "Mins";    
    }
    document.querySelector('.uncorrectMinutes').textContent = correctMinutes;

    // Закінчення секунд
    switch (total.seconds) {
        case 1:
        case 21:
        case 31:
        case 41:
        case 51:
    correctSeconds = "Sec";
        break;
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
        case 24:
        case 32:
        case 33:
        case 34:
        case 42:
        case 43:
        case 44:
        case 52:
        case 53:
        case 54:
    correctSeconds = "Sec";
        break;
        default:
    correctSeconds = "Sec";
    }
    document.querySelector('.uncorrectSeconds').textContent = correctSeconds;
    }
}
setTime('timer', endtime);
// ============= Акардіон =============
document.querySelectorAll('.accordion-programe-course__trigger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('accordion-programe-course__item--active')) {
            parent.classList.remove('accordion-programe-course__item--active');
        } else{
            document
            .querySelectorAll('.accordion-programe-course__item')
            .forEach((child) => child.classList.remove('accordion-programe-course__item--active'))

            parent.classList.add('accordion-programe-course__item--active');
        }
    })
)
// ============= Слайдер slider-testimonials =============
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

// ============= Слайдер slider-other-course =============
$(document).ready(function(){
	$('.slider-other-course').slick({
		infinite:false,
		arrows:true,
		dots:false,		
		draggable:false,
		TouchThreshold:15,
		speed:1000,
		prevArrow: '<button type="button" class="slick-slider__arrow"><div class="_icon-left"></div></button>',
		nextArrow: '<button type="button" class="slick-slider__arrow"><div class="_icon-right"></div></button>',
		slidesToShow: 2,
        centerPadding: 0,
        responsive:[
			{
				breakpoint: 589,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});