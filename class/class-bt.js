function lab_01() {
  let a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ];
  console.log(a);
  for (let i = 0; i < a.length; i++) {
    console.log("row" + i);
    for (let j = 0; j < a[i].length; j++) {
      console.log(a[i][j]);
    }
  }
}
// viet chuong trinh khai bao mot mang ki tu dem ki tu co trong mang
function lab_02() {
  const string = prompt("nhap vao chuoi ki tu");
  const coverString = string.split("");
  console.log(coverString);
  let result = "";
  for (let i = 0; i < coverString.length; i++) {
    let count = 1;
    for (let j = i + 1; j < coverString.length; j++) {
      if (coverString[i] === coverString[j]) {
        count++;
        coverString.splice(j, 1);
        j--;
      }
    }

    console.log("ky tu" + coverString[i] + "lap lai" + count + "lan");
    result += `<p> ky tu ${coverString[i]} lap lai ${count} lan </p>`;
  }

  const resultElement = document.querySelector("#result-lab-02");
  resultElement.innerHTML = result;
}
// chen dau "-"neeus ddos laf 2 so chan lien ke
function lab_03() {
  const string = prompt("nhap vao chuoi ki tu");
  console.log(string);
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (Number(string[i]) % 2 == 0 && Number(string[i + 1]) % 2 == 0) {
      result += string[i] + "-";
    } else {
      result += string[i];
    }
  }

  console.log(result);
}

// nhap vao chuoi neeus co kis tuwj trung nhau thi xoa
function lab_04() {
  const string = prompt("nhap vao chuoi ki tu");
  const arrayString = string.split(",");
  console.log(arrayString);
  for (let i = 0; i < arrayString.length; i++) {
    for (let j = i + 1; j < arrayString.length; j++) {
      if (arrayString[i] === arrayString[j]) {
        arrayString.splice(j, 1);
        j--;
        console.log(arrayString);
      }
    }
  }
  console.log(arrayString);
}
//nhap vao chuoi so sap xe p tu nho dden lon
function lab_05() {
  const string_1 = prompt("nhap vao chuoi so ");
  const arrayNumber = string_1.split(",", 10);
  console.log(arrayNumber);
  const arrayNew = [];
  for (let j = 0; j < arrayNumber.length; j++) {
    let index = 0;
    let min = Number(arrayNumber[0]);
    for (let i = 0; i < arrayNumber.length; i++) {
      const number = Number(arrayNumber[i]);
      if (min > number) {
        min = number;
        index = i;
      }
    }
    arrayNumber.splice(index, 1);
    arrayNew.push(min);
    j--;
    console.log(arrayNumber);
    console.log(arrayNew);
    
  }
}
