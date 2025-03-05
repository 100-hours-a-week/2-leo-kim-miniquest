class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	// area = () => {
	// 	return this.width * this.height;
	// };

	area() {
		return this.width * this.height;
	}

	// perimeter = () => {
	// 	return 2 * (this.width + this.height);
	// };

	perimeter() {
		return 2 * (this.width + this.height);
	}

	// 화살표 함수를 사용하면 각 인스턴스마다 새로운 함수가 생성되므로 메모리 사용이 많아 질 수 있음.
	// 프로토타입을 활용한 방법이 일반적. 위방법은 Obj.prototype.area를 참조한다.
	// 화살표 함수는 프로토타입이 아니다!
}

const myRectangle = new Rectangle(10, 20);
console.log(myRectangle.area());
console.log(myRectangle.perimeter());

// 클래스 내부에서는 const를 사용할 수 없음. 일반적인 블록 스코프가 아님!

// ✔ 일반 메서드 (method() {})는 Rectangle.prototype에 저장되므로 모든 인스턴스가 공유 → 메모리 절약
// ✔ 화살표 함수 (method = () => {})는 각 인스턴스에서 새로 생성 → 메모리 낭비 가능
// ✔ 단, this 바인딩이 필요할 경우 화살표 함수가 유용 (특히 setTimeout이나 콜백에서 사용)

// 🚀 즉, "this 바인딩이 필요 없을 때는 일반 메서드를, this 바인딩이 필요한 경우에는 화살표 함수를 사용하라!" 🎯

export default Rectangle;
