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


// const str = 'Coding is fun!';

// const res = str.split('').reverse().join('');   

// console.log(res);

// let obj = {
//     Asif: 25,
//     Akash: 85,
//     Haren: 95,
//     Juhi: 100,
//     Kushal: 99
// }

// for (let a in obj){
//     console.log("Marks of " + a + " are " + obj[a]);
// }
// // For of loop 
// let arr = ["asif", "jeevan", "Ovaiz"];

// for (let b of arr){
//     console.log(b);
// }


// const ratings = [5, 4, 5];
// let sum = 0;

// const total = ratings.forEach(item => sum += item);
// // console.log(sum);

// const number = [2, 4, 5, 1, 4, 3, 9, 10];
// const numbers = [2, 4, 5, 1, 4, 3, 9, 10];
// const numbers1 = [2, 4, 5, 1, 4, 3, 9, 10];
// numbers1.sort((a, b) => {
//     return a-b;
// });
// console.log(numbers1);
// const output = number.reduce((acc, cur) => acc = acc + cur, 0);
// const output1 = number.map((item, index, arr) => arr[index] = item * 2);
// const output2 = numbers.filter(item => item % 2);
// console.log(output2);
// console.log(output1);
// console.log(output);
// // console.log(number);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1, "Kiwi", "watermelon");
// console.log(fruits);

// const array1 = [
//     [0, 1],
//     [2, 3],
//     [4, 5],
// ];

// const result = array1.reduceRight((acc, cur) => acc.concat(cur)).sort((a, b) => a-b);
// console.log(result);




// let arr = [1, 2, 3, 2, 3, 4, 5, 5, 6, 1, 1, 4, 5, 7, 8, 8];

// function count (arr, element){
//     return arr.reduce
// }
// console.log(count(arr, 1));


let arr1 = [
    {
        id: 123,
        Token: 7455,
    },
    {
        id: 122,
        Token: 7457
    },
    {
        id: 121,
        Token: 7456
    }
]

let arr2 = [
    {
        id: 126,
        Token: 7457,
        date: 123458
    },
    {
        id: 125,
        Token: 7456,
        date: 6576567
    },
    {
        id: 124,
        Token: 7455,
        date: 123456
    }];

arr1.forEach((item, index, arr) => {
    const find = arr2.find(obj => item.Token === obj.Token);
    const merge = Object.assign({}, find, item);
    arr1.splice(index, 1, merge);
    // console.log(arr1);
});
// console.log("booooooooom", arr1,  "booooooooom");

// const merged = Object.assign({}, arr2[0], arr1[0]);
// console.log(merged);


const studentMarks = [
    {
        name: 'A',
        age: 10,
        mark: 50,
        maxMarks: 80
    },
    {
        name: 'B',
        age: 13,
        mark: 75,
        maxMarks: 80
    },
    {
        name: 'C',
        age: 12,
        mark: 40,
        maxMarks: 80
    },
    {
        name: 'D',
        age: 11,
        mark: 34,
        maxMarks: 80
    },
    {
        name: 'E',
        age: 10,    
        mark: 29,
        maxMarks: 80
    }
]
// studentMarks.sort((a, b) => { return a.mark - b.mark});
// const studentMarksWithPercentage = studentMarks.map((item, index, arr) => {
//     const percentage = item.mark * 100 / item.maxMarks;
//     // const merge = { ...item, percentage}
//     const merge = Object.assign({}, item, { percentage })
//     console.log(merge);
// });

const studentMarksWithPercentage = studentMarks.sort((a, b) => {
    return a.mark - b.mark
}).map((item) => {
    item.percentage = (item.mark * 100) / item.maxMarks;
    return item;
});
// console.log(studentMarksWithPercentage);


// var library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254, available: true },
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264, available: false },
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245, available: true },
//     { author: 'Holly Jackson', title: 'Five Survive', libraryID: 5673, available: true },
//     { author: 'Lauren Asher', title: 'The Fine Print', libraryID: 7364, available: false },
//     { author: 'Ana Huang', title: 'King of Wrath', libraryID: 4538, available: true },
// ];

// const available = library.sort((a, b) => { return a.title - b.title})
// .filter((item, index, arr) => {
//     return item.available
// });
// // console.log(available);

// const unavailable = library.filter((item, index, arr) => {
//     return !item.available
// }).map((item) => {
//     return {author: item.author, title: item.title}
// })
// // console.log(unavailable);

// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 25 }
// ];
// const object1 = {}
// people.forEach((item, index, arr) => {
//     object1[item.name] = item
//     // const newKey = item.name;
//     // const myObject = { oldkey: item }
//     // myObject[newKey] = myObject.oldkey;
//     // delete myObject.oldkey;
//     // return myObject;
// });
// // console.log(object1);

// const output = people.reduce((acc, cur) => {
//     object1[cur.name] = cur;
//     return object1;
// });
// // console.log(output);


// // 5
// let numbers = [1, 2, 3, 2, 4, 1, 5, 1];
// let count = {};

// numbers.forEach((item, index, arr) => {
//     if(count[item]){
//         count[item] += 1
//     }else{
//         count[item] = 1
//     }
// })
// console.log(count);


const peoples = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 40},
    { name: 'Sean', age: 44 },
    { name: 'George', age: 50 }
];
let sum = {};

const results = peoples.reduce((acc, cur) => {
    acc = acc + cur.age / peoples.length;
    return acc;  
}, 0);
// console.log(results);


let statusType = {
    open: 'Open',
    closed: 'Closed',
    onhold: 'On Hold'
}

let tasks = [
    {
        name: 'Task 1',
        status: 'open'
    },
    {
        name: 'Task 2',
        status: 'open'
    },
    {
        name: 'Task 3',
        status: 'onhold'
    },
    {
        name: 'Task 4',
        status: 'closed'
    },
    {
        name: 'Task 5',
        status: 'onhold'
    },
    {
        name: 'Task 6',
        status: 'open'
    },
];

const result = {}
tasks.forEach((item, index, arr) => {
    if(Object.keys(result).includes(item.status)){
        result[item.status].push({...item, val: item.status})
    }else {
        result[item.status] = [{...item, val: item.status}]
    }
});
console.log(result);

let personById = {
    101: {
        name: 'Alice',
        age :25,
        id :101
    },
    102: {
        name: 'Bob',
        age: 30,
        id: 102
    },
    103: {
        name: 'Kat',
        age: 22,
        id: 103
    },
    104: {
        name: 'Aby',
        age: 31,
        id: 104
    },
    105: {
        name: 'Bruce',
        age: 27,
        id: 105
    }
}

// const output = Object.values(personById)
// .filter((item, index, arr) => {
//     return item.age <= 25
// }).map((item, index, arr) => {
//     return item.name
// });
// console.log(output);


let a = 10;
let b = 20;

let c = a;

a = b;
b = c;
// console.log(b);
// console.log(a);


// find for the profile_id (I used findOne in the profileSchema to find the Id, cause I don't want to overright the profileSchema)
// check if the test key is present in the prfile_id (I used forEach to see if the key is present in the profileSchema)
// check the test_id exists in the test key (then outside the forEach function I used findOneAndUpdate to update the testSchema, but in the profileSchema the test is same, it is not updating, help me over here)
// update the data for the particular id in the test key
// It should be changed in the testSchema and profileSchema also, //but prolfileSchema is just "findOne", how will you change even the profileSchema 


// don't use findOneAndUpdate in prolfileSchema see any other way to update only the test key in the profile, If you use findOneAndUpdate it will over right all the data in the profileSchema I dont want that to happen


// const aa = [5, 6, 7];
// const bb = [3, 6, 10];


// var result1 = [];
// var aScore = 0,
//     bScore = 0;

// for (var i = 0; i < aa.length; i++) {
//     if (aa[i] > bb[i]) aScore++;
//     if (aa[i] < bb[i]) bScore++;
// }
// result1[0] = aScore;
// result1[1] = bScore;
// console.log(result1);
// return result;



const arr12 = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {
    return ar.reduce((acc, cur) => acc + cur);
}
// console.log(aVeryBigSum(arr12)); 

const grdaeScale = [
    {name: 'A+',minMarks: 91,maxMarks: 100,remarks: 'Excellent'},
    {name: 'A',minMarks: 75,maxMarks: 90,remarks: 'Very Good'},
    {name: 'B',minMarks: 56,maxMarks: 74,remarks: 'Good'},
    {name: 'C',minMarks: 35,maxMarks: 55,remarks: 'Average'},
    {name: 'D',minMarks: 0,maxMarks: 34,remarks: 'Needs Improvement'}
];


const studentMark = [
    {name: 'Alice',mark: 50,maxMarks: 80},
    {name: 'Bob',mark: 45,maxMarks: 80},
    {name: 'Kat',mark: 66,maxMarks: 80},
    {name: 'Aby',mark: 75,maxMarks: 80},
    {name: 'Bruce',mark: 30,maxMarks: 80}
];

// const calculatePercentage = studentMark.map((item, index) => {
//     const percentage  = item.mark * 100 / item.maxMarks;
//     // console.log(percentage);
//     const grade = '';
//     const remarks = '';

//     for(let x of grdaeScale){
//         if(percentage >= x)
//     }
// });
// console.log(calculatePercentage);

const numbers_dict_q2_1 = {
    a: [1,2,3],
    b: [3,5,4],
    c: [1,8,7]
}

for(let x in numbers_dict_q2_1){
    const arr = numbers_dict_q2_1[x]
    for(let y of arr){
        // console.log(x,":", y);
    }
}

numbers_dict_q2_1['a']
// console.log(numbers_dict_q2_1.a);
numbers_dict_q2_1.a


const student = {
    a: [
        {
        name: 'A',
        value: 1
      },
      {
        name: 'B',
        value: 3
      },
      {
        name: 'C',
        value: 5
      },

    ] ,
    b: [
      {
        name: 'D',
        value: 2
      },
      {
        name: 'E',
        value: 5
      },
      {
        name: 'F',
        value: 7
      },

    ] ,
    c: [
      {
        name: 'G',
        value: 4
      },
      {
        name: 'H',
        value: 8
      },
      {
        name: 'I',
        value: 9
      },

    ] 
  }

  for(let x in student){
    const arr = student[x];
    for(let y of arr){
        // console.log("name:", y.name,"value:", y.value);
    }
  }



  const numbers_q2_2 =  {
    a: [1,2,3,4],
    b: [5,3,[8,5]],
    c: [2,5,[8], [9, [10]]]
};

// for(let x in numbers_q2_2){
//     const arr = numbers_q2_2[x];
//     if(Array.isArray(arr)){

//     }
// };


const question = [
    {
        class: 1,
        name: "abc"
    },{
        class: 2,
        name: "def"
    },{
        class: 1,
        name: "zxc"
    },{
        class: 2,
        name: "zxc"
    },{
        class: 3,
        name: "zxc"
    },{
        class: 1,
        name: "zxc"
    }
];

for(let x of question){
    
};
const newArr = question.filter((item) => {
    if(item.class === 1){
        // console.log({class_1: item});
    }else if(item.class === 2){
        // console.log({class_2 : item});
    }
});

const class1 = [];
const class2 = [];

question.forEach((item) => {
    if(item.class === 1){
        class1.push(item)
    }else if(item.class === 2){
        class2.push(item)
    }
});
// console.log(class1);

// console.log(class2);


const ar1 = [1, 2, 3, 2, 1, 3, 2 ,4, 1, 3,1];
const unique = []
for(let i = 0; i < ar1.length; i++){
    if(!unique.includes(ar1[i])){
        unique.push(ar1[i]);
    }
};

console.log(unique); // Output: [1, 2, 3, 4]

// console.log(unique);





