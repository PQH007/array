var Name;
var age;
var sex;
var luong;
var diem;
var i = 0;
var nhanvien = [
    {"Name":"PQH","Age":'18',"Sex":"Nam","Luong":'1000',"Diem":'8'},
]
document.getElementById('btn').onclick = function hamxuat(){
    hamnhap();
    if(confirm('ban co muon nhap nhan vien tiep theo khong')){
        console.log('');
    }
    else{
    console.log(nhanvien);
    }
}
function hamnhap(){
    nhanvien.push({
        "Name":Name = document.getElementById('ten').value
        ,"Age":age = document.getElementById('tuoi').value
        ,"Sex":sex = document.getElementById('gioitinh').value
        ,"Luong":luong = document.getElementById('luong').value
        ,"Diem":diem = document.getElementById('diem').value
    });
}

// tìm kiếm nhân viên cao điểm nhất;
document.getElementById('diemcaonhat').onclick = () =>{
    var diemMax = 0;
    var diemNhi = 0;
    var nvDiemnhi = 0;
    var nvDiemMax = 0;
    for(i  = 0; i < nhanvien.length; i++){
        var diemN = parseInt(nhanvien[i].Diem)
        if(diemMax < diemN){
            diemNhi = diemMax;
            diemMax = diemN;
            nvDiemnhi = nvDiemMax;
            nvDiemMax = i;
        }
    }
console.log(nhanvien[nvDiemMax]);
console.log(nhanvien[nvDiemnhi]);
}

// tìm tên tuyệt đối
document.getElementById('timkiem').onclick = () =>{
    var tenNV = document.getElementById('timten').value;
    for(var k = 0 ; k < nhanvien.length ; k++){     
        if(nhanvien[i].Name === tenNV){
            console.log(nhanvien[i]);
        }
        else{
            console.log('lỗi rồi');
        }
    }
    
// tìm tên tương đối
var tuongdoi = nhanvien.filter(a => a.Name.includes(tenNV)).map(a => ({
    'Name':a.Name,
    'Age':a.Age,
    'Sex':a.Sex,
    'luong':a.Luong,
    'diem':a.Diem
}));
console.log(tuongdoi);
}


// sắp xếp theo độ tuổi tăng dần 
document.getElementById('sapxep').onclick = () =>{
    var sapxep = nhanvien.map(a => a.Age).sort()
    console.log(sapxep);
}
