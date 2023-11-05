//creating promise
const promiseOne = new Promise(function (resolve, reject) {
    //do async taks
    setTimeout(() => {
        console.log("Async taks is complete.")
        resolve()
    }, 1000)
})


//consuming promise
promiseOne.then(() => {
    console.log("Promise consumed.")
})

new Promise(function (resolve, reject) {
    //do async taks
    setTimeout(() => {
        console.log("Async taks is complete.")
        resolve()
    }, 1000)
}).then(() => {
    console.log("Promise consumed.")
})


new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ userName: "Piyush Kumar", email: "pk421780@gmail.com" })
    }, 1000)
}).then((user) => {
    console.log(user);
})

//use of then, catch and finally keywords

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        const error = false;
        if (!error) {
            resolve({ userName: "Piyush Kumar", password: "123@" })
        }
        else {
            reject("Error : Something went wrong.")
        }
    }, 1000)
})

promiseFour
    .then((data) => {
        console.log(data);
        return data.userName;
    })
    .then(
        function (userName) {
            console.log(userName);
        }
    )
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promise is either resolved or rejected.")
    })

//consumed promise using async await

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = true;
        if (!error) {
            resolve({ userName: "Piyush Kumar", password: "123@" })
        }
        else {
            reject("Error : Something went wrong.")
        }
    }, 1000)
})


async function consumedPromiseFive() {
    try {
        const data = await promiseFive
        console.log(data);
    }
    catch (error) {
        console.log(error);;
    }
}
consumedPromiseFive()

//fetch data from api using async, wait, try and catch

async function getUserData() {
    try {
        const res = await fetch('https://api.github.com/users/piyush121728')
        const data = await res.json();
        console.log(data);
    }
    catch (error) {
        console.log("Error : ", error);
    }
}


getUserData()

//fetch data from api using fetch, then and catch

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((data) => data.json())
    .then((data) => (console.log(data)))
    .catch((error) => console.log(error))