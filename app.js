import User from "./userProfile.js";
import { add, subtract } from "./operations.js";

const user1 = new User("Leo", 32);
const user2 = new User("Cindy", 27);

console.log(
	`I and My Sister's average age is ${
		add(user1.age, user2.age) / 2
	} and the difference of age is ${subtract(user1.age, user2.age)}`
);
