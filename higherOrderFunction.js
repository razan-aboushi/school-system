// Q4 :create a function that takes an array of integers and returns the average of all the numbers in it

 function getAvgerage (arr1)
 {
    let sum = 0;
     for(let r = 0; r < arr1.length;r++)
     {
         sum += arr1[r];
     }
     return sum/arr1.length;
 }


// Q5 :Write a function that, takes an array of integers as input, iterates over the array, and returns a new array. 
//The returned array should contain the result of raising 2 to the power of the original input element.For example,([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
 
// By Using For loops

 function getPower(arr2)
 {
    let RaArray = [];
     for(let R = 0; R < arr2.length; R++)
     {
         RaArray.push(Math.pow(2, arr2[R]));
     }
 }

// By Using ForEach()

function getPower(arr2)
{
    let RArray = [];
     arr2.forEach(element => {
         RArray.push(Math.pow(2, element));
    });
     return RArray;
 }

// By Using Map

 function getPower(arr2)
 {
    let newArray = arr2.map((value) =>{
         return Math.pow(2, value);
     });
     return newArray;
 }


// Q6 : Write a function that takes an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.If any element in the array is not a number, the resulting array should have the string "N/A" in its place.


 function Render(arr)
 {
     let newArr = arr.map((value)=>
     {
         if(isNaN(value))
         {
             return "N/A";
           }
           else if(value%2==0)
           {
            return "even";
           }
           else
           {
             return "odd";
        }
     });
    return newArr;
 }


// Q7 : Write a function named fizzbuzz that takes in an array of numbers.
//Iterate over the array using forEach or map to determine the output based on several rules:
//- If a number is divisible by 3, add the word "Fizz" to the output array.
//- If the number is divisible by 5, add the word "Buzz" to the output array.
//- If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
//- Otherwise, add the number to the output array.
//Return the resulting output array.


 function fizzbuzz(arr)
 {
     let newArr = arr.map((value) =>
      {
        if(value%3==0 && value%5==0)
        {
             return "fizzbuzz";
       }
        else if(value%3==0)
        {
            return "fizz";
       }
         else if(value%5==0)
         {
             return "buzz";
         }
         else{
             return value;
         }
     });
     return newArr;
 }