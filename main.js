alert('Everything is Awesome')
let personal=true;
let num1=7,num2=8,num3=9;
let firstName="Diego";
let lastName="Tsukayama";
const age=34;
let flag=true;
function nameFunction(){
    let user=prompt("Please enter your first name here:");
    if (personal){
        document.getElementById("userName").innerHTML="Please welcome the man, the myth, the legend,..." + user + "!!!";
    }
}
function continueFunction(){
    let next=confirm("Would you like to continue, mister panda??");
}
if (flag){
    document.getElementById('ID3').innerHTML="Introduction to Web Development!";
}
if (age<=34){
    console.log('My first name is: ' + firstName);
    document.write('My first name is: ' + firstName + '<br>');
    console.log('My last name is: ' + lastName);
    document.write('My last name is: ' + lastName + '<br>');
    console.log('My age is: less than or equal to 34');
    document.write('My age is: less than or equal to 34' + '<br>');
}
else {
    console.log('My age is: more than 34');
    document.write('My age is: more than 34');
}
