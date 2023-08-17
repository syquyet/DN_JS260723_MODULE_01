const arrayLink = [];
function lab_03() {
  //funcition hiển thị hình ảnh.........
  const inputLink = document.querySelector("#input");
  const linkImage = inputLink.value;
  console.log(linkImage);
  arrayLink.push(linkImage);
  inputLink.value = "";
  let result = "";
  for (const link of arrayLink) {
    result += `<img
    src="${link}"
    alt=""
   />`;
  }

  const resultLink = document.querySelector(".album-image");
  resultLink.innerHTML = result;
}
