const tasks = [];

function lab_01() {
  const inputElement = document.querySelector("#input");
  const seachElement = inputElement.value;
  tasks.push(seachElement);
  inputElement.value = "";
  hien_thi();
}
function hien_thi() {
  let result = "";
  for (let i = 0; i < tasks.length; i++) {
    result += `<tr class="btn-container">
    <td> <p>${tasks[i]}</p></td>
    <td><button id="btn-delete" onclick="buttonDelete(${i})">Delete</button></td>
    <td><button id="btn-edit" onclick="buttonEdit(${i})">Edit</button></td>
    </tr>`;
  }
  const resultElement = document.querySelector(".table");
  resultElement.innerHTML = result;
}
function buttonDelete(i) {
  tasks.splice(i, 1);
  hien_thi();
}
function buttonEdit(i) {
  const inputElement = document.querySelector("#input");
  const seachElement = inputElement.value;
  inputElement.value = "";
  tasks.splice(i, 1, seachElement);
  hien_thi();
}

// tạo nút delete rời
// function lab_02() {
//   const inputDeleteElement = document.querySelector("#input-delete");
//   const deleteElement = inputDeleteElement.value;
//   console.log(deleteElement);
//   inputDeleteElement.value = "";
//   for (let i = 0; i < tasks.length; i++) {
//     if (deleteElement == tasks[i]) {
//       tasks.splice(i, 1);
//     }
//   }
//   console.log(tasks);
//   hien_thi();
// }
