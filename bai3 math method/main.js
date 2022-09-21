/*
    Math object 
-Math.PI số PI
-Math.round() làm tròn số tùy thuộc vào số mà làm tròn trên hay làm tròn dưới
-Math.abs() giá trị tuyệt đối
-Math.ceil() chỉ làm tròn trên 
-Math.floor() chỉ làm tròn dưới
-Math.random()  trả về 1 dãy số thập phân ngẫu nhiên nhỏ hơn 1
-Math.min() lấy ra số nhỏ nhất
-Math.max() lấy ra số lớn nhất
-không phải là 1 object constructor nên k thể khởi tạo với từ khóa new
*/

console.log(Math.PI);

// console.log(Math.floor(Math.random() * 100));
var random = Math.floor(Math.random() * 100);

// var bonus = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin',
// ]

//  console.log(bonus[random]);

if(random < 5){
    console.log('thành công');
}
else{
    console.log('tạch rồi');
}

console.log(Math.min(10,90,-100,200,500));
console.log(Math.max(10,90,-100,200,500));