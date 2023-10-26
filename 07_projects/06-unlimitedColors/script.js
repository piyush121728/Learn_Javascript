const bgColorGenerator = () => {
    const hexNum = "0123456789ABCDEF";

    let hexColorCode = "#";

    for (let i = 0; i < 6; i++) {
        hexColorCode += hexNum[Math.floor(Math.random() * 16)];
    }

    return hexColorCode;
}
console.log(bgColorGenerator());

let interval;
function startChange()
{
    if(!interval)
    {
        interval = setInterval(() => {
            document.querySelector('body').style.backgroundColor = bgColorGenerator();
        }, 1000);
    }
    
}




document.getElementById('start').addEventListener('click', startChange)

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
})