alert('Welcome to my first JavaScript program in COMP1234.');

let firstLoop=true;
let secondLoop=true;
let thirdLoop=true;
let fourthLoop=true;

let firstName='';
let lastName='';
let programStudy='';
let yearStudy='';

while (firstLoop){
    firstName=prompt('Please enter your first name','Bruce');
    if (firstName && firstName.length>0){
        firstLoop=false;
    }
}
while (secondLoop){
    lastName=prompt('Please enter your last name','Wayne');
    if (lastName && lastName.length>0){
        secondLoop=false;
    }
}
while (thirdLoop){
    programStudy=prompt('Please enter your program name','Computer Systems Analyst');
    thirdLoop=false;
}
while (fourthLoop){
    yearStudy=prompt('Please enter your year of study','1');
    if (yearStudy>=1 && yearStudy<=3){
        fourthLoop=false;
    }
}
document.getElementById('full_name').innerHTML='Full Name: ' + firstName + ' ' + lastName;
console.log('Full Name: ' + firstName + ' ' + lastName);
document.getElementById('program_of_study').innerHTML='Program Name: ' + programStudy;
console.log('Program Name: ' + programStudy);
document.getElementById('year_of_study').innerHTML='Year of Study: ' + yearStudy;
console.log('Year of Study: ' + yearStudy);
