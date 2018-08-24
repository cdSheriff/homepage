const resourcemaster = {
	"draw": [
		{
			"typ": "draw",
			"handle": "glue draw",
			"name": "lens fixturing",
			"size": 308,
			"white": 1,
			"src": "./resources/plate 400x.jpeg",
			"flavor": "a"
		},
		{
			"typ": "draw",
			"handle": "top draw",
			"name": "lens fixturing",
			"size": 308,
			"white": 1,
			"src": "./resources/lid 400x.jpeg",
			"flavor": "a"
		},
		{
			"typ": "draw",
			"handle": "filter",
			"name": "filter box",
			"size": 256,
			"white": 1,
			"src": "./resources/filter 400x.png",
			"flavor": "a",
		},
		{
			"typ": "draw",
			"handle": "acrylic",
			"name": "plenum",
			"size": 256,
			"white": 1,
			"src": "./resources/acrylic 400x.png",
			"flavor": "a"
		},
		{
			"typ": "draw",
			"handle": "frame draw",
			"name": "furnace basket",
			"size": 258,
			"white": 1,
			"src": "./resources/frame drawing 400x.jpeg",
			"flavor": "a"
		},
		{
			"typ": "draw",
			"handle": "frame pic",
			"name": "furnace basket",
			"size": 350,
			"white": 1,
			"src": "./resources/newframe 400x.png",
			"flavor": "a"
		},
		{
			"typ": "draw",
			"handle": "glue pic",
			"name": "lens fixturing",
			"size": 324,
			"white": 1,
			"src": "./resources/glue 400x.jpeg",
			"flavor": "a"
		}
	],
	"sdk": [
		{
			"typ": "sdk",
			"handle": "ionic",
			"name": "tide clock",
			"size": 500,
			"white": 1,
			"src": "./resources/tidesOnIonic 400x.png",
			"flavor": "a"
		},
		{
			"typ": "sdk",
			"handle": "versa",
			"name": "climber's clock",
			"size": 474,
			"white": 1,
			"src": "./resources/versa 400x.png",
			"flavor": "a"
		},
		{
			"typ": "sdk",
			"handle": "peggy",
			"name": "peggy",
			"size": 480,
			"white": 1,
			"src": "./resources/buddy 400x.png",
			"flavor": "a"
		}
	],
	"wood": [
		{
			"typ": "wood",
			"handle": "nightstand",
			"name": "nightstand",
			"size": 600,
			"white": 0,
			"src": "./resources/nightstand 400x.jpg",
			"flavor": "a",
		},
		{
			"typ": "wood",
			"handle": "table",
			"name": "coffee table",
			"size": 284,
			"white": 0,
			"src": "./resources/tableinroom 400x.png ",
			"flavor": "a",
		},
		{
			"typ": "wood",
			"handle": "bar",
			"name": "./resources/butcher block cart",
			"size": 558,
			"white": 0,
			"src": "./resources/bar cart 400x.jpg",
			"flavor": "a"
		},
		{
			"typ": "wood",
			"handle": "bed",
			"name": "bedframe",
			"size": 362,
			"white": 0,
			"src": "./resources/bed 400x.jpg",
			"flavor": "a"
		},
		{
			"typ": "wood",
			"handle": "desk",
			"name": "desk",
			"size": 450,
			"white": 0,
			"src": "./resources/desk 400x.jpg",
			"flavor": "a"
		},
		{
			"typ": "wood",
			"handle": "coffee",
			"name": "coffee cup display",
			"size": 555,
			"white": 0,
			"src": "./resources/coffee cups 400x.jpg",
			"flavor": "a"
		},
		{
			"typ": "wood",
			"handle": "lantern",
			"name": "campfire",
			"size": 400,
			"white": 0,
			"src": "./resources/lantern 400x.jpg",
			"flavor": "a"
		}
	],
	"climb": [
		{
			"typ": "climb",
			"handle": "kili",
			"name": "kilimanjaro",
			"size": 266,
			"white": 0,
			"src": "./resources/kili 400x.jpg",
			"flavor": "a"
		},
		{
			"typ": "climb",
			"handle": "rainier",
			"name": "rainier",
			"size": 266,
			"white": 0,
			"src": "./resources/rainier 400x.jpg",
			"flavor": "a"
		}
	],
	"page": [
		{
			"typ": "page",
			"handle": "sandbox",
			"name": "sandbox",
			"size": 498,
			"white": 1,
			"src": "./resources/sandbox 400x.png",
			"flavor": "a"
		},
		{
			"typ": "page",
			"handle": "money",
			"name": "league news",
			"size": 500,
			"white": 0,
			"src": "./resources/moneyball 400x.png",
			"flavor": "a"
		},
		{
			"typ": "page",
			"handle": "gluteus",
			"name": "adventure log",
			"size": 493,
			"white": 0,
			"src": "./resources/gluteus 400x.png",
			"flavor": "a"
		}
	],
	"fun": [
		{
			"typ": "fun",
			"handle": "milk",
			"name": "milk carton",
			"size": 700,
			"white": 0,
			"src": "./resources/milk carton 400x.jpg",
			"flavor": "a",
			"change": 70,
		},
		{
			"typ": "fun",
			"handle": "vigil",
			"name": "world building",
			"size": 530,
			"white": 0,
			"src": "./resources/vigil 400x.jpg",
			"flavor": "a",
			"change": 100
		},
		{
			"typ": "fun",
			"handle": "kayak",
			"name": "kayak",
			"size": 530,
			"white": 0,
			"src": "./resources/kayak 400x.jpeg",
			"flavor": "a",
			"change": 100
		}
	]
}

Object.freeze(resourcemaster)
let m = 0
var gap = 100;
do {
	let resources = JSON.parse(JSON.stringify(resourcemaster));

	// GET TARGET SIZE
	var target = 0
	for (key in resources) {
		for (i in resources[key]) {
			target += resources[key][i]['size'];
		};
	};

	// RANDOMIZE THE RULE OF THREES INTO THE LAYOUT OBJECT, DO WHITESPACE ADDING HERE BECAUSE SMART!
	let threes = ['draw','draw','sdk','wood','wood','page','fun'];
	var layout = {"A": [], "B": [], "C": []};
	let whitespace = {"A": [0], "B": [0], "C": [0]};
	var shortcol = {"A": [0], "B": [0], "C": [0]};
	for (col in layout) {
		for (key in threes) {
			temp = resources[threes[key]].splice(Math.floor(Math.random() * resources[threes[key]].length), 1)[0];
			layout[col].push(temp);
			shortcol[col] = parseInt(shortcol[col]) + parseInt(temp['size'])

			if (temp.white == 1) {
				whitespace[col] = parseInt(whitespace[col]) + parseInt(temp['size'])
			};
		};
	};

	
	// FIND MINIMUM WHITESPACE FOR ADDING
	let min = target
	let putcol = ""
	for (col in whitespace) {
		if (whitespace[col] < min) {
			min = whitespace[col]
			putcol = col
		}
	}

	// ADD REMAINING WHITESPACE TO THE MINIMUM COLUMN
	temp = resources['draw'].splice(resources['draw'][0], 1)[0];
	layout[putcol].push(temp);
	shortcol[putcol] += temp['size'];


	// ASSIGN REMAINING IMAGES TO THE SHORTEST COLUMN UNTIL IMAGES ARE GONE
	min = target
	putcol = ""
	for (col in shortcol) {
		if (shortcol[col] < min) {
			min = shortcol[col]
			putcol = col
		};
	};
	temp = resources['wood'].splice(resources['wood'][0], 1)[0];
	layout[putcol].push(temp);
	shortcol[putcol] += temp['size'];

	// REMOVE THAT COLUMN FROM THE LIST OF AVAILABLE COLUMNS
	let remains = ["A", "B", "C"];
	var index = remains.indexOf(putcol);
	if (index > -1) {
	  remains.splice(index, 1);
	}

	// RANDOMIZE REMAINING COLUMN TO ASSIGN TO, THEN ASSIGN
	tempcol = remains[Math.floor(Math.random() * remains.length)]
	temp = resources['climb'].splice(Math.floor(Math.random() * resources['climb'].length), 1)[0];
	layout[tempcol].push(temp);
	shortcol[tempcol] += temp['size'];

	// AND THE FINAL ONE
	var index = remains.indexOf(tempcol);
	if (index > -1) {
	  remains.splice(index, 1);
	}
	// console.log(remains)
	temp = resources['climb'].splice(Math.floor(Math.random() * resources['climb'].length), 1)[0];
	layout[remains[0]].push(temp);
	shortcol[remains[0]] += temp['size'];


	// DONE??????
	min = target
	for (col in shortcol) {
		if (shortcol[col] < min) {
			min = shortcol[col]
		};
	};

	let max = 0
	for (col in shortcol) {
		if (shortcol[col] > max) {
			max = shortcol[col]
		};
	};


	gap = max - min
	m++
}
while (gap > 70);
console.log('DONE!', m, gap, shortcol)

min = target
let mincol = ""
for (col in shortcol) {
	if (shortcol[col] < min) {
		min = shortcol[col];
		mincol = col;
	};
};

let max = 0
let maxcol = ""
for (col in shortcol) {
	if (shortcol[col] > max) {
		max = shortcol[col];
		maxcol = col;
	};
};

for (i in layout[mincol]) {
	if (layout[mincol][i].typ == 'fun') {
		layout[mincol][i].change = 0;
	};
};

for (i in layout[maxcol]) {
	if (layout[maxcol][i].typ == 'fun') {
		layout[maxcol][i].change = gap;
	};
}

let smallest = shortcol[mincol]
console.log(smallest)
delete shortcol[maxcol]
delete shortcol[mincol]
console.log(shortcol)

let lastcol = Object.keys(shortcol)

for (i in layout[lastcol]) {
	if (layout[lastcol][i].typ == 'fun') {
		layout[lastcol][i].change = shortcol[lastcol] - smallest
	}
}

function sortArray(input) {
	let temp = []
	for (i in input) {
		if (input[i].typ == 'wood') {
			temp.unshift(input[i])
		} else if (input[i].typ == 'climb') {
			temp.push(input[i])
		}
	}
	for (i in input) {
		if (input[i].typ == 'sdk') {
			temp.unshift(input[i])
		} else if (input[i].typ == 'page') {
			temp.push(input[i])
		}
	}
	for (i in input) {
		if (input[i].typ == 'draw') {
			temp.unshift(input[i])
		} else if (input[i].typ == 'fun') {
			temp.push(input[i])
		}
	}
	return temp
}

const finalized = {
	"A": sortArray(layout.A),
	"B": sortArray(layout.B),
	"C": sortArray(layout.C)
}