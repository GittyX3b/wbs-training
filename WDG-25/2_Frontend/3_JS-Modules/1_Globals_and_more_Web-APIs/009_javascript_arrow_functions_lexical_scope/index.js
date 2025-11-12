const instructor = {
  name: "Garrett",
  skills: ["html", "css", "javascript"],
  sayHello() {
    console.log(`Hello my name is ${this.name}. I am your instructor`);
  },
  teach() {
    this.skills.forEach(function (s) {
      // console.log(this);
      // substituting the function declaration to an arrow function makes the inner this work !!!
      console.log(`Hey, I'm ${this?.name} I will teach you ${s.toUpperCase()}`);
    });
  },
};
instructor.sayHello();
instructor.teach();
