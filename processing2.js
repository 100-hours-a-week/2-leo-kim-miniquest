console.log("Start");
setTimeout(() => {
	console.log("Async Operation Complete");
}, 1000);
console.log("End");

// setTimeOut은 비동기 논블로킹함수로서
// setTimeOut이 실행되는 과정에서 console.log("End")의 호출을 막지 않으므로
// start -> end -> async operation complete 순서대로 출력됩니다.
