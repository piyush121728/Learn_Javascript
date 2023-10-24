const clock = document.getElementById('clock');

//we use set interval function, which give us the facility to run the function for every interval of time
setInterval(() => {
    const date = new Date();
    console.log(date);
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)