$(document).ready(function(){
    $('.partners__inner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="./icons/next.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./icons/prev.svg"></img></button>',
        responsive:[
            {
                breakpoint: 992,
                settings:{
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
	/*  Burger  */
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
  });


/*	Map animation	*/

const $leftLinks = document.querySelectorAll('.map-list a'),
		$mapLinks = document.querySelectorAll('.map a'),
		$info = document.querySelector('.map-info');

const requestData = (id = 1) => {
	fetch('./json/data.json')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		$info.innerHTML = `
			<p>${data[id - 1].info}</p>
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
		// Абылай тут
		//Внутри currentElement храниться нужный текст
		// alert(currentElement.textContent);
	});
});

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
  
  dropDown.toggle();