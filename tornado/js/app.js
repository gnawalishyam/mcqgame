let answer
document.addEventListener('DOMContentLoaded', function () {
    answer = document.getElementById('answer1');

    let the = document.getElementById('the');
    the.addEventListener('mousedown', () => {
        the.classList.add('word-selected');
        let audio = document.getElementById('the-audio');
        audio.play();
        audio.addEventListener('ended', () => {
            the.classList.remove('word-selected');
        })

    })
    
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