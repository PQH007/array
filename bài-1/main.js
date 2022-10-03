// var a = []
// document.getElementById('btn').onclick = hamxuat = () => {
//     hamnhap();
//     console.log(a);
// };

// var hamnhap = (n) =>{
//     n = document.getElementById('n').value;
//     a.push(n);
// }
//câu a + b
var a = [1,2,3,2,4,2,5,6,7,8,9,-9,-5];
// console.log(a.toString());
// câu 
// var soLe = a.filter((l) =>{ 
//     return l % 2 != 0
// });
// console.log(soLe.length);  

// var tongSoLe = a.filter((tl) =>{
//     return tl > 0 && tl % 2 != 0;
// })

// var sum = 0;
// for(i = 0; i < tongSoLe.length; i++){
//     sum = sum + tongSoLe[i];
// }

// console.log(`tổng số lẽ dương là: ${sum}`);

//câu e
// document.getElementById('btn').onclick = () =>{
//     var k = document.getElementById('n').value;
//     const n = Number(k);
//     for(i = 0; i < a.length; i++){
//         if(n / a[i] == 1){
//             console.log(i);
//         }
//     }
// }

// câu f

// console.log('câu f: '+ a.sort());

//câu g

// console.log(`câu g: mảng trước khi đảo: ${a}
// mảng sau khi đảo: ${a.reverse()}`);

// câu h
// document.getElementById('btn').onclick = () =>{
//     var k = document.getElementById('n').value;
//     const n = Number(k);
//     for(i = 0; i < a.length; i++){
//         if(n / a[i] == 1){
//             a.splice(i,1);
//         }
//     }
// console.log(a);
// }

// câu i 

// document.getElementById('btn').onclick = () =>{
//     var k = document.getElementById('n').value;
//     const n  = Number(k);
//     a.pop();
//     a.splice(n,0,'a');
//     console.log(a);
// }

//câu j 
// var max = a[0];
// var min = a[0]
// for(i = 0 ; i < a.length; i++ ){
//     if(max < a[i]){
//         max = a[i];
//     }
//     if(a[i] < min){
//         min = a[i];
//     }
// }
// console.log(max);
// console.log(min);

//câu k

// a.sort();
// console.log(a[a.length-2]);

// a.sort();
// a.pop();
// console.log(a[a.length - 1]);

var b = [1, 2, 4, 7, 3, 7, 4, 2, 1];
var c = b.slice().reverse();
if(b.toString() === c.toString() ){
    console.log('đây là mảng đổi xứng');
}
if(b.toString() != c.toString() ){
    console.log('đây không phải mảng đối xứng')
}