///////////////// CHP 21-25
// 1
// var firstName=prompt('Enter Your First Name');
// var lastName=prompt('Enter Your last Name');
// var fullName= firstName + ' ' + lastName;
// document.write('GOOD MORNING '+fullName);
// 2
// var firstName=prompt('ENTER YOUR FAVORITE MOBILE PHONE MODEL');
// var fullName= firstName.length
// document.write('MY FAVORITE MOBILE PHONE IS : '+firstName+'<br>'+'LENGTH OF STRING: '+fullName);
// 3
// var firstName='Pakistani'
// var fullName= firstName.indexOf('n')
// document.write('STRING: '+firstName+'<br>'+'INDEX OF \'n\' is : '+fullName);
// 4
// var firstName='Hello World'
// var fullName= firstName.lastIndexOf('l')
// document.write('STRING: '+firstName+'<br>'+'LAST INDEX OF \'l\' is : '+fullName);
// 5
// var firstName='Pakistani'
// var fullName= firstName.charAt('3')
// document.write('STRING: '+firstName+'<br>'+'CHARACTER AT INDEX 3 is : '+fullName);
// 6
// var firstName=prompt('Enter Your First Name');
// var lastName=prompt('Enter Your last Name');
// var fullName=firstName.concat(' ' + lastName);
// document.write('GOOD MORNING '+fullName);
// 7
// var x1='HYDERABAD';
// var x2='ISLAM'
// var x=x1.replace('HYDER',x2);
// document.write('CITY : '+x1 + '<br>'+'AFTER REPLACEMENT : '+x);
// 8
// var msg='Ali and Sami are best friends. They play cricket and football together';
// var z=msg;
// var x=msg.split(' ')
// for (let index = 0; index < x.length; index++) {
//     if(x[index]=='and'){
//         x[index]= '&' ;
// } 
// }
// var msg = x.join(' ');
// document.write('MESSAGE : '+ z + '<br>'+'AFTER REPLACEMENT (&) : '+msg);
// 9
// var a = '472';
// document.write('VALUE : ' + a + '<br>' + 'TYPE : '+ typeof(a)+'<br>'+'VALUE : ' + a + '<br>' + 'TYPE : '+ typeof(parseInt(a)) )
// 10
// var x=prompt('Enter SOMETHING');
// document.write('USER INPUT ' + x + '<br>' +'UPPER CASE : ' + x.toUpperCase() );
// 11
// var x=prompt('Enter SOMETHING');
// document.write('USER INPUT : ' + x + '<br>' +'TITLE CASE : ' + x.replace(x[0], x[0].toUpperCase()) );
// 12
// var a = 35.36;
// document.write('NUMBER : ' + a + '<br>' + 'RESULT : '+ a.toString().replace('.',[]))
// 13
// var x=prompt('Enter USERNAME');y=0;
// for (let index = 0; index < x.length; index++) {
//     if(x.includes('@') || x.includes(',') || x.includes('.')){
// y=y+1
//     }
// }
// if(y>=1){
//     alert('ENTER VALID USERNAME')
// }
// 14
// var y=0;
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var x = prompt('SEARCH BAKKERY ITEM BY NAME ');
// for (let index = 0; index < A.length; index++) {
//     if (A[index] == x.toLowerCase()) {
//         y = index;
//     }
// }
// if (y >= 0){
//      document.write('ITEM FOUND AT INDEX ' + (y+1) + ' in our BAkery ');      
// }
// else {
//     document.write('WE ARE SORRY. ITEM NOT FOUND IN OUR BAKERY');
// }
// 15
// var x = prompt('ENTER YOUR PASSWORD \nRequirements: \na. It should contain alphabets and numbers \nb. It should not start with a number \nc. It must at least 6 characters long '); z = 0; zz = 0; zzz = 0;
// if (x.length > 6) {
//     z = z + 1;
// }
// for (let index = 0; index < x.length; index++) {
//     if (x.charCodeAt(0) >= '65' && x.charCodeAt(0) <= '122') {
//         if ((x.charCodeAt(index) >= '48' && x.charCodeAt(index) <= '57') || (x.charCodeAt(index) >= '65' && x.charCodeAt(index) <= '122')) {
//         } else {
//             zz = zz + 1;
//         }

//     } else {
//         zzz = zzz + 1;
//     }
// }

// if ((z + zz + zzz) > 1) {
//     document.write('PASSWORD : ' + x + '<br>');
//     if (z >= 1) {
//         document.write('It must at least 6 characters long' + '<br>');
//     }
//     if (zz >= 1) {
//         document.write('It should contain alphabets and numbers' + '<br>');

//     }
//     if (zzz >= 1) {
//         document.write('It should not start with a number ' + '<br>');
//     }
// }
// 16
// var  university = 'University of Karachi'; 
// var x=university.split('');
// for (let index = 0; index < x.length; index++) {
//     document.write(x[index] + '<br>');
// }
// 17
// var firstName='Pakistan'
// var fullName= firstName.charAt((firstName.length-1))
// document.write('STRING: '+firstName+'<br>'+'LAST CHARACTER OF INPUT : '+fullName);
// 18
// var msg='The quick brown fox jumps over the lazy dog';z=0;
// var x=msg.split(' ')
// for (let index = 0; index < x.length; index++) {
//     if(x[index].toLowerCase()=='the'){
//         z=z+1;
// } 
// }
// var msg = x.join(' ');
// document.write('TEXT : ' + msg + '<br>' + 'There are '+ z  + ' Occurence of Word \'the\' ')


/////////////////////// CHP 26-30
// 1
// var x=+prompt('ENTER POSITIVE INTEGER');
// document.write(' number : '  +  x + '<br>' + ' round off value of the number : ' + Math.round(x) + '<br>' + ' floor value of the number : ' + Math.floor(x) + '<br>' + ' ceil value of the number : ' + Math.ceil(x) )
// 2
// var x=-prompt('ENTER NEGATIVE FLOATING POINT NUMBER');
// document.write(' number : '  +  (-x) + '<br>' + ' round off value of the number : ' + Math.round(-x) + '<br>' + ' floor value of the number : ' + Math.floor(-x) + '<br>' + ' ceil value of the number : ' + Math.ceil(-x) )
// 3
// var x=-4;
// y=Math.abs(x);
// document.write(' absolute value of ' + x + ' is ' + y);
// 4
// var x=Math.random()*6;
// document.write(' Random Dice Value ' + Math.ceil(x) );
// 5
// var x=Math.random()*2;
// document.write(' Random Coin Value ' + Math.ceil(x) );
// 6
// var x=Math.random()*2;
// document.write(' Random Coin Value ' + Math.ceil(x) );
// 7
// var x=prompt('ENTER YOUR WEIGTH');y=[];z=0;
// for (let index = 0; index < x.length; index++) {
//   if  (x.charCodeAt(index) >= '48' && x.charCodeAt(index) <= '57'){
//       y[z]=x[index];
//       z=z+1;
//   }   
// }
// document.write(' THE WEIGHT OF USER IS ' + y.join('') + 'Kilograms' );
// 8
// var y=Math.random()*10;
// var x=+prompt('GUESS GAME (1-10) \nENTER NUMBER');
// if (x==y){
//     document.write('CONGRATULATE ')
// }else{
//     document.write('U LOSE ')
// }
////////////////////////// CHP 35-38
// 1
// function date(){
//     var y=Date()
//         document.write( y+ '<br>')
// }
// date()
// 2
// function greet(firstName,lastName){
//         document.write( 'GOOD MORNING ' + firstName + ' '  + lastName+ '<br>')
// }
// greet('Muhammad','Ali Sir')
// 3
// function sum(num1,num2){
//         y=num1+num2;
//         document.write( y+ '<br>')
//     }
//     sum(2,3)
// 4
// function calculator(num1,operator,num2){
//     if (operator=='-'){
//         y=num1-num2;
//         document.write( y+ '<br>')
//     }
//     if (operator=='*'){
//         y=num1*num2;
//         document.write( y+ '<br>')
//     }
//     if (operator=='+'){
//         y=num1+num2;
//         document.write( y+ '<br>')
//     }
//     if (operator=='/'){
//         y=num1/num2;
//         document.write( y+ '<br>')
//     }
// }
// calculator(2,'-',5)
// 5
// function squres(x){
// y=x**2;
// document.write( y+ '<br>')
// }
// squres(2)
// 6
// function factorial(x){
//     var y=1;
// for (let index = x; index > 0; index--) {  
//      y=index*y;
//     }
// document.write( y+ '<br>')
// }
// factorial(5)
// 7
// function count(start,end){
//     len=end-start;
//     if (len<0){
//         len=len*-1;
//     }

//     for (let index = 0; index < (len+1); index++) {
       
//         document.write(start+index + '<br>')
//     }
// }
// count(-10,10)
// 8
// function calcHypotenuse(base,perp){
//     var y=0;
//     function calcSquare(){
//       y=(base**2+perp**2)**(1/2);
//     }
//     calcSquare()
//     document.write('HYPOTENUSE '+y+ '<br>');
// }
// calcHypotenuse(2,3)
// 9
// function areaRec(width,height){
//   var  y=width*height;
//     document.write('Area of Rectangle is '+ y+ '<br>');
// }
// var width = 2;
// var height = 5;
// areaRec(2,3)
// areaRec(width,height)
// 10
// function palindrome(word){
//     var wordrev=[];x=0;
//     for (let index =  word.length-1; index >= 0; index--) {
//         wordrev[x]=word[index];
//         x=x+1;
// }
// wordrev=wordrev.join('')
// if (wordrev==word){
//     document.write('GIVEN word is Plindrome  ' + word )
//     }else{
//         document.write('GIVEN word is not Plindrome  ' + word )
//     }
// }
// palindrome('hamah')

// 11
// function capitalize(str) {
//     var y=[];
//     var word = str.split(' ')
//     for (let index = 0; index < word.length; index++) {
//         var x=word[index].replace(word[index][0] ,word[index][0].toUpperCase());
//          y[index] = x;
//     }
// word=y.join(' ');
//     document.write('GIVEN : ' + str + '<br>' + ' OUTPUT : ' + word )
// }

// capitalize('web development tutorial');

// 12
// function longwordfinder(str){
//     var x=0;y=0;xx=0;
//     for (let index = 0; index < str.length; index++) {
//         x=x+1;
// if(str[index]==' '){
//       var y=x;
//     xx=xx+1;
// x=0;
// }
// if (x>y){
// z=x;
// }
//     }
//  var  word = str.split(' ')
//     document.write('Largest Word in string : ' + str +'<br>'+ ' is : ' + word[xx-1])
// }
// longwordfinder('Web Development Tutorial');

// 13
// function charChecker(str,letter){
//     var x=0;
//     for (let index = 0; index < str.length; index++) {
//         if(str[index]==letter){
//             x=x+1;
//         }
//     }
// document.write('occurrences of the specified letter : ' + letter +  ' within the string. : ' + str  + ' is '+ x )
// }
// charChecker('JSResourceS.com','o')
// 14
// function calcCircumference(radius){
//   var  y=2*3.14*radius;
//     document.write('Circumference of Circle is '+ y);
// }
// function calcArea(radius){
//    var z=3.14*radius**2;
//      document.write('Area of Circle is '+ z);
// }
// calcCircumference(5)
// calcArea(5)




