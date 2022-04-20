

let stars  = ''
const row = 5

for (let i = row; i > 0; i--) {
    for (let j = 1; j <= row; j++) {
        if (j >= i) {
            stars += '* ';
        } else {
            stars += ' '
        }
    }
    stars += '\n';
}
console.log(stars);

stars = ''

for(let i = 0; i < row; i++)
{
    for(let j=0;j < i+1;j++)
{
    stars += ' * '
       
    }
    stars += '\n'
}
console.log(stars)

stars = ''

for (let i = 0; i < row; i++) {
    for (let j = row; j > i; j--) {
        stars += ' * '
    }
        stars += '\n'
}
console.log(stars)

stars = '\n'

for(let i = 0 ; i<row ; i++)
{
    for(let j = 0; j < row ;j++)
    {
       stars += (' * ')
    }
   stars += '\n'
}
console.log(stars)



for(let i = 0 ; i<5 ; i++)
{
    console.log(' * ')
}

stars = '\n'
for(let i = 0 ; i<5 ; i++)
{
    stars += ' * '
}
console.log(stars)

// console.log('\n* * * * *')