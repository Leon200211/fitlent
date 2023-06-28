



window.onload = () => {
    let modal_phone = document.getElementById('modal-phone')
    let modal_name = document.getElementById('modal-name')
    let errors = document.querySelector('#errors')

    const blur_modal = document.querySelector('.modal-card')
    const modal_open = document.querySelectorAll('.main-button')
    const modal_close = document.querySelector('.modal-close')
    const modal = document.querySelector('.modal-container')
    const modal_select = document.querySelector('#dynamic-select')
    const header_rates = document.querySelector('#rates-head')
    const header_main = document.querySelector('#main-head')
    const header_portfolio = document.querySelector('#portfolio-head')
    const header_about = document.querySelector('#about-head')
    const header_works = document.querySelector('#products')
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
                        errors.textContent = ' '
                        modal_submit.textContent = 'Отправить'
                        modal_phone.value = document.querySelector('#modal-phone').defaultValue
                        modal_name.value = document.querySelector('#modal-name').defaultValue
                        modal.style.display = 'none'
                        document.querySelector('body').style.overflow = 'auto'
                    }
                })
                document.onkeydown = (ev) => {
                    if(ev.key == "Escape"){
                        errors.textContent = ''
                        modal_submit.textContent = 'Отправить'
                        modal_phone.value = document.querySelector('#modal-phone').defaultValue
                        modal_name.value = document.querySelector('#modal-name').defaultValue
                        modal.style.display = 'none'
                        document.querySelector('body').style.overflow = 'auto'
                    }
                }

            }

        })
    }



    modal_close.addEventListener('click', () => {
        errors.textContent = ''
        modal_submit.textContent = 'Отправить'
        modal_phone.value = modal_phone.defaultValue
        modal_name.value = modal_name.defaultValue
        modal.style.display = 'none';
        document.querySelector('body').style.overflow = 'auto'
    })
    window.addEventListener('scroll', checkScroll);
    document.addEventListener('DOMContentLoaded', checkScroll);

    function checkScroll() {
        let scrollPos = window.scrollY;
        // console.log(scrollPos)

        if (scrollPos == 0 && scrollPos < 960) {
            header_about.classList.remove('active');
            header_portfolio.classList.remove('active');
            header_rates.classList.remove('active')
            header_works.classList.remove('active')
            header_main.className = 'active'
        } else if (scrollPos > 860 && scrollPos < 1610) {
            header_main.classList.remove('active');
            header_about.classList.remove('active');
            header_portfolio.classList.remove('active');
            header_works.classList.remove('active')
            header_rates.className = 'active'
        } else if (scrollPos > 1610 && scrollPos < 2060) {
            header_rates.classList.remove('active');
            header_main.classList.remove('active');
            header_portfolio.classList.remove('active');
            header_works.classList.remove('active')
            header_about.className = 'active'
        } else if (scrollPos > 2060 && scrollPos < 2760) {
            header_about.classList.remove('active')
            header_rates.classList.remove('active')
            header_main.classList.remove('active')
            header_portfolio.classList.remove('active')
            header_works.className = 'active'
        }
        else if (scrollPos > 2760) {
            header_about.classList.remove('active')
            header_rates.classList.remove('active')
            header_main.classList.remove('active')
            header_works.classList.remove('active')
            header_portfolio.className = 'active'
        }
    };

}
const modal_container = document.querySelector('.modal-container')
const modal_select = document.getElementById('modal-select')
let modal_form = document.getElementById('modal-form')
const modal_submit = document.getElementById('modal-submit')
let modal_phone = document.getElementById('modal-phone')
let modal_name = document.getElementById('modal-name')
let errors = document.querySelector('#errors')
let card = document.querySelector('.modal-card')
function sendForm(){
    var formID = $(this).attr('id');
    var formNm = $('#' + formID);
    if(modal_name.value == ''){
        errors.textContent = 'Введите ФИО'
    }else if(modal_phone.value == '') {
        errors.textContent = 'Введите номер телефона'
    }else{
        $.ajax({
            url: '/mail.php',
            method: 'post',
            dataType: 'json',
            data: {name: modal_name.textContent, phone: modal_phone.textContent, rates: modal_select.value},
            success: function success(data) {
                const form_clone = $('#modal_form').clone()
                modal_form.textContent = 'Ваша заявка успешно отправлена'
                setTimeout(function () {
                    modal_container.style.display = 'none'
                    card.append(form_clone)
                    document.querySelector('body').style.overflow = 'auto'
                }, 1200)
            },
            error: function (jqXHR, exception) {
                if (jqXHR.status === 0) {
                    console.error('Not connect. Verify Network.');
                    errors.textContent = 'Ошибка'
                    errors.style.color = 'red'
                } else if (jqXHR.status == 404) {
                    console.error('Requested page not found (404).');
                    errors.textContent = 'Ошибка'
                    errors.style.color = 'red'
                } else if (jqXHR.status == 500) {
                    console.error('Internal Server Error (500).');
                    errors.textContent = 'Ошибка'
                    errors.style.color = 'red'
                } else if (exception === 'parsererror') {
                    console.error('Requested JSON parse failed.');
                    $(formNm).html("Ошибка");
                    errors.textContent = 'Ошибка'
                    errors.style.color = 'red'
                } else if (exception === 'timeout') {
                    console.error('Time out error.');
                    $(formNm).html("Ошибка");
                    errors.textContent = 'Ошибка'
                    errors.style.color = 'red'
                } else if (exception === 'abort') {
                    console.error('Ajax request aborted.');
                    errors.textContent = 'Ошибка'
                    errors.style.color = 'red'
                } else {
                    console.log('Uncaught Error. ' + jqXHR.responseText);
                }
            }
        })
    }
    return false;
}