function bai_tap_01() {
  const Students = [
    {
      name: "học sinh1",
      age: 20,
      mark: 8,
    },
    {
      name: "học sinh2",
      age: 25,
      mark: 9,
    },
    {
      name: "học sinh3",
      age: 30,
      mark: 5,
    },
  ];

  for (const Student of Students) {
    if (Student.mark > 8) {
      Student.rank = "giỏi";
    } else if (Student.mark >= 7) {
      Student.rank = "khá";
    } else {
      Student.rank = "trung bình";
    }
  }
  console.log(Students);
}
//
let courses = [
  { name: "HTML", status: true },
  { name: "CSS", status: true },
  { name: "JS", status: false },
];
function bai_tap_02() {
  let action;
  do {
    action = prompt("Nhập C/R/U/D để thực hiện hành động, nhập E để thoát");
    switch (action) {
      case "C":
        create();
        break;
      case "R":
        read();
        break;
      case "U":
        update();
        break;
      case "D":
        _delete();
        break;
      case "E":
        break;
      default:
        alert("Vui lòng nhập đúng C/R/U/D hoặc E để thoát!! ");
    }
  } while (action !== "E");
}

function create(index) {
  // B1: Nhập thông tin khóa học
  const courseName = prompt("Nhập tên khóa học");
  const courseStatus = prompt("Nhập trạng thái khóa học");

  //   B2: Tạo đối tượng khóa học
  const newCourse = {
    name: courseName,
    status: courseStatus,
  };
  if (index > 0 || index === 0) {
    courses.splice(index, 1, newCourse);
  }
  //   B3: Lưu khóa học vào mảng
  courses.push(newCourse);

  // B4: In ra
  console.log(courses);
  read();
}
function read() {
  for (let index = 0; index < courses.length; index++) {
    const course = courses[index];
    console.log(`${index + 1}.`, course.name + " " + "satus:", course.status);
  }
}
function update() {}
function _delete() {
  console.log("_delete!!!");
}

// mua sản phẩm

const stores = [
  { id: 1, name: "milk", count: 100 },
  { id: 1, name: "yakult", count: 100 },
  { id: 1, name: "butter", count: 100 },
];
const carts = [];
function bai_tap_03() {
  let action;
  do {
    action = prompt("Nhập C/R/U/D để thực hiện hành động, nhập E để thoát");
    switch (action) {
      case "C":
        create();
        break;
      case "R":
        read();
        break;
      case "U":
        update();
        break;
      case "D":
        _delete();
        break;
      case "E":
        break;
      default:
        alert("Vui lòng nhập đúng C/R/U/D hoặc E để thoát!! ");
    }
  } while (action !== "E");
}
// tìm và thêm sản phẩm
function create() {
  const nameProduct = prompt("nhập tên mặt hàng muốn mua");
  for (let index = 0; index < stores.length; index++) {
    if (nameProduct === stores[index].name) {
      const product = {
        id: stores[index].id,
        name: stores[index].name,
        count: 1,
      };
      carts.push(product);
      stores[index].count -= 1;
      break;
    } else {
      console.log("ko tìm thấy sản phẩm");
    }
  }

  console.log(stores);
  console.log(carts);
}

function read() {
  console.log(stores);
  console.log(carts);
}
function update() {
  const nameProduct = prompt("nhập tên mặt hàng muốn update");
  for (let index = 0; index < carts.length; index++) {
    
    if (nameProduct === carts[index].name) {
      const numberProduct = Number(prompt("số sản phẩm muốn update"));
      carts[index].count += numberProduct;
      for (let index = 0; index < stores.length; index++) {
        if (nameProduct === stores[index].name) {
          stores[index].count -= numberProduct;
        }
      }
    } else {
      alert("Không có hàng trong cart ");
    }
    console.log(stores);
    console.log(carts);
  }
}
