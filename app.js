//chapter 21 - 25

//Q1

var firstName=prompt('First Name','enter your first name here');
var lastName=prompt('Last Name','enter your last name here');
firstName=firstName.charAt(0).toUpperCase()+firstName.slice(1).toLowerCase();
lastName=lastName.charAt(0).toUpperCase()+lastName.slice(1).toLowerCase();

var name=firstName+' '+lastName;

alert('Assalam-o-alikum '+name+' How are you ?');



//Q2

var mobileName=prompt('Mobile','Enter your favourite mobile model');
var length=mobileName.length;

document.write('<br>  My Favourite Phone is : '+mobileName);
document.write('<br>  Length of String : '+Number(length));



//Q3

var Pakistani='Pakistani';

document.write('<br><br><br> String : '+Pakistani);
document.write('<br> Index of "n" : '+Pakistani.indexOf('n'));


//Q4

var String='Hello World';
var Length=String.length-1;
var lastLindex=String.length-1;

document.write('<br> String : '+String);
document.write('<br> Last Index of "l" : '+lastLindex);



//Q5

document.write('<br><br><br> String : '+Pakistani);
document.write('<br> Char AT Index 3: '+Pakistani.charAt(3));



//Q6

name =firstName.concat(" "+lastName);
alert('Assalam-o-alikum '+name+' How are you ?');


//Q7


var word='Hyderabad';
var search='Hyder';
var replace='Islam';
var replaced;

replaced=word.replace(search,replace);

document.write('<br><br><br> City : '+word);
document.write('<br> After Replacement : '+replaced);



//8


var para='Ali and Sami are best friends. They play cricket and football together';

var replaced_para=para.replace(/and/g,'&');
document.write('<br><br><br> Sentence before: '+para);
document.write('<br> Sentence After: '+replaced_para);


//Q9

var String='472';
document.write('<br><br><br> Value : '+String);
document.write('<br> Type : string');
var number=Number(String);
document.write('<br> Value : '+number);
document.write('<br> Type : number');




//Q10

var input=prompt('Enter lower case letters');
document.write('<br><br><br> User Input : '+input);
document.write('<br> Upper Case : '+input.toUpperCase());




//Q11


var userinput=prompt('Write any word in CAPS OR small');
document.write('<br><br><br> User input : '+userinput);
userinput=userinput.charAt(0).toUpperCase()+userinput.slice(1).toLowerCase();
document.write('<br> Title case: '+userinput);


//Q12

var num=35.36;
document.write('<br><br><br> Number : '+num);
var strinG=num.toString();
document.write('<br> String : '+strinG.replace('.',''));



//Q13


var userName=prompt('UserName','enter username');

var code;
var check=true;



for(var i=0;i<userName.length;i++){
    
    code=userName.charCodeAt(i);

    switch(code){

        case 33 :{

          check=false;
            break;
        }
        case 44 :{

            check=false; 
             break;
         }
         case 46 :{
            check=false;
           
             break;
         }
         case 64 :{
            check=false;
             break;
         }

    }

}
if(check===false){
    alert('Plaese enter a valid username'); 
    
}


//Q14

var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var get=prompt('ABC Backery, what do you wnat to order Sir/Madam ','serach product to buy ').toLowerCase();
var checK=false;
for(var i=0;i<A.length;i++){

    if(get===A[i]){
        checK=true;
        alert(get+' is available at index '+i+ ' in our bakery');
        break;
    }

}
if(checK==false){
    alert('We are sorry '+get+ ' is not available in our bakery');
}

//Q15

var password=prompt('Create Password','enter new password');

if(checkpassword(password)==1){

    alert('Password must contain numbers and alphabets');

}else if(checkpassword(password)==2){

    alert('First character can not be a number Please, Enter a valid password');

}else if(checkpassword(password)==3){

    alert('Password must contain 6 characters Please, Enter a valid password');

}else if(checkpassword(password)==0){

    alert('Congratulations password generated');

}



function checkpassword(pass){
    var CHECK=0;
    var firstChar=pass.charAt(0);
    var lengtH=pass.length;

    var re = /(?=.*\d)(?=.*[a-zA-Z])/;


    if(re.test(pass)){
        CHECK=0;
    }else{
        CHECK=1;
    }



    for(var i=0;i<10;i++){

        if(firstChar==i){
            CHECK=2;
            break;
        }
    }

    if(lengtH<6){
        CHECK=3;
    }

   
    return CHECK;
}








//Q16

var university='University Of Karachi';
var arr=university.split('');
document.write('<br><br><br>');
for(var i=0;i<arr.length;i++){
    document.write('<br>'+arr[i]);

}



//Q17

var userInput=prompt('Last Character of user Input','enter any word Here');
var lastChar=userInput.charAt((userInput.length)-1);
alert('Last character of input: '+lastChar);


//Q18
//The brown
var sentence='The Quick brown fox jumps over the Lazy Dog.';
var sentence1=sentence.toLowerCase();
var word='The'.toLowerCase();
var count=0;
for(var i=0;i<sentence.length;i++){

    if(sentence1.slice(i,word.length+i)===word){
        count++;
    }

}
document.write('<br><br><br>Text : '+sentence);
document.write('<br>The occurence(s) of word "' +word+ '" : '+count);






    


























// CHAPTER 26 - 30





//Q1

var positiveInteger=+prompt('Positive Integer','enter integer here');
document.write('<br><br><br> Number : '+positiveInteger);
document.write('<br> Round off value : '+Math.round(positiveInteger));
document.write('<br> Floor value : '+Math.floor(positiveInteger));
document.write('<br> Ceil value : '+Math.ceil(positiveInteger));



//Q2

var negativeInteger=+prompt('Negative Integer','enter integer here');
document.write('<br><br><br> Number : '+negativeInteger);
document.write('<br> Round off value : '+Math.round(negativeInteger));
document.write('<br> Floor value : '+Math.floor(negativeInteger));
document.write('<br> Ceil value : '+Math.ceil(negativeInteger));



//Q3


var value=-4;
document.write('<br><br><br>The absolute value for'+value);

if(value < 0){

    value=value.toString();
    value=value.slice(1);
    value=Number(value);
    document.write(' is '+value);
    

}else{
    document.write('<br><br><br>The absolute value for '+value+' is '+value);
}



//Q4

var diceValue1=Math.round(Math.random(6))*3;
var diceValue2=Math.round(Math.random(6)*3);

document.write('<br><br><br>The random dice value 1 : '+diceValue1);
document.write('<br>The random dice value 2 : '+diceValue2);



//Q5

var randomValue1=Math.round(Math.random()*(2-1)+1);
var randomValue2=Math.round(Math.random()*(2-1)+1);

if(randomValue1==2){
document.write('<br> <br> <br>'+ randomValue1 +'<br> Random coin value : Heads');
}else{
    document.write('<br>'+randomValue1+'<br> Random coin value : Tails');
}



//Q6


var rangeRandom=Math.round(Math.random()*(100-1)+1);
document.write('<br><br><br> random number between 1 and 100 :'+rangeRandom);


//Q7


var weight=prompt('Your Weight','enter your weight here in kilograms');
 var num =weight.replace(/(\D+)/g,'');
 //weight.match(/(\d+)/);
 //thestring.replace( /^\D+/g, '');
if(weight!=""){

    document.write('<br><br><br> Your weight is '+num+' kilograms');
}



//Q8


var secrectNumbeR=+prompt('Guessing Game','enter a number from 1 to 10');
var secrectNumber=Math.round((Math.random())*(10-1)+1);

if(secrectNumber===secrectNumbeR){

    alert('You Win');
}else{
    alert('Try Again');
}
document.write('<br> <br> <br> Secret Number was: '+secrectNumber);








//CHAPTER 31 - 34


//Q1

var current=new Date();

document.write('<br><br><br>Current Date Time : '+current.toString());



//Q2

var months=['January','February','March','April','May','June','July','August','September','October','November','December'];
var month=current.getMonth();

document.write('<br><br><br> Month: '+months[month]);


//Q3


var days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var day=current.getDay();
document.write('<br><br><br> Today is '+days[day]);

//Q4


if(days[day]==='Sat'||days[day]==='Sun'){

    document.write("<br><br><br> It's fun Day ");
}


//Q5

if(current.getDate() <=15){

    document.write("<br><br><br> First 15 days of the month.");
}else{
    document.write("<br><br><br> Last days of the month.");
}



//Q6
document.write("<br><br><br> Current Date: "+current.toString());
document.write("<br> Elapsed miliseconds since January 1, 1970: "+current.getTime());
document.write("<br> Elapsed minutes since January 1, 1970: "+current.getTime()/(1000*60));


//Q7

var time24Hour=current.getHours();
if(time24Hour > 12){
    
    document.write("<br><br><br> It's PM");

}else{
    document.write("<br><br><br> It's AM");
}


//Q8

var date=new Date(2020,11,31);
document.write('<br><br><br>Later Date : '+date);


//Q9

var dateRamadan=new Date(2015,5,18);
var diff=current.getTime()-dateRamadan.getTime();
document.write('<br><br><br>Mili Seconds between 1st Ramdan 2015 till now: '+diff);
var daysElapsed=diff/(1000*60*60*24);
document.write('<br><br><br>Days between 1st Ramdan 2015 till now: '+Math.floor(daysElapsed));


//Q10

var date2015=new Date("January 01, 2015");
var ref2015=new Date("December 05, 2015 20:50:16");
var difference=ref2015.getTime()-date2015.getTime();
var secondsPassed=difference/(1000*60);
document.write('<br><br><br> '+date2015);
document.write('<br><br><br>On reference date :' +ref2015.toString()+',<br> '+Math.floor(secondsPassed) +' seconds have passed from begining of 2015');


//Q11
var reff2015=new Date("December 05, 2015 23:08:16");

document.write('<br><br><br> Current Date :'+reff2015);
reff2015.setHours(reff2015.getHours()-1);
document.write('<br>1 hour ago, it was '+reff2015);


//Q12
document.write('<br><br><br> Current Date :'+reff2015);
reff2015.setFullYear(reff2015.getFullYear()-100);
document.write('<br>100 year(s) back, it was '+reff2015);


//Q13

var age=+prompt('Age','enter your age here');
document.write('<br><br><br>Your age: '+age);
var Year=current.getFullYear();
var birthYear=Year-age;
document.write('<br>Your birth year: '+birthYear);


//Q14

var customerName='Muhammad',month=months[current.getMonth()];
var numberOfUnits=244,chargesPerUnit=16,surcharge=350;
var netAmountPayable=numberOfUnits*chargesPerUnit;
var grossAmountPayable=surcharge+netAmountPayable;

document.write('<br><br><br> <h1 class="font-Mont">K-Electric Bill</h1>');
document.write('<br> <p class="font-Mont">Customer Name : <b>'+customerName+' </b><br> Month : <b>'+month+'</b> <br> Number of Units : <b>'+numberOfUnits+ '</b> <br>Charges per Unit : <b>'+chargesPerUnit+'</b></p>');

document.write('<p class="font-Mont">Net Amount Payable (with in due date) : <b>'+netAmountPayable+'</b> <br> Late Payment Surcharge : <b>'+surcharge+'</b> <br> Gross Amount Payable (after due date) : <b>'+grossAmountPayable+'</b>');




//CHAPTER 35 -38

//Q1

currentTime();

function currentTime(){
    document.write("<br><br><br> Function to display current Time : <br>"+current.toString());
}




//Q2
greetUser();

function greetUser(){

    firstName=prompt('First Name','enter your first name here');
    lastName=prompt('Last Name','enter your last name here');
    firstName=firstName.charAt(0).toUpperCase()+firstName.slice(1).toLowerCase();
    lastName=lastName.charAt(0).toUpperCase()+lastName.slice(1).toLowerCase();

    alert('Assalam-o-alikum '+firstName+lastName+' Welcome to our Javascript Store');
}


//Q3

var number1=+prompt('Addition','enter first number here');
var number2=+prompt('Addition','enter second number here');
alert(number1+' + '+number2 +' = '+add(number1,number2));

function add(num,num1){

    var result=num+num1;
    return result;
}

//Q4


var num1=+prompt('Calculator','Enter first operand');
var num2=+prompt('Calculator','Enter second operand');
var opr=prompt('Calculator','Enter Operator');
var result=calculate(num1,num2,opr);
document.write('<br><br><br>'+num1 +" "+opr+" "+num2 +' = '+result);

function calculate(num1,num2,opr){


var result;
if(opr=="+"){
result=num1+num2;
    

}else if(opr=="-"){
    result=num1-num2;
    
}else if(opr=="*"){
    result=num1*num2;
    
}else if(opr=="/"){
    result=num1/num2;
    
}else if(opr=="%"){
    result=num1%num2;
    
}

return result;
}


//Q5

number=4;

document.write('<br><br><br> Number : '+number);
square(number);
document.write("<br> Number's Square : "+square(number));

function square(number){
    number=number*number;
    return number;
}


//Q6
number=+prompt('Factorial','enter number to get factorial of...');
var fac=factorial(number);
alert('Facorial of '+number +' is '+fac);


function factorial(number){

for(var i=number-1;i>=1;i--){

    number=number*i;
}
return number;
}


//Q7

var startNumber=+prompt('Counting','enter start number');
var endNumber=+prompt('Counting','enter end number');
document.write('<br><br><br> Counting : ');
counting(startNumber,endNumber);

function counting(startNumber,endNumber){

    for(var i=startNumber;i<=endNumber;i++){

        document.write('<br> '+i);

    }

}


//Q8


var base=+prompt('Base of Triangle','enter base here');
var perpendicluar=+prompt('Perpendicualr of Triangle','enter perpendicular here');

alert('Hypotenuse of Triangle : '+Hypotenuse(base,perpendicluar));
function Hypotenuse(base,perp){
var hyp2=0,hyp=0;
base=square(base);
perp=square(perp);
hyp2=base+perp;
hyp=Math.sqrt(hyp2);

return hyp;
}


//Q9


length=6;
var width=3;

document.write('<br><br><br>  Arguments passed as variable & Area is  : '+area(length,width));
document.write('<br>  Arguments passed as value(12,6) & Area is  : '+area(12,6));


function area(length,width){

    var area=length*width;
    return area;
}


//Q10

var word=prompt('Plaindrome Word Check','enter word to check');
var wordd="";
for(var i=word.length-1;i>=0;i--){

    wordd+=word[i];

}
if(wordd===word){

    alert(word + ' is palindrome word');
}else{
    alert(word + ' is not palindrome word');
}

//Q11


sentence='the quick brown fox';
maketitleCase(sentence);
function maketitleCase(sent){

    sent=sent.split(" ");

    for(var i=0;i<sent.length;i++){

        sent[i]=sent[i].charAt(0).toUpperCase()+sent[i].slice(1);
    }
    document.write('<br><br><br>');

    for(var i=0;i<sent.length;i++){

            document.write(sent[i]+' ');
    }

    
}



//Q12

var  string=prompt('Check Longest word','enter string here');

string=string.split(' ');     

longestString(string);

function longestString(string){
var largeValue=string[0];
    for(var i=1;i<string.length;i++){

        if(largeValue.length < string[i].length){

            largeValue=string[i];
        }

    }

    document.write('<br><br><br> Longest String : '+largeValue);

}









//Q13
count=0;

var counted=searchCount('JSResourceS.com','o');
document.write("<br><br><br> Number of 'o'(s) in given string : "+counted);

function searchCount(string,char){

    string=string.toLowerCase();
    for(var i=0;i<string.length;i++){

    if(string.slice(i,char.length+i)===char){
        count++;
    }

    }
return count;
}





//Q14

document.write("<br><br><br> Cirumference of Circle of radius '4' : "+calcCircumference(4));
document.write("<br> Area of Circle of radius '4' : "+calcArea(4));

function calcCircumference(radius){

    var circumference=2*3.142*radius;
    circumference=circumference.toFixed(2);
return circumference;
}



function calcArea(radius){
    var area=3.142*(radius*radius);
    area=area.toFixed(2);



    return area;

}
