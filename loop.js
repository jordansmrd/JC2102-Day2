//tampilkan 1-5

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

//loop for
// for(init;comparator;modificator)
for(let i=1;i<6;i++)
{
    if(i%2==0){
        // console.log('ini adalah bilangan genap ' + i)
    }

}
// i = 1 //step 1 declare
// i < 6 // condition
// console.log(i) // task
// i-- //modificator


//loop while

let number = 1
while(number < 6) //condition
{
//task
// console.log(number) 
number++ //modificator
}

//loop do while
number = 6
do
{
//task
// console.log(number) 
number++ //modificator
}while(number<6) // condition

//nested for
for(let j = 1; j <= 5; j++ )
{
    for(let k = 1; k <= 5 ; k++)
    {
        console.log(k)
    }
    console.log('------')
}