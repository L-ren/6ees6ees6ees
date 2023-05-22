class Bee extends Grub {
  // call super method in subclass constructor if using this keyword or constructor method
  constructor() {
    super(); // instantiates parent class
    this.age  = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing'
  }
};
