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



const products = [
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

for(let element of products){
    if(element.model === '1' && element.year === 2017){
        result21.push(element)
    }
}
// console.log(result21);


// For the below data, iterate over the cart and after each iteration, the count of the items
// will reduce. If the product count is less than the new item count, display the message
// saying ‘Not Available’.

const item = [
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

for(let cartItem of cart){
    for(let product of cartItem.products){
        for(let itemDetails of item){
            if(itemDetails.name === product.name){
                if(product.count <= itemDetails.available){
                    itemDetails.available -= product.count; 
                    result23.push(product);
                }else{
                    result23.push(`${product.name}: ${product.count}, and we have ${itemDetails.available}`)
                }
            }
        }
    }
}
console.log(result23);