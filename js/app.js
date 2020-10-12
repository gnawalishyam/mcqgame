const wand = document.getElementById('wand');
const question = document.getElementById('question');
const option = document.getElementById('options');
const optionsList = document.getElementsByClassName('option');
const start = document.getElementById('start');
const startBounce = document.getElementById('start-bounce');

start.addEventListener("click", function() {
    wand.style.visibility = 'visible';
    wand.className = 'wand-animation';
})

startBounce.addEventListener("click", function() {
    // wand.style.left = '45%';
    // wand.className = 'animate__animated animate__bounceInDown';
    // ball.style.visibility = 'visible';
    ball.className = 'bounce-animation';
})

wand.addEventListener("animationend", function() {
    wand.style.display = 'none';
    question.style.visibility = 'visible';
    question.className = 'animate__animated animate__fadeIn';
    document.getElementById('startAudio').play();
}, false);

setQuestion = () => {
    question.innerText = questions[0].question;
    const audio = document.createElement('audio');
    audio.src = questions[0].audio;
    audio.id = 'audio-correct'
    question.appendChild(audio);
    question.addEventListener("click", () => {audio.play();});
    questions[0].options.forEach(option => {
        let btn = document.createElement('button');
        let img = document.createElement('img');
        btn.classList.add('option', 'animate__animated', 'option-hover');
        if (option.correct) btn.dataset.correct = true;
        img.src = option.img;
        img.alt = option.title;
        img.className = 'option-img';
        btn.appendChild(img);
        options.appendChild(btn);
    });
}

const questions = [
    {
        question: 'Grasshopper',
        audio: 'audio/grasshopper-audio.mp3',
        options: [
            {title: 'element', img: 'image/c2c31c93b2aeddf396e3d16312ee202f', correct: false},
            {title: 'b', img: 'image/7792b6944d73980bce6cd0f03e652738', correct: false},
            {title: 'c', img: 'image/0de80876191a0bc66f904c337a45ee81', correct: false},
            {title: 'd', img: 'image/51ed687b74c994703884e76b2576c889', correct: true},
        ]
    }
];
setQuestion();

addClickEvent = (options) => {
    for (var i = 0; i < options.length; i++){
        let option = options[i];
        let flag = true;
        option.addEventListener("click", function(e) {
            let btnCorrect = e.currentTarget; 
            if (btnCorrect.dataset.correct)  {
                for (var j = 0; j < options.length; j++) {
                    if (btnCorrect != options[j]) {
                        options[j].classList.add('animate__fadeOut', 'animate__faster');
                    }
                }
                if (flag) {
                    console.log(flag)
                    starAnimation(btnCorrect);
                    flag = false
                }else {
                    const audio = document.getElementById('audio-correct');
                    audio.play();
                }
            } else {
                btnCorrect.classList.add('animate__headShake', 'animate__faster');
                btnCorrect.addEventListener("animationend", () => {btnCorrect.classList.remove('animate__headShake', 'animate__faster')});
                var audio = new Audio('audio/Answer sound (wrong) - etc_woodblock_stuck.wav')
                audio.play();
            }
        });
    };
}

starAnimation = (element) => {
    const star = document.getElementById('star');
    document.getElementById('startAudio').play();
    let top = element.offsetTop;
    let left= element.offsetLeft+75;
    star.style.top = top+'px';
    star.style.left = left+'px';
    star.style.visibility = 'visible';
    element.classList.remove('option-hover');
    star.classList.add('animate__animated', 'animate__zoomIn', 'animate__faster');
    setTimeout(function() {
        star.classList.add('glow')
    }, 400);
    star.addEventListener("animationend", function() {
        star.style.visibility = 'hidden';
        correctAnimation(element);
    })
}

correctAnimation = (element) => {
    let prevTop = element.offsetTop;
    let prevLeft= element.offsetLeft;
    element.style.border = '5px solid #2463f7';
    element.style.position = 'absolute';
    element.style.top = prevTop + 'px';
    element.style.left = prevLeft + 'px';

    let growWidth = 350;
    let growHeight = 196;
    const container = document.querySelector('.container')
    let containerW = container.clientWidth;
    let containerH = container.clientHeight;

    // let left = (containerW / 2) - (growWidth / 2) + container.offsetLeft;
    // let top = (containerH / 2) - (growHeight / 2) + container.offsetTop;
    let left = (containerW / 2) - (growWidth / 2);
    let top = (containerH / 2) - (growHeight / 2);

    var cssAnimation = document.createElement('style');
    cssAnimation.type = 'text/css';
    var rules = document.createTextNode('@-webkit-keyframes growCenter {'+
        `0% { }` +
        `100%{ left: ${left}px; top: ${top}px; width: ${growWidth}px; height: ${growHeight}px;}` +
    '}');
    cssAnimation.appendChild(rules);
    document.getElementsByTagName("head")[0].appendChild(cssAnimation);
    element.classList.add('correct');
    element.classList.remove('option-hover');
    element.addEventListener("animationend", function() {
        element.style.border = '5px solid #979797';
        element.style.left = left + 'px';
        element.style.top =  top + 'px';
        element.style.width = growWidth + 'px';
        element.style.height =  growHeight + 'px';
    }, false);

    const audio = document.getElementById('audio-correct');
    audio.play();
}

addClickEvent(optionsList);