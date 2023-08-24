// ex_01("red");
// ex_01("green");

// function ex_01(color) {
//   console.log("%c hello word", `color:${color}`);
// }
// // bai tap 1
// function display() {
//   const name = prompt("nhap ten");
//   console.log(name + "xin chao rikkei academy");
// }
// display();
// // bình phương một số
// function armyNumber(number) {
//   const army = number * number;
//   return army;
// }
// console.log("binh phuong là", armyNumber(2));
// // // tính dienj tich tam giac vuong

// function area() {
//   const edge_a = Number(prompt("nhap canh a"));
//   const edge_b = Number(prompt("nhap canh b"));
//   function areaTriangle(a, b) {
//     return (a * b) / 2;
//   }

//   const area = areaTriangle(edge_a, edge_b);
//   console.log("dien tich hinh tam giac ", area);
// // }
// // area();
// function perimeter() {
//   const edge_a = Number(prompt("nhap canh a"));
//   const edge_b = Number(prompt("nhap canh b"));
//    function perimeterTriangle(a, b,) {
//     return a + b + (math.sqrt((a*a )+ (b*b)));
//   }
//   const perimeter = perimeterTriangle(edge_a, edge_b,);
//   console.log("chu vi hinh tam giac", perimeter);
// }
// // perimeter();
// function isPositive(data) {
//   if (Number(data) > 0) {
//     return true;
//   }
//   return false;
// }
// // console.log("10 co phai so nguyen dương ko", isPositive(10));
// const isPositive_1=(data)=> Number(data)>0? true: false;
// console.log("5 co phai so nguyen dương ko", isPositive_1(5));
// function findMin(array) {
//   let min =Number(array[0]);
//   for (let i = 0; i < array.length; i++) {
//     if (Number(array[i]) < min) {
//       min = Number(array[i]);
//     }
//   }
//   return min;
// }
// const string = prompt(" nhap vao chuoi cách nhau dáu -");
// const coverString = string.split("-");
// console.log(coverString);
// const findMinNumber = findMin(coverString);
// console.log("so nho nhat trong chuoi là", findMinNumber);
function lab_03() {
  const number = Number(prompt("nhập vào một số"));
  const checkPrime = chekPrime(number);
  if (checkPrime == false) {
    alert(number + "ko phai la so nguyen tố");
  } else {
    alert(number + "là so nguyen tô");
  }
}
function chekPrime(data) {
  if (data < 2) {
    return false;
  }
  for (let i = 2; i < data; i++) {
    if (data % i == 0) {
      return false;
    }
  }
  return true;
}
// nhập vào một chuỗi in ra chuỗi các số nguyên tố
function lab_04() {
  const string = prompt("nhập chuỗi số cách nhau dấu '-'");
  const coverString = string.split("-");

  console.log(coverString);
  let rangePrime = [];
  for (let i = 0; i < coverString.length; i++) {
    if (chekPrime(Number(coverString[i]))) {
      rangePrime.push(Number(coverString[i]));
    }
  }
  if (rangePrime.length == 0) {
    console.log("day ko có so nguyên tố");
  } else {
    console.log(rangePrime);
  }
}
//in ra các cặp số có tổng bằng 10
function lab_05() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let result = "";
  for (let i = 0; i < array.length; i++) {
    for (m = i + 1; m < array.length; m++) {
      if (array[i] + array[m] == 10) {
        result += array[i] + "-" + array[m] + " ";
      }
    }
  }
  console.log("các cặp số có tổng bằng 10:", result);
  alert("các cặp số có tổng bằng 10 là:"+result);
}
