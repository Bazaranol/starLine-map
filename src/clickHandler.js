const typeRequest = async function (type) {
	const token =
		"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIiwiZG9tYWluIjoiIn0.eyJpc3MiOiJodHRwczovL21hcHMuc3RhcmxpbmUucnUiLCJpYXQiOjE3MDEyNDU1MzEuMzk0MzM2LCJ1aWQiOjF9.";
	const url =
		"https://maps.starline.ru/api/poi/v1/poi/index?page=1&PoiSearch[category]=";
	const lonS = "30.474242863278562";
	const lonE = "30.17177551708764";
	const lanS = "59.984429928138894";
	const lanE = "59.877347653770556";
	const response = await fetch(
		url +
			type +
			"&PoiSearch[bounds]=" +
			lonS +
			"," +
			lanS +
			"%3B" +
			lonE +
			"," +
			lanE +
			"&accessToken=" +
			token
	);
	const data = await response.json();

    return data.data
};
export default typeRequest;
