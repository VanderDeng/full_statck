const flights = [
	{ origin: "MEL", destination: "HKG" },
	{ origin: "HKG", destination: "CAN" },
];

const getStops = (flights) => {
	const filtered = flights.filter(
		(tag, index, array) =>
			array.findIndex(
				(t) =>
					t.origin == tag.origin && t.destination == tag.destination
			) == index
	);
	return filtered.length === 1 ? "Direct" : filtered.length + "stops";
};

getStops(flights);
