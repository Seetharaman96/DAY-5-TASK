// DAY 5 TASK
// 1)Do the below programs in anonymous function and IIFE
// A)Print odd numbers in an array?
// ANONYMOUS FUNCTION
var odd = [1,2,3,4,5,6,7,8,9,10];

var result = [];

var anonymous = function(odd){
    
    for(var i = 0; i < odd.length; i++){

        if(odd[i] % 2 != 0){

            result.push(odd[i]);

        }

    }

    return result;

}

console.log(anonymous(odd));
// OUTPUT => (5) [1, 3, 5, 7, 9]
// ------------------------------------------------
// IIFE
var result1 = [];

(function iife(odd1){

    for(var i = 0; i < odd1.length; i++){

        if(odd1[i] % 2 != 0){

            result1.push(odd1[i]);

        }

    }

    console.log(result1);

})

([1,2,3,4,5,6,7,8,9,10]);
// OUTPUT =>(5) [1, 3, 5, 7, 9]

// ----------------------------------------------

// B) Convert all the strings to title caps in a string array?
// ANONYMOUS FUNCTION
var str = ["my", "name", "is", "goku"];

var titleCase = function(str){

    for(var i = 0; i < str.length; i++){

        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

    } 

    return str.join(" ");

}

console.log(titleCase(str));
//OUTPUT => My Name Is Goku
// ------------------------------------------------
// IIFE
var str = ["my", "name", "is", "goku"];

(function title(str){

    for(var i = 0; i < str.length; i++){

        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

    }

    console.log(str.join(" "));

})

(str);
//OUTPUT => My Name Is Goku

// ---------------------------------------------------------------------------

// C) Sum of all numbers in an array?
// ANONYMOUS FUNCTION
var sum1 = 0;

var anonymous1 = function(sum){

    for(var i = 0; i < sum.length; i++){

        sum1 = sum1 + parseInt(sum[i]);

    }

    return sum1;

}

console.log(anonymous1([1,12,2,22,3]));
// OUTPUT => 40
// ------------------------------------------------
// IIFE
var add = 0;

(function sum(arr){

    for(var i = 0; i < arr.length; i++){

        add = add + parseInt(arr[i]);

    }

    console.log(add);

})

([1,12,2,22,3]);
// OUTPUT => 40

// ----------------------------------------------------------------------

// D) Return all the prime numbers in an array?
// ANONYMOUS FUNCTION
var arr = [1,2,3,4,5,6,7,8,9];

var isprime = function(arr){
    
    let primenumbers = [];
    
    for(var k = 2; k <= arr.length; k++){
    
        var num = true;

        for(var i = 2; i <= k; i++){

            if(k % i === 0 && i !== k)

            num = false;

        }

        if(num === true)

        primenumbers.push(k);

    }

    return primenumbers;

}

console.log(isprime(arr));
//OUTPUT => 2 3 5 7
// ---------------------------------------------
// IIFE
var arr=[1,2,3,4,5,6,7,8,9];

(function pn(arr){
    
    let primenumbers=[];
    
    for(var k = 2; k <= arr.length; k++){
    
    var num = true;
    
    for(var i = 2; i <= k; i++){
        
        if(k%i === 0 && i !== k)
            
            num = false;
        
    }
    
    if(num === true)
    
    primenumbers.push(k);
    
    }
    
   console.log(primenumbers.join(" ")); 

})(arr);
// OUTPUT => 2 3 5 7

// --------------------------------------------------

// E) Return all the palindromes in an array?
// ANONYMOUS FUNCTION
var arr = ["madam", "dad", "mom", "guvi", "lappal"];

var result = [];

var palin = function(arr){

    for(var i = 0; i < arr.length; i++){

        if(arr[i] === arr[i].split("").reverse().join("")){

            result.push(arr[i]);

        }

    }

    return result;

}
console.log(palin(arr));
//OUTPUT =>(4) ['madam', 'dad', 'mom', 'lappal']
// ---------------------------------------------------
// IIFE
var arr1 = ["malayalam", "racecar", "korean"];

var res = [];

(function palin(arr1){

    for(var i = 0; i < arr1.length; i++){

        if(arr1[i] === arr1[i].split("").reverse().join("")){

            res.push(arr1[i]);

        }

    }
    console.log(res);

})

(arr1);
//OUTPUT =>(2) ['malayalam', 'racecar']

//-----------------------------------------------------------------------

// F) Return median of two sorted arrays of the same size?
//ANONYMOUS FUNCTION
var median = function(a,b,n){
    var x = 0;
    var y = 0;
    var count;
    var m1 = -1;
    var m2 = -1;
    for(count = 0; count <= n; count++){
        if(x == n){
            m1 = m2;
            m2 = b[0];
            break;
        }
        else if(y == n){
            m1 = m2;
            m2 = a[0];
            break;
        }
        if(a[x] <= b[y]){
            m1 = m2;
            m2 = a[x];
            x++;
        }
        else{
            m1 = m2; 
            m2 = b[y];
            y++;
        }
    }
        return((m1 + m2)/2);
}
console.log(median([1,2,3,4,5],[6,7,8,9,10],5));
// OUTPUT => 5.5
// --------------------------------------------------
//IIFE
(function median(a,b,n){
    var x = 0;
    var y = 0;
    var count;
    var m1 = -1;
    var m2 = -1;
    for(count = 0; count <= n; count++){
        if(x == n){
            m1 = m2;
            m2 = b[0];
            break;
        }
        else if(y == n){
            m1 = m2;
            m2 = a[0];
            break;
        }
        if(a[x] <= b[y]){
            m1 = m2;
            m2 = a[x];
            x++;
        }
        else{
            m1 = m2; 
            m2 = b[y];
            y++;
        }
    }
        console.log((m1 + m2)/2);
})
([1,2,3,4,5],[6,7,8,9,10],5);
// OUTPUT => 5.5

//----------------------------------------------------------------

// G) Remove duplicates from an array?
// ANONYMOUS FUNCTION
var arr = [1,2,3,3,4,4,5,6,6,7];

var result = [];

var duplicate = function(arr){
    
    for(var i = 0; i < arr.length; i++){
        
        if(!result.includes(arr[i])){
           
            result.push(arr[i]);
       
        }
    }

    return result;

}

console.log(duplicate(arr));
// OUTPUT => (7) [1, 2, 3, 4, 5, 6, 7]
// ------------------------------------------
//IIFE
var arr = [1,2,3,3,4,4,5,6,6,7];

var result = [];

(function duplicate(arr){

    for(var i = 0; i < arr.length; i++){

        if(!result.includes(arr[i])){

        result.push(arr[i]);

        }

    }

    console.log(result);

})

(arr);
//OUTPUT => (7) [1, 2, 3, 4, 5, 6, 7]

// -----------------------------------------------------------------

// H) Rotate an array by k times?
// ANONYMOUS FUNCTION
var rotate = function(a, k){

    for(var i = 0; i < k; i++){

        a.unshift(a.pop());

    }

    return a.join(" ");

}

console.log(rotate([1,2,3,4,5,6,7,8,9,10], 5));
//OUTPUT => 6 7 8 9 10 1 2 3 4 5
// -------------------------------------------------
// IIFE
(function rotate(a, k){

    for(var i = 0; i < k; i++){

        a.unshift(a.pop());

    }

    console.log(a.join(" "));

})

([1,2,3,4,5,6,7,8,9,10], 5);
//OUTPUT => 6 7 8 9 10 1 2 3 4 5

// --------------------------------------------------------------------------------------------

// ARROW FUNCTION
// 2) Do the below programs in arrow function
// A) Print odd numbers in an array
var odd = (arr) => {

    var result = [];

    for(var i = 0; i < arr.length; i++){

        if(arr[i] % 2 != 0){

            result.push(arr[i]);

        }

    }

    return result;

}

console.log(odd([1,2,3,4,65,6,7,8,9,5]));
//OUTPUT => (6) [1, 3, 65, 7, 9, 5]

// -----------------------------------------------------------------

// B) Convert all the strings to title caps in a string array?
var str = ["my", "name", "is", "goku"]

var titleCase = (str) => {

    for(var i = 0; i < str.length; i++){

        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

    }

    return str.join(" ");

}

console.log(titleCase(str));
//OUTPUT => My Name Is Goku

// ----------------------------------------------------------------

// C) Sum of all numbers in an array
var sum1 = 0;

var foo = (sum) => {

    for(var i = 0; i < sum.length; i++){

        sum1 = sum1 + parseInt(sum[i]);

    }

    return sum1;

}

console.log(foo([1,2,3,4,5,6,7,8,9,10]));
//OUTPUT => 55

// ------------------------------------------------------------------

// D) Return all the prime numbers in an array?
var arr = [1,2,3,4,5,6,7,8,9];

var isprime = (arr) => {
    
    let primenumbers=[];
    
    for(var k = 2; k <= arr.length; k++){
    
    var num = true;
    
    for(var i = 2; i <= k; i++){
        
        if(k%i === 0 && i !== k)
            
            num = false;
        
    }
    
    if(num === true)
    
    primenumbers.push(k);
    
    }
    return primenumbers;
}
console.log(isprime(arr));
//OUTPUT => (4) [2, 3, 5, 7]

//-----------------------------------------------------------------------

// E) Return all the palindromes in an array?
var arr = ["money", "dad", "mom", "nitin"];

var res = [];

var palin = (arr) => {

    for(var i = 0; i < arr.length; i++){

        if(arr[i] === arr[i].split("").reverse().join("")){

            res.push(arr[i]);

        }

    }

    return res;

}

console.log(palin(arr));
//OUTPUT => (3) ['dad', 'mom', 'nitin']