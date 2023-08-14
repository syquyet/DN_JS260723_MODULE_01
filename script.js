function bai_tap_01() {
  for (let i = 0; i < 5; i++) {
    console.log("lawp lan thu :", i + 1);
  }
}
// in bang cuu chung
function bai_tap_02() {
  for (let i = 1; i <= 10; i++) {
    console.log(`6 x ${i}=${6 * i}`);
  }
}

// nhap vao mot so bat ki
function bai_tap_03() {
  const number = Number(prompt("nhap mot so"));
  if (number < 1 || number > 9 || isNaN(number)) {
    alert("nhap lai so tu 1-->9");
    return;
  }
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `<p>${number} x ${i}=${number * i}</p>`;

    console.log(`${number} x ${i}=${number * i}`);
  }
  const resultElement = document.querySelector("#result-ex-03");
  resultElement.innerHTML = result;
}

function bai_tap_04() {
  for (let i = 0; i <= 20; i += 2) {
    console.log("cac so chawn tu 0-->20 la", i);
  }
}
//vi du
function bai_tap_05() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log("CHU HOA");
    } else {
      console.log("chu thuong");
    }
  }
}
// vi du vong lap white
function bai_tap_06() {
  let sum = 0;
  let count = 0;
  let i = 0;
  while (count < 5) {
    count++;
    sum += i;
  }
  i++;
  console.log("tong 5 so chan dau tien", sum);
}
function bai_tap_07() {
  for (let m = 1; m <= 9; m++) {
    console.log("bang cuu chuong", m);
    for (let i = 1; i <= 10; i++) {
      result += `<p>${m} x ${i}=${m * i}</p>`;

      console.log(`${m} x ${i}=${m * i}`);
    }
  }
}

// nhap vao moot so thoong baos la so nguyen to
function bai_tap_08() {
  const number = Number(prompt("Nhập vào một số"));
  if (number < 2) {
    alert(" ko phair so nguyen to");
    return;
  }
  let isPrime = true;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    alert(number + "la so nguyen to");
  } else {
    alert(number + "ko phai so nguyen to");
  }
}
function bai_tap_09() {
  const number = Number(prompt("nhap vao mot so"));
  if (number < 2 || number > 100) {
    alert("nhap lai so");
  }
  for (let i = 2; i < number; i++) {
    if (i % 2 == 0) {
      console.log("binh phuong cua" + i + "la:", i * i);
    }
  }
}
// in mau ngau nhien
function bai_tap_10() {
  for (let i = 0; i < 10; i++) {
    const r = parseInt(Math.random() * 255);
    const g = parseInt(Math.random() * 255);
    const b = parseInt(Math.random() * 255);
    const color = `rgb(${r},${g},${b})`;

    console.log("%cRikkei Academy", `color:${color}`);
  }
}
// tim so chia het cho 3,5
function bai_tap_11() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      if (i % 5 == 0) {
        console.log("FizzBuzz");
      } else {
        console.log("Fizz");
      }
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
// tim so hoan hảo
function bai_tap_12() {
  const number = Number(prompt("nhap mot so"));
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }
  if (sum == number) {
    alert(number + "la so hoan hao");
  } else {
    alert(number + "ko la so hoan hao");
  }
}
// tinh gia thua mot so nguyen dương
function bai_tap_13() {
  const number = Number(prompt("nhap mot so"));
  if (number < 1) {
    alert("nhap lại so nguyen");
  }
  let volume = 1;
  for (let i = 1; i <= number; i++) {
    volume *= i;
  }
  alert("giai thua cua " + number + "la" + volume);
}
// choi game
function bai_tap_14() {
  const number = parseInt(Math.random() * 10) + 1;
  console.log(number);
  count = 0;
  let numberGess = "";
  do {
    numberGess = Number(prompt("nhập vào một so"));
    if (numberGess === number) {
      alert("ban chien thang");
      break;
    } else if (numberGess > number) {
      alert("lon hon so random");
    } else {
      alert("nho hơn random");
    }
    count++;
  } while (count < 3);
}
// break ket thúc vong lặp
// continue ket thuc lần lặp-->lặp tiếp
// vẽ hình chữ nhật
function bai_tap_15() {
  let result = "";

  const resultElement = document.querySelector("#result-ex-04");
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 5; j++) {
      result += `<span>*</span>`;
      resultElement.innerHTML = result;
    }
  }
}
function bai_tap_17() {
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 5; j++) {
      document.write("*");
    }
    document.write("<br />");
  }
}
function bai_tap_16() {
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 5; j++) {
      if ((i == 2 || i == 3) && (j == 2 || j == 3 || j == 4)) {
        document.write(" ");
      } else {
        document.write("*");
      }
    }
    document.write("<br />");
  }
}
