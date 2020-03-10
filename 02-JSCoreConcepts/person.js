class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  fullName() {
    console.log(this.name + " " + this.surname.toUpperCase());
  }
  shortName() {
    console.log(
      this.name.charAt(0).toUpperCase() +
        ". " +
        this.surname.charAt(0).toUpperCase() +
        "."
    );
  }
}

jan = new Person("Jan", "Nowak");
ja = new Person("Johnny", "Sins");

jan.fullName();
jan.shortName();
ja.fullName();
ja.shortName();
