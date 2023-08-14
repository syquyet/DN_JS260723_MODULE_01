// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();

//  vis du dieu kien
function ex_01() {
  const weight = Number(prompt("nhap can nang"));
  const height = Number(prompt("nhap chieu cao"));
  const bmi = weight / (height * height).toFixed(1);
  let type = "";
  let level = "";
  if (bmi < 18.5) {
    type = "gầy";
  } else {
    if (bmi < 24.9) {
      type = "binh thuong";
    } else {
      type = "thua can";
    }
    if (bmi < 29.9) {
      level = "tien beo phi";
    } else if (bmi < 34.9) {
      level = "beo phi cap do I";
    } else if (bmi < 34.9) {
      level = "beo phi cap do II";
    } else {
      level = "beo phi cap do III";
    }
    console.log(type);
    console.log(level);
  }
}

// tim cung hoang ddao
function ex_02() {
  const Date = Number(prompt("nhap ngay sinh"));
  const month = Number(prompt("nhap thang sinh"));
  if (month < 0 || month > 12) {
    alert("phai nhanhp lai thang tu 1--> 12");
    return;
  }
  if (Date < 0 || Date > 31) {
    alert("phai nhap lai ngay tu 1-->31");
    return;
  }
  let Zodiac = "";
  if ((month == 3 && Date >= 21) || (month == 4 && Date <= 19)) {
    Zodiac = "bach duong";
  } else if ((month == 4 && Date >= 20) || (month == 5 && Date <= 20)) {
    Zodiac = "kim nguu";
  } else if ((month == 5 && Date >= 21) || (month == 6 && Date <= 21)) {
    Zodiac = "son tu";
  } else if ((month == 6 && Date >= 22) || (month == 7 && Date <= 22)) {
    Zodiac = "cu giai";
  } else if ((month == 7 && Date >= 23) || (month == 8 && Date <= 22)) {
    Zodiac = "su tu";
  } else if ((month == 8 && Date >= 23) || (month == 9 && Date <= 22)) {
    Zodiac = "xu nu";
  } else if ((month == 9 && Date >= 23) || (month == 10 && Date <= 23)) {
    Zodiac = "thien binh";
  } else if ((month == 10 && Date >= 24) || (month == 11 && Date <= 21)) {
    Zodiac = "ho cap";
  } else if ((month == 11 && Date >= 22) || (month == 12 && Date <= 21)) {
    Zodiac = "nhan ma";
  } else if ((month == 12 && Date >= 22) || (month == 1 && Date <= 19)) {
    Zodiac = "ma ket";
  } else if ((month == 1 && Date >= 20) || (month == 2 && Date <= 18)) {
    Zodiac = "bao binh";
  } else if ((month == 2 && Date >= 19) || (month == 3 && Date <= 20)) {
    Zodiac = "song ngu";
  }
  alert("ban thuoc cung :" + Zodiac);
}
// kiem tra nawm nhuan
function ex_03() {
  const year = Number(prompt("nhap vao mot naw"));
  let isLeapyear = false;
}
// vi du switch case
function ex_04() {
  const month = Number(prompt("nhap thang vao"));
  let result = "";
  switch (month) {
    case 1:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      result = "thang co 31";
      break;
    case 2:
      result = "thang co 28 nhay";
      break;
    case 9:
    case 10:
    case 11:
    case 12:
      result = "thang co 30";
      break;
    default:
      alert("nhap lai thang");
  }
  console.log(result);
}
function ex_05() {
  const Date = Number(prompt("nhap ngay sinh"));
  const month = Number(prompt("nhap thang sinh"));
  switch (true) {
    case month < 0 || month > 12 || Date < 0 || Date > 31:
      alert("nhap lai ngay thang");
      break;
      return;
  }

  let Zodiac = "";
  switch (true) {
    case (month == 3 && Date >= 21) || (month == 4 && Date <= 19):
      Zodiac = "bach-duong";
      break;
    case (month == 4 && Date >= 20) || (month == 5 && Date <= 20):
      Zodiac = "kim-nguu";
      break;
    case (month == 5 && Date >= 21) || (month == 6 && Date <= 21):
      Zodiac = "son-tu";
      break;
    case (month == 6 && Date >= 22) || (month == 7 && Date <= 22):
      Zodiac = "cu-giai";
      break;
    case (month == 7 && Date >= 23) || (month == 8 && Date <= 22):
      Zodiac = "su-tu";
      break;
    case (month == 8 && Date >= 23) || (month == 9 && Date <= 22):
      Zodiac = "xu-nu";
      break;
    case (month == 9 && Date >= 23) || (month == 10 && Date <= 23):
      Zodiac = "thien- binh";
      break;
    case (month == 10 && Date >= 24) || (month == 11 && Date <= 21):
      Zodiac = "ho-cap";
      break;
    case (month == 11 && Date >= 22) || (month == 12 && Date <= 21):
      Zodiac = "nhan-ma";
      break;
    case (month == 12 && Date >= 22) || (month == 1 && Date <= 19):
      Zodiac = "ma-ket";
      break;
    case (month == 1 && Date >= 20) || (month == 2 && Date <= 18):
      Zodiac = "bao-binh";
      break;
    case (month == 2 && Date >= 19 && Date < 29) || (month == 3 && Date <= 20):
      Zodiac = "song-ngu";
      break;
    default:
      break;
  }
  console.log("ban thuoc cung :", Zodiac);
  const resultElement = document.querySelector("#result-lab-04");
  resultElement.innerHTML = `<p>Bạn thuộc cung hoàng đạo: ${Zodiac}</p>.<img src="image/images/${Zodiac}.png" width="200"/>`;
}
// tinh tien dien su dung
function ex_06() {
  const kWh = Number(prompt("nhap so dien su dung"));
  let monney = "";
  const monneyStep1 = 50 * 1728;
  const monneyStep2 = 50 * 1786;
  const monneyStep3 = 100 * 2074;
  const monneyStep4 = 100 * 2612;
  const monneyStep5 = 100 * 2919;
  if (kWh <= 50) {
    monney = kWh * 1728;
  } else if (kWh <= 100) {
    monney = monneyStep1 + (kWh - 50) * 1786;
  } else if (kWh <= 200) {
    monney = monneyStep1 + monneyStep2 + (kWh - 100) * 2074;
  } else if (kWh <= 300) {
    monney = monneyStep1 + monneyStep2 + monneyStep3 + (kWh - 200) * 2612;
  } else if (kWh <= 400) {
    monney =
      monneyStep1 +
      monneyStep2 +
      monneyStep3 +
      monneyStep4 +
      (kWh - 300) * 2919;
  } else {
    monney =
      monneyStep1 +
      monneyStep2 +
      monneyStep3 +
      monneyStep4 +
      monneyStep5 +
      (kWh - 400) * 3015;
  }
  console.log("so tien dien da dung:" + monney + "VND");
}
// tinh thue thu nhap ca nhan
function ex_07() {
  const salary = Number(prompt("nhap vao tien luong"));
  let;
}
