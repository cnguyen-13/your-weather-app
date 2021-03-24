function generateRandomIndexs(length: number): number[] {
	const firstIdx: number = Math.floor(Math.random() * length)
	let secondIdx: number = Math.floor(Math.random() * length)
	while (secondIdx === firstIdx) {
		secondIdx = Math.floor(Math.random() * length)
	}

	return [firstIdx, secondIdx]
}

export { generateRandomIndexs }
