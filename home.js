const tasks = [];
function todoList() {
  const inputElement = document.querySelector("#input");
  const seachElement = inputElement.value;
  tasks.push(seachElement);
  inputElement.value = "";
  hien_thi();
}
function hien_thi() {
  let result = "";
  for (let i = 0; i < tasks.length; i++) {
    result += `<ul >
      <li>
        <p>${tasks[i]}</p>
        <p>x</p>
      </li>`;
  }
  const resultElement = document.querySelector(".list-container");
  resultElement.innerHTML = result;
}
