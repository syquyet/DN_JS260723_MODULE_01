// nhap vao mot so kiem tra so do co trong mang ko
function lab_06() {
  const string = prompt("nhap vao chuoi so");
  const coverArray = string.split(",", 10);
  console.log(coverArray);
  const number = Number(prompt("nhap vao mot so"));

  for (let i = 0; i < coverArray.length; i++) {
    let numberArray = Number(coverArray[i]);
    if (number == numberArray) {
      console.log(number + "co trong mang");
      return;
    }
  }
  console.log(number + "ko co trong mang");
}
// let bien= fasle; một biến để so sánh thoat vòng for
// beark chỉ thoát khỏi vòng for
// return thoát khoi function
//
function lab_07() {
  const string = prompt("nhap vao chuoi so");
  const coverArray = string.split(",", 10);
  console.log(coverArray);
  const number = Number(prompt("nhap vao mot so"));
  for (let i = 0; i < coverArray.length; i++) {
    let numberArray = Number(coverArray[i]);
    if (number == numberArray) {
      coverArray.splice(i, 1);
    }
  }
  console.log(coverArray);
}
// tu đien
function lab_08() {
  arrayVietnamese = ["chó", "mèo", "lợn", "bò", "gà"];
  arrayEnglish = ["dog", "cat", "pig", "cow", "chicken"];
  const nameAnimal = prompt("nhập tên con vật bằng tiếng anh");
  for (let i = 0; i < arrayEnglish.length; i++) {
    if (nameAnimal === arrayEnglish[i]) {
      alert(
        arrayEnglish[i] +
          " " +
          "dịnh sang tiếng việt là:" +
          " " +
          arrayVietnamese[i]
      );
      return;
    }
  }
  alert("từ bạn nhập ko tim thấy");
}
// nhap hai mảng
function lab_09() {
  const string_1 = prompt("nhap vao chuoi so a");
  const array_a = string_1.split(",", 10);
  for (let i = 0; i < array_a.length; i++) {
    if (array_a[i] % 1 !== 0) {
      alert("nhap lại dãy cac so nguyên a");
      return;
    }
  }

  const string_2 = prompt("nhap vao chuoi so b");
  const array_b = string_2.split(",", 10);
  for (let j = 0; j < array_a.length; j++) {
    if (array_b[j] % 1 !== 0) {
      alert("nhap lại dãy cac so nguyên b");
      return;
    }
  }
  console.log(array_a);
  console.log(array_b);
  const array_c = array_a.concat(array_b);
  console.log(array_c);
}
//
function lab_10() {
  const string_1 = prompt("nhap vao chuoi so a");
  const array_a = string_1.split(",", 10);
  console.log(array_a);
  const arrayNew = [];
  let index = 0;
  let max = Number(array_a[0]);
  for (let i = 0; i < array_a.length; i++) {
    const number = Number(array_a[i]);
    if (max < number) {
      max = number;
      console.log(i);
      index = i;
    }
  }
  array_a.splice(index, 1);
  arrayNew.push(max);
  console.log(arrayNew);
  console.log(array_a);
}
