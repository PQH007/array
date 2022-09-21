/*
ARRAY methods:
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
*/

var courses = [
    {
        id: 1,
        name: 'javascript',
        coin: 100
    },
    {
        id: 2,
        name: 'HTML,CSS',
        coin: 200
    },
    {
        id: 3,
        name: 'PHP',
        coin: 220
    },
    {
        id: 4,
        name: 'reactJS',
        coin: 480
    }
]
// var i = 0;
// var totalCoin = courses.reduce((total,course)=>{
//     i++;
//     console.log(i,total);
//     return total + course.coin
// },0);// intial value giá trị k bắt buộc
// // nhưng ảnh hưởng đến việc reduce chạy như thế nào
// console.log(totalCoin);

var numbers = [100,200,220,200,480];
var totalCoin = numbers.reduce((total,numbers)=>{
    return total + numbers;
}, 0);
console.log(totalCoin);

//flat - 'làm phẳng ' mảng  từ depth array - 'mảng sâu'
var depthArray = [1,2,[3,4],5,6,[7,8,9]];

var flatArray = depthArray.reduce((flatOut, depthItem) =>{
    return flatOut.concat(depthItem);
}, []);

console.log(flatArray);

// lấy ra  các kháo học đưa vào 1 mảng mới
var topics = [
    {
        topic: 'front-end',
        courses: [
            {
                id: 1,
                title: 'HTML,CSS'
            },
            {
                id: 2,
                title: 'javascript'
            }
        ]
    },
    {
        topics: 'back-end',
        courses:[
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title:'Nodejs'
            }
        ]
    }
];

var newCourses = topics.reduce((courses, topic)=>{  
    return courses.concat(topic.courses);
}, []);

console.log(newCourses);
var html = newCourses.map((course) =>{
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>

    `
});

console.log(html.join(''))