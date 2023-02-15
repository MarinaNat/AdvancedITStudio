// открытие и закрытие бургер-меню
const iconMenu = document.querySelector('.first-screen__burger');
const menuBody = document.querySelector('.first-screen__menu');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active')
		menuBody.classList.toggle('_active')
	})
}

// скрол при нажатии на меню
const menuLinks = document.querySelectorAll('.first-screen__link[data-goto]')

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.first-screen__menu').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock')
				iconMenu.classList.remove('_active')
				menuBody.classList.remove('_active')
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			})
			e.preventDefault()
		}
	}
}


// споллер
const spollers = document.querySelectorAll('.footer__item');
if (spollers) {
	spollers.forEach(spoller => {
		spoller.addEventListener('click', function (e) {
			const listBlock = spoller.querySelector('.footer__list')
			const listTitle = document.querySelector('.footer__subtitle');
			listBlock.classList.toggle('_active');
			listTitle.classList.toggle('_active');


		})
	})
}


