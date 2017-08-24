class Rectangle {
	constructor(w, h) {
		this.width = w;
		this.height = h;
	}
	area() {
		return this.width * this.height;
	}
}
var r = new Rectangle(8, 5);
console.log( r.area() );
class Square extends Rectangle {
	constructor(x) {
		super(x, x);
	}
}
var s = new Square(5);
console.log( s.area() );
