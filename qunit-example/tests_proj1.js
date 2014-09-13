test("testing grid", function() {
	var canvas = new Canvas('cnv', 20);
	canvas.createCanvas();
	var grid = new Grid(20, canvas);
	grid.initializeGrid();
	grid.pulsar();
	var n = grid.getNeighbors(4,2);
	equal(n, 1);
});

test("testing left edge", function() {
	var canvas = new Canvas('cnv', 5);
	canvas.createCanvas();
	var grid = new Grid(5, canvas);
	grid.initializeGrid()
	grid.grid[0][1] = 1;
	grid.grid[0][2] = 1;
	grid.grid[0][0] = 1;
	var n = grid.getNeighbors(0,1)
	equal(n, 2);
});

test("testing left edge update", function() {
	var canvas = new Canvas('cnv', 3);
	canvas.createCanvas();
	var grid = new Grid(3, canvas);
	grid.initializeGrid()
	grid.grid[0][1] = 1;
	grid.grid[0][2] = 1;
	grid.grid[0][0] = 1;
	grid.updateCells();
	equal(grid.grid[0][0], 0);
	equal(grid.grid[0][1], 1);
	equal(grid.grid[0][2], 0);
	equal(grid.grid[1][0], 0);
	equal(grid.grid[1][1], 1);
	equal(grid.grid[1][2], 0);
	equal(grid.grid[2][0], 0);
	equal(grid.grid[2][1], 0);
	equal(grid.grid[2][2], 0);
	grid.updateCells();
	equal(grid.grid[0][0], 0);
	equal(grid.grid[0][1], 0);
	equal(grid.grid[0][2], 0);
	equal(grid.grid[1][0], 0);
	equal(grid.grid[1][1], 0);
	equal(grid.grid[1][2], 0);
	equal(grid.grid[2][0], 0);
	equal(grid.grid[2][1], 0);
	equal(grid.grid[2][2], 0);
});

test("testing right edge", function() {
	var canvas = new Canvas('cnv', 5);
	canvas.createCanvas();
	var grid = new Grid(5, canvas);
	grid.initializeGrid()
	grid.grid[2][1] = 1;
	grid.grid[2][2] = 1;
	grid.grid[2][0] = 1;
	var n = grid.getNeighbors(2,1)
	equal(n, 2);
});

test("testing right edge update", function() {
	var canvas = new Canvas('cnv', 3);
	canvas.createCanvas();
	var grid = new Grid(3, canvas);
	grid.initializeGrid()
	grid.grid[2][1] = 1;
	grid.grid[2][2] = 1;
	grid.grid[2][0] = 1;
	grid.updateCells();
	equal(grid.grid[0][0], 0);
	equal(grid.grid[0][1], 0);
	equal(grid.grid[0][2], 0);
	equal(grid.grid[1][0], 0);
	equal(grid.grid[1][1], 1);
	equal(grid.grid[1][2], 0);
	equal(grid.grid[2][0], 0);
	equal(grid.grid[2][1], 1);
	equal(grid.grid[2][2], 0);
	grid.updateCells();
	equal(grid.grid[0][0], 0);
	equal(grid.grid[0][1], 0);
	equal(grid.grid[0][2], 0);
	equal(grid.grid[1][0], 0);
	equal(grid.grid[1][1], 0);
	equal(grid.grid[1][2], 0);
	equal(grid.grid[2][0], 0);
	equal(grid.grid[2][1], 0);
	equal(grid.grid[2][2], 0);
});

test("testing top edge", function() {
	var canvas = new Canvas('cnv', 5);
	canvas.createCanvas();
	var grid = new Grid(5, canvas);
	grid.initializeGrid()
	grid.grid[0][0] = 1;
	grid.grid[1][0] = 1;
	grid.grid[2][0] = 1;
	var n = grid.getNeighbors(2,0)
	equal(n, 1);
	var n = grid.getNeighbors(1,2)
	equal(n, 0);
});

test("testing top edge update", function() {
	var canvas = new Canvas('cnv', 3);
	canvas.createCanvas();
	var grid = new Grid(3, canvas);
	grid.initializeGrid()
	grid.grid[0][0] = 1;
	grid.grid[1][0] = 1;
	grid.grid[2][0] = 1;
	grid.updateCells();
	equal(grid.grid[0][0], 0);
	equal(grid.grid[0][1], 0);
	equal(grid.grid[0][2], 0);
	equal(grid.grid[1][0], 1);
	equal(grid.grid[1][1], 1);
	equal(grid.grid[1][2], 0);
	equal(grid.grid[2][0], 0);
	equal(grid.grid[2][1], 0);
	equal(grid.grid[2][2], 0);
	grid.updateCells();
	equal(grid.grid[0][0], 0);
	equal(grid.grid[0][1], 0);
	equal(grid.grid[0][2], 0);
	equal(grid.grid[1][0], 0);
	equal(grid.grid[1][1], 0);
	equal(grid.grid[1][2], 0);
	equal(grid.grid[2][0], 0);
	equal(grid.grid[2][1], 0);
	equal(grid.grid[2][2], 0);
});

test("testing bottom edge", function() {
	var canvas = new Canvas('cnv', 5);
	canvas.createCanvas();
	var grid = new Grid(5, canvas);
	grid.initializeGrid()
	grid.grid[0][2] = 1;
	grid.grid[1][2] = 1;
	grid.grid[2][2] = 1;
	var n = grid.getNeighbors(1,2)
	equal(n, 2);
});

test("testing bottom edge update", function() {
	var canvas = new Canvas('cnv', 3);
	canvas.createCanvas();
	var grid = new Grid(3, canvas);
	grid.initializeGrid()
	grid.grid[0][2] = 1;
	grid.grid[1][2] = 1;
	grid.grid[2][2] = 1;
	grid.updateCells();
	equal(grid.grid[0][0], 0);
	equal(grid.grid[0][1], 0);
	equal(grid.grid[0][2], 0);
	equal(grid.grid[1][0], 0);
	equal(grid.grid[1][1], 1);
	equal(grid.grid[1][2], 1);
	equal(grid.grid[2][0], 0);
	equal(grid.grid[2][1], 0);
	equal(grid.grid[2][2], 0);
	grid.updateCells();
	equal(grid.grid[0][0], 0);
	equal(grid.grid[0][1], 0);
	equal(grid.grid[0][2], 0);
	equal(grid.grid[1][0], 0);
	equal(grid.grid[1][1], 0);
	equal(grid.grid[1][2], 0);
	equal(grid.grid[2][0], 0);
	equal(grid.grid[2][1], 0);
	equal(grid.grid[2][2], 0);
});


test("testing blinker", function() {
	var canvas = new Canvas('cnv', 3);
	canvas.createCanvas();
	var grid = new Grid(3, canvas);
	grid.initializeGrid()
	grid.grid[0][1] = 1;
	grid.grid[1][1] = 1;
	grid.grid[2][1] = 1;
	grid.updateCells();
	equal(grid.grid[0][0], 0);
	equal(grid.grid[0][1], 0);
	equal(grid.grid[0][2], 0);
	equal(grid.grid[1][0], 1);
	equal(grid.grid[1][1], 1);
	equal(grid.grid[1][2], 1);
	equal(grid.grid[2][0], 0);
	equal(grid.grid[2][1], 0);
	equal(grid.grid[2][2], 0);
	grid.updateCells();
	equal(grid.grid[0][0], 0);
	equal(grid.grid[0][1], 1);
	equal(grid.grid[0][2], 0);
	equal(grid.grid[1][0], 0);
	equal(grid.grid[1][1], 1);
	equal(grid.grid[1][2], 0);
	equal(grid.grid[2][0], 0);
	equal(grid.grid[2][1], 1);
	equal(grid.grid[2][2], 0);
});