// 'use strict'
// const prompt=require("prompt-sync")({sigint:true}); 


// // let n = prompt("Enter the value of n");
// // let facto = 1;

// // for(let i = 0; i < n; i++){
// //     facto *= (i+1)
// // }
// // console.log(facto);


// // For in loop

// // let obj = {
// //     Asif: 25,
// //     Akash: 85,
// //     Haren: 95,
// //     Juhi: 100,
// //     Kushal: 99
// // }

// // for (let a in obj){
// //     console.log("Marks of " + a + " are " + obj[a]);
// // }
// // // For of loop 
// // let arr = ["asif", "jeevan", "Ovaiz"]

// // for (let b of arr){
// //     console.log(b);
// // }

// // for(let i = 10; i >= -20; i--){
// //     if (i % 2 == 0){
// //         console.log(i);
// //     }
// // }

// // for(let i = 0; i <=45; i++){
// //     if(i % 3 == 0 && i % 5 == 0){
// //         console.log("FizzBuzz");
// //     }else if(i % 3 == 0 ){
// //         console.log("Fizz");
// //     }else if(i % 5 == 0){
// //         console.log("Buzz");
// //     }
// // }

// // var thisIsAnArray = ["element1", "element2", "element3", "element4"];

// // for(let i=0; i < thisIsAnArray.length; i++){
// //     console.log(thisIsAnArray[i]);
// // }


// // var numbersArray = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
// // let sum = 0;

// // for(let i=0; i < numbersArray.length; i++){
// //     sum = sum + numbersArray[i]
// // }
// // console.log(sum);

// // var arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
// // let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// // let sum1 = 0
// // let sum2 = 0


// // for(let i=0; i < arr_1.length; i++){
// //     sum1 = sum1 + arr_1[i];
// //     sum2 = sum2 + arr_2[i];
// // }
// // console.log(sum1);
// // console.log(sum2);
// // console.log(sum1+sum2);


// // Using a for loop print all even numbers up to and including n. Don’t include 0.

// let n12 = 22; 

// for (let i=1; i<= n12; i++){
//     if(i%2 == 0){
//         // console.log(i);
//     }
// }


// // Using a for loop output the elements in reverse order

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// for(let i=0; i<arr.length; i++){
//     arr.reverse(arr[i]);
//     // console.log(arr[i]);
// }

// // const numbers = [65, 44, 12, 4];
// // // let sum = 0
// // numbers.forEach((items, index, arr) => {
// //     arr[index] = items * 10
// // })
// // function myFun(items, index, array){
// //     array[index] = items * 10;
// // }
// // console.log(numbers);

// // Double the values
// const doubleValues = ([1, 2, 3]);
// function double(array){
//     const newArr = []
//     array.forEach((items, index, arr) => {
//         // arr[index] = items * 10
//         newArr.push(items * 2)
//     })    
//     return newArr
// }
// // console.log(double(doubleValues));

// const onlyEvenValues = ([1,2,3]);

// function evenVal (array){
//     const newArr = []
//     array.forEach((items) => {
//         if(items % 2 === 0){
//             return newArr.push(items)
//         }
//     });
//     return newArr;
// }
// // console.log(evenVal(onlyEvenValues));


// const showFirstAndLast1 = (['colt','matt', 'tim', 'udemy']);

// function showFirstAndLast(array){
//     const newArr = []
//     array.forEach((items) => {
//         if(typeof items === "string"){
//             newArr.push(items[0] + items[items.length-1])
//         }
//     });
//     return newArr;
// }
// // console.log(showFirstAndLast(showFirstAndLast1));





// ///////////////////////////////////////////////////////////////////////////////////////////////


// ////////// Array Methods //////////

// // Push
// const fruits = [];
// fruits.push("Banana", "apple", "Orange")
// // console.log(fruits);

// const colors = ["red", "yellow", "blue"];
// colors[4] = 'purple';

// colors.forEach((items, index) => {
//     // console.log(`${index} ${items}`);
// })
// // console.log(colors.length);
// colors.reverse();
// // console.log(colors);


// // Reduce

// let array11 = [1, 2, 3, 4, 5];
// function sumElements(arr) {
//    return arr.reduce((acc, val) => acc + val, 0)
// }
// // console.log(sumElements(array11));

// let array123 = [1, 2, 3, 4, 5];
// function findMax(arr) {
//     return Math.max(...arr)
// }
// // console.log(findMax(array));


// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// function mergeArray(arr){
//     return [...array1,...array2]
// }
// // console.log(mergeArray(array1, array2));


// let array12 = [1, 2, 2, 3, 3, 3, 4];

// function countOccurrences(arr, elements) {
//     return arr.filter(x => x === elements).length
// }
// // console.log(countOccurrences(array12,2));


// let dup = [1, 2, 2, 3, 3, 3, 4];

// function removeDuplicates(arr) {
//     return [...new Set(arr)]
// }
// // console.log(removeDuplicates(dup));


// // Map
// const number = [65, 44, 12, 4];
// const newAr = number.map((num) => num * 10);
// console.log("old array ",number);
// console.log("New array",newAr);

// // forEach
// const numbers1 = [65, 44, 12, 4];
// numbers1.forEach((item, index, arr) => arr[index] = item * 100)
// console.log(numbers1);


// // forEach array of objects

// let arrayOfObject = [
//     {name: "Khan", location: "Bangalore"}, 
//     {courses: ["DSA", "DevOps Bootcamp", "GATE preparation course etc...."]}
// ]

// arrayOfObject.forEach((obj) => {
//     if(obj.name){
//         console.log(`${obj.name} is located in ${obj.location}`);
//     } else if(obj.courses){
//         console.log(`Courses offered: ${obj.courses.join(', ')}`);
//     }else {
//         return "Code is not proper";
//     }
//     return arrayOfObject;
// })


// const Employees = [
//     {
//         name: 'John', age: 35,
//         team: "Data Strcuture & Alogirthm"
//     },
//     {
//         name: 'Doe', age: 26,
//         team: "DevOps Bootcamp"
//     },
//     {
//         name: 'Ben', age: 21,
//         team: "Data Science"
//     }
// ];

// Employees.forEach((Employees) => {
//     console.log(`\n ${Employees.name}is ${Employees.age} years old
//     and is the part of ${Employees.team} team.\n`);
// })



// let dimensions = [
//     {
//         rectangle1: {
//             length: 10,
//             width: 5
//         }
//     },
//     {
//         rectangle2: {
//             length: 20,
//             width: 10
//         }
//     },
//     {
//         rectangle3: {
//             length: 30,
//             width: 15
//         }
//     }
// ];

// dimensions.forEach((rectangleObj => {
//     const rectangle = Object.keys(rectangleObj);
//     const {length, width} = rectangleObj[rectangle]
//     console.log(`The area of ${rectangle} is: ${length * width}`);
// }));


// let numbers = [1, 2, 3, 4, 5];
// let sim = 0
// numbers.forEach((items) => {
//     sim += items;
// })
// // numbers.forEach(myFunction)
// // function myFunction(items){
// //     sim += items
// // }
// console.log(sim);

// const letters= ['a', 'b', 'a', 'c', 'd', 'a', 'b', 'c', 'c', 'c']

// let count = {}

// letters.forEach(items => {
//     if(count[items]) {
//         count[items]++
//     }else {
//         count[items] = 1;
//     }
// });

// console.log(count);

// const a = [1,2,[3,4],5];
// const d = a.flat();
// console.log(d);
// const b = [6, 7, 8, 9, 10];
// const c = a.concat(b);
// console.log(c);


// var cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
// cars.splice(3, 0, "Audi")
// console.log(cars);



// console.log(test);
// var test = 10000



// greeting();

// function greeting() {
//     console.log("Hello!");
// }



// let arr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2, 2, 3];
// let arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26,2, 3];

// const produceAndAdd = (arr1 = [], arr2 = []) => {
//     let sum = 0;
//     for (let i = 0; i < arr1.length; i++){
//         const product = (arr1[i] + arr2[i])
//         sum += product
//     }
//     return sum;
// }
// // console.log(produceAndAdd(arr1, arr2));


// let n1 = 22;

// for(let i = 1; i <= 22; i++){
//     if( i % 2 === 0){
//         // console.log(i);
//     }
// }


// let array = [43, "what", 9, true, "cannot", false, "be", 3, true];

// const reversedArray = []

// for(let i = array.length - 1; i >= 0; i--) {
//   const valueAtIndex = array[i]
//   console.log(valueAtIndex);
  
//   reversedArray.push(valueAtIndex)
// }
// // console.log(reversedArray);

// let arr_3 = [4, 6, 7];
// let arr_4 = [8, 1, 9];

// const result = []
// for(var i = 0; i < arr_3.length; i++){
//     return result.push(arr_3[i] + arr_4[i]);
// }
// // console.log(result(arr_3, arr_4));


// const fruit = ["Banana", "Orange", "Apple", "Mango"];

// let text = fruit.join(" and ");
// // console.log(text);

// const oper = [1,2,3,4,5,6];
// console.log(oper);
// console.log(oper.slice(2));
// console.log(oper.slice(2, 1));



// let array = [1, 2, 3, 4, 5, 6];
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [1, 2, 2, 3, 3, 3, 4];
// let array4 = [1, 2, 2, 3, 4, 4, 5];
// let array5 = [[1, 2], 2, 3,[3, 4], [5, 6]];

// function nestedArr(arr){
//     return [...new Set(arr.flat())]
// }
// console.log(nestedArr(array5));



// function findMinMax(arr){
//     return {max: Math.max(...arr), min: Math.min(...arr)}
// }

// console.log(findMinMax(array));






// function multiply(arr, muilt){
//     return arr.map(num => num * muilt)
// }

// console.log(multiply(array, 2));




// function removeDuplicates(arr){
//     return [...new Set(arr)]
// }
// console.log(removeDuplicates(array4));






// function myFun(arr, element){
//     return arr.filter(x => x === element).length
// }
// console.log(myFun(array3, 2));





// function myFun(arr1, arr2){
//     return ([...arr1, ...arr2])
// }
// console.log(myFun(array1, array2));





// function myFun(arr){
//     return arr.filter((num) => num % 2 === 0)
// }

// console.log(myFun(array));





// Math.max
// function myFun(arr){
//     return Math.max(...arr)
// }
// console.log(myFun(array));




// Reduce
// function myFun(arr) {
//     return arr.reduce((acc, val) => acc + val)
// }
// console.log(myFun(array));




// function reverseArray(arr) {
//     return arr.reverse()
// }

// console.log(reverseArray(array));



// const word1 = "abc";
// const word2 = "pqr";

// let result = word1.concat(word2);
// console.log(result);

1
// const nums1 = [1,2,3,0,0,0];
// const nums2 = [2,5,6];
// const nums = nums1.concat(nums2);
// nums.splice(3, 3);
// console.log(nums);

// 2 Remove Elemets
// const nums = [3, 2, 2, 3];
// const val = 3;
// let count = 0;
// function myFun(nums, val) {
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] !== val){
//             nums[count++] = nums[i]
//         }
//     }
//     return count;
// }

// console.log(myFun(nums, val));


// 3 Remove Duplicates
// const arr = [1,1,2];

// function myFun(array){
//     return [...new Set(array)]
// }
// console.log(myFun(arr));



// 4
// const arr = [1,1,1,2,2,3];

// function myFun(nums) {
//     let k = 0;
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === nums[i+1] && nums[i+1] === nums[i + 2]){
//             continue
//         }
//         nums[k] = nums[i];
//         k++;
//     }
//     return k;
// }
// console.log(myFun(arr));


// const nums = [2,2,1,1,1,2,2];

// const myFun = function(nums){
//     let count = 0
//     let maj = 0
//     for(let n of nums){
//         if(count === 0){
//             maj = n
//             // console.log(n);
//         }if(maj === n){
//             count++
//         }else{
//             count--
//         }
//     }
//     return maj;
// };
// console.log(myFun(nums));


// const numbsers = [1,2,3,4,5];
// const sum = numbsers.reduce((item, val) => item + val);
// console.log(sum);

// const average = sum / numbsers.length;
// console.log(average);



// const word1 = "abc";
// const word2 = "pqr";

// var mergeAlternately = function (word1, word2){
//     let result = '';
//     for(let i = 0; i < Math.max(word1.length, word2.length); i++){
//         if( i < word1.length) result += word1[i];
//         if( i < word2.length) result += word2[i];
//     }
//     return result;
// }
// // console.log(mergeAlternately(word1, word2));

// const candies = [2,3,5,1,3];
// const extraCandies = 3;

// var kidsWithCandies = function (candies, extraCandies){
//     const maxCandies = Math.max(...candies);
//     let result = []
//     for(let i=0; i < candies.length; i++){
//         if(candies[i] + extraCandies >= maxCandies){
//             result.push(true)
//         }else{
//             result.push(false)
//         }
//     }
//     return result;
// }

// // console.log(kidsWithCandies(candies, extraCandies));


// const nums1 = [1,2,3,0,0,0];
// const m = 3;
// const nums2 = [2,5,6];
// const n = 3;

// var merge = function(nums1, m, nums2, n){
//     for(let i = m, j=0; j < n; j++){
//         nums1[i] = nums2[j]
//     }
//     nums1.sort((a,b) => a-b)
// };
// // console.log(merge(nums1,m, nums2, n));

// const nums = [3, 2, 2, 3];
// const val = 3;
// let count = 0;
// var removeElement = function(nums, val){
//     for(let i=0; i < nums.length; i++){
//         if(nums[i] !== val){
//             nums[count++] = nums[i];
//         }
//     }
//     return count;
// }
// // console.log(removeElement(nums, val));
// // console.log(nums);

// const nums3 = [1,1,2];
// function nestedArr(nums3){
//     return [...new Set(nums3)]
// }
// // console.log(nestedArr(nums3));


// var fruit = ["banana", "apple", "orange", "watermelon"];
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// function myFun(vege){
//     return vege.shift()
// }
// console.log(myFun(vegetables));
// console.log(vegetables);

// console.log(fruit.indexOf("orange"));

// function myFun(fruit){
//     return fruit.push(2)
// }

// const vege = vegetables.length;
// console.log(vege);

// function myFun(vege){
//     return vege.push(4)
// }
// console.log(myFun(vegetables));
// console.log(vegetables);

// const food = fruit.concat(vegetables);
// // console.log(food);

// const removeElement1 = food.splice(4,1);
// console.log(removeElement1);
// console.log(food.reverse());

// function reverseArray(food){
//     return food.toString()
// }
// console.log(reverseArray(food));
'use strict'

// getName();
// console.log(x);
// console.log(getName);

// const arr = [5, 1, 3, 2, 6];


// function findSum(arr){
//   let max = 0;
//   for (let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//       max = arr[i]
//     }
//   }
//   return max;
// }
// console.log(findSum(arr));

// const output = arr.reduce(function (acc, cur) {
//   if(acc < cur){
//     acc = cur
//   }
//   return acc
// }, 0) 
// console.log(output);



 //Filter
// const output = arr.filter((x) => x % 2 );
// const output1 = arr.filter((x) => x % 2 === 0);
// const output2 = arr.filter((x) => x > 4);
// console.log(output);
// console.log(output1);
// console.log(output2);


// Map
// const output = arr.map((nums) => nums * 2);
// const output1 = arr.map((nums) => nums * 3);
// const output2 = arr.map((nums) => nums.toString(2));
// console.log(output);
// console.log(output1);
// console.log(output2);



// const users = [
//   {firstName: "Asif", lastName: "Khan", Age: 24},
//   {firstName: "Jeevan", lastName: "Gowda", Age: 24},
//   {firstName: "Osama", lastName: "Ladin", Age: 78},
//   {firstName: "Saddam", lastName: "Hussain", Age: 94}
// ];

// const output = users.filter(x => x.Age<30).map(x => x.firstName);
// console.log(output); 

// const output1 = users.reduce((acc, cur) => {
//   if(cur.Age < 30){
//     acc.push(cur.firstName);
//   }
//   return acc
// }, []);

// ForEach
// const number = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];
// let count = {};
// number.forEach((item, index, arr) => {
//   if(count[item]) {
//     count[item] += 1;
//   }else{
//     count[item] = 1;
//   }
// });

// console.log(count);



// Map

// const number = [1, 2, 3, 4, 5];

// const output = number.map(x => x * x);
// console.log(output);

// const output1 = number.map((val, index) => val * index);
// console.log(output1);

// const products = [
//   {name: 'laptop', price: 1000, count: 5},
//   {name: 'Desktop', price: 1500, count: 2},
//   {name: 'phone', price: 500, count: 10}
// ];

// const output2 = products.map((x) => ({
//   name: x.name,
//   totalValue: x.price * x.count
// }));
// console.log(output2);


// const numbers = ['1', '2', '3', '4', '5'];

// const output3 = numbers.map(Number);
// console.log(output3);


// Filter

// const number = [1, 2, 3, 4, 5, 6];

// const output = number.filter(x => x % 2 === 0);
// console.log(output);

// const people = [
//   {name: 'Asif', age: 26},
//   {name: 'Jeevan', age: 18},
//   {name: 'Jai', age: 15}
// ];

// const output1 = people.filter(x => x.age <= 18);
// console.log(output1);

// const numbers = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6];
// const output2 = numbers.filter((val, index, arr) => {
//   return arr.indexOf(val) === index
// });
// console.log(output2);


// Reduce

// const number = [1, 2, 3, 4, 5];
// const output = number.reduce((acc, cur) => {
//   if(acc > cur){
//     return acc;
//   }else{
//     return cur;
//   }
  
// }, -Infinity);
// console.log(output);

// const products = [
//   {name: 'laptop', price: 1000, count: 3},
//   {name: 'desktop', price: 1500, count: 4},
//   {name: 'phone', price: 500, count: 10}
// ];
// const output1 = products.reduce((acc, cur) => acc + (cur.price * cur.count), 0);
// console.log(output1);


// Slice

// const number = [1, 2, 3, 4, 5];

// const output = number.slice(1, 4 );
// console.log(output);
// console.log(number);

// const contestents = ['Florin', 'Ivan', 'Liam', 'Jai', 'Peter'];

// const output1 = contestents.slice(0, 3);
// console.log(output1);

// const number = [1, 2, 3, 4, 5];
// number.splice(5, 0, 6, 7, 8, 9);
// console.log(number);


// let pizza 
// function orderPizza(){
//   console.log('Order Pizza');
//   setTimeout(() => {
//     pizza = 'food'
//   }, 2000);
// };

// orderPizza();
// console.log(pizza); 
// console.log(`Eat ${pizza}`);


const str = 'Coding is fun!';

const res = str.split('').reverse().join('');   

console.log(res);