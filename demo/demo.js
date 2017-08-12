function distance(string) {
	var x = 0;
	var y = 0;
	for (var i of string) {
		if (i == 'N') {
			y++;
		}
		if (i == 'S') {
			y--;
		}
		if (i == 'E') {
			x++;
		}
		if (i == 'W') {
			x--;
		}
	}
	var d = Math.sqrt((x ** 2) + (y ** 2));
	console.log(d);
}
distance('NNEES');