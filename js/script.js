var inp = document.querySelectorAll('input');
for (var i = 0; i < inp.length; ++i) {
	inp[i].onblur = function () {
		if (this.value.length > 0) {
			this.classList.add('input_active');
		}
		else {
			if(this.classList.contains('input_active')) {
				this.classList.remove('input_active');
			}
		}
	};
	inp[i].onfocus = function () {
		this.classList.add('input_active');
	};
}
var navigationList = document.querySelector('.navigation__list');
var navigationLink = document.querySelectorAll('.navigation__link');
document.querySelector('.mob-menu').onclick = function() {
	if (navigationList.classList.contains('navigation__list_shown')) {
		navigationList.classList.remove('navigation__list_shown');
		navigationList.classList.add('navigation__list_hidden');
		for (var i=0; i < navigationLink.length; ++i){
			if(navigationLink[i].nextElementSibling != null) {
				navigationLink[i].nextElementSibling.classList.remove('navigation__submenu_shown');
			}
			if (navigationLink[i].classList.contains('navigation__item_mob-active')) {
				navigationLink[i].classList.remove('navigation__item_mob-active');
			}
		}
	}
	else {
		navigationList.classList.remove('navigation__list_hidden');
		navigationList.classList.add('navigation__list_shown');
	}
};
for (var i=0; i < navigationLink.length; ++i){
	navigationLink[i].onclick = function() {
		if (this.classList.contains('navigation__item_mob-active')) {
			this.classList.remove('navigation__item_mob-active');
			if(this.nextElementSibling != null) {
				this.nextElementSibling.classList.add('navigation__submenu_hidden');
				this.nextElementSibling.classList.remove('navigation__submenu_shown');
			}
		}
		else {
			this.classList.add('navigation__item_mob-active');
			if(this.nextElementSibling != null) {
				this.nextElementSibling.classList.add('navigation__submenu_shown');
				this.nextElementSibling.classList.remove('navigation__submenu_hidden');
			}
		}
	};
}