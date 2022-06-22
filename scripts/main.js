let counter = document.querySelectorAll(".timer__value");

let timerId = setInterval(setData, 1000);

function setData() {
    let diff = getDiff();

    let seconds = parseInt((diff/1000)%60);
    let minutes = parseInt((diff/(1000*60))%60);
    let hours = parseInt((diff/(1000*60*60))%24);
    let days = parseInt(diff/(1000*60*60*24));

    counter[0].innerHTML = ("0" + days).slice(-2);
    counter[1].innerHTML = ("0" + hours).slice(-2);
    counter[2].innerHTML = ("0" + minutes).slice(-2);
    counter[3].innerHTML = ("0" + seconds).slice(-2);
}

function getDiff() {
    let curDate = new Date();
    let endDate = new Date(2022, 06, 07, 14, 0, 0, 0);

    return endDate - curDate;
}