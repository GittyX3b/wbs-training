// Copying the value of this
const instructor1 = {
  name: 'Garrett',
  skills: ['html', 'css', 'javascript'],
  sayHello() {
    console.log(`Hello my name is ${this.name}. I am your instructor`);
  },
  teach() {
    const copyOfThis = this;
    this.skills.forEach(function (s) {
      console.log(
        `Hey, I'm ${copyOfThis?.name} I will teach you ${s.toUpperCase()}`,
      );
    });
  },
};
instructor1.sayHello();
instructor1.teach();
// Using bind()
const instructor2 = {
  name: 'Robin',
  skills: ['html', 'css', 'javascript'],
  sayHello() {
    console.log(`Hello my name is ${this.name}. I am your instructor`);
  },
  teach() {
    this.skills.forEach(
      function (s) {
        console.log(
          `Hey, I'm ${this?.name} I will teach you ${s.toUpperCase()}`,
        );
      }.bind(this),
    );
  },
};
instructor2.sayHello();
instructor2.teach();
