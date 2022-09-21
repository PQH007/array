// var array = ['a','b','c','a','b','c'];
// console.log([...(new Set(array))])
//1. xác định điểm dừng
//2. logic handle => tạo ra điểm dừng

var countDown = (num) =>{
    if(num > 0){
        console.log(num)
        return countDown(num - 1);
    }
    return num;
}

countDown(10);

var loop = (start, end, cb) =>{
    if(start < end ){
        cb(start);
        return loop(start + 1, end, cb);
    }
}

var array = ['a','b','c'];

loop(0, array.length, function(index){
    console.log(array[index]);
})