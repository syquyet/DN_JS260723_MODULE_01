const car = {
  name: "lambogini",
  with: 3,
  price: 30000,
  run: function () {
    alert(car.name + "đang chạy");
  },
  honk: function () {
    alert(car.name + "bấm còi pip pip");
  },
  // gọi tên
  getName: function () {
    return this.name;
  },
};
// car.run();
// khai báo với object contrutor function
// viết ho chữ cái dầu
function Person(name, age, gender, address) {
  this.lastName = latName;
  this.firstName = firstName;
  this.myAge = age;
  this.gender = gender;
  // hanh vi
  this.speak = (words) => {
    return words;
  };
  // phuong thức
  this.getFullName = () => {
    return this.firstName + "" + this.lastName;
  };
}
// xây dựng đối tượng động vật
function ex_3() {
  function Animal(name, age, gender, weight) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.weight = weight;
    this.run = function () {
      return this.name + "đang chạy rất nhanh";
    };
  }
  const cat = new Animal("Tôm", 2, "male", 3);
  console.log(cat);
  console.log(cat.run());
}

// xây dựng object class
function ex_4() {
  class Animal {
    constructor(name, age, gender, weight) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.weight = weight;
    }
    speak(words) {
      return this.name + "kêu" + words;
    }
  }
  const cat = new Animal("tôm", 2, "male", 3);
  console.log(cat);
  console.log(cat.speak("meomeo"));
}
//
function ex_5() {
  function Task(id, name, date, status, content) {
    this.Id = id;
    this.Name = name;
    this.Date = date;
    this.Status=status;
    this.Content=content;
  }
  const Task_1=new Task("task_001","bài_tập","22-08",true, "làm bài tập đầy đủ");
}
