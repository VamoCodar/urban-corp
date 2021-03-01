//verificação

const pageHome = document.querySelector("#page__home")

function verificacao() {
    if (pageHome) {
        var swiper = new Swiper('.cursos__container', {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                380: {
                    slidesPerView: "auto",
                    centeredSlides: true,
                    spaceBetween: 30,
                },

                720: {
                    slidesPerView: "auto",
                    centeredSlides: true,
                    spaceBetween: 30,
                    // freeMode: true,
                },
                1100: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                    centeredSlides: false,

                },
            }
        });
        AOS.init();

        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 80, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });





    }
}

verificacao()











// MENU ==================================
function menuPreenchido() {
    const menuFixo = document.querySelectorAll(".menu");

    menuFixo.forEach((i) => {
        if (window.pageYOffset >= 120) {
            document.body.classList.add("ativo__scroll");

        } else if (window.pageYOffset < 150) {
            document.body.classList.remove("ativo__scroll");
        }
    });
}
menuPreenchido();


/* abre & fecha menu  */
const menuItem = document.querySelector(".menu__icon-click")
const linksMenu = document.querySelector(".atalhos")
const mediaQuery = window.matchMedia('(min-width: 992px)')

function menuMobile() {
    if (!mediaQuery.matches && !document.body.classList.contains("menu__open")) {
        document.body.classList.add("menu__open");

    } else if (document.body.classList.contains("menu__open")) {

        linksMenu.setAttribute(
            "style",
            "animation: voltaMenu 250ms both ease-out;"
        );
        setTimeout(() => {
            linksMenu.removeAttribute("style", "animation");
            document.body.classList.remove("menu__open");
        }, 250);
    }
}


/* FECHA MENU SE CLICAR PARTE PRETA */
function fechaMenuMobile(click) {
    const partePreta = document.querySelector(".fundo__black")
    if (document.body.classList.contains("menu__open") && click.target == partePreta) {
        linksMenu.setAttribute(
            "style",
            "animation: voltaMenu 250ms both ease-out;"
        );
        setTimeout(() => {
            linksMenu.removeAttribute("style", "animation");
            document.body.classList.remove("menu__open");
        }, 250);
    }

}


// add classe DROP MOBILE 
const dropMobile = document.querySelector(".menu__dropdown-mobile")
dropMobile.addEventListener("click", function (event) {
    event.preventDefault();
    dropMobile.classList.toggle("abre")
})



//ANIMAÇÕES
const buttons = document.querySelectorAll('a');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        let x = event.clientX - event.target.offsetLeft;
        let y = event.clientY - event.target.offsetTop;
        let rippleElement = document.createElement('span');
        rippleElement.style.left = x + 'px';
        rippleElement.style.top = y + 'px';
        this.appendChild(rippleElement);
        setTimeout(function () {
            rippleElement.remove();
        }, 500);
    });
});

//eventos =======================================
menuItem.addEventListener("click", menuMobile)
document.body.addEventListener("click", fechaMenuMobile)
window.addEventListener("scroll", menuPreenchido);