// const number = [1, 10, 20, 50];
// ten mang :number
// do dai cur mang number.lenght la tong so cac phan tu trong mang
//
function ex_01() {
  const fruits = ["cam", "xoai", "buoi", "mit", "ổi"];
  console.log("danh sach trai cay:", fruits);
  for (let i = 0; i < fruits.length; i++) console.log(fruits[i]);
}

// const pets = new Array("chó", "mèo", "gấu");
// console.log("danh sach thu cung:", pets);
// console.log(pets[0]);
// nhap vao thoong tin den khi nao cancel moi dung nhap. thong tin vao mang
// const users = [];
function ex_02() {
  let username;
  while (username !== null) {
    username = prompt("nhap vao user name");
    if (username === null) {
      break;
    }
    users.push(username);
  }
  console.log(users);
}
// join
function ex_03() {
  const stringNumber = number.join("---");
  console.log(stringNumber);
}
// concat noi phan tu 2 mang
function ex_04() {
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const c = a.concat(b);
  console.log(c);
}
// splice them,thay the xoa mot hay nhieu phan tu
function ex_05() {
  const months = ["Jan", "March", "April", "June"];
  months.splice(1, 0, "feb"); //taij vi tri thu 1 xoa 0 phan tu va them vao feb
  console.log(months);
}

function ex_06() {
  let tr = "";
  for (let row = 1; row <= 10; row++) {
    let td = "";
    for (let col = 1; col <= 9; col++) {
      td += `<td>${col}x ${row}=${col * row}</td>`;
    }
    tr += "<tr>" + td + "</tr>";
  }

  const resultElement = document.querySelector(".my-table");
  resultElement.innerHTML = tr;
  console.log(tr);
}
function lab_01() {
  const string = prompt("nhap vao chuoi so");
  const coverArray = string.split(",", 10); //tao mot mang co 10 thanh phan cach nha boi dau (,)
  if (coverArray.lenght < 10) {
    alert("nhap lai 10 so");
    return;
  }
  console.log(coverArray);
  let max_index = 0;
  let max = Number(coverArray[max_index]);
  for (let index = 0; index < coverArray.length; index++) {
    const number = Number(coverArray[index]);

    if (max < number) {
      max = number;
      max_index = index;
    }
  }
  console.log(max);
  console.log("vi tri max", max_index);
}
// hien thi thanh phan lon nhat trong mang va trung binh cac phan tu
function lab_02() {
  const string = prompt("nhap vao chuoi so");
  const coverArray = string.split(",", 10); //tao mot mang co 10 thanh phan cach nha boi dau (,)
  if (coverArray.lenght < 10) {
    alert("nhap lai 10 so");
    return;
  }
  console.log(coverArray);
  let sum = 0;
  let min = Number(coverArray[0]);
  for (let i = 0; i < coverArray.length; i++) {
    const number = Number(coverArray[i]);
    sum += number;
    if (min > number) {
      min = number;
    }
  }
  console.log(sum);
  console.log(min);
  const medium = sum / coverArray.length;
  console.log("gia tri trung binh cua mang", medium);
}
// nhap mot day dem  cac so nguyen
function lab_03() {
  const string = prompt("nhap vao chuoi so");
  const coverArray = string.split(",");
  console.log(coverArray);
  let integers = 0;
  for (let i = 0; i < coverArray.length; i++) {
    const number = Number(coverArray[i]);
    if (number < 0) {
      integers += 1;
    }
  }
  console.log("so nguyen am co trong mang la", integers);
}
