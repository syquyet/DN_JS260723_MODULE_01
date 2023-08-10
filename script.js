console.log(1);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(1);
// đặt một biến để laays gia trị
// const number = prompt("nhập vào một số bất kì");
// console.log("kết quả", number);

// có 3 cach khai báo biến

// var -->khai báo toàn cục, có thể khai báo lại, có thể gán lại

// let --> khai báo cục bộ khoong thẻ khai báo lại,có thể gán lại

// const --> khai báo cục bộ không thể khai báo lại, không thể gán lại

// giá trị
// kiểu number -->số
// kiểu string --> chữ
// kiểu boolen --> true và false
// kiểu object

const NUMBER_LICENSE = "43";
var x = 10;
console.log("kiểm tra x 1", x);
var x = 20;
console.log("kiểm tra x2", x);
// bài 1: tính số điểm trung bình
function bai_01() {
  const mathMark = Number(prompt("nhập vào điểm toán"));
  const physicsMark = Number(prompt("nhập vào điểm lý"));
  const chemhMark = Number(prompt("nhập vào điểm hóa"));
  console.log("diem toan", mathMark);

  const averageMark = (mathMark + physicsMark + chemhMark) / 3;
  console.log("diem trung binh", averageMark);
}
// bai 2: doi tien do
function bai_02() {
  const tienDola = Number(prompt("nhap tien dola"));
  console.log(tienDola);
  const tienViet = tienDola * 23750;
  console.log("tien viet:", tienViet);
}
function bai_03() {
  const nhapvao = prompt("nhap thaong tin");
  console.log(nhapvao);
}
function bai_04() {
  const fistName = prompt("nhap thaong tin");
  const lastName = prompt("nhap thaong tin");

  const nhaptuoi = Number(prompt("nhap tuoi"));
  alert(fistName + " " + lastName + " " + nhaptuoi);
}
// tinh chu vi dien tich hinh tron
function bai_05() {
  const width = Number(prompt("nhap chieu dai"));
  const height = Number(prompt("nhap chieu rong"));
  const perimeter = (width + height) * 2;
  const acreage = width * height;
  console.log("chu vi hinh chu nhat la:", perimeter);
  console.log("dien tich hinh chu nhat la:", acreage);

  const resultElement = document.querySelector("#result-4");

  resultElement.innerHTML =
    "chu vi hinh chu nhat:" +
    perimeter +
    "    " +
    "dien tich  hinh chu nhat la:" +
    acreage;
}
function bai_06() {
  const radius = Number(prompt("nhap chieu ban kinh"));
  const perimeter = 2 * radius * 3.14;
  const acreage = radius * radius * 3.14;
  console.log("chu vi hinh tron la:", perimeter);
  console.log("dien tich hinh tron la:", acreage);

  const resultElement = document.querySelector("#result-5");
  resultElement.innerHTML =
    "chu vi hinh tron:" + perimeter + " " + "dien tich  hinh tron:" + acreage;
}
function bai_07() {
  const color = prompt("nhap vao mot mau bat ky");
  console.log("%cban da doi mau trong cosole.log()", `color: ${color}`);
}

// nhap so bat ky thong bao chan le
function bai_08() {
  const number = Number(prompt("nhap mot so"));
  if (number % 2 == 0) {
    console.log(number, "la so chan");
  } else {
    console.log(number, "la so le");
  }
}
// xet do tuoi xem phim tuong ung
function bai_09() {
  const ipnutAge = Number(prompt("nhap do tuoi"));
  if (ipnutAge < 16) {
    console.log("ban duoc xem phim hoat hinh");
    alert("ban duoc xem phim hoat hinh");
  } else if (ipnutAge < 18) {
    console.log("ban dc xem phim hanh dong + phim hoat hinh");
    alert("ban dc xem phim hanh dong + phim hoat hin");
  } else {
    console.log("ban dc xem duoc tat ca cac phim");
    alert("ban dc xem duoc tat ca cac phim");
  }
}
// nhap diem danh gia xep loai
function bai_10() {
  const pointMaths = Number(prompt("nhap diem toan"));
  const physicsMark = Number(prompt("nhap diem ly"));
  const pointChemistry = Number(prompt("nhap diem hoa"));
  const pointBorn = Number(prompt("nhap diem sinh"));
  const pointMedium =
    (pointMaths + physicsMark + pointChemistry + pointBorn) / 4;
  console.log(pointMedium);
  if (
    pointMedium > 8 &&
    pointMaths > 7 &&
    physicsMark > 7 &&
    pointChemistry > 7 &&
    pointBorn > 7
  ) {
    console.log(" hoc sinh gioi");
  } else if (
    pointMedium > 7 &&
    pointMaths > 5 &&
    physicsMark > 5 &&
    pointChemistry > 5 &&
    pointBorn > 5
  ) {
    console.log("hoc sinh kha");
  } else if (
    pointMedium > 5 &&
    pointMaths > 3.5 &&
    physicsMark > 3.5 &&
    pointChemistry > 3.5 &&
    pointBorn > 3.5
  ) {
    console.log("hoc sinh trung binh");
  } else {
    console.log("hoc sinh yeu");
  }
}
