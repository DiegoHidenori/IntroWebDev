let name;
name=prompt('Enter your name please', 'Your Name Please');
let studentID;
studentID=prompt('Enter your student number please', 'Student ID');
let num;
let flag=true;
while (flag){
    num=prompt('Enter a number from 1 to 9');
    if (!isNaN(num) && num>=1 && num<=9){
        flag=false;
    }
}
let intPrint = '';
for(let i = 1; i <= num;){
    intPrint = intPrint + i;
    document.write(intPrint + '<br>');
    i++;
}
