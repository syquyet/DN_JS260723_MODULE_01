let person = {
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function () {
    alert(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        "."
    );
  },
  greeting: function () {
    alert("Hi! I'm " + this.name[0] + ".");
  },
};
//  person.bio();
//  person.greeting();

person["eyes"] = "hazel";
person.farewell = function () {
  alert("Bye everybody!");
};
// person["eyes"];
// person.farewell();
person.age = 45;
person["name"]["last"] = "Cratchit";

alert(person.age);
person["name"]["last"];




let myDataName = "height";
let myDataValue = "1.75m";
person[myDataName] = myDataValue;
alert(person.height);




let apple = new function() {
    this.type = "macintosh";
    this.color = "red";
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };
 }
 apple.color = "reddish";
alert(apple.getInfo());