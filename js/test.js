var fns = [];

for (var i = 0; i < 10; i++) {
	fns[i] = (function () {
		console.log(i);
	})(i);
}

fns[3]();
