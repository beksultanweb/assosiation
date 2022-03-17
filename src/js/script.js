$(document).ready(function(){
    $('.partners__inner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="./icons/next.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./icons/prev.svg"></img></button>',
        responsive:[
            {
                breakpoint: 1024,
                settings:{
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
	$('.team__inner').slick({
        // autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
		// variableWidth: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive:[
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 465,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
	
});
  
/*  Burger  */

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__link'),
    hamburger = document.querySelector('.header__burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__burger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__burger_active');
            menu.classList.toggle('header__menu_active');
        });
    });
});


/*	Map animation	*/

const $leftLinks = document.querySelectorAll('.map-list a'),
		$mapLinks = document.querySelectorAll('.map a'),
		$info = document.querySelector('.map-info'),
		mapdivider = document.querySelector('.map-divider');

const requestData = (id = 1) => {
	fetch('./json/data.json')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		$info.innerHTML = `
			<p class="pred">${data[id - 1].pred}</p>
			<div class="map-divider"></div>
			<p class="oper">${data[id - 1].info}</p>
		`;
	});
};

requestData();

$leftLinks.forEach(el => {
	el.addEventListener('mouseenter', (e) => {
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let color = self.dataset.color;
		let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
		// let currentPolygon = currentElement.querySelectorAll('polygon');
		let currentPath = currentElement.querySelectorAll('path');
		// if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
		if (currentPath) currentPath.forEach(el => el.style.cssText = `fill: ${color};`);
	});

	el.addEventListener('mouseleave', (e) => {
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
		// let currentPolygon = currentElement.querySelectorAll('polygon');
		let currentPath = currentElement.querySelectorAll('path');
		// if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = ``);
		if (currentPath) currentPath.forEach(el => el.style.cssText = ``);
	});
	
	el.addEventListener('click', (e) => {
		e.preventDefault();
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let currentElement = document.querySelector(`.map-list a[href="${selfClass}"]`);
		let id = parseInt(currentElement.dataset.id);
		requestData(id);
		mapdivider.classList.toggle('active');
	});
});

$mapLinks.forEach(el => {
	el.addEventListener('mouseenter', (e) => {
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let color = self.dataset.color;
		let currentElement = document.querySelector(`.map-list a[href="${selfClass}"]`);
		// let currentPolygon = self.querySelectorAll('polygon');
		let currentPath = self.querySelectorAll('path');
		// if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
		if (currentPath) currentPath.forEach(el => el.style.cssText = `fill: ${color};`);
	});

	el.addEventListener('mouseleave', (e) => {
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let currentElement = document.querySelector(`.map-list a[href="${selfClass}"]`);
		// let currentPolygon = self.querySelectorAll('polygon');
		let currentPath = self.querySelectorAll('path');
		// if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = ``);
		if (currentPath) currentPath.forEach(el => el.style.cssText = ``);
	});

	el.addEventListener('click', (e) => {
		e.preventDefault();
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let currentElement = document.querySelector(`.map-list a[href="${selfClass}"]`);
		let id = parseInt(currentElement.dataset.id);
		requestData(id);
		mapdivider.classList.toggle('active');
		// Абылай тут
		//Внутри currentElement храниться нужный текст
		// alert(currentElement.textContent);
	});
});

// Lang 2
// let select = function(){
// 	var body = document.getElementsByTagName('body')[0];

//     var switcherRU = document.getElementById('switcher-ru');
//     var switcherKZ = document.getElementById('switcher-kz');

//     // Заранее считаем срок хранения кук
//     var expires = new Date();
//     expires.setDate(expires.getDate() + 366);
//     expires.toUTCString();

//     // Русский и английский заголовки
//     var titleRU = document.getElementById('title-ru');
//     var titleKZ = document.getElementById('title-kz');
//     var title = {
//       ru: titleRU.getAttribute('content'),
//       kz: titleKZ.getAttribute('content')
//     };

//     var switchLang = function() {
// 		console.log("test");
//       	var lang = this.id;
//       	lang = lang.replace('switcher-', '');

//       // Меняем класс для BODY
// 	      body.className = lang;

//       // Записываем куки
//     	document.cookie = ['lang=' + lang,'; expires=' + expires,'; path=/','; domain=' + document.location.host].join('');
//       	document.title = title[lang];
//     };

//     switcherRU.onclick = switchLang;
//     switcherKZ.onclick = switchLang;
// };


// Language
let select = function () {
    let selectHeader = document.querySelectorAll('.selected-lang');
    let selectItem = document.querySelectorAll('.lang-tochoose');
	let selectItemfooter = document.querySelectorAll('.lang-switcher');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

	selectItemfooter.forEach(item2 => {
        item2.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.parentElement.classList.toggle('active');
    }
    function selectChoose() {
        const text = this.innerHTML;
		let link = this.getAttribute('data'),
            select = this.closest('.lang-menu'),
            currentText = select.querySelector('.lang-select');
        select.classList.remove('active');
		// e.preventDefault();
		
        $.ajax({
			// type: "GET",
        	url:"lang.php",
			// data: "text",
			success: function () {
				// empty() чистим HTML в селект
				// html(data) вставляем в select то что ответил сервер (<option>...</option>)
				// пример ответа: <option>...</option><option>...</option><option>...</option>
				// currentText.empty().html(data);
				// if (text == 'kz'){
				// 	currentText.append('<img src="icons/kz_flag.svg" alt="flag"> қаз');
				// }

				// currentText.innerHTML = text;
				
			}
			
		}).done(function(){
			
            // alert(result);
            // history.pushState(0, 0, link);
			
			location.href=link;
		});    
	    return false;
    }
	
	
    
};


// select();
select();
/*	Dropdown	*/
function DropDown(dropDown) {
	const [toggler, menu] = dropDown.children;
	
	const handleClickOut = e => {
	  if(!dropDown) {
		return document.removeEventListener('click', handleClickOut);
	  }
	  
	  if(!dropDown.contains(e.target)) {
		this.toggle(false);
	  }
	};
	
	const setValue = (item) => {
	  const val = item.textContent;
	  toggler.textContent = val;
	  this.value = val;
	  this.toggle(false);
	  dropDown.dispatchEvent(new Event('change'));
	  toggler.focus();
	}
	
	const handleItemKeyDown = (e) => {
	  e.preventDefault();
  
	  if(e.keyCode === 38 && e.target.previousElementSibling) { // up
		e.target.previousElementSibling.focus();
	  } else if(e.keyCode === 40 && e.target.nextElementSibling) { // down
		e.target.nextElementSibling.focus();
	  } else if(e.keyCode === 27) { // escape key
		this.toggle(false);
	  } else if(e.keyCode === 13 || e.keyCode === 32) { // enter or spacebar key
		setValue(e.target);
	  }
	}
  
	const handleToggleKeyPress = (e) => {
	  e.preventDefault();
  
	  if(e.keyCode === 27) { // escape key
		this.toggle(false);
	  } else if(e.keyCode === 13 || e.keyCode === 32) { // enter or spacebar key
		this.toggle(true);
	  }
	}
	
	toggler.addEventListener('keydown', handleToggleKeyPress);
	toggler.addEventListener('click', () => this.toggle());
	[...menu.children].forEach(item => {
	  item.addEventListener('keydown', handleItemKeyDown);
	  item.addEventListener('click', () => setValue(item));
	});
	
	this.element = dropDown;
	
	this.value = toggler.textContent;
	
	this.toggle = (expand = null) => {
	  expand = expand === null
		? menu.getAttribute('aria-expanded') !== 'true'
		: expand;
  
	  menu.setAttribute('aria-expanded', expand);
	  
	  if(expand) {
		toggler.classList.add('active');
		menu.children[0].focus();
		document.addEventListener('click', handleClickOut);
		dropDown.dispatchEvent(new Event('opened'));
	  } else {
		toggler.classList.remove('active');
		dropDown.dispatchEvent(new Event('closed'));
		document.removeEventListener('click', handleClickOut);
	  }
	}
  }
  
  const dropDown = new DropDown(document.querySelector('.dropdown'));
	
  dropDown.element.addEventListener('change', e => {
	console.log('changed', dropDown.value);
  });
  
  dropDown.element.addEventListener('opened', e => {
	console.log('opened', dropDown.value);
  });
  
  dropDown.element.addEventListener('closed', e => {
	console.log('closed', dropDown.value);
  });
  
//   dropDown.toggle();