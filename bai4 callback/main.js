// call back 

// là hàm (function ) được truyền qua đối số 
// khi gọi hàm khác

//1. là hàm 
//2. được truyền qua đối số

// var myFunction = (a) =>{
//     if(typeof a === 'function'){
//         a('PQH tobi đẹp trai');   
//     }
//     else{
//         console.log('xem lại');
//     }
// }
// var myCallback = (value)=>{
//     console.log(`value: ${value}`);
// }

// myFunction(myCallback);

Array.prototype.map2 = function (callback){
    var arraylenght = this.length;
    for(var i = 0; i < arraylenght; i++){
        callback(this[i], i);
    }
}

var courses = [
    'javascript',
    'PHP',
    'Ruby'
]
courses.map2((course, index)=>{
    console.log(index, course);
});

// var htmls = courses.map((course)=>{
//     return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(''));