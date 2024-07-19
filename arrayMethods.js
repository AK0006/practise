// Set
const ar1 = [1, 1, 2];
const unique = []
for(let i = 0; i < ar1.length; i++){
    if(!unique.includes(ar1[i])){
        unique.push(ar1[i]);
    }
};
// console.log(unique);

const numbers_q2_2 =  {
    a: [1,2,3,4],
    b: [5,3,[8,5]],
    c: [2,5,[8], [9, [10]]]
};

for(let x in numbers_q2_2){
    const arr = numbers_q2_2[x].flat(2);
    for(let y of arr){
        // console.log(y);
    }
};

// flat
for(let x in numbers_q2_2){
    const arr = numbers_q2_2[x]
    for(let element of arr){
        if(Array.isArray(element)){
            for(let nestedArr of element){
                if(Array.isArray(nestedArr)){
                    for(let lol of nestedArr){
                        // console.log(lol);``````````
                    }
                }else{
                    // console.log(nestedArr);
                }
            }
        }else{
            // console.log(element);
        }
    }
};

// Filter
const arr3 = [20, 99, 100, 22, 50, 33, 98, 75, 89, 68, 34, 45]
const filteredArr = []
for(let x of arr3){
    if(x >= 50){
        filteredArr.push(x)
    }
};
// console.log(filteredArr);



// Reduce
const arr4 = [20, 99, 100, 22, 50, 33, 98, 75, 89, 68, 34, 45];
let sum = 0
for(let x of arr4){
    sum = x + sum;
}
// console.log(sum);

for(let i=0; i< arr4.length; i++){
    sum = arr4[i] + sum;
}
// console.log(sum);

for(let x in arr4){
    const arr = arr4[x]
    sum = arr4[x] + sum;
};
// // console.log(sum);


const bill = [
    {
        name: "Juice",
        price: 110
    },
    {
        name: "Fruits",
        price: 150
    },
    {
        name: "Vegetables",
        price: 264
    },
    {
        name: "Chicken",
        price: 240
    },
    {
        name: "Chips",
        price: 60
    },
    {
        name: "Eggs",
        price: 160
    },
];
const Total = {}
let count = 0

for(let x of bill){
    Total.price = count += x.price;
};
// console.log(Total);


var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
const voterCount = []

for(let x of voters){
    if(x.voted === true){
        voterCount.push(x)
    }
};
// console.log(voterCount);

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
let counts = 0;

for(let x of wishlist){
    counts = x.price + counts
};
// console.log(counts);


var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
let result = []

for(let x of arrays){
    if(Array.isArray(x)){
        for(let y of x){
            result.push(y)
        }
    }else{
        console.log(x);
    }
}
// console.log(result);


const radius = [3, 1, 2, 4];

const calculateArea = function(radius){
    const output = [];
    for(let i=0; i<radius.length; i++){
        output.push(Math.round(Math.PI * radius[i] * radius[i]))
    }
    return output;
}
// console.log(calculateArea(radius));

const question = [
    {
        class: "class 1",
        name: "abc"
    },{
        class: "class 2",
        name: "def"
    },{
        class: "class 1",
        name: "jkl"
    },{
        class: "class 2",
        name: "kls"
    },{
        class: "class 3",
        name: "acd"
    },{
        class: "class 1",
        name: "asd"
    },{
        class: "class 4",
        name: "ads"
    },{
        class: "class 4",
        name: "dee"
    }
];

const result12 = {}

question.forEach((item, index, arr) => {
    if(Object.keys(result12).includes(item.class)){
        result12[item.class].push({...item})
    }else{
        result12[item.class] = [{...item}]
    }
});

// console.log(result12);


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

const results1 = {}

for(let items of studentMark){
    const percentage = Math.round(items.mark * 100 / items.maxMarks);
    let grade = '';
    let remarks = '';
    let marks = items.mark

    for(let scale of grdaeScale){
        if(percentage >= scale.minMarks && percentage <= scale.maxMarks){
            grade = scale.name;
            remarks = scale.remarks;
        }
    }
    if(results1){
        results1[items.name] = {marks, grade, remarks, percentage}
    }
}
// console.log(results1);



const studentData = [
    {_id: '1234',name: 'Charles',parent: [
        {type: 'father',name: 'Abc',contact: 1111111111},
        {type: 'mother',name: 'Xyz',contact: 1111111111}
    ]},

    {_id: '1235',name: 'Bob',parent: [
        {type: 'father',name: 'Wrv',contact: 9999999999}
    ]},
    {_id: '1236',name: 'John',parent: [
        {type: 'Guaradadadadian',name: 'Ytd',contact: 7777777777}
    ]}
];


let studentFlattenedData = [];

for(let x of studentData){
    const data = {
        _id: x._id,
        name: x.name
    }

    for(let parent of x.parent){

        // if(parent.type === 'father'){
        //     data["father_name"] = parent.name
        //     data["father_contact"] = parent.contact;
        // }else if(parent.type === 'mother'){
        //     data["mother_name"] = parent.name;
        //     data["mother_contact"] = parent.contact
        // }else{
        //     data["guardian_name"] = parent.name;
        //     data["guardian_contact"] = parent.contact
        // }

        data[parent.type + "_name"] = parent.name
        data[parent.type + "_contact"] = parent.contact
    }
    studentFlattenedData.push(data);
}
// console.log(studentFlattenedData);






const productss = [
    {name: 'A',model: '1',year: 2017},
    {name: 'B',model: '1',year: 2017},
    {name: 'C',model: '4',year: 2017},
    {name: 'D',model: '1',year: 2018},
    {name: 'E',model: '3',year: 2015},
    {name: 'F',model: '2',year: 2017},
    {name: 'G',model: '1',year: 2017},
    {name: 'H',model: '4',year: 2019},
    {name: 'I',model: '3',year: 2017},
    {name: 'J',model: '4',year: 2018}
];

const result21 = [];

// for(let element of products){
//     if(element.model === '1' && element.year === 2017){
//         result21.push(element)
//     }
// }
// console.log(result21);


// For the below data, iterate over the cart and after each iteration, the count of the items
// will reduce. If the product count is less than the new item count, display the message
// saying ‘Not Available’.

const items = [
    {name: 'Orange',available: 10},
    {name: 'Apple',available: 15},
    {name: 'Guava',available: 15},
    {name: 'Banana',available: 7},
];

const cart = [
    {products: [
        {name: 'Apple',count: 25},
        {name: 'Guava',count: 5}
    ]},
    {products: [
        {name: 'Guava',count: 5},
        {name: 'Orange',count: 10}
    ]}
];

const result23 = []

cart.forEach((item, index, arr) => {
    for(let product of item.products){
        for(let itemDetails of items){
            if(itemDetails.name === product.name){
                if(product.count <= itemDetails.available){
                    itemDetails.available -= product.count;
                    result23.push(product);
                }else{
                    // console.log(product);
                    Object.assign(product, {remarks: `${product.name}: ${product.count}, we have ${itemDetails.available}`})
                    result23.push(product);
                }
            }
        }
    }
});
// console.log(result23);

// for(let cartItem of cart){
//     for(let product of cartItem.products){
//         for(let itemDetails of item){
//             if(itemDetails.name === product.name){
//                 if(product.count <= itemDetails.available){
//                     itemDetails.available -= product.count; 
//                     result23.push(product);
//                 }else{
//                     // console.log(product);
//                     Object.assign(product, {remarks: `${product.name}: ${product.count}, we have ${itemDetails.available}`})
//                     result23.push(product);
//                 }
//             }
//         }
//     }
// }
// console.log(result23);



const peoples = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 40},
    { name: 'Sean', age: 44 },
    { name: 'George', age: 50 }
];
let sums = 0;

peoples.forEach((item, index) => {
    // console.log(item.age);
    // console.log(index);
    sums = item.age + sums;
});
// console.log(Math.round(sums / peoples.length));

const results = peoples.reduce((acc, cur) => {
    acc = Math.round(acc + cur.age / peoples.length);
    return acc;  
}, 0);
// console.log(results);



// Custome Array Methods

const numberrs = [1, 2, 4, 5, 6, 6, 7, 8, 12];
// const emptyArray = [];

// Pop

// numbers.pop();
// console.log(numbers.pop());

Array.prototype.myPop = function(func) {
    if(this.length === 0){
        return undefined;
    }
    const popped = this[this.length - 1]
    this.length -= 1;
    return popped;
};

// numbers.myPop();
// console.log(numbers);
// console.log(numbers.myPop());



// unShift
// console.log(numbers.unshift(12222));

Array.prototype.myUnShift = function(func){
    for(let i = this.length; i > 0; i--){
        this[i] = this[i - 1];
    }
    this[0] = func;
    return this.length;
};
// numbers.myUnShift(4);
// console.log(numbers);

// console.log(numbers.myUnShift(1));

// Shift
// console.log(numbers.shift());
// console.log(numbers);

Array.prototype.myShift = function(func) {
    if(this.length === 0){
        return undefined;
    }
    const shifted = this[0];

    for(let i = 0; i < this.length; i++){
        this[i] = this[i + 1]
    }
    this.length--;
    return shifted
};

// console.log(numbers.myShift());
// console.log(numbers);
  


// Slice
Array.prototype.mySlice = function(startIndex = 0, endIndex = this.length) {
    const output1 = [];

    for(let i = startIndex; i < endIndex; i++){
        if(i < endIndex){
            output1.push(this[i])
        }
    }
    return output1;
};
// const output2 = numbers.slice(3, 6);
// console.log(output2);

// const output2 = numbers.mySlice(3, 6);
// console.log(output2);





// forEach
Array.prototype.myForEach = function(callback) {
    for(let i = 0; i < this.length; i++){
        const value = this[i];
        callback (value, i, this)
    }
};
// numbers.myForEach(item => console.log(item));
// numbers.forEach(item => console.log(item));

// Push 
Array.prototype.myPush = function(...func){
    for(let i = 0; i < func.length; i++){
        this[this.length] = func[i];
    }
    return this.length;
}
// numbers.myPush(2);
// console.log(numbers);


// const evenNumber = numbers.filter(item => item % 2 === 0);
// console.log(evenNumber);

Array.prototype.myfilter = function(func) {
    // checking if array is empty and if it is return undefined
    if(this.length === 0){
        return undefined
    }
    let filtered = [];
    // iterating over each element of the array
    for(let i=0; i < this.length; i++){
        if(func(this[i], i, this)){
            filtered.push(this[i])
        }
    }
    return filtered;
}


// const lol = numbers.myfilter((num, index) => {
//     console.log(index);
//     num % 2 === 0
// })
// console.log(numbers.myfilter((num) => num % 2 === 0));

// const evenNumbers = numbers.map(item => item * 2);
// console.log(evenNumbers);

Array.prototype.myMap = function(func) {
    if(this.length === 0){
        return undefined;
    }
    let boom = [];
    for(let i = 0; i<this.length; i++){
        boom.push(func(this[i], i, this))
    }
    return boom;
}
// console.log(numbers.myMap(nums => nums * 2));

// const addNumbers = numbers.reduce((acc, cur) => {
//     return acc = acc + cur;
// }, 0);
// console.log(addNumbers);

Array.prototype.myreduce = function(func, acc){
    if(this.length === 0){
        return undefined;
    }
    for(let i=0; i < this.length; i++){
            acc = func(acc, this[i])
    }
    return acc;
}

// const lpl = numbers.myreduce((acc, i) => {
//     return acc = acc+i
// }, 0);
// console.log(lpl);
// console.log(numbers.myreduce((acc, i) => acc+i, 0));

// const lol = [[1, 2], [3, 4], [5, 6, [7]]]
// console.log(lol.myreduce((acc, i) => [...acc,...i], []));

const classes = [
    {
        class: "class1",
        name: "abc"
    },
    {
        class: "class1",
        name: "pqm"
    },
    {
        class: "class3",
        name: "viw"
    },
    {
        class: "class2",
        name: "jfh"
    },
    {
        class: "class1",
        name: "kfk"
    },
    {
        class: "class3",
        name: "pwp"
    },
    {
        class: "class3",
        name: "pop"
    },
    {
        class: "class1",
        name: "oiu"
    },
    {
        class: "class2",
        name: "wea"
    },
    {
        class: "class1",
        name: "ssd"
    },
    {
        class: "class3",
        name: "loi"
    },
    {
        class: "class2",
        name: "xyz"
    },
]

const output = [];

classes.forEach((item, index, arr) => {
    if(Object.keys(output).includes(item.class)){
        output[item.class].push({...item})
    }else{
        output[item.class] = [{...item}]
    }
})
// console.log(output);


let arr = [1, 2, 3, 4, 5, 6, 7];

arr.push(1);
// console.log(arr);

arr.pop();
// console.log(arr);

for(let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
}

arr.splice(2, 1)
// console.log(arr);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

const poy = arr1.concat(arr2);
// console.log(poy);

const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 72 },
    { name: 'Charlie', score: 90 },
    { name: 'David', score: 65 },
    { name: 'Emma', score: 88 }
];

const goodStudents = [];
let totalScore = 0;

students.forEach((item, index, arr) => {
    if(item.score > 80){
        goodStudents.push(item.name)
    }
    totalScore += item.score
});
// console.log(goodStudents);

const averageScore = totalScore / students.length;
// console.log(averageScore);


const product = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 699 },
    { id: 3, name: 'Tablet', price: 299 },
    { id: 4, name: 'Smartwatch', price: 199 },
    { id: 5, name: 'Headphones', price: 149 }
];

const output1 = product.reduce((acc, cur) => {
    return cur.price > acc.price ? cur : acc
});
// console.log(output1);

const output2 = product.reduce((acc, cur) => {
    return acc + cur.price;
}, 0);
// console.log(output2);

const plp = {};

product.forEach((item) => {
    plp[item.name] = item.price
});
// console.log(plp);



const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', pages: 218 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', pages: 281 },
    { id: 3, title: '1984', author: 'George Orwell', genre: 'Dystopian', pages: 328 },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', pages: 279 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', pages: 224 }
];

const outpit = books.filter((item) => {
    if(item.genre === 'Fiction'){
        // console.log(item.title);
    }
});

const outpit1 = books.reduce((acc, cur) => {
    return acc + cur.pages
}, 0);
// console.log(outpit1);

const pp = {};

books.forEach((item) => {
    pp[item.title] = item.author
});
// console.log(pp);


const employees = [
    { name: 'Alice', salary: 50000 },
    { name: 'Bob', salary: 60000 },
    { name: 'Charlie', salary: 70000 }
];

const totalSalary = employees.reduce((acc, cur) => {
    return acc + cur.salary
}, 0);
// console.log(totalSalary);

const library = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
    { title: '1984', author: 'George Orwell', genre: 'Dystopian' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' }
];

function getBooksByGenre(library, genre) {
    return library
    .filter(item => item.genre === genre)
    .map(item => item.title)
}

// console.log(getBooksByGenre(library, "Fiction"));


const asd = [1, 2, 3, 4, 5, 6, 7]

// const ouput1 = asd.map((item) => {
//     return item * 2
// });
// console.log(ouput1);
const ouput1 = [];

asd.forEach((items) => {
    ouput1.push(items * 2)
});
// console.log(ouput1);



const qws = [1, 2, 3, 3, 4, 4, 5]

function removeDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) === index)
}
// console.log(removeDuplicates(qws));

function calculateNumbers (array) {
    return array.filter((item) => item % 2 === 0).reduce((acc, cur) => acc + cur, 0)
}
// console.log(calculateNumbers([1, 3, 5, 7, 9]));

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a/b
}

// console.log(calculator.add(5,3));
// console.log(calculator.subtract(10, 4));
// console.log(calculator.multiply(2, 6));
// console.log(calculator.divide(15,3));

const librarya = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
];

function findBooksByAuthor(library, author) {
    return library.filter((item) => item.author === author)
    .map((item) => item.title)
}
// console.log(findBooksByAuthor(librarya, "Harper Lee"));


const studentss = [
    { name: "Alice", age: 20, subjects: ["Math", "Physics", "Chemistry"] },
    { name: "Bob", age: 21, subjects: ["Physics", "Biology"] },
    { name: "Charlie", age: 19, subjects: ["Math", "History"] },
    { name: "David", age: 22, subjects: ["Chemistry", "Biology"] }
];

function findStudentsBySubject(students, subject) {
    return students
    .filter((items) => items.subjects.includes(subject))
    .map((items) => items.name)
}

// console.log(findStudentsBySubject(studentss, "Physics"));



const carts = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Phone", price: 700, quantity: 2 },
    { name: "Headphones", price: 100, quantity: 3 }
];

function calculateTotalPrice(carts) {
    return carts.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0)
}

// console.log(calculateTotalPrice(carts));

function calculateTotalQuantity (cart) {
    return cart.reduce((acc, cur) => acc + cur.quantity, 0)
}
// console.log(calculateTotalQuantity(carts));


const basket = [
    { name: "Apple", color: "Red", quantity: 5 },
    { name: "Banana", color: "Yellow", quantity: 3 },
    { name: "Grapes", color: "Green", quantity: 2 },
    { name: "Orange", color: "Orange", quantity: 4 },
    { name: "Strawberry", color: "Red", quantity: 6 }
];

function filterFruitsByColor (basket, color) {
    return basket.filter((items) => items.color === color)
    .map ((items) => items.name)
}
// console.log(filterFruitsByColor(basket, "Red"));


const cars = [
    { brand: "Toyota", model: "Corolla", price: 18000 },
    { brand: "Honda", model: "Civic", price: 22000 },
    { brand: "Ford", model: "Fusion", price: 25000 },
    { brand: "BMW", model: "X5", price: 60000 },
    { brand: "Mercedes", model: "E-Class", price: 55000 }
];

function findExpensiveCars(cars, threshold) {
    return cars.filter((items) => items.price > threshold)
    .map ((items) => items.brand)
}

// console.log(findExpensiveCars(cars, 22000));


const movies = [
    { title: "Inception", director: "Christopher Nolan", year: 2010 },
    { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994 },
    { title: "The Dark Knight", director: "Christopher Nolan", year: 2008 },
    { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994 },
    { title: "Fight Club", director: "David Fincher", year: 1999 }
];

function findMoviesByYear (movies, year) {
    return movies.filter((items) => items.year === year)
    .map((items) => items.title)
}
// console.log(findMoviesByYear(movies, 1994));


const countries = [
    { name: "USA", population: 331000000, continent: "North America" },
    { name: "China", population: 1444000000, continent: "Asia" },
    { name: "Brazil", population: 213000000, continent: "South America" },
    { name: "Australia", population: 25700000, continent: "Oceania" },
    { name: "Germany", population: 83000000, continent: "Europe" }
];

function findCountriesByContinent(countries, continent) {
    return countries.filter((items) => items.continent === continent)
    .map((items) => items.name)
}

// console.log(findCountriesByContinent(countries, "Asia"));

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const pppp = [1, 2, 3, 4, 5, 6, 1, 1, 2, 4, 5, 6, 3, 2, 4, 2];

const lop = words.reduce((acc, cur) => {
    if(acc.hasOwnProperty(cur)){
        acc[cur]++
    }else{
        acc[cur] = 1
    }
    return acc
},{})
// console.log(lop);

const numbersss = [10, 5, 8, 15, 3];

// const popp = numbersss.some(items => items < 4);
// console.log(popp);

// numbersss.reverse();
// console.log(numbersss);


// function findLargestNumber (numbers) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(numbers.length === 0){
//                 reject('Array is empty')
//             } else{
//                 const largestNumber = Math.max(...numbers);
//                 resolve(largestNumber)
//             }
//         }, 9000);
//     })

// }
// findLargestNumber(numbersss)
// .then(largestNumber => {
//     console.log('The largest Number is', largestNumber)
// }).catch(error => {
//     console.error("Error", error);
// });


const bookss = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
];

function filterBooksByYear(books, tragetYear) {
    
    return books.filter((items) => items.year === tragetYear);
}
// console.log(filterBooksByYear(bookss, 1951));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumEvenNumbers(numbers) {
    return numbers.filter((items) => items % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0)
}
// console.log(sumEvenNumbers(numbers));

const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
    { id: 4, name: "Headphones", price: 200 }
];

function findProductById (products, id) {
    return products.find((items) => items.id === id)
}
// console.log(findProductById(products, 4));

const word = ["apple", "banana", "orange", "grape", "pineapple"];

function filterWordsByLength(words, length) {
    return words.filter((items) => items.length >= length)
}
// console.log(filterWordsByLength(word, 6));

const scores = [
    { name: "Alice", score: 80 },
    { name: "Bob", score: 65 },
    { name: "Charlie", score: 90 },
    { name: "David", score: 75 },
    { name: "Eve", score: 85 }
];

function findTopScorer (scores) {
    return scores.reduce((acc, cur) => {
        return (acc.score > cur.score) ? acc : cur
    })
}
// console.log(findTopScorer(scores));

const moviees = [
    { title: "Inception", director: "Christopher Nolan", year: 2010 },
    { title: "The Dark Knight", director: "Christopher Nolan", year: 2008 },
    { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994 },
    { title: "Fight Club", director: "David Fincher", year: 1999 },
    { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994 }
];

function findMoviesByDirector (movies, director) {
    return movies.filter((items) => items.director === director)
}
// console.log(findMoviesByDirector(moviees, "Christopher Nolan"));


const employeses = [
    { id: 1, name: "Alice", department: "Engineering" },
    { id: 2, name: "Bob", department: "Marketing" },
    { id: 3, name: "Charlie", department: "Engineering" },
    { id: 4, name: "David", department: "HR" },
    { id: 5, name: "Eve", department: "Engineering" }
];

function countEmployeesByDepartment (employees) {
    return employees.reduce((acc, cur) => {
        acc[cur.department] = (acc[cur.department] || 0) + 1
        return acc;
    }, {})
}

// console.log(countEmployeesByDepartment(employeses));

const numbeers = [1, 2, 3, 4, 5];

function doubleEvenNumbers (numbers) {
    return numbers.map((items) => items * 2)
}
// console.log(doubleEvenNumbers(numbeers));

const worrds = ["apple", "banana", "orange", "grape", "pineapple"];

function reverseWords (words) {
    return words.map((items) => items.split("").reverse().join(''))
}
// console.log(reverseWords(worrds));

const grades = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 70 },
    { name: "Charlie", grade: 90 },
    { name: "David", grade: 65 },
    { name: "Eve", grade: 80 }
];
function calculateAverageGrade (grades){
    const total = grades.reduce((acc, cur) => acc + cur.grade, 0);
    return total / grades.length
} 
// console.log(calculateAverageGrade(grades));

const kart = [
    { id: 1, name: "Laptop", price: 1000, quantity: 1 },
    { id: 2, name: "Phone", price: 800, quantity: 2 },
    { id: 3, name: "Tablet", price: 500, quantity: 1 },
    { id: 4, name: "Headphones", price: 200, quantity: 3 }
];
function calculateTotalPrice (cart) {
    return cart.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0)
}
// console.log(calculateTotalPrice(kart));

const examScores = [
    { name: "Alice", scores: [85, 90, 92] },
    { name: "Bob", scores: [70, 75, 80] },
    { name: "Charlie", scores: [90, 95, 88] },
    { name: "David", scores: [65, 75, 70] },
    { name: "Eve", scores: [80, 85, 88] }
];

function calculateAverageScores (examScores) {
    return examScores.map((items) => {
        const total = items.scores.reduce((acc, cur) => acc + cur, 0);
        const averageScore = Math.round(total / items.scores.length);
        return {name: items.name, averageScore: averageScore}
    })
}
// console.log(calculateAverageScores(examScores));


const transactions = [
    { id: 1, amount: 100, type: 'deposit' },
    { id: 2, amount: 50, type: 'withdrawal' },
    { id: 3, amount: 200, type: 'deposit' },
    { id: 4, amount: 75, type: 'withdrawal' },
    { id: 5, amount: 150, type: 'deposit' }
];
function calculateBalance (transactions) {
    return transactions.reduce((acc, cur) => {
        if(cur.type === 'deposit'){
            return acc + cur.amount
        }else if(cur.type === 'withdrawal'){
            return acc - cur.amount
        }else{
            return acc
        }
    }, 0);
}
// console.log(calculateBalance(transactions));

const tasks = [
    { id: 1, description: "Complete assignment", completed: true },
    { id: 2, description: "Submit report", completed: false },
    { id: 3, description: "Attend meeting", completed: true },
    { id: 4, description: "Prepare presentation", completed: false },
    { id: 5, description: "Review documents", completed: false }
];
function countCompletedTasks (tasks) {
    return tasks.reduce((acc, cur) => {
        if(cur.completed === true){
            return acc + 1;
        }else{
            return acc;
        }
    }, 0);
}
// console.log(countCompletedTasks(tasks));

const prooducts = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
    { id: 4, name: "Headphones", price: 200 }
];
function findProductById(products, id) {
    return products.find((items) => items.id === id)
}
// console.log(findProductById(prooducts, 4));

const boooks = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932 }
];
function filterBooksByYear(books, tragetYear) {
    return books.filter((items) => items.year === tragetYear)
    .map(items => items.title)
}
// console.log(filterBooksByYear(boooks, 1932));

const nuumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterEvenNumbers(numbers) {
    return numbers.filter((item) => item % 2 === 0);
}
// console.log(filterEvenNumbers(nuumbers));

const worrrds = ["apple", "banana", "orange", "grape", "pineapple"];
function filterWordsByLength (words, length){
    return worrds.filter((items) => items.length >= length)
}
// console.log(filterWordsByLength(worrrds, 6));

const numberrrs = [1, 2, 3, 4, 5];
function sumEvenNumbers(numbers) {
    return numbers.filter((items) => items % 2 === 0)
    .reduce((acc, cur) => acc + cur)
}
// console.log(sumEvenNumbers(numberrrs));

const examSscores = [
    { name: "Alice", scores: [85, 90, 92] },
    { name: "Bob", scores: [70, 75, 80] },
    { name: "Charlie", scores: [90, 95, 88] },
    { name: "David", scores: [65, 75, 70] },
    { name: "Eve", scores: [80, 85, 88] }
];
function calculateAverageScores (examScores) {
    return examScores.map((item) => {
        const total = item.scores.reduce((acc, cur) => acc + cur, 0);
        const averageScore = Math.round(total / item.scores.length)
        return {name: item.name, averageScore: averageScore}
    });
}
// console.log(calculateAverageScores(examSscores));

const employeess = [
    { id: 1, name: "John", department: "Sales", salary: 50000 },
    { id: 2, name: "Alice", department: "Marketing", salary: 60000 },
    { id: 3, name: "Bob", department: "Sales", salary: 55000 },
    { id: 4, name: "Charlie", department: "Human Resources", salary: 45000 },
    { id: 5, name: "David", department: "Marketing", salary: 62000 }
];
  
function filterEmployeesByDepartment(employees, department){
    return employees.filter((items) => items.department === department)
}
// console.log(filterEmployeesByDepartment(employeess, "Marketing"));


const testScores = [
    { name: "Alice", scores: [85, 90, 92] },
    { name: "Bob", scores: [70, 75, 80] },
    { name: "Charlie", scores: [90, 95, 88] },
    { name: "David", scores: [65, 75, 70] },
    { name: "Eve", scores: [80, 85, 88] }
];
function findTopScorers (testScores, topN) {
    const averageScore = testScores.map((student) => {
        return {
            name: student.name,
            averageScore: student.scores.reduce((acc, cur) => acc + cur, 0) / student.scores.length
        }
    });
    averageScore.sort((a, b) => b.averageScore - a.averageScore)

    const toppers = averageScore.slice(0, topN).map(items => items.name)
    return toppers;
}
// console.log(findTopScorers(testScores, 6));

const produccts = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
    { id: 4, name: "Headphones", price: 200 }
];
function filterProductsByPriceRange (products, minPrice, maxPrice) {
    return products.filter((items) => {
        return items.price >= minPrice && items.price <= maxPrice
    });
}
// console.log(filterProductsByPriceRange(produccts, 100, 900));

const emplooyees = [
    { id: 1, name: "Alice", department: "HR", salary: 50000 },
    { id: 2, name: "Bob", department: "IT", salary: 60000 },
    { id: 3, name: "Charlie", department: "HR", salary: 55000 },
    { id: 4, name: "David", department: "Finance", salary: 70000 },
    { id: 5, name: "Eve", department: "IT", salary: 62000 }
];
function getTotalSalaryByDepartment (employees, department) {
    return employees
    .filter(items => items.department === department)
    .reduce((acc, cur) => acc + cur.salary, 0)
}
// console.log(getTotalSalaryByDepartment(emplooyees, "IT"));

const cities = ["New York", "London", "Paris", "Tokyo", "Sydney", "Los Angeles"];

function filterCitiesByPrefix (cities, prefix) {
    return cities.filter(items => items.startsWith(prefix))
}
// console.log(filterCitiesByPrefix(cities, "L"));

const tesstScores = [85, 90, 75, 95, 80, 85, 90, 88, 92];
function calculateGradeDistribution (testScores) {
    const grades = testScores.map(item => {
        if(item >= 90) return "A";
        if(item >= 80) return "B";
        if(item >= 70) return "C";
        if(item >= 60) return "D";
        return "F";
    }).reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1
        return acc
    }, {});
    return grades;
}
// console.log(calculateGradeDistribution(tesstScores));

const students1 = [
    { id: 1, name: "Alice", age: 22, gender: "female" },
    { id: 2, name: "Bob", age: 20, gender: "male" },
    { id: 3, name: "Charlie", age: 21, gender: "male" },
    { id: 4, name: "David", age: 22, gender: "male" },
    { id: 5, name: "Eve", age: 20, gender: "female" }
];

function getAverageAgeByGender (students, gender) {
    const genderData = students.filter((items) => items.gender === gender)
    return genderData.reduce((acc, cur) => acc + cur.age, 0) / genderData.length
}
// console.log(getAverageAgeByGender(students1, "male"));

const employees1 = [
    { id: 1, name: "Alice", department: "HR", salary: 55000 },
    { id: 2, name: "Bob", department: "IT", salary: 60000 },
    { id: 3, name: "Charlie", department: "HR", salary: 55000 },
    { id: 4, name: "David", department: "Finance", salary: 70000 },
    { id: 5, name: "Eve", department: "IT", salary: 62000 }
];
function getHighestPaidEmployeeInDepartment(employees, department){
    return employees.filter(item => item.department === department)
    .reduce((acc, cur) => cur.salary > acc.salary ? cur.name : acc.name)
}
// console.log(getHighestPaidEmployeeInDepartment(employees1, "HR"));

const products1 = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
    { id: 4, name: "Headphones", price: 200 }
];
function findProductById (products, id) {
    return products.find(item => item.id === id)
}
// console.log(findProductById(products1, 2));

const student1 = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
    { id: 3, name: "Charlie", grade: "C" },
    { id: 4, name: "David", grade: "B" },
    { id: 5, name: "Eve", grade: "A" }
];
function countStudentsByGrade (student, grade) {
    const filterGrade = student.filter(items => items.grade === grade);
    return filterGrade.length;
};
// console.log(countStudentsByGrade(student1, "A"));

const employees12 = [
    { id: 1, name: "Alice", department: "HR", salary: 50000 },
    { id: 2, name: "Bob", department: "IT", salary: 60000 },
    { id: 3, name: "Charlie", department: "HR", salary: 55000 },
    { id: 4, name: "David", department: "Finance", salary: 70000 },
    { id: 5, name: "Eve", department: "IT", salary: 62000 }
];
function getTotalSalaryByDepartment(employees, department){
    return employees.filter(items => items.department === department)
    .reduce((acc, cur) => acc + cur.salary, 0)
}
// console.log(getTotalSalaryByDepartment(employees12, "IT"));

const transaction = [
    { id: 1, amount: 50, type: "deposit" },
    { id: 2, amount: 100, type: "withdrawal" },
    { id: 3, amount: 30, type: "deposit" },
    { id: 4, amount: 70, type: "withdrawal" },
    { id: 5, amount: 120, type: "deposit" }
];
function calculateTotalAmountByType(transaction, type) {
    return transaction.filter(items => items.type === type).reduce((acc, cur) => acc + cur.amount, 0)
}
// console.log(calculateTotalAmountByType(transaction, "withdrawal"));

const product1 = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
    { id: 4, name: "Headphones", price: 200 }
];
function filterProductsByPriceRange (products, minPrice, maxPrice) {
    return products.filter(item => item.price <= maxPrice && item.price >= minPrice).map(items => items.name)
}
// console.log(filterProductsByPriceRange(product1, 200, 1000));

const tasks1 = [
    { id: 1, description: "Complete assignment", completed: true },
    { id: 2, description: "Submit report", completed: false },
    { id: 3, description: "Attend meeting", completed: true },
    { id: 4, description: "Prepare presentation", completed: false },
    { id: 5, description: "Review documents", completed: true }
];
function countCompletedTasks (tasks) {
    const count = tasks.filter(items => items.completed === true);
    return count.length
}
// console.log(countCompletedTasks(tasks1));

const products2 = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
    { id: 4, name: "Headphones", price: 200 }
];
function doubleProductPrices (products){
    return products.map(items => {
        const double = items.price * 2;
        return {id: items.id, name: items.name, price: double}
    })
} 
// console.log(doubleProductPrices(products2));

const word1 = ["apple", "banana", "orange", "grape", "kiwi"];

// const lil = word1.filter(items => items.length === 5)
// console.log(lil);

const array = [1, 2, 3, 1, 2, 3, 1, 2, 3];
const outputs = {}

for(let i = 0; i < array.length; i++){
    const element = array[i]

    if(outputs[element]){
        outputs[element]++;
    } else{
        outputs[element] = 1
    }
}
// console.log(outputs);

const array1 = [1, 2, 3, 4, 5];
const tragetSum = 7;
const pairs = [];
const seen = new Set();

for(let num of array1){
    const complement = tragetSum - num
    if(seen.has(complement)){
        pairs.push([num, complement])
    }
    seen.add(num);
}
// console.log(pairs);

const employees2 = [
    { name: "Alice", department: "Engineering" },
    { name: "Bob", department: "Sales" },
    { name: "Charlie", department: "Engineering" },
    { name: "David", department: "HR" },
    { name: "Eve", department: "Sales" }
];
function groupByDepartment (employees) {
    const outputs = {}

    employees.forEach((items) => {
        if(Object.keys(outputs).includes(items.department)){
            outputs[items.department].push(items.name)
        }else{
            outputs[items.department] = [items.name]
        }
    });
    return outputs
}
// console.log(groupByDepartment(employees2));

const outputs1 = {}
employees2.forEach((items) => {
    if(Object.keys(outputs1).includes(items.department)){
        outputs1[items.department].push(items.name)
    }else{
        outputs1[items.department] = [items.name]
    }
});
// console.log(outputs1);

const books1 = [
    { title: "Book 1", author: "Author 1", pages: 300 },
    { title: "Book 2", author: "Author 2", pages: 250 },
    { title: "Book 3", author: "Author 3", pages: 400 }
];
function averagePageCount (books) {
    const total = books.map((items) => items.pages).reduce((acc, cur) => acc + cur, 0)
    const average = Math.round(total / books.length);
    return average;
}
// console.log(averagePageCount(books1));

const transactions1 = [
    { date: "2024-06-01", amount: 100, type: "deposit" },
    { date: "2024-06-03", amount: 50, type: "withdrawal" },
    { date: "2024-06-05", amount: 30, type: "deposit" },
    { date: "2024-06-08", amount: 20, type: "withdrawal" }
];

// const lil = transactions1.reduce((acc, cur) => {
//     if(cur.type === "deposit"){
//         return acc + cur.amount;
//     } else if(cur.type === "withdrawal"){
//         return acc - cur.amount
//     }
//     return acc
// }, 0);
// console.log(lil);

const numbers1 = [3, 1, 5, 2, 1, 4, 3];

function removeDuplicates1(array) {
    return array.filter((item, index) => array.indexOf(item) === index).sort()
}

// console.log(removeDuplicates1(numbers1));

const words1 = ["apple", "banana", "apple", "orange", "banana", "apple"];

function countOccurrences (arr) {
    return arr.reduce((acc, cur) => {
        if(acc.hasOwnProperty(cur)){
            acc[cur]++;
        } else{
            acc[cur] = 1
        }
        return acc
    }, {})
}
// console.log(countOccurrences(words1));

const nestedArray = [[1, 2, 3], [4, 5], [6, [7, 8]]];
function nested (arr) {
    return arr.reduce((acc, cur) => {
        return acc.concat(Array.isArray(cur)? nested(cur) : cur)
    }, [])
}
// console.log(nested(nestedArray));

const arr34 = [1, 2, 2, 2, 1, 3, 1, 2, 1, 1];

// const lil = arr34.reduce((acc, cur) => {
//     if(acc.hasOwnProperty(cur)){
//         acc[cur]++;
//     } else {
//         acc[cur] = 1
//     }
//     return acc
// }, {});
// console.log(lil);

function fibonacci (n) {
    const fib = [0,1]
    for(let i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}
// console.log(fibonacci(7));

const books2 = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 }
];
function sortByYear(books) {
    return books.sort((a, b) => a.year - b.year)
}
// console.log(sortByYear(books2));

const employees3 = [
    { id: 1, name: 'Alice', department: 'Engineering', salary: 5000 },
    { id: 2, name: 'Bob', department: 'Marketing', salary: 4000 },
    { id: 3, name: 'Charlie', department: 'Engineering', salary: 6000 },
    { id: 4, name: 'David', department: 'Marketing', salary: 4500 },
    { id: 5, name: 'Eve', department: 'HR', salary: 3500 }
];
function getAverageSalaryByDepartment (employees) {
    const departmentStats = employees.reduce((acc, cur) => {
        if(!acc[cur.department]){
            acc[cur.department] = {totalSalary: 0, count: 0}
        }
        acc[cur.department].totalSalary += cur.salary;
        acc[cur.department].count++;
        return acc
    }, {});

    const averageSalary = {};
    for(let department in departmentStats){
        averageSalary[department] = departmentStats[department].totalSalary / departmentStats[department].count;
    }
    return averageSalary;
}
// console.log(getAverageSalaryByDepartment(employees3));

const arr5 = [1, 2, 3, 4, 5, 6];

function filterEvenOdd (arr) {
    const result = {
        even: [],
        odd: []
    }

    arr.forEach((items) => {
        if(items % 2 === 0){
            result.even.push(items)
        }else{
            result.odd.push(items)
        }
    });
    return result;
}
// console.log(filterEvenOdd(arr5));

const arr6 = ["apple", "banana", "apple", "orange", "banana", "apple"];

function countWords (arr) {
    return arr.reduce((acc, cur) =>{
        if(acc[cur]){
            acc[cur]++
        }else{
            acc[cur] = 1
        }
        return acc
    }, {})
}
// console.log(countWords(arr6));



const array5 = [1, 2, 3, 4, 5]

const filt = array5.filter((item, index, arr) => item % 2 === 0)
// console.log(filt);

const mapped = array5.map((item) => item * 2)
// console.log(mapped);

const abc =
{
    name: "aoiio",
    phone: 4196342,
    age:[1,2,3,4,5]
}
// // keys ["name", "phone"]
// // value ["aoiio", 4196342]
// console.log(Object.entries(abc));

// const b = abc
// b.name = 'asif'
// console.log(abc);
// console.log(b);
// const c = Object.assign({}, b, {name: "asif"})
// c.age[0] = 99
// // delete c.phone;
// console.log(abc);
// console.log(b);
// console.log(c);

// const c = JSON.parse(JSON.stringify(abc));
// c.name = "asif"
// c.age[0] = 99
// console.log(abc);
// console.log(c);


// 1406 frequency

const arrays1 = ['a', 'b', 'c', 'c', 'c', 'a', 'b', 'a', 'e', 'c', 'a'];
const outputs2 = {}

// for(let i = 0; i < arrays1.length; i++){
//     const element = arrays1[i];

//     if(outputs2[element]){
//         outputs2[element]++
//     }else{
//         outputs2[element] = 1
//     }
// }

const booom = arrays1.reduce((acc, cur) => {
    if(acc[cur]){
        acc[cur]++
    }else {
        acc[cur] = 1
    }
    return acc
}, {})
// console.log(outputs2);
// console.log(booom);


const students3 = [
    { name: 'Alice', age: 20, grades: [80, 75, 90] },
    { name: 'Bob', age: 21, grades: [85, 70, 95] },
    { name: 'Carol', age: 19, grades: [90, 82, 88] },
];

function averageGradeByAgeRange (student, minAge, maxAge) {
    const filteredStudents = student.filter((items) => items.age >= minAge && items.age <= maxAge);
    // console.log(filteredStudents);
    
    if(filteredStudents.length === 0){
        console.log(0);
    }
        const allGrades = filteredStudents.flatMap(student => student.grades);
        // console.log(allGrades);
    
        const sumOfGrades = allGrades.reduce((acc, cur) => acc + cur, 0);
        // console.log(sumOfGrades);
    
        const averageGrade = Math.round(sumOfGrades / allGrades.length)
        // console.log(averageGrade);

        return averageGrade
}
// console.log(averageGradeByAgeRange(students3, 18, 20));


const transactions2 = [
    { id: 1, amount: 100, currency: 'USD' },
    { id: 2, amount: 200, currency: 'EUR' },
    { id: 3, amount: 150, currency: 'USD' },
    { id: 4, amount: 120, currency: 'USD' },
    { id: 5, amount: 250, currency: 'EUR' },
];
function totalAmountByCurrency(array, country){
    return array.filter(item => item.currency === country)
    .reduce((acc, cur) => acc + cur.amount, 0);
}
// console.log(totalAmountByCurrency(transactions2, 'USD'));

const products3 = [
    { id: 1, name: 'Keyboard', price: 50 },
    { id: 2, name: 'Mouse', price: 20 },
    { id: 3, name: 'Monitor', price: 200 },
    { id: 4, name: 'Headphones', price: 100 },
    { id: 5, name: 'Mousepad', price: 10 }
];
function findCheapestProduct (product){
    const cheapProducts = product.reduce((acc, cur) => {
        return cur.price < acc ? cur.product : acc
    });
    return cheapProducts
}
// console.log(findCheapestProduct(products3));


const employees4 = [
    { id: 1, name: 'Alice', department: 'HR', salary: 50000 },
    { id: 2, name: 'Bob', department: 'Engineering', salary: 75000 },
    { id: 3, name: 'Charlie', department: 'HR', salary: 60000 },
    { id: 4, name: 'David', department: 'Sales', salary: 80000 },
    { id: 5, name: 'Eve', department: 'Engineering', salary: 70000 }
];

function averageSalaryByDepartment (employees) {
    const sumByDepartment = employees.reduce((acc, cur) => {
        if(!acc[cur.department]){
            acc[cur.department] = { sum: 0, count: 0}
        }
        acc[cur.department].sum += cur.salary;
        acc[cur.department].count++;

        return acc;
    }, {});

    const averageByDepartment = {};
    Object.keys(sumByDepartment).forEach(items => {
        averageByDepartment[items] = sumByDepartment[items].sum / sumByDepartment[items].count
    });
    return averageByDepartment;
}
// console.log(averageSalaryByDepartment(employees4));

const books3 = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { id: 5, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }
];

function filterBooksByYearRange(books, startYear, endYear) {
    return books.filter(items => items.year >= startYear && items.year < endYear)
    .map(items => items.title)
}
// console.log(filterBooksByYearRange(books3, 1930, 1960));

const students5 = [
    { id: 1, name: 'Alice', scores: [85, 94, 92] },
    { id: 2, name: 'Bob', scores: [70, 80, 75] },
    { id: 3, name: 'Charlie', scores: [95, 88, 92] },
    { id: 4, name: 'David', scores: [60, 75, 80] },
    { id: 5, name: 'Eve', scores: [82, 85, 88] }
];

const topStudents = students5.filter((items) => {
    const averageScore = items.scores.reduce((acc, cur) => acc + cur, 0) / items.scores.length;
    // console.log(averageScore >= 90);
    return averageScore >= 90;
}).map(items => items.name);
// console.log(topStudents);

const orders = [
    { id: 1, customer: 'Alice', total: 120 },
    { id: 2, customer: 'Bob', total: 75 },
    { id: 3, customer: 'Charlie', total: 200 },
    { id: 4, customer: 'Alice', total: 100 },
    { id: 5, customer: 'David', total: 150 },
    { id: 6, customer: 'Bob', total: 80 }
];
function calculateTotalSpentByCustomer () {
    const totalSpentByCustomer = orders.reduce((acc, cur) => {
        if(!acc[cur.customer]){
            acc[cur.customer] = 0;
        }
        acc[cur.customer] += cur.total;
        return acc;
    
    }, {});
    return totalSpentByCustomer;
}


// console.log(calculateTotalSpentByCustomer(orders));

const products6 = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200 },
    { id: 2, name: 'Keyboard', category: 'Electronics', price: 50 },
    { id: 3, name: 'T-shirt', category: 'Apparel', price: 20 },
    { id: 4, name: 'Watch', category: 'Accessories', price: 100 },
    { id: 5, name: 'Headphones', category: 'Electronics', price: 150 },
    { id: 6, name: 'Sunglasses', category: 'Accessories', price: 80 },
    { id: 7, name: 'Jacket', category: 'Apparel', price: 200 },
    { id: 8, name: 'Smartphone', category: 'Electronics', price: 800 }
];

function getAveragePriceByCategory (product) {
    const averageSalary = product.reduce((acc, cur) => {
        if(!acc[cur.category]){
            acc[cur.category] = {sum: 0, count: 0}
        }
        acc[cur.category].sum += cur.price;
        acc[cur.category].count++
        return acc;
    }, {});

    const totoal = {}
    Object.keys(averageSalary).forEach(items => {
        totoal[items] = averageSalary[items].sum / averageSalary[items].count
    });
    return totoal;
}
// console.log(getAveragePriceByCategory(products6));

const employees5 = [
    { id: 1, name: 'Alice', department: 'HR', salary: 50000 },
    { id: 2, name: 'Bob', department: 'Engineering', salary: 75000 },
    { id: 3, name: 'Charlie', department: 'HR', salary: 60000 },
    { id: 4, name: 'David', department: 'Sales', salary: 80000 },
    { id: 5, name: 'Eve', department: 'Engineering', salary: 70000 }
];

const highestPaidByDepartment = employees5.reduce((acc, cur) => {
    if(!acc[cur.department] || cur.salary > acc[cur.department].salary){
        acc[cur.department] = cur;
    }
    return acc;
}, {})
// console.log(highestPaidByDepartment);


// const promise1 = new Promise(resolve => setTimeout(resolve, 1000, 'One'));
// const promise2 = new Promise(resolve => setTimeout(resolve, 500, 'Two'));

// Promise.race([promise1, promise2]).then(value => {
//     console.log(value);
// }).catch(error => {
//     console.log(error);
// })

// const promise1 = Promise.resolve('One');
// const promise2 = Promise.resolve('Two');

// Promise.all([promise1, promise2]).then(value => {
//     console.log(value);
// })

const employees7 = [
    { name: 'Alice', age: 28, department: 'Marketing' },
    { name: 'Bob', age: 32, department: 'Sales' },
    { name: 'Charlie', age: 26, department: 'Marketing' },
    { name: 'David', age: 29, department: 'HR' }
];

// function filterEmployees(){}

// const filtering = employees7.filter(items => {
//     return items.age < 30 && items.department === 'Marketing'
// }).map(items => items.name)
// console.log(filtering);

const students2 = [
    { name: 'Alice', age: 20, grades: [85, 90, 88] },
    { name: 'Bob', age: 21, grades: [75, 82, 79] },
    { name: 'Charlie', age: 22, grades: [90, 92, 94] }
];
 
// Output: [
//   { name: 'Alice', averageGrade: 87.67 },
//   { name: 'Bob', averageGrade: 78.67 },
//   { name: 'Charlie', averageGrade: 92 }
// ]

const averageGrades = students2.map(items => {
    const sumOfGrades = items.grades.reduce((acc, cur) => acc + cur, 0)
    // console.log(sumOfGrades);

    const averageGarde = (sumOfGrades / items.grades.length).toFixed(2)
    return {
        name: items.name,
        averageGrade: averageGarde
    }
})
// console.log(averageGrades);

const numbers2 = [5, -3, 0, 10, -8, 2, 0, -1];

const classified = {
    positive: [],
    negative: [],
    zero: []
}
numbers2.forEach((items) => {
    if(items > 0){
        classified.positive.push(items)
    } else if(items < 0){
        classified.negative.push(items)
    } else{
        classified.zero.push(items)
    }
})
// console.log(classified);

const sentence = "hello world how are you";

const words12 = sentence.split(' ');

const reversing = words12.reverse();

const attach = reversing.join(' ')
// console.log(attach);

const transactions4 = [
    { id: 1, amount: 100, type: 'income' },
    { id: 2, amount: 50, type: 'expense' },
    { id: 3, amount: 75, type: 'income' },
    { id: 4, amount: 25, type: 'expense' }
];

let totalBalance = 0;
let largestTransaction = null;

const lpl = transactions4.reduce((acc, cur) => {
    if(cur.type === 'income'){
        totalBalance += cur.amount
    } else if(cur.type === 'expense'){
        totalBalance -= cur.amount
    }

    if(!largestTransaction || cur.amount > largestTransaction.amount){
        largestTransaction = cur
    }

    return {
        totalBalance,
        largestTransaction
    }
}, 0);

// console.log(lpl)

const sentence1 = "Hello world! How are you, world?";

const sentence12 = sentence1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, '').toLowerCase();
// console.log(sentence12);
const alphabets = sentence12.split(' ');
// console.log(alphabets);

const wordCount = {}

alphabets.forEach((items) => {
    if(items !== ''){
        if(wordCount[items]){
            wordCount[items]++;
        } else{
            wordCount[items] = 1
        }
    }
});
// console.log(wordCount);


const numbers3 = [1,2,3,4,1,1,1,2,2,2,3,3,4,4];

const empty = {}

numbers3.forEach((items) => {
    if(empty[items]){
        empty[items]++
    } else{
        empty[items] = 1
    }
});
// console.log(empty);

const lul = numbers3.reduce((acc, cur) => {
    if(acc[cur]){
        acc[cur]++
    }else{
        acc[cur] = 1
    }
    return acc;
}, {});

// console.log(lul);


const users = [
    { name: 'Alice', age: 30, isAdmin: true },
    { name: 'Bob', age: 25, isAdmin: false },
    { name: 'Charlie', age: 35, isAdmin: true },
    { name: 'David', age: 40, isAdmin: false }
];

const filterAdminUsers = users.filter(items => items.isAdmin === true);
// console.log(filterAdminUsers);


const students4 = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 72 },
    { name: 'Charlie', score: 90 },
    { name: 'David', score: 86 }
];

const ing = students4.sort((a, b) => {
    if(b.score !== a.score){
        return b.score - a.score
    }
});
// console.log(ing);

const numbers4 = [3, -1, 0, 9, -4, 6, -2];

const lel = numbers4.filter(items => items > 0);
// console.log(lel);

const books4 = [
    { title: 'Book A', author: 'Author X', publicationYear: 2010 },
    { title: 'Book B', author: 'Author Y', publicationYear: 2005 },
    { title: 'Book C', author: 'Author Z', publicationYear: 2015 },
    { title: 'Book D', author: 'Author W', publicationYear: 1998 }
];

const lil = books4.sort((a, b) => {
    return a.publicationYear - b.publicationYear
});
// console.log(lil);


// Factorial of a Number: Calculate the factorial of a number.

let n = 6;

function factorial (n){
    if(n < 0){
        return -1
    }

    let result = 1;

    for(let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}
// console.log(factorial(n));

// Check Even or Odd:

function checkOddOrEven (n) {
    if(n & 1 == 1){
        return "Number is odd"
    }
    return "Number is even"
}
// console.log(checkOddOrEven(17));

// Reverse a String

const str = "Hello world!"

function reverseString(str) {
    let reversed = '';

    for(let i =str.length-1; i >= 0; i--){
        reversed += str[i]
    }
    return reversed;
}
// console.log(reverseString(str));

// Check Prime Number


const question1 = [
    {
        class: "class 1",
        name: "abc"
    },{
        class: "class 2",
        name: "def"
    },{
        class: "class 1",
        name: "jkl"
    },{
        class: "class 2",
        name: "kls"
    },{
        class: "class 3",
        name: "acd"
    },{
        class: "class 1",
        name: "asd"
    },{
        class: "class 4",
        name: "ads"
    },{
        class: "class 4",
        name: "dee"
    }
];

const result3 = {}

question1.forEach((items) => {
    if(Object.keys(result3).includes(items.class)){
        result3[items.class].push({...items})
    } else{
        result3[items.class] = [{...items}]
    }
});
// console.log(result3);

const question2 = [1, 2, 3, 4, 5, 1, 1, 1, 2, 2, 3, 3, 2, 1, 4, 5, 5, 5, 4, 4, 2]

const result4 = question2.reduce((acc, cur) => {
    if(acc[cur]){
        acc[cur]++
    }else{
        acc[cur] = 1
    }
    return acc;
}, {});
// console.log(result4);

function frequency (arr){
    let frequency = {};

    for(let i = 0; i < arr.length; i++){
        let element = arr[i]

        if(frequency[element]){
            frequency[element]++
        }else{
            frequency[element] = 1
        }
    }
    return frequency
}
// console.log(frequency(question2));

const student = {
    name: 'Alice',
    age: 20,
    grades: [85, 90, 95]
};

const grade = student.grades;
const lql = grade.reduce((acc, cur) => acc + cur, 0) / grade.length;
// console.log(lql);

// console.log(getAverageGrade(student)); // Output: 90


const students6 = [
    { name: "Alice", grades: [85, 90, 88] },
    { name: "Bob", grades: [79, 82] },
    { name: "Charlie", grades: [] }
];

function calculateAverageGrades () {}

const lkl = students6.map((items) => {
    const total = items.grades.reduce((acc, cur) => acc + cur, 0);
    // console.log(total);
    const average = items.grades.length > 0 ? Math.round(total / items.grades.length) : 0;
    // console.log(average);
    return {
        name: items.name,
        averageGrade: average
    }
});
// console.log(lkl);

const arra = [
    { id: 1 },
    { name: 'Alice' },
    { age: 30 },
    { city: 'New York' }
];

const lwl = arra.reduce((acc, cur) => {
    for(let key in cur){
        if(cur.hasOwnProperty(key)){
            acc[key] = cur[key];
        }
    }
    return acc;
}, {});
// console.log(lwl);

const employees8 = [
    { name: 'Alice', department: 'HR', salary: 50000 },
    { name: 'Bob', department: 'Engineering', salary: 70000 },
    { name: 'Charlie', department: 'HR', salary: 60000 },
    { name: 'David', department: 'Marketing', salary: 55000 },
    { name: 'Eve', department: 'Engineering', salary: 75000 },
    { name: 'Frank', department: 'HR', salary: 65000 }
];


const filteredEmployees = employees8
.filter((items) => items.department === 'HR')
.sort((a, b) => b.salary - a.salary);
// console.log(filteredEmployees);

function filterAndSortEmployees(arr, department){
    const filteredEmployees = arr.filter((items) => items.department === department)
    .sort((a, b) => b.salary - a.salary);

    return filteredEmployees;
}
// console.log(filterAndSortEmployees(employees8, 'Engineering'));

const products7 = [
    { name: 'Laptop', price: 1000, category: 'Electronics' },
    { name: 'Keyboard', price: 50, category: 'Electronics' },
    { name: 'T-shirt', price: 20, category: 'Fashion' },
    { name: 'Sneakers', price: 80, category: 'Fashion' },
    { name: 'Headphones', price: 150, category: 'Electronics' },
    { name: 'Jeans', price: 60, category: 'Fashion' }
];

const result5 = {};

products7.forEach((items) => {
    if(Object.keys(result5).includes(items.category)){
        result5[items.category].push({...items})
    }else{
        result5[items.category] = [{...items}]
    }
});
// console.log(result5);

function groupByCategory(arr) {
    return arr.reduce((acc, cur) => {
        const { category } = cur;

        if(!acc[category]){
            acc[category] = [];
        }
        acc[category].push(cur);
        return acc;
    }, {});
}
// console.log(groupByCategory(products7));
//   console.log(groupByCategory(products));

const transactions3 = [
    { id: '1', amount: 50, category: 'Food' },
    { id: '2', amount: 100, category: 'Transportation' },
    { id: '3', amount: 150, category: 'Food' },
    { id: '4', amount: 80, category: 'Entertainment' },
    { id: '5', amount: 200, category: 'Transportation' },
    { id: '6', amount: 120, category: 'Food' }
];

const total = {};

transactions3.forEach((items) => {
    const { category, amount } = items;
    
    if(!total[category]) {
        total[category] = 0
    }
    total[category] += amount;
});
const result8 = Object.keys(total).map(category => ({
    category,
    total: total[category]
})).sort((a ,b) => a.category.localeCompare(b.category))
// console.log(result8);

const documents = [
    {
        id: 10,
        name: 'akash'
    },
    {
        id: 21,
        name: 'asif'
    },
    {
        id: 13,
        name: 'kushal'
    },
    {
        id: 42,
        name: 'juhi'
    },
    {
        id: 35,
        name: 'haren'
    },
    {
        id: 66,
        name: 'priyanshu'
    },
    {
        id: 17,
        name: 'mukund'
    },
    {
        id: 81,
        name: 'royce'
    },
    {
        id: 98,
        name: 'kruthika'
    }
]

for(let item of documents){
    if(item.id === 42){
        // console.log(item);
        break;
    }
}

const students7 = [
    { name: 'Alice', age: 20, grades: [85, 90, 88] },
    { name: 'Bob', age: 21, grades: [79, 82, 75] },
    { name: 'Charlie', age: 19, grades: [92, 88, 95] },
    { name: 'David', age: 22, grades: [70, 68, 72] },
    { name: 'Eve', age: 20, grades: [88, 84, 89] }
];

const lml = students7.map((items) => {
    const sum = items.grades.reduce((acc, cur) => acc + cur, 0);
    const average = Math.round(sum / items.grades.length);
    // console.log(average);
    return {
        name: items.name,
        age: items.age,
        averageGrade: average
    }
}).filter((items) => items.averageGrade > 80);
// console.log(lml);


const books5 = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4.2 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 4.5 },
    { title: '1984', author: 'George Orwell', rating: 4.8 },
    { title: 'Brave New World', author: 'Aldous Huxley', rating: 4.1 }
];

function sortBooks(books, sortBy){
    return books.slice().sort((book1, book2) => {
        if(sortBy === 'title'){
            return book1.title.localeCompare(book2.title)
        } else if(sortBy === 'author'){
            return book1.author.localeCompare(book2.author)
        } else if(sortBy === 'rating'){
            return book2.rating - book1.rating
        } else{
            return 0;
        }
    })
}
// console.log(sortBooks(books5, 'rating'));
  
//   console.log(sortBooks(books, 'rating'));
  // Output:
  // [
  //   { title: '1984', author: 'George Orwell', rating: 4.8 },
  //   { title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 4.5 },
  //   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4.2 },
  //   { title: 'Brave New World', author: 'Aldous Huxley', rating: 4.1 }
  // ]
  

  const employees9 = [
    { id: 1, name: 'Alice', department: 'Engineering', salary: 60000 },
    { id: 2, name: 'Bob', department: 'HR', salary: 45000 },
    { id: 3, name: 'Charlie', department: 'Engineering', salary: 80000 },
    { id: 4, name: 'David', department: 'Finance', salary: 70000 },
    { id: 5, name: 'Eve', department: 'HR', salary: 50000 }
];

function getTotalSalaryByDepartment(department){
    const departmentEmployees = employees9.filter((items) => items.department === department)
    .reduce((acc, cur) => acc + cur.salary, 0)
    return departmentEmployees
}
// console.log(getTotalSalaryByDepartment('HR'));


// const HighestSalary = employees9.reduce((acc, cur) => {
//     return (cur.salary > acc.salary) ? cur : acc;
// })
// console.log(HighestSalary.name);

const cart1 = [
    { name: 'Laptop', price: 1000, quantity: 1 },
    { name: 'Mouse', price: 20, quantity: 2 },
    { name: 'Keyboard', price: 150, quantity: 1 }
];

const totalBill = cart1.reduce((acc, cur) => {
    return acc + cur.price
}, 0);
// console.log(totalBill);

const ExpensiveItem = cart1.reduce((acc, cur) => (cur.price > acc.price) ? cur.name : acc);
// console.log(ExpensiveItem.name);
  
//   console.log(getTotalCost(cart)); // Output: 1190
//   console.log(getMostExpensiveItem(cart)); // Output: Laptop
  


const comments = [
    { postId: 1, id: 1, name: 'Alice', email: 'alice@example.com', body: 'First comment' },
    { postId: 1, id: 2, name: 'Bob', email: 'bob@example.com', body: 'Second comment' },
    { postId: 2, id: 3, name: 'Charlie', email: 'charlie@example.com', body: 'Third comment' },
    { postId: 2, id: 4, name: 'David', email: 'david@example.com', body: 'Fourth comment' }
];

const getById = comments.filter((items) => items.postId === 1);
// console.log(getById);

const Emails = comments.map(items => items.email);

const uniqueEmails = [...new Set(Emails)]
// console.log(uniqueEmails);

const books6 = [
    { title: 'Book 1', author: 'Author A', genre: 'Fiction', price: 20 },
    { title: 'Book 2', author: 'Author B', genre: 'Non-fiction', price: 15 },
    { title: 'Book 3', author: 'Author C', genre: 'Fiction', price: 25 },
    { title: 'Book 4', author: 'Author D', genre: 'Fiction', price: 18 }
];

const booksFilter = books6.filter(items => items.genre === 'Fiction')

const totalPrice = books6.reduce((acc, cur) => acc + cur.price, 0);
// console.log(totalPrice);

function filterBooksByGenre(books, genre){
    return books.filter((item) => item.genre === genre)
}
// console.log(filterBooksByGenre(books6, 'Fiction'));

function calculateTotalPrice(books){
    return books.reduce((acc, cur) => acc + cur.price, 0)
}
// console.log(calculateTotalPrice(books6));


const weatherReports = [
    { date: '2023-07-01', temperature: 28, weather: 'Sunny' },
    { date: '2023-07-02', temperature: 25, weather: 'Rain' },
    { date: '2023-07-03', temperature: 27, weather: 'Rain' },
    { date: '2023-07-04', temperature: 30, weather: 'Cloudy' },
    { date: '2023-07-05', temperature: 26, weather: 'Rain' }
];

function getAverageTemperature(weatherReports){
    return weatherReports.reduce((acc, cur) => acc + cur.temperature, 0) / weatherReports.length;
}
// console.log(getAverageTemperature(weatherReports));

function getDaysWithRain(weatherReports){
    return weatherReports.filter(items => items.weather === 'Rain').map(items => items.date)
}
// console.log(getDaysWithRain(weatherReports));

const students11 = [
    { name: 'Alice', age: 18, grade: 'A', subjects: ['Math', 'Physics'] },
    { name: 'Bob', age: 17, grade: 'B', subjects: ['Chemistry', 'Biology'] },
    { name: 'Charlie', age: 19, grade: 'A', subjects: ['History', 'Literature'] },
    { name: 'David', age: 16, grade: 'C', subjects: ['Geography', 'Art'] }
];

function getStudentsByGrade (student, grade){
    return student.filter((items) => items.grade === grade)
}
// console.log(getStudentsByGrade(students11, 'A'));

function calculateAverageAge(student){
    return student.reduce((acc, cur) => acc + cur.age, 0) / student.length;
}
// console.log(calculateAverageAge(students11));


const cart7 = [
    { name: 'Laptop', price: 1000, quantity: 1, category: 'Electronics' },
    { name: 'T-shirt', price: 20, quantity: 2, category: 'Clothing' },
    { name: 'Headphones', price: 150, quantity: 1, category: 'Electronics' },
    { name: 'Shoes', price: 80, quantity: 1, category: 'Clothing' }
];

function getProductsInCategory(cart, category){
    return cart.filter(items => items.category === category)
}
// console.log(getProductsInCategory(cart7, 'Electronics'));

function calculateTotalPrice(cart) {
    return cart.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0);
}
// console.log(calculateTotalPrice(cart7));


const movies1 = [
    { title: 'Inception', year: 2010, genre: 'Sci-Fi', rating: 8.8 },
    { title: 'The Dark Knight', year: 2008, genre: 'Action', rating: 9.0 },
    { title: 'Pulp Fiction', year: 1994, genre: 'Crime', rating: 8.9 },
    { title: 'Forrest Gump', year: 1994, genre: 'Drama', rating: 8.8 },
    { title: 'The Shawshank Redemption', year: 1994, genre: 'Drama', rating: 9.3 }
];

function filterMoviesByGenre(movies, genre) {
    return movies.filter(item => item.genre === genre)
}
// console.log(filterMoviesByGenre(movies1, 'Drama'));

function getAverageRating(movies) {
    return movies.reduce((acc, cur) => acc + cur.rating, 0) / movies.length;
    
}
// console.log(getAverageRating(movies1));


const shoppingList = [
    { name: 'Apples', quantity: 3, unitPrice: 1.2 },
    { name: 'Bananas', quantity: 2, unitPrice: 0.8 },
    { name: 'Milk', quantity: 1, unitPrice: 2.5 },
    { name: 'Bread', quantity: 2, unitPrice: 1.0 }
];

function calculateTotalCost(shoppingList){
    return shoppingList.reduce((acc, cur) => acc + (cur.unitPrice * cur.quantity), 0) 
}
// console.log(calculateTotalCost(shoppingList));

function sortByCost(shoppingList){
    return shoppingList.sort((a, b) => a.unitPrice - b.unitPrice)
}
// console.log(sortByCost(shoppingList));

  
  
function factorials (n) {
    if(n == 0) {
        return 1
    }
    return n * factorials(n - 1)
}
// console.log(factorial());


function filterByLength(arr, length) {
    // Write your code here
}

const words2 = ["apple", "banana", "kiwi", "orange", "grape"];
const filteredWords = words2.filter((items) => items.length >= 6);
// console.log(filteredWords);
// const filteredWords = filterByLength(words, 5);
// console.log(filteredWords); // Output: ["banana", "orange"]



const numbers5 = [1, 2, 3, 4, 5, 6];

const filteredNumbers = numbers5.filter((items) => items % 2 === 0)
.reduce((acc, cur) => acc + cur, 0);
// console.log(filteredNumbers);

function sumEvenNumbers(numbers) {
    return numbers.filter(items => items % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0)
}
// console.log(sumEvenNumbers(numbers5));

function add(num) {
    return num.reduce((acc, cur) => acc + cur, 0)
}
// console.log(add(numbers5));

function subtract(num){
    return num.reduce((acc, cur) => cur - acc, 0)
}
// console.log(subtract(numbers5));

function multiply(num){
    return num.reduce((acc, cur) => acc * cur, 1)
}
// console.log(multiply(numbers5));

function divide(num) {
    return num.reduce((acc, cur) => cur / acc, 1)
}
// console.log(divide(numbers5));

const Calculator = {
    result: 0,
    add: function(num){
        return num.reduce((acc, cur) => acc + cur, 0);
    },

    subtract: function(num){
        return num.reduce((acc, cur) => cur - acc, 0)
    },

    multiply: function(num){
        return num.reduce((acc, cur) => acc * cur, 1)
    },

    divide: function(num){
        return num.reduce((acc, cur) => cur / acc, 1)
    },
}


const students8 = [
  { id: 1, name: 'Alice', age: 21, grade: 'A' },
  { id: 2, name: 'Bob', age: 20, grade: 'B' },
  { id: 3, name: 'Charlie', age: 22, grade: 'A' },
  { id: 4, name: 'David', age: 19, grade: 'C' },
  { id: 5, name: 'Emily', age: 23, grade: 'A' }
];

function filterStudentsByGrade(students, targetGrade) {
    return students.filter((item) => item.grade === targetGrade)
}
// console.log(filterStudentsByGrade(students8, 'A'));


const obj = { a: 1, b: 2, c: 3 };
// console.log(Object.entries(obj)); // Output: [['a', 1], ['b', 2], ['c', 3]]


const products4 = [
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'T-shirt', category: 'Clothing' },
    { id: 3, name: 'Headphones', category: 'Electronics' },
    { id: 4, name: 'Sneakers', category: 'Footwear' },
    { id: 5, name: 'Mouse', category: 'Electronics' }
];

function filterProductsByCategory(products, category) {
    return products.filter(item => item.category === category)
}
// console.log(filterProductsByCategory(products4, 'Electronics'));

const obj1 = {
    arr_1:[1,2,3,4,5,6,7,8,9],
    arr_2:[10,12,32,49,5,62,17,18,29],
    arr_3:[11,12,32,43,75,64,7,38,59],
};

const combineArray = Object.values(obj1).flat(1);
const averageArray = combineArray.reduce((acc, cur) => acc + cur, 0) / combineArray.length;
// console.log(Math.round(averageArray));

for(let key in obj1){
    const sum = obj1[key].reduce((acc, cur) => acc + cur, 0) / obj1[key].length;
    // console.log(sum);
}

const array2 = []

for(let key in obj1){
    const sum = obj1[key];
    for(let x of sum){
        array2.push(x)
    }
}
// console.log(array2);
const result6 = array2.reduce((acc, cur) => acc + cur, 0) / array2.length;
// console.log(result6);


// const timeStamp = 1720783331050;

const date = new Date(1721048796332);

// Get various components of the date

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log(`0${day}/0${month}/${year} ${hours}:${minutes}:${seconds}`);












// DATE and TIME

// 1 new Date()

// const date = new Date();
// console.log(date);

// 2. constructor
const d = new Date();
const text = d.constructor();
// console.log(text);
// This gives me the whole formate like day month date year hour minute seconds and timezone(+GMT)


// 3. getDate 
const da = new Date();
const ad = da.getDate();
// console.log(ad);
// This gives only the date of the particular day
// Ex: 2024/02/24 it give 24

// 4.getDay
// const day = new Date();
// const day1 = day.getDay();
// console.log(day1);
// This gives the day check ex to understand better
// Ex: [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday]
// So the date is 2024/07/12 and the day is Friday, and the output will be 5(it will return the index value of the day)


// 5. getFullYear()
// const year = new Date();
// const year1 = year.getFullYear();
// console.log(year1);
// This gives the particular year

// 6. getHours()
// const hours = new Date();
// const hours1 = hours.getHours();
// console.log(hours1);
// This gives particular hour

// 7. setDate()
const sd = new Date();
const sd1 = sd.setDate(15)
console.log(sd1);
