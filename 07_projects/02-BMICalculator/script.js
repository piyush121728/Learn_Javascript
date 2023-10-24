const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const h = parseInt(document.querySelector('#height').value)
    const w = parseInt(document.querySelector('#weight').value)
    const r = document.querySelector('#results');
    console.log(h);
    console.log(r);

    if (h === '' || h < 0 || isNaN(h)) {
        r.innerHTML = `${h} is not a valid height.`
    }
    else if (w === '' || w < 0 || isNaN(w)) {
        r.innerHTML = `${w} is not a valid height.`
    }
    else {
        const bmi = (w / ((h * h) / 10000)).toFixed(2);
        r.innerHTML = `<span>${bmi}</span>`
    }

})