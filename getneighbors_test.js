// right now, we're assuming min and max are same to get squareish pathways
getNeighbors(min, max, currentNode) {
	let currentNodes = document.querySelector('#rooms').childNodes;
	// if it doesn't have filter because it's not an array
	// Array.prototype.slice.call([], document.querySelector('#rooms').childNodes);
	let left = currentNodes.filter(left => left.x === currentNode.x - min);
	let right = currentNodes.filter(right => right.x === currentNode.x + max);
	let top = currentNodes.filter(top => top.y === currentNode.y - min);
	let bottom = currentNodes.filter(bottom => bottom.y === currentNode.y + max);
	let horizontal = left.concat(right);
	let vertical = top.concat(bottom);
	let neighbors = horizontal.concat(vertical);
	neighbors = neighbors.filter((neighbor) => {
		return neighbor.x < min && neighbor.y < min;
	}).filter((neighbor) => {
		return neighbor.x > max && neighbor.y > max;
	});
	return neighbors;
}

scanNeighbors() {
	// let neighbors = getNeighbors(1,1);
	// this looks misleading, getNeighbors(1,1) doesn't mean get neighbor to 1,1 of us.
	// it means get neighbors with min/max values of 1,1 within us.
	let currentNode = document.querySelector('#rooms').childNodes.find((node) => {
		return node.x === 0 && node.y === 0;
	});
	let neighbors = getNeighbors(2,2,currentNode);
	let freeNeighbors = neighbors.filter(neighbor => !neighbor.isChosen);
	freeNeighbors.forEach((neighbor) => {
		neighbor.classList.add('neighbor');
	});
}