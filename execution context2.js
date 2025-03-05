const color = "blue";

const firstLevel = () => {
	let color = "red";

	const secondLevel = () => {
		let color = "green";
		console.log(color); // (1)
	};

	secondLevel();
	console.log(color); // (2)
};

firstLevel();
console.log(color); // (3)

// 결과 예상
// green, red, blue
// 선언 및 초기화를 잘 해 줬기 때문에 호이스팅에 의한 TDZ 관련 문제도 잘 처리 된 것 같습니다.

// 정답입니다!
