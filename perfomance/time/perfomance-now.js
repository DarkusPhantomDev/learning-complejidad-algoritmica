const perfomance = require('perf_hooks');

function countNumber(n) {
	for(let i = 0; i < n; i++){
		console.log(i)
	}
}

let start = perfomance.perfomance.now();
countNumber(4);
let final = perfomance.perfomance.now();

const duration = final - start;
console.log("Ha durado: " + duration)