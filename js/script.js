var inp = document.querySelectorAll('input');
for (var i = 0; i < inp.length; ++i) {
	inp[i].onblur = function () {
		if (this.value.length > 0) {
			this.style.background = 'linear-gradient(0deg, rgba(253,255,255,1) 0%, rgba(176,183,184,1) 100%)';
		}
		else {
			this.style.background = '#687072';
		}
	};
	inp[i].onfocus = function () {
		this.style.background = 'linear-gradient(0deg, rgba(253,255,255,1) 0%, rgba(176,183,184,1) 100%)';	
	};
}

var mobMenu = document.querySelector('.mob-menu');
var navigation = document.querySelector('.navigation');
var navigationList = document.querySelector('.navigation__list');
var subMenu = document.querySelector('.navigation__submenu');
var navigationLink = document.querySelectorAll('.navigation__link');

mobMenu.onclick = function() {
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

// var logo = document.querySelector('.logo');
// var headerContent = document.querySelector('.header__content');
// var headerTitle = document.querySelector('.header__title');
// var headerContacts = document.querySelector('.header__contacts');
// var headerPhone = document.querySelector('.header__phone');
// var headerEmail = document.querySelector('.header__email');
// var headerSubmenu = document.querySelector('.header__submenu');

// window.onresize = function () {
// 	if(window.screen.width < 481) {
// 		logo.appendChild(headerContent);
// 		headerContent.appendChild(headerTitle);
// 		headerContacts.appendChild(headerEmail);	
// 	}
// 	else {
// 		logo.parentElement.insertBefore(headerContent, headerSubmenu);
// 		headerContacts.appendChild(headerPhone);
// 	}
// };

// if (document.documentElement.clientWidth < 481) {
// 	logo.appendChild(headerContent);
// 	headerContent.appendChild(headerTitle);
// 	headerContacts.appendChild(headerEmail);
// }
// else {
// 	logo.parentElement.insertBefore(headerContent, headerSubmenu);
// 	headerContacts.appendChild(headerPhone);
// }