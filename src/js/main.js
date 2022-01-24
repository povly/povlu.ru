
document.addEventListener("DOMContentLoaded", () => {
	if (document.querySelector('.main-reviews')) {
		var reviewSwiper = new Swiper('.main-reviews .swiper', {
			lazy: true,
			spaceBetween: 30,
			speed: 500,
			autoHeight: true,
			pagination: {
				el: '.main-reviews__pagination .swiper-pagination',
			},

			navigation: {
				nextEl: '.main-reviews__button-next',
				prevEl: '.main-reviews__button-prev',
			},
		})
	}
	const headerMenu = document.querySelector('.header__menu');
	const headerNav = document.querySelector('.header__nav');
	headerMenu.addEventListener('click', () => {
		headerMenu.classList.toggle('active');
		headerNav.classList.toggle('active');
	})
	const headerMenuItem = document.querySelectorAll('.header__nav-item');
	headerMenuItem.forEach((el) => {
		el.addEventListener('click', () => {
			headerMenu.classList.remove('active');
			headerNav.classList.remove('active');
		})
	})
	let mainButton = document.querySelector('.main__button');
	if (mainButton) {
		let mainForm = document.querySelector('.main__form');
		let mainFormBody = document.querySelector('.main__form-body');
		let mainTrue = document.querySelector('.main__true');
		mainButton.addEventListener('click', () => {
			mainFormBody.classList.remove('hidden');
			mainForm.classList.add('active');
			document.body.style.overflow = 'hidden';
		})
		let mainFormClose = document.querySelector('.main__form-close');
		mainFormClose.addEventListener('click', () => {
			mainForm.classList.remove('active');
			document.body.style.overflow = '';
		})
		mainForm.addEventListener('click', (e) => {
			if (e.target.classList.contains('main__form')) {
				mainForm.classList.remove('active');
				mainTrue.classList.remove('active');
				document.body.style.overflow = '';
			}
		})
		let mainTrueClose = document.querySelector('.main__true-close');
		mainTrueClose.addEventListener('click', () => {
			mainForm.classList.remove('active');
			mainTrue.classList.remove('active');
			document.body.style.overflow = '';
		})

	}
});