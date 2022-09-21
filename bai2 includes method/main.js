// includes method
// có sẵn trong array và string k có trong object number date ... 

var title = 'Responsive web design';
// dùng để tìm kiếm phần tử có tồn tại trong array hay string hay k 
// đối số  thứ 2 là vị trí bắt đầu tìm kiếm
// nếu k nhập thì vị trí bắt đầu tìm kiếm là từ số 0 
console.log(title.includes('Responsive',1));
// tưởng tự array cũng có đối số thứ 2 là nơi bất đầu tiqmf kiếm 
// có thể truyền vào đối số là số âm 
// số âm sẽ được bắt đầu theo kiểu ví dụ mảng có 5 phần từ truyền vào là -2 
// vị trí bắt đầu sẽ là 5 + -2 = 3
// khi nhỏ hơn 1 thì sẽ mặc định là bằng 0 ví dụ 5 + -6 = -1 < 0 => =0
var courses = ['javascript', 'php', 'dart'];
console.log(courses.includes('javascript',1));