class Cars {
  constructor(options) {
    this.model = options.model;
    this.color = options.color;
    this.wheels = options.wheels;
  }
  start() {
    console.log("Машина заведена");
  }
}

class Car1Parameter extends Cars {
  constructor(options) {
    super(options);
    this.model = options.model;
    this.color = options.color;
    this.wheels = options.wheels;
    this.saloncolor = options.salonColor;
    this.spareTier = options.spareTier;
  }
}

const Car1 = new Car1Parameter({
  model: "Mercedes",
  color: "black",
  wheels: 4,
  salonColor: "skin",
  spareTier: false,
});

Car1.start();

console.log(Car1)

class Car2Parameter extends Cars {
  constructor(options2) {
    super(options2);
    this.model = options2.model;
    this.color = options2.color;
    this.wheels = options2.wheels;
    this.saloncolor = options2.salonColor;
    this.spareTier = options2.spareTier;
  }
}

const Car2 = new Car2Parameter({
  model: "BMW",
  color: "silver",
  wheels: 4,
  salonColor: "red",
  spareTier: true,
});

Car2.start();

console.log(Car2)

class Car3Parameter extends Cars {
  constructor(options3) {
    super(options3);
    this.model = options3.model;
    this.color = options3.color;
    this.wheels = options3.wheels;
    this.salonColor = options3.saloncolor;
    this.spareTier = options3.spareTier;
  }
}

const Car3 = new Car3Parameter({
  model: "Audi",
  color: "white",
  wheels: 4,
  salonColor: "black",
  spareTier: true,
});

Car3.start();

console.log(Car3)

///светофор

class trafficLight {
  constructor(red, yellow, green) {
    this.red = document.querySelector(red);
    this.yellow = document.querySelector(yellow);
    this.green = document.querySelector(green);
  }

  trafficColor(color) {
    this.red.classList.remove('active');
    this.yellow.classList.remove('active');
    this.green.classList.remove('active');

    if (color.toLowerCase() === 'красный') {
      this.red.classList.add('active');
      alert('Стоп!');

    } else if (color.toLowerCase() === 'желтый') {

      this.yellow.classList.add('active');
      alert('Внимание, ждать!');
    } else if (color.toLowerCase() === 'зеленый') {
      this.green.classList.add('active');
      alert('Можно идти!');
    } else {
      alert('Введите цвета!!!');
    }
  }
}

const trafficLight1 = new trafficLight('.red', '.yellow', '.green');

const colors = prompt('Напишите цвета сфетофора (красный, желтый или зеленый');
trafficLight1.trafficColor(colors);

