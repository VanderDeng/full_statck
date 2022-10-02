var o1 = {
	text: "o1",
	fn: function () {
		console.log(this.text);
	},
};

var o2 = {
	text: "o2",
	fn: o1.fn,
};

var o3 = {
	text: "o3",
	fn: function () {
		o1.fn();
	},
};

o3.fn();
