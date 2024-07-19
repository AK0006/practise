let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());

// const lol = Math.floor(Math.random() * 10000);
console.log(myDate);
const millieseconds = myDate.getTime();
console.log(millieseconds);

const isDate = myDate.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata'});
// console.log(isDate);



//         const examttt = await TimeTable_Schema.find({ $and: [{section_id: id}, { subject_id: {$in: subjectId}}]}).lean();

