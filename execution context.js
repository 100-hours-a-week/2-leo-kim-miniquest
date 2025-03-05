const message = "Hello, JavaScript!";

const showMessage = () => {
	console.log(message); // A
	let message = "Hello, ES6!";
	console.log(message); // B
};

showMessage();

// 에러뜨지않나...? 싶었는데
// 에러 뜨네요
// let message = 'Hello, ES6!'; 이 재선언이 되었기 때문에.. 라고 생각했는데
// let message = "Hello, ES6!"를 한 줄 위로 옮기면 문제가 없다. 즉, 재선언이 문제가 아니다.
// const, let은 블록 스코프를 가지기 때문에 블록 안에서는 상관 x

// TDZ 때문
// let message로 인해 호이스팅되어 선언만 된 상태인데(TDZ에 있는 상태)
// 그것에 초기화가 되지 않은 상태로 콘솔을 찍어 reference error
