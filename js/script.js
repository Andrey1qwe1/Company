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

mobMenu.onclick = function() {
	if (navigationList.classList.contains('navigation__list_shown')) {
		navigationList.classList.remove('navigation__list_shown');
		navigationList.classList.add('navigation__list_hidden');

	}
	else {
		navigationList.classList.remove('navigation__list_hidden')
		navigationList.classList.add('navigation__list_shown');
	}
};

