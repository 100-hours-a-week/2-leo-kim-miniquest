// if (true) {
// 	let isRaining = true;
// }

// if (isRaining) {
// 	console.log("It's raining!");
// }

// Reference Error block scope이기 때문에 isRaining을 참조할 수 없습니다.

// 이 스코프의 한계를 해결하려면 isRaining을 블록 밖에 선언하면됩니다.
// 전역으로 선언하는게 마음에 들지 않는다면 함수스코프로 감싸서 isRaining을 선언하면 됩니다.

let isRaining;
if (true) {
	isRaining = true;
}

if (isRaining) {
	console.log("It's raining!");
}
