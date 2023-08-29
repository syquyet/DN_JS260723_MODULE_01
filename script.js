function ex_01() {
  const username = prompt("nhập tên từ người dùng");
  const converUsername = JSON.stringify(username);
  localStorage.setItem("username", converUsername);
  //lấy về
  reader();
}
function reader() {
  const usernameGet = localStorage.getItem("username");
  const data = JSON.parse(usernameGet);
  const pElement = document.querySelector("#name");
  console.log(pElement);
  pElement.innerHTML = `xin chào ${data}`;
}
reader_name();
function ex_02() {
  const inputElement = document.querySelector("#input-user");
  const inputElementValue = inputElement.value;
  inputElement.value = "";
  //   console.log(inputElementValue);
  const converUsername = JSON.stringify(inputElementValue);
  localStorage.setItem("name", converUsername);
  reader_name();
}
function reader_name() {
  const usernameDB = localStorage.getItem("name");
  const dataName = JSON.parse(usernameDB);
  const pElement = document.querySelector("#readername");
  const buttonElement = document.querySelector("#btn");
  if (dataName !== null) {
    pElement.innerHTML =
      "xin chào" +
      dataName +
      " <button onclick='delete_name()' > delete</button>";
    buttonElement.textContent = "edit";
  } else {
    pElement.innerHTML = "";
    buttonElement.textContent = "add";
  }
}

function delete_name() {
  localStorage.removeItem("name");
  reader_name();
}
// hhhhhhhhhhhhhhhhhhh
reader_player();
function add() {
  // lấy mảng về
  const arrayPlayeDB = localStorage.getItem("name");
  const dataarrayPlayer = JSON.parse(arrayPlayeDB) || [];
  console.log(dataarrayPlayer);
  //   nhập tên cầu thủ input
  const inputE = document.querySelector("#input");
  //   console.log(input);
  const dataInput = inputE.value;
  inputE.value = "";
  console.log("dâtaIn", dataInput);
  //   push tên cầu thr vào mảng
  dataarrayPlayer.push(dataInput);
  console.log(dataarrayPlayer);
  //   đẩy lên mảng mới
  const newarrayPlayer = JSON.stringify(dataarrayPlayer);
  localStorage.setItem("name", newarrayPlayer);
  reader_player();
}
// hiển thị
function reader_player() {
  // lấy mảng về
  const userPlayer = localStorage.getItem("name");
  const dataArrayPlayer = JSON.parse(userPlayer) || [];
  //   truy vấn và hienr thị
  const listPlayer = document.querySelector("#reader-player");
  let resurl = "";
  dataArrayPlayer.forEach((element, index) => {
    resurl += `<ul>
    <li>${element}<button onclick="delete_player(${index})">delete</button></li>
  </ul>`;
  });
  listPlayer.innerHTML = resurl;
}
// delete
function delete_player(index) {
  console.log(index);
  //   lấy mảng về
  const userPlayer = localStorage.getItem("name");
  const dataarrayPlayer = JSON.parse(userPlayer)||[];
  // xóa thành viên
  dataarrayPlayer.splice(index, 1);
  console.log(dataarrayPlayer);
  //  dẩy lên
  const newarrayPlayer = JSON.stringify(dataarrayPlayer);
  localStorage.setItem("name", newarrayPlayer);
  //   hiển thị
  reader_player();
}
function delete_all() {
  localStorage.removeItem("name");
  reader_player();
}
