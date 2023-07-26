



window.onload = () => {
    let modal_phone = document.getElementById('modal-phone')
    let modal_name = document.getElementById('modal-name')
    let errors = document.querySelector('#errors')

    const blur_modal = document.querySelector('.modal-card')
    const modal_open = document.querySelectorAll('.main-button')
    const modal_close = document.querySelector('.modal-close')
    const modal = document.querySelector('.modal-container')
    const modal_select = document.querySelector('#dynamic-select')
    for (let i = 0; i < modal_open.length; i++) {
        modal_open[i].addEventListener('click', (e) => {
            document.querySelector('body').style.paddingRight = '17px'
            modal.style.display = 'flex';
            card.style.display = 'block'
            modal_select.value = e.target.getAttribute('data')
            modal_select.textContent = e.target.getAttribute('data')
            console.log(e.target.getAttribute('data'))
            document.querySelector('body').style.overflow = 'hidden'
            if(modal.style.display == 'flex'){
                document.addEventListener('click', (event) => {
                    const withinBoundaries = event.composedPath().includes(blur_modal);
                    if(!withinBoundaries && event.composedPath()[0].className !== 'open_modal') {
                        errors2.textContent = ' '
                        modal_submit.textContent = 'Отправить'
                        modal_phone.value = document.querySelector('#modal-phone').defaultValue
                        modal_name.value = document.querySelector('#modal-name').defaultValue
                        modal.style.display = 'none'
                        document.querySelector('body').style.overflow = 'auto'
                        document.querySelector('body').style.paddingRight = '0'
                    }
                })
                document.onkeydown = (ev) => {
                    if(ev.key == "Escape"){
                        errors2.textContent = ''
                        modal_submit.textContent = 'Отправить'
                        modal_phone.value = document.querySelector('#modal-phone').defaultValue
                        modal_name.value = document.querySelector('#modal-name').defaultValue
                        modal.style.display = 'none'
                        document.querySelector('body').style.overflow = 'auto'
                        document.querySelector('body').style.paddingRight = '0'
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
        document.querySelector('body').style.paddingRight = '0'
    })

}
const modal_container = document.querySelector('.modal-container')
const modal_select = document.getElementById('modal-select')
let modal_form = document.getElementById('modal-form')
const modal_submit = document.getElementById('modal-submit')
let modal_phone = document.getElementById('modal-phone')
let modal_name = document.getElementById('modal-name')
let errors = document.querySelector('#errors')
let errors2 = document.querySelector('#errors2')
let card = document.querySelector('.modal-card')
function sendForm(){
    var formID = $(this).attr('id');
    var formNm = $('#' + formID);
    if(modal_name.value == ''){
        errors2.textContent = 'Введите ФИО'
        errors2.style.color = 'purple'
    }else if(modal_phone.value == '') {
        errors2.textContent = 'Введите номер телефона'
        errors2.style.color = 'purple'
    }else{
        $.ajax({
            url: '/mail.php',
            method: 'post',
             dataType: 'json',
            data: {name: modal_name.textContent, phone: modal_phone.textContent, rates: modal_select.value},
            success: function success(data) {
                card.style.display = 'none'
                errors.style.display = 'block'
                setTimeout(function () {
                    modal_phone.value = modal_phone.defaultValue
                    modal_name.value = modal_name.defaultValue
                    errors.style.display = 'none'
                    modal_container.style.display = 'none'
                    document.querySelector('body').style.paddingRight = '0'
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