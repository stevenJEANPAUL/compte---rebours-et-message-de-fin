let timerEl = document.getElementById('timer');
// console.log(timerEl);

let counter = 5;


let timer = setInterval(function() {
    console.log(counter);
    timerEl.innerText = counter;
    counter--;
    if(counter == 0) {
        setTimeout(function(){
            timerEl.innerText ="fini";
            console.log("fini");
            clearInterval(timer);
        }, 1000);
    }
}, 1000);

