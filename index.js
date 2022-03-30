// function test() {
// 	setTimeout(() => console.log(1), 0);
// 	console.log(2);
// 	console.log(3);
// }

// test();

// function httpGetAsync(theUrl, callback) {
// 	var xmlHttp = new XMLHttpRequest();
// 	xmlHttp.onreadystatechange = function () {
// 		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
// 	};
// 	xmlHttp.open("GET", theUrl, true);
// 	xmlHttp.send(null);
// }

// httpGetAsync("https://picsum.photos/200/300", (data) => {
// 	console.log(data);
// 	document.getElementById("img_1").setAttribute("src", data.responseURL);

// 	httpGetAsync("https://picsum.photos/200/300", (data) => {
// 		document.getElementById("img_2").setAttribute("src", data.responseURL);

// 		httpGetAsync("https://picsum.photos/200/300", (data) => {
// 			document.getElementById("img_3").setAttribute("src", data.responseURL);
// 		});
// 	});
// });

//Promises

function httpGetAsync1(theUrl, resolve) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);
	};
	xmlHttp.open("GET", theUrl, true);
	xmlHttp.send(null);
}

const currentPromise = new Promise((resolve, reject) => {
	// let condition = true;

	// if (condition) {
	// 	setTimeout(() => {
	// 		resolve("Success");
	// 	}, 3000);
	// } else {
	// 	reject("Error");
	// }

	httpGetAsync1("https://picsum.photos/200/300", resolve);
});

const currentPromise1 = new Promise((resolve, reject) => {
	// let condition = true;

	// if (condition) {
	// 	setTimeout(() => {
	// 		resolve("Success");
	// 	}, 3000);
	// } else {
	// 	reject("Error");
	// }

	httpGetAsync1("https://picsum.photos/200/300", resolve);
});

const currentPromise2 = new Promise((resolve, reject) => {
	// let condition = true;

	// if (condition) {
	// 	setTimeout(() => {
	// 		resolve("Success");
	// 	}, 3000);
	// } else {
	// 	reject("Error");
	// }

	httpGetAsync1("https://picsum.photos/200/300", resolve);
});

//Khi thanh cong thi then se dc goi
// currentPromise
// 	.then((data) => {
// 		console.log(data);
// 		document.getElementById("img_1").setAttribute("src", data.responseURL);

// 		return currentPromise1;
// 	})
// 	.then((data) => {
// 		document.getElementById("img_2").setAttribute("src", data.responseURL);

// 		return currentPromise2;
// 	})
// 	.then((data) => {
// 		document.getElementById("img_3").setAttribute("src", data.responseURL);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

const executeAsync = async () => {
	try {
		const res = await currentPromise;
		document.getElementById("img_1").setAttribute("src", res.responseURL);
		const res1 = await currentPromise1;
		document.getElementById("img_2").setAttribute("src", res1.responseURL);
		const res2 = await currentPromise2;
		document.getElementById("img_3").setAttribute("src", res2.responseURL);
	} catch (err) {
		console.log(err);
	}
};

executeAsync();
