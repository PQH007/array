/*  Tổng hợp các thuộc tính quan trọng của array
1. Array.isArray(value)
kiểm tra xem giá trị truyền vào có phải là 1 array không


2.Array.from()
console.log(console.log(Array.from([1, 2, 3], x => x + x )));
console.log(Array.from('PQH'));
trả về từng giá trị của array


3.kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện hay không trả về giá trị boolean
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));\


4.kiểm tra từng phần tử nếu thỏa mãn điuề kiện thì in ra; trả về 1 array
var numbers = [5, 10, 20, 22, 60, 75, 90];
var newNumbers = numbers.filter((a)=>{
    return (a % 2 == 0);
})
console.log(newNumbers); 
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var word = words.filter((a)=>{
    return (a.length > 6);
})
console.log(word);


5.value là giá trị tĩnh sẽ được thay thế các giá trị trong mảng
start là vị trí bắt đầu mặc định là 0
end là vị trí kết thúc mặt đinh là array.length
array.fill(value, start, end)
const array1 = [1, 2, 3, 4];
console.log(array1.fill(0, 2, 4));
console.log(array1.fill(5, 1));
console.log(array1.fill(6));


6.array.copyWithin(target, start, end)
target là vị trí mà hàm sẽ bắt đầu ghi đè các phần tử sao chép được
start là vị trí bắt đầu sao chép, giá trị mặc định là 0.
end là vị trí kết thúc sao chép, nếu không nhập vào thì mặc định là vị trí cuối cùng của mảng.
// Lặp lại phần tử từ vị trí thứ 2 cuối chuỗi.
// Lấy từ phần tử bắt đầu start là 0, end là 4
[1, 2, 3, 4, 5].copyWithin(-2)
// [1, 2, 3, 1, 2]
 
// Lặp từ vị trí đầu tiên (0)
// Lấy từ phần tử bắt đầu start là 3, end là 4
[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]
 
// Tương tự cho các trường hợp dưới đây.
 
[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]
 
[1, 2, 3, 4, 5].copyWithin(-2, -3, -1)
// [1, 2, 3, 3, 4]
 
[].copyWithin.call({length: 5, 3: 1}, 0, 3)
// {0: 1, 3: 1, length: 5}
 
// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5])
 
i32a.copyWithin(0, 2)
// Int32Array [3, 4, 5, 4, 5]
 
// On platforms that are not yet ES2015 compliant:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]


7.đây là hàm dùng để nối các mảng lại với nhau thành một mảng mới.Hàm concat sẽ không thay đổi mảng hiện tại, nhưng nó sẽ trả về một mảng mới sẽ bao gồm giá trị của các mảng được truyền vào. Mảng mới có tổng số phần tử bằng 
với tổng số tất cả các phần tử của các mảng cộng lại.
var projec1 = ["PHP", "CSS"];
var projec2 = ["HTML", "Python", "JS"];
var children = projec1.concat(projec2); 

8.find trả về giá trị đầu tiên thỏa mãn điều kiện
array.find(function(currentValue, index, arr),thisValue)
currentValue - giá trị của phần tử hiện tại.
index - chỉ số của phần tử hiện tại
arr - mảng mà phần tử hiện tại thuộc về.
thisValue - tham số không bắt buộc. Nếu được truyền vào thì thisValue sẽ được sử dụng làm giá trị "this:. Nếu không được truyền vào thì giá trị "this" là "undefined".
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) =>{return element > 10});
console.log(found);

9.array.findIndex() trong javascript, đây là hàm dùng để tìm vị trí đầu tiên của phần tử được tìm thấy thỏa điều kiện nào đó.
array.findIndex(function(currentValue, index, arr),thisValue)
currentValue - giá trị của phần tử hiện tại.
index - chỉ số của phần tử hiện tại.
arr - mảng mà phần tử hiện tại thuộc về.
thisValue - tham số không bắt buộc. Nếu được truyền vào thì thisValue sẽ được sử dụng làm giá trị this, Nếu không được truyền vào thì giá trị "this" là "undefined".
const ages = [3, 10, 28, 20];
console.log(ages.findIndex((a)=>a > 10));

10.hàm map trong javascript, đây là hàm dùng để lặp qua các phần tử của mảng và cho phép xử lý giá trị của phần tử đó.
Javascript map là một hàm dành cho đối tượng mảng trong javascript, hàm này có công dụng tương tự như vòng lăp forEach.
Hàm map() sẽ lặp qua từng phần tử của mảng, tham số truyền vào là một anonymous function. 
Hàm anonymous sẽ có một tham số truyền vào và đó chính là phần tử của mỗi vòng lặp, bên trong thân hàm anonymouse sẽ có lệnh return về một giá trị và giá trị này sẽ thay thế cho phần tử đó
var numbers = [5, 10, 20, 22, 60];
console.log(numbers.map((a)=> a * 2));

11.hàm Array indexOf trong javascript, đây là hàm dùng để tìm kiếm phần tử trong mảng javascript.
Hàm indexOf sẽ tìm kiếm một phần tử trong mảng dựa vào giá trị của phần tử, hàm sẽ trả về vị trị( khóa) của phần tử nếu tìm thấy và trả về -1 nếu không tìm thấy.
array.indexOf(item, start)
item là giá trị của phần tử cần tìm.
start là vị trí bắt đầu tìm kiếm.
var scores = [10, 20, 30, 10, 40, 20];
console.log(scores.indexOf(10,1));


12.lastIndexOf trong Javascript, hàm này trả về vị trí xuất hiện cuối cùng trong mảng.
lastIndexOf Javascript dùng để tìm kiếm phần tử cuối cùng trong mảng thõa mãn điều kiện cần tìm. Nếu bạn muốn tìm phần tử đầu tiên thì hãy sử dụng hàm indexOf nhé.
array.lastIndexOf(item, start)
item là giá trị của phần tử cần tìm.
start là vị trí bắt đầu tìm kiếm. mặc định là vị trí 0.
var fruits = ["Chanh", "Bưởi", "Chanh"];
console.log(fruits.lastIndexOf('Chanh'));


13.hàm forEach trong javascript, đây là hàm dùng để lặp qua các phần tử của mảng một cách dễ dàng.
Hàm forEach sẽ lần lượt truyền các phần tử của mảng vào một hàm được cung câp trước đó, hàm này sẽ tiến hành xử lý các thành phần tử cửa mảng như là một tham số truyền vào.
array.forEach(function(currentValue, index, arr), thisValue)
currentValue - giá trị của phần tử hiện tại.
index - chỉ số của phần tử hiện tại.
arr - mảng mà phần tử hiện tại thuộc về.
thisValue - tham số không bắt buộc. Nếu được truyền vào thì thisValue sẽ được sử dụng làm giá trị this. Nếu không được truyền vào thì giá trị "this" là "undefined".
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));


14.string.split() sẽ phân tách một chuỗi thành một mảng dữ liệu dựa vào các kí tự phân cách trong chuỗi. Phương thức sẽ trả về một mảng mới.
Nếu kí tự phân cách là một chuỗi rỗng, mỗi kí tự trong chuỗi sẽ được phân tách thành một phần tử của mảng.

Phương thức string.split() sẽ không làm thay đổi chuỗi gốc ban đầu.
string.split(separator, limit)
separator là kí tự phân cách trong chuỗi, phương thức sẽ dựa vào kí tự này để phân tách chuỗi. Nếu không truyền vào, mảng trả về sẽ có một phần tử duy nhất có giá trị bằng chuỗi ban đầu. Nếu truyền vào một chuỗi rỗng, mỗi kí tự trong chuỗi sẽ là một phần tử của mảng trả về.
limit là tham số quy định số phần tử tối đa của mảng trả về. Nếu không được truyền vào thì phương thức sẽ lấy tất cả các phần tử có thể.

var str = 'freetuts.net la blog chia se kien thuc';
console.log(str.split(' '));


15.some trong javascript, đây là hàm dùng để kiểm tra các phần tử trong mảng có thỏa mãn điều kiện nào đó hay không.
const array = [1, 2, 3, 4, 5];
 
// Hàm kiểm tra một phần tử có chia hết cho 2 hay không
const even = (element) => element % 2 === 0;
 
console.log(array.some(even));
// output: true
some(function callbackFn(element, index, array) { ... }, thisArg)
element là biến chứa giá trị của phần tử đang lặp.
index là key của phần tử đang lặp.
array là mảng gốc mà phần tử đang thuộc về.
function isBiggerThan10(element, index, array) {
  return element > 10;
}
 
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true


16.Hàm reverse trong javascript có chức năng đúng với tên gọi của nó là đảo ngược thứ tự của các phần tử trong mảng. Cụ thể, phần tử đầu tiên sẽ trở thành phần tử cuối cùng, phần tử thứ 2 sẽ trở thành phần tử kế cuối..
array.reverse()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits); //["Mango", "Apple", "Orange", "Banana"]
*/

