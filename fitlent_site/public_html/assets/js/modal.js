



window.onload = () => {

    const blur_modal = document.querySelector('.modal-card')
    const modal_open = document.querySelectorAll('.main-button')
    const modal_close = document.querySelector('.modal-close')
    const modal = document.querySelector('.modal-container')
    const modal_select = document.querySelector('#dynamic-select')
    const header_rates = document.querySelector('#rates-head')
    const header_main = document.querySelector('#main-head')
    const header_portfolio = document.querySelector('#portfolio-head')
    const header_about = document.querySelector('#about-head')
    for (let i = 0; i < modal_open.length; i++) {
        modal_open[i].addEventListener('click', (e) => {
            modal.style.display = 'flex';
            modal_select.value = e.target.getAttribute('data')
            modal_select.textContent = e.target.getAttribute('data')
            console.log(e.target.getAttribute('data'))
            document.querySelector('body').style.overflow = 'hidden'
            if(modal.style.display == 'flex'){
                document.addEventListener('click', (event) => {
                    const withinBoundaries = event.composedPath().includes(blur_modal);
                    if(!withinBoundaries && event.composedPath()[0].className !== 'open_modal') {
                        document.querySelector('#modal-phone').value = document.querySelector('#modal-phone').defaultValue
                        modal.style.display = 'none'
                        document.querySelector('body').style.overflow = 'auto'
                    }
                })
                document.onkeydown = (ev) => {
                    if(ev.key == "Escape"){
                        document.querySelector('#modal-phone').value = document.querySelector('#modal-phone').defaultValue
                        modal.style.display = 'none'
                        document.querySelector('body').style.overflow = 'auto'
                    }
                }

            }

        })
    }



    modal_close.addEventListener('click', () => {
        document.querySelector('#modal-phone').value = document.querySelector('#modal-phone').defaultValue
        modal.style.display = 'none';
        document.querySelector('body').style.overflow = 'auto'
    })
    window.addEventListener('scroll', checkScroll);
    document.addEventListener('DOMContentLoaded', checkScroll);

    function checkScroll() {
        let scrollPos = window.scrollY;
        // console.log(scrollPos)

        if (scrollPos == 0 && scrollPos < 900) {
            header_about.classList.remove('active');
            header_portfolio.classList.remove('active');
            header_rates.classList.remove('active')
            header_main.className = 'active'
        } else if (scrollPos > 900 && scrollPos < 1800) {
            header_main.classList.remove('active');
            header_about.classList.remove('active');
            header_portfolio.classList.remove('active');
            header_rates.className = 'active'
        } else if (scrollPos > 1800 && scrollPos < 2500) {
            header_rates.classList.remove('active');
            header_main.classList.remove('active');
            header_portfolio.classList.remove('active');
            header_about.className = 'active'
        } else if (scrollPos > 2500) {
            header_about.classList.remove('active')
            header_rates.classList.remove('active')
            header_main.classList.remove('active')
            header_portfolio.className = 'active'
        }
    };

}