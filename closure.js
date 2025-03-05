// const createCounter = () => {
// 	let count = 0;
// 	const increment = () => {
// 		count++;
// 	};

// 	const decrement = () => {
// 		count--;
// 	};

// 	const getCount = () => count;

// 	increment();
// 	increment();
// 	decrement();
// 	return getCount;
// };

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// 이렇게하면 의도한대로 안됨. let count = 0 으로 매번 새롭게 초기화 하기 때문.

const createCounter = () => {
	let count = 0;

	return {
		increment: () => count++,
		decrement: () => count--,
		getCount: () => console.log(count),
	};
};

const counter = createCounter();
counter.increment();
counter.getCount();
counter.decrement();
counter.getCount();

// return 문에 inc, dec, getCount 모두 넣어주어야한다.

const { increment, decrement, getCount } = createCounter();
increment();
getCount();
decrement();
getCount();

// 위의 예시처럼 구조분해할당을 이용하여 한꺼번에 받아올 수 있다.
