/*
1.push(element): thêm một phần từ vào vị trí cuối của mảng  
2.pop()        : xóa một phần tử ở cuối mảng
3.shift()      : xóa một phần tử đầu mảng
4.unshift(element): thêm một phần tử vào đầu mảng
5.splice(index, num, ...): thêm or xóa một phần tử từ vị trí index
6.concat()     : nối 2 mảng
7.slice(start, to): trích xuất mảng
8.join(delim)  : nối các phần tử của mảng phân tacahs bởi delim
9.toString()   : trả về danh sách các phần tử mảng ở kiểu string
 */

var friends = ['a', 'b', 'c'];
var pet = ['1','2','3'];
friends.push('d');
friends.unshift(0);
friends.pop();
friends.shift();
friends.splice(1, 2); // index ở đây là 1 => vị trí bắt đầu xóa sẽ là 1, và xóa đi 2 phần tử 
friends.splice(3, 0, 'a','b','2');// index ở đây là 3 vị trí bắt đầu thêm vào là 3 xóa đi 0 phần tử thêm vào a,b,2
var newArray = friends.concat(pet);
var newArray1 = friends.join(' + '); // các phần tử của mảng sẽ được nối với bởi dấu + và trả về 1 string
var otherFriends = friends.slice(0, 3); // từ vị trí số 0 đến trước vị trí 3. tức là từ vị trí muốn lấy đến trước vị trí nào đó
friends.toString();
