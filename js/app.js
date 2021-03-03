'use strict';
let score =0;

let userName=prompt('Hello friend,please enter your name to know you more ');
alert('hello' + userName + '  you are welcome to our website')


let she_he = prompt("do you think i am male ?");
console.log(she_he);
NO(she_he);


let age = prompt("Do you think my age is over 30?");
console.log(age);
NO(age);
let country = prompt("Do you think that I live in an Arab country?");
console.log(country);
YES(country);
let major = prompt("Do you think that I studied a major related to information technology?");
console.log(major)
YES(major);
let opinion = prompt("do you think i enjoy building websites");
console.log(opinion)
YES(opinion);


function NO(answer)
{
      
    
    if (answer=='no' || answer =='n'|| answer == 'N' || answer=='NO' )
    {
        alert("Bravooo, your answer is true ");
        score=score+1;
    }
    else 
    {
        alert("SORRY YOUR ANSWER WAS WRONG, YOU CAN TRY AGAIN");
    }
}


function YES(answer1)
{

    if (answer1=='yes' || answer1 =='YES' || answer1 =='y' || answer1 =='Y')
    {
        alert("Bravooo, your answer is true ");
        score=score+1;
    }
    else 
    {
        alert("SORRY YOUR ANSWER WAS WRONG, YOU CAN TRY AGAIN");
    }
}

alert ('nice to meet you ' + '  ' + userName );




let theNumber=45;

for (let i = 0;i<4;i++)
{
    
 let guessnumber=parseInt( prompt(  userName + '  '+ 'how about trying to guess number' ));

if(guessnumber>45)
    {
        alert('no,try again \n hint : the number is lower ');
    }
    else 
    if (guessnumber< 45 )
    {
        alert('no,try again \n hint : the number is higher ');
    }
    else 
    if(guessnumber == 45 )
    {
        alert('Bravoo , you are awesome')
        score=score+1;
        i=5;
    }

    if(i>=4)
{

   
        alert('sorry , the number was ' + ' ' + theNumber );

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
