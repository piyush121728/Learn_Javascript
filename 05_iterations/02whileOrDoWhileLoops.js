/*
    While loop : 
    Flow of While loop 
        1. Condition check if satisfied go to 2nd step o.w loop breaks
        2. Excution of code
        3. Increment the iterator
        4. Repeat all the above steps
*/

let arr = []
let i = 0;

while(i < 10)
{
    arr.push(i+1);
    i++;
}

i = 0;

while(i < arr.length)
{
    console.log(arr[i]);
    i++;
}

/*
    Do-While loop : 
    Flow of Do-While loop 
        1. Excution of code
        2. Increment the iterator
        2. Condition check if satisfied go to 2nd step o.w loop breaks
        4. Repeat all the above steps
*/

i = 0;
do {
    console.log(i)
    i++;
} while (i < 1);