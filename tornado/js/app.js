let answer
document.addEventListener('DOMContentLoaded', function () {
    answer = document.getElementById('answer1');

    load();
    document.getElementById('image-question').addEventListener('click', () => {
        document.getElementById('audio-question').play();
    })

    // let the = document.getElementById('the');
    // the.addEventListener('mousedown', () => {
    //     the.classList.add('word-selected');
    //     let audio = document.getElementById('the-audio');
    //     audio.play();
    //     audio.addEventListener('ended', () => {
    //         the.classList.remove('word-selected');
    //     })
    // })
    
},
false
);

function allowDrop(ev) {
    ev.preventDefault();
    ev.currentTarget.style.backgroundColor = '#aad2fb9c';
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    answer.style.backgroundColor = 'white';

}

function dra(ev) {
    // console.log(ev)
    answer.style.backgroundColor = 'white';
}

load = () => {
    let img = document.createElement('img');
    img.src = question.image;
    img.id  = 'image-question';
    let audio = document.createElement('audio');
    audio.src = question.audio;
    audio.id  = 'audio-question';
    document.querySelector('.bottom-image').appendChild(img);
    document.querySelector('.bottom-image').appendChild(audio);

    let left = [];
    let top = [];

    const words = document.querySelector('.words');
    question.words.forEach(element => {
        let div = document.createElement('div');
        div.id = element.value;
        div.classList.add('word');
        div.innerText = element.word;
        let wordAudio = document.createElement('audio');
        wordAudio.id = `${element.value}-audio`
        wordAudio.src = element.audio;
        div.appendChild(wordAudio);
        words.appendChild(div);

        // left.push(div.offsetLeft);
        // top.push(div.offsetTop);
        // console.log(div.offsetLeft)
        div.addEventListener('click', () => {
            div.classList.add('word-selected');
            wordAudio.play();
            wordAudio.addEventListener('ended', () => {
                div.classList.remove('word-selected');
            })
        })
    });

    let wordsDiv = document.querySelector('.words');
    wordsDiv.style.height = (wordsDiv.offsetHeight-40) + 'px';
    for (let i = 0; i < question.words.length; i++) {
        let ele = question.words[i];
        let div = document.getElementById(ele.value);
        left.push(div.offsetLeft);
        top.push(div.offsetTop);
    }

    for (let i = 0; i < question.words.length; i++) {
        let ele = question.words[i];
        let div = document.getElementById(ele.value);
        div.style.top = top[i] + 'px';
        div.style.left = left[i] + 'px'; 
        div.style.position = 'absolute';
    }
}

const question = {
    answer: 'Grasshopper',
    audio: 'audio/grasshopper-audio.mp3',
    image: 'image/c2c31c93b2aeddf396e3d16312ee202f',
    words: [
        {word: 'food.', audio: 'audio/grasshopper-audio.mp3', value: 10},
        {word: 'asked', audio: 'audio/grasshopper-audio.mp3', value: 6},
        {word: 'Grasshopper', audio: 'audio/grasshopper-audio.mp3', value: 2},
        {word: 'for', audio: 'audio/grasshopper-audio.mp3', value: 9},
        {word: 'The', audio: 'audio/grasshopper-audio.mp3', value: 1},
        {word: 'hungry', audio: 'audio/grasshopper-audio.mp3', value: 4},
        {word: 'ant', audio: 'audio/grasshopper-audio.mp3', value: 8},
        {word: 'was', audio: 'audio/grasshopper-audio.mp3', value: 3},
        {word: 'the', audio: 'audio/grasshopper-audio.mp3', value: 7},
        {word: 'and', audio: 'audio/grasshopper-audio.mp3', value: 5},
    ]
};