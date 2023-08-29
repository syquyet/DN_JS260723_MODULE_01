const stores = [
  { id: "sp_001", name: "Sản phẩm 1", price: 100000, quantity: 10 },
  { id: "sp_002", name: "Sản phẩm 2", price: 200000, quantity: 10 },
  { id: "sp_003", name: "Sản phẩm 3", price: 300000, quantity: 10 },
  { id: "sp_004", name: "Sản phẩm 4", price: 400000, quantity: 10 },
  { id: "sp_005", name: "Sản phẩm 5", price: 500000, quantity: 10 },
];

function readerStore(data) {
  const storeElement = document.querySelector("#store");
  let storeProduct = "";
  for (let index = 0; index < data.length; index++) {
    storeProduct += `<tr>
      <td>${index + 1}</td>
      <td>${data[index].id}</td>
      <td>${data[index].name}</td>
      <td>${data[index].price}</td>
      <td>${data[index].quantity}</td>
      <td><button onclick="updateStore('${
        data[index].id
      }')"> thêm giỏ hàng</button></td>
    </tr>`;
  }
  storeElement.innerHTML = storeProduct;
}
readerStore(stores);

const carts = [
  { id: "sp_001", name: "Sản phẩm 1", price: 100000, quantity: 1 },
];
function readerCart(data) {
  const cartElement = document.querySelector("#cart");
  let cartProduct = "";
  for (let index = 0; index < data.length; index++) {
    cartProduct += `<tr>
      <td>${index + 1}</td>
      <td>${data[index].id}</td>
      <td>${data[index].name}</td>
      <td>${data[index].price}</td>
      <td>${data[index].quantity}</td>
      <td><button onclick="updatecart('${
        data[index].id
      }')"> xóa khỏi giỏ hàng</button></td>
    </tr>`;
  }

  cartElement.innerHTML = cartProduct;
}
readerCart(carts);

function updateStore(id) {
  let course;
  for (let index = 0; index < stores.length; index++) {
    if (id === stores[index].id) {
      stores[index].quantity--;
      course = stores[index];
    }
  }
  let isExist = false;
  for (let index = 0; index < carts.length; index++) {
    if (id === carts[index].id) {
      carts[index].quantity++;
      isExist = true;
    }
  }
  if (!isExist) {
    const newCourse = {
      id: course.id,
      name: course.name,
      price: course.price,
      quantity: 1,
    };
    carts.push(newCourse);
  }
  console.log(carts);
  console.log(stores);
  readerCart(carts);
  readerStore(stores);
}
function updatecart(id) {
  const numberQuantity = Number(prompt("Nhập số lượng muốn trả"));
  for (let index = 0; index < carts.length; index++) {
    if (id === carts[index].id) {
      if (carts[index].quantity < numberQuantity) {
        alert("Chỉ có thể trả tối đa " + carts[index].quantity + " sản phẩm");
        return;
      }

      carts[index].quantity -= numberQuantity;
      if (carts[index].quantity === 0) {
        carts.splice(index, 1);
      }
    }
  }
  for (let index = 0; index < stores.length; index++) {
    if (id === stores[index].id) {
      console.log(stores[index].quantity);
      stores[index].quantity += numberQuantity;
    }
  }
  console.log(carts);
  console.log(stores);
  readerCart(carts);
  readerStore(stores);
}
