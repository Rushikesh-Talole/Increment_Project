

// OR you can use addEventListener to add a click event

let element = document.querySelector('#count');

function decrement(){
    // or you can use Number(element.innerHTML)
    let value = parseInt(element.innerHTML); 
    value = value-1;
    element.innerHTML = value;
}

function increment(){
    // let element = document.querySelector('#count');
    let value = parseInt(element.innerHTML);
    value = value+1;
    element.innerHTML = value;
}