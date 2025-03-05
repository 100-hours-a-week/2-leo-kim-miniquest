const messageMaker = (prefix) => {
	return {
		makeMessage: (postfix) => prefix + postfix,
	};
};

console.log(messageMaker("Hello, ").makeMessage("World!"));
