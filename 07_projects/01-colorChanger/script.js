const buttons = document.querySelectorAll('.button'); //this will give the nodeList of all the elements whose calss name is button
console.log(buttons);
const body = document.querySelector('body'); 
console.log(body);

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target.id);
        if (e.target.id === 'grey') {
            // body.style.backgroundColor = e.target.id;
            body.setAttribute('style', `background : ${e.target.id}`)
        }
        if (e.target.id === 'yellow') {
            body.setAttribute('style', `background : ${e.target.id}`)
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
    })
})
