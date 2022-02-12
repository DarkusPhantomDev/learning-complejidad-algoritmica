function countNumber(n) {
	for(let i = 0; i < n; i++){
		console.log(i)
	}
}

console.time('Duracion-contar')
countNumber(4);
console.timeEnd('Duracion-contar')