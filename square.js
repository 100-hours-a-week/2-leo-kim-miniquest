import Rectangle from "./rectangle.js";

class Square extends Rectangle {
	isSquare() {
		return this.width === this.height;
	}
}

const mySquare = new Square(10, 15);
console.log(mySquare.isSquare());
