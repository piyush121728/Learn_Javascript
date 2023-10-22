
/*
    For loop : 
    Flow of for loop 
        1. Condition check if satisfied go to 2nd step o.w loop breaks
        2. Excution of code
        3. Increment the iterator
        4. Repeat all the above steps
*/
let arr = []
for(let i = 0; i < 10; i++)
{
    if(i==5)
    {
        break; //when i == 4 is detected then loop breaks
    }
    arr.push(i+1);
}

for(let i = 0; i < arr.length; i++)
{
    if(arr[i]==3)
    {
        continue; //arr[i] == 3 id detected then it will jump to the next iteration without the excution of other below lines present in loop
    }
    console.log(arr[i]);
}