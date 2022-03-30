function test() {
	setTimeout(() => console.log(1), 0);
	console.log(2);
	console.log(3);
}

test();

function httpGetAsync(theUrl, callback) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
	};
	xmlHttp.open("GET", theUrl, true);
	xmlHttp.send(null);
}

httpGetAsync("https://picsum.photos/200/300", (data) => {
	console.log(data);
});
