const tasks = [];
function hien_thi() {
  let result = `<tr><th>  # </th> <th> Hành động</th><th>Nhiệm vụ </th></tr>`;
  for (let i = 0; i < tasks.length; i++) {
    result += `<tr> <td> <span>${tasks[i]}</span></td><td><button>delete</button></td><td><button>edit</button></td></tr>`;
  }
  const resultElement = document.querySelector(".table");
  resultElement.innerHTML = result;
}

function lab_01() {
  const inputElement = document.querySelector("#input");
  const seachElement = inputElement.value;
  console.log(seachElement);
  tasks.push(seachElement);
  inputElement.value = "";
  console.log(tasks);
  hien_thi();
}
function lab_02() {
  const inputDeleteElement = document.querySelector("#input-delete");
  const deleteElement = inputDeleteElement.value;
  console.log(deleteElement);
  inputDeleteElement.value = "";
  for (let i = 0; i < tasks.length; i++) {
    if (deleteElement == tasks[i]) {
      tasks.splice(i, 1);
    }
  }
  console.log(tasks);
  hien_thi();
}
