$(document).ready(function(){
    $('input[name=phone]').mask("+7 (999) 999-99-99");
    
    $('.modal__close').on('click', function(){
        $('.overlay, #thanks').fadeOut('slow');
    });

    const overlay = document.querySelector('.overlay');
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            $('.overlay, #thanks').fadeOut('slow');
        }
    });

    $('form').submit(function(e){
        e.preventDefault();

        // if (!$(this).valid()){
        //     return;
        // }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });
});
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
        })
    })
});

// Language
let select = function () {
    let selectHeader = document.querySelectorAll('.selected-lang');
    let selectItem = document.querySelectorAll('.lang-tochoose');
	// let selectBody = document.querySelectorAll('.lang-body');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
		// selectBody.classList.toggle('is-active');
		// console.log("test");
        this.parentElement.classList.toggle('active');
    }
	// в любую точку закрыть
    function selectChoose() {
		// console.log("test2");
		// setTimeout(() => this.dispatchEvent(new Event('change', {
		// 	bubbles: true
		// 	// cancelable: true
		// })));
        let text = this.innerHTML,
            select = this.closest('.lang-menu'),
            currentText = select.querySelector('.lang-select');
		// let	tagA = this.getElementsByTagName("a");
		
		// let hrefText = selfClass.innerText;
        currentText.innerHTML = text;
		
		
		// console.log(href);
        select.classList.remove('active');
		let href = document.getElementById('lang-link').getAttribute('href');
		history.pushState(null, null, href);
		// window.location.href = href;
		// return false;
		// selectBody.classList.remove('is-active');
		// return false;
    }
	
	// selectItem.forEach(item => {
    //     item.onclick = function(event) {
	// 		let choosed = event.target.closest('.lang-tochoose');
	// 		if (!choosed) return;
	// 		if (!item.contains(choosed)) return;
	// 		selectChoose(choosed);
	// 	};
    // });
	
	// selectItem.forEach(item => {
    //     item.addEventListener('click', () =>{
	// 		console.log("change");
			
			
    // 	});
	// });
		// ev.preventDefault();
		
	
};


select();