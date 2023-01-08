

function subtract (arr){

    var n = arr[arr.length-1]-arr[0];

    return console.log(n);
}

function findAvg (arr){
    var n=0;
    for (i = arr.length-arr.length; i < arr.length; i++){
        n=n+arr[i];
    }
    return n/arr.length;
}
// question 1
var ages = [3, 9, 23, 64, 2, 8, 28, 93];

subtract(ages);

ages.push(66);

subtract(ages);

console.log(findAvg(ages));

// question 2
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

function aveNamLeg(arr){
    var a = 0;
    for(i=0;i<arr.length;i++){

        a=a+arr[i].length;

        
    }
    return a/arr.length;
}

console.log (aveNamLeg(names));

function arrToStr(arr){
    var s = arr[0];
    for(i=1;i<arr.length;i++){

        s=s + " " + arr[i];

       
    }
    return console.log(s); 
}

arrToStr(names);

//Question 5
function nameLegth(arr){
    var arr2 = [];
    for(i=0;i<arr.length;i++){
        
        arr2[i]=arr[i].length;
    }
    return arr2;
}

var nameLengths = nameLegth(names);
console.log(nameLengths);

//Question 6
var n=0;
for(i=0; i< nameLengths.length;i++){
    n=n+nameLengths[i];
}
console.log(n);

//Question 7
function addWord(word, n){
    var newWord=word;
    for (i=1;i<n;i++){
        newWord=newWord+word;

    }
    return newWord
}

var word = addWord("Hello", 4)

console.log(word);

//Question 8
function fullName(firstName, lastName){
    var newName = firstName + " " + lastName;
    return newName;
}
var fName=fullName("Stevie", "Littleton")
console.log(fName);

//Question 9
function isTrue (arr){
    var n=0;
    for (i = arr.length-arr.length; i < arr.length; i++){
        n=n+arr[i];
    }

    if (n<100){
        return false;
    }
    return true;
}
var numSet1 = [5,3,7,30,40];
var numSet2 = [5,30,17,30,40];
var numSet3 = [50,23,17,-30,40];

console.log(isTrue(numSet1));
console.log(isTrue(numSet2));
console.log(isTrue(numSet3));

//Question 10
console.log(findAvg(numSet1));

//Question 11
function compArr(arr1, arr2){

    var n = findAvg(arr1);
    var m = findAvg(arr2);

    if (n>m){
        return true;
    }
    return false;
}

console.log(compArr(numSet1,numSet2));

console.log(compArr(numSet2,numSet1));

console.log(compArr(numSet1,numSet3));

console.log(compArr(numSet2,numSet3));

//Question 12
function willBuyDrink(isHotOutside,moneyInPocket)
{
    if (isHotOutside == true && moneyInPocket >= 10.5)
    {
            return console.log(true);
    }
    return console.log(false);
}
var isHot=true;
var money=20;
willBuyDrink(isHot,money);

var isHot=false;
var money=20;
willBuyDrink(isHot,money);

var isHot=true;
var money=9;
willBuyDrink(isHot,money);

//Question 13
//I took the product of each elient of two arrays to 
//create a new array with the result of each element.
//I created the function to see the results.
function myFunc(arr1, arr2){

    if(arr1.length==arr2.length)
    {
        var newArray = [];
        for(i=0;i<arr1.length;i++)
        {
        newArray[i]= arr1[i]*arr2[i];
        }
        return newArray;
    }
    return false;
}
console.log(myFunc(numSet1,numSet2));