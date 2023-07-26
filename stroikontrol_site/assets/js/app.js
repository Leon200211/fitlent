window.onload = () => {
    const title = document.querySelector('.sitendapp--title')
    const checkbox_1 = document.getElementById('color-1')
    const checkbox_2 = document.getElementById('color-2')
    const body = document.querySelectorAll('.siteandapp--body')
    const radio = document.querySelectorAll('.radio')
    radio.forEach(el => {
        setInterval(test, 5000);
        let i = 1;

        function test() {
            i = (i % 2) + 1;
            document.getElementById('color-' + i).checked = true;
            if (checkbox_1.checked) {
                title.textContent = 'Сайт "СтройКонтроль"'
                body[0].classList.remove('disabled')
                body[1].classList.add('disabled')
            } else if (checkbox_2.checked) {
                title.textContent = 'Приложение "СтройКонтроль"'
                body[1].classList.remove('disabled')
                body[0].classList.add('disabled')
            }
        }
        el.onchange = () => {
            if (checkbox_1.checked) {
                title.textContent = 'Сайт "СтройКонтроль"'
                body[0].classList.remove('disabled')
                body[1].classList.add('disabled')
            } else if (checkbox_2.checked) {
                title.textContent = 'Приложение "СтройКонтроль"'
                body[1].classList.remove('disabled')
                body[0].classList.add('disabled')
            }
        }
    })
    // setInterval(test, 1000);
    // let i = 1;
    //
    // function test() {
    //     i = (i % 4) + 1;
    //     document.getElementById('color-' + i).checked = true;
    // }
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }

    let options = {
        threshold: [0.2] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('section');

    for (let elm of elements) {

        observer.observe(elm);
        console.log(elm)
    }
    $('#btn').click(function(){
        console.log('123')
        $.fancybox.open({
            src: '#hidden',
            type: 'inline'
        });
    });
}

