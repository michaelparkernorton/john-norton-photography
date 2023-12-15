
let first = 0;
let second = 0;
let third = 0;
let fourth = 0
let fifth = 0;
let sixth = 0;
let remainder = 0;
let color = "#"
let array = []

export function colorArray() {
	for (let index = 0; index < 64; index++) {
		remainder = index;
		if (remainder >= 32) {
			sixth = 1;
			remainder -= 32;
		} 
		if (remainder >= 16) {
			fifth = 1;
			remainder -= 16;
		}
		if (remainder >= 8) {
			fourth = 1;
			remainder -= 8;
		}
		if (remainder >= 4) {
			third = 1;
			remainder -= 4;
		}
		if (remainder >= 2) {
			second = 1;
			remainder -= 2;
		}
		if (remainder == 1) {
			first = 1;
		}
	
		console.log("index: " + index)
		color = "#" + sixth + fifth + fourth + third + second + first;
		array.push(color);
		console.log(color);
	
	 first = 0;
	 second = 0;
	 third = 0;
	 fourth = 0
	 fifth = 0;
	 sixth = 0;
	}
	return array;
}

console.log(array);