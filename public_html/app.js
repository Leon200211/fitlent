const accordeonImg = document.querySelector('.accordeon-img');
const chevron = document.querySelectorAll('i');
const accord_title = document.querySelectorAll('.accordeon-title');
var active = false;
for (let i = 0; i < accord_title.length; i++) {


    accord_title[i].onclick = () => {
        let content = accord_title[i].nextElementSibling;
        if (content.classList.contains('active')) {
            chevron[i].className = 'fa-solid fa-chevron-up'
            document.querySelectorAll('.accordeon-content').forEach(el => {el.classList.remove('active')})

        } else {
            document.querySelectorAll('.accordeon-content').forEach(el => {el.classList.remove('active')})
            content.classList.add('active');
            accordeonImg.setAttribute('src', 'imgs/' + accord_title[i].id);
            accordeonImg.removeAttribute('hidden');
            chevron[i].className = 'fa-solid fa-chevron-down'
        }
    }
}
const question_answerCard = document.querySelectorAll('.question-answer')
const answers = document.querySelectorAll('.answer')
var showAnswer = false
for (let i = 0; i < question_answerCard.length; i++) {
    question_answerCard[i].onclick = () =>{
        if(showAnswer) {
            answers[i].removeAttribute('hidden')
           showAnswer = false;
        }
        else{
            answers[i].setAttribute('hidden', true)
            showAnswer = true;
        }
    }
}
//я тебя люблю:3