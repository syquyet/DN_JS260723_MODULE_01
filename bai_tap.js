function bai_tap_01() {
  const a = Number(prompt("nhap vao so a"));
  const b = Number(prompt("nhap vao so b"));
  const c = Number(prompt("nhap vao so c"));
  const delta = b * b - 4 * a * c;

  if (delta < 0) {
    console.log("phuong trinh vo nghiem");
  } else if (delta == 0) {
    console.log(" phuong trinh co nghiem kep la", b / (2 * a));
  } else {
    console.log(
      " phuong trinh co 2 nghiem phan biet :" +
        "x1=" +
        (-b - marth.sqrt(delta)) / (2 * a)
    );
    console.log(
      " phuong trinh co 2 nghiem phan biet :" +
        "x2=" +
        (-b + marth.sqrt(delta)) / (2 * a)
    );
  }
}
// nhap vao 3 canh kiem tra xem cos phai tam giac ko
function bai_tap_03() {
  const a = Number(prompt("nha canh a"));
  const b = Number(prompt("nha canh b"));
  const c = Number(prompt("nha canh c"));
  if (a > 0 && b > 0 && c > 0) {
    if (a + b > c && a + c > b && b + c > a) {
      console.log("a,b,c la ba canh cua tam giac");
    } else {
      console.log("ko phai ba canh cua tam giac");
    }
  } else {
    alert("nha lai 3 so a,b,c");
  }
}
