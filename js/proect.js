$(document).ready(function(){
	$('.slider').slick({
		// Скрыть стандартные кнопки.
		arrows: false,
		infinite: true,
  		slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        	// Настройки слайдера для 768 px.
        	{
        		breakpoint: 768,
        		settings: {
        			slidesToShow: 2,
        			slidesToScroll: 1,
        			infinite: true
        		}
        	},
        	// Настройки слайдера для 320 px.
        	{
        		breakpoint: 320,
        		settings: {
        			slidesToShow: 1,
        			slidesToScroll: 1,
        			infinite: true
        		}
        	}
        ]
	});

	// Добавить функции к пользовательским кнопкам.
	$('.left').click(function(){
		$('.slider').slick('slickPrev');
	})

	$('.right').click(function(){
		$('.slider').slick('slickNext');
	})
});

// let img = document.getElementById('img');

// if ($(window).width() < 600) {
// 	img.src = 'img-arcticle.svg';
// } else {
// 	img.src = 'Rectangle 44.svg';
// }

// $(document).ready(function(){
// 	$('.slider').slick({
// 		arrows: false
// 	})
// });

// $('.slider').slick({
// 	prevArrow: $('.left')
// })

// $('.slider').slick({
// 	arrows: false
// })



