'use strict';


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

    
    if (answer=='no' || answer =='NO' || answer =='n' || answer =='N')
    {
        alert("Bravooo, your answer is true ");
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
    }
    else 
    {
        alert("SORRY YOUR ANSWER WAS WRONG, YOU CAN TRY AGAIN");
    }
}

alert ('nice to meet you ' + userName );


