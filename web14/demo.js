class Circle {
	constructor(r) {
		this.radius = r;
	}
	area() {
		return Math.PI * this.radius * this.radius;
	}
}
var c = new Circle(5);
var a = c.area();
console.log(a);