'use strict';
let score =0;

let userName=prompt('Hello friend ,please enter your name to know you more ');

while(!userName)
{
    userName=prompt('you are not allow to leave this empty');
}

alert('hello' + userName + '  you are welcome to our website')



let she_he = prompt('do you think i am male ?');
if ( she_he.toLowerCase() ==='no' || she_he.toLowerCase() ==='n' )
{
    alert('Bravoo your answer is true');

console.log('your answer was' + ' ' + she_he);
score++;
}

else
{
    alert('SORRY YOUR ANSWER WAS WRONG');
}
   


let age = prompt('do you think i am over 30 ?');
if(age.toLowerCase() ==='no' || age.toLowerCase()==='n')
{
    alert('Bravoo your answer is true ');

console.log('your answer was' + ' ' + age);
score++;
}
else
{
    alert('SORRY YOUR ANSWER WAS WRONG');
}

let country = prompt('Do you think that I live in an Arab country?');
if(country.toLowerCase() ==='yes' || country.toLowerCase()==='y')
{
    alert('Bravoo your answer is true');

console.log('your answer was' + ' ' + country);
score++;
}
else
{
    alert('SORRY YOUR ANSWER WAS WRONG');
}


let major = prompt('Do you think that I studied a major relate to information technology?');
if(major.toLowerCase() ==='yes' || major.toLowerCase() ==='y')
{
    alert('Bravoo your answer is true ');

console.log('your answer was' + ' ' + major);
score++;
}

else
{
    alert('SORRY YOUR ANSWER WAS WRONG');
}

let opinion = prompt('do you think i enjoy building websites');
if(opinion.toLowerCase()==='yes' || opinion.toLowerCase()==='y')
{
    alert('Bravoo your answer is true ');

console.log('your answer was' + ' ' + opinion);
score++;
}
else
{
    alert('SORRY YOUR ANSWER WAS WRONG');
}




let attempts=3;
let theNumber=45;
let guessNumber = prompt('try to guess number');
let x =0;
while(x<attempts)
{
    if(x>attempts)
    {
        alert ('bye')
    }

if (guessNumber >theNumber )
{
alert('to high');
guessNumber = prompt('try to guess number');

x++
if(x>attempts)
{
    alert ('bye')
}

}
else 
if (guessNumber<theNumber)
{ 
    alert('too small')
    guessNumber = prompt('try to guess number');

x++;
if(x>attempts)
{
    alert ('bye')
}

}
else 

if(guessNumber===theNumber)
{
    alert('bravo');
    i>4;
}

}








let cars =['audi','jaguar','bmw'];
let i=0;
while (i<6)
{
 let favcars = prompt( 'how about trying to guess my favourite car' );
  if(favcars === cars[0] || favcars ===cars[1] || favcars === cars[2] )
{
    alert ('good job,that answer is correct ');
    score=score+1
  break;
}
else
{
alert('no,that is wrong');
i++
}
if(i==6)
{
    alert ('sorry, you are out of the attempts,these are my favourite cars' ) 
for(let i =0;i<cars.length;i++)
{
alert(cars[i] );
}

}
 
}
alert('your score is ' + score  )
