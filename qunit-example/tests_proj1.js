
test("testing left edge", function() {
	var canvas = new Canvas('cnv', 5);
	var grid = new Grid(5, canvas);
	grid.initializeGrid()
	grid.createLiveCell(0,1);
	grid.createLiveCell(0,2);
	grid.createLiveCell(0,0);

	grid.getAllNeighbors();
	var n = grid.grid[0][1].neighbors;
	equal(n, 2);
});

test("testing left edge update", function() {
	var canvas = new Canvas('cnv', 3);
	var grid = new Grid(3, canvas);
	grid.initializeGrid()
	grid.createLiveCell(0,1);
	grid.createLiveCell(0,2);
	grid.createLiveCell(0,0);

	grid.evolve();

	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 1);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 0);
	equal(grid.grid[1][1].live, 1);
	equal(grid.grid[1][2].live, 0);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 0);
	equal(grid.grid[2][2].live, 0);

	grid.evolve();

	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 0);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 0);
	equal(grid.grid[1][1].live, 0);
	equal(grid.grid[1][2].live, 0);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 0);
	equal(grid.grid[2][2].live, 0);
});

test("testing right edge", function() {
	var canvas = new Canvas('cnv', 5);
	var grid = new Grid(5, canvas);
	grid.initializeGrid()

	grid.createLiveCell(2,1);
	grid.createLiveCell(2,2);
	grid.createLiveCell(2,0);

	grid.getAllNeighbors();
	var n = grid.grid[2][1].neighbors;
	equal(n, 2);
});

test("testing right edge update", function() {
	var canvas = new Canvas('cnv', 3);
	var grid = new Grid(3, canvas);
	grid.initializeGrid()

	grid.createLiveCell(2,1);
	grid.createLiveCell(2,2);
	grid.createLiveCell(2,0);

	grid.evolve();
	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 0);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 0);
	equal(grid.grid[1][1].live, 1);
	equal(grid.grid[1][2].live, 0);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 1);
	equal(grid.grid[2][2].live, 0);

	grid.evolve();
	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 0);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 0);
	equal(grid.grid[1][1].live, 0);
	equal(grid.grid[1][2].live, 0);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 0);
	equal(grid.grid[2][2].live, 0);
});

test("testing top edge", function() {
	var canvas = new Canvas('cnv', 5);
	var grid = new Grid(5, canvas);
	grid.initializeGrid()
	grid.createLiveCell(0,0);
	grid.createLiveCell(1,0);
	grid.createLiveCell(2,0);

	grid.getAllNeighbors();
	var n = grid.grid[2][0].neighbors;
	equal(n, 1);
	grid.getAllNeighbors();
	var n = grid.grid[1][2].neighbors;
	equal(n, 0);
});

test("testing top edge update", function() {
	var canvas = new Canvas('cnv', 3);
	var grid = new Grid(3, canvas);
	grid.initializeGrid()
	grid.createLiveCell(0,0);
	grid.createLiveCell(1,0);
	grid.createLiveCell(2,0);
	grid.evolve();
	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 0);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 1);
	equal(grid.grid[1][1].live, 1);
	equal(grid.grid[1][2].live, 0);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 0);
	equal(grid.grid[2][2].live, 0);
	grid.evolve();
	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 0);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 0);
	equal(grid.grid[1][1].live, 0);
	equal(grid.grid[1][2].live, 0);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 0);
	equal(grid.grid[2][2].live, 0);
});

test("testing bottom edge", function() {
	var canvas = new Canvas('cnv', 5);
	var grid = new Grid(5, canvas);
	grid.initializeGrid()
	grid.createLiveCell(0,2);
	grid.createLiveCell(1,2);
	grid.createLiveCell(2,2);

	grid.getAllNeighbors();
	var n = grid.grid[1][2].neighbors;
	equal(n, 2);
});

test("testing bottom edge update", function() {
	var canvas = new Canvas('cnv', 3);
	var grid = new Grid(3, canvas);
	grid.initializeGrid()
	grid.createLiveCell(0,2);
	grid.createLiveCell(1,2);
	grid.createLiveCell(2,2);
	grid.evolve();
	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 0);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 0);
	equal(grid.grid[1][1].live, 1);
	equal(grid.grid[1][2].live, 1);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 0);
	equal(grid.grid[2][2].live, 0);
	grid.evolve();
	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 0);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 0);
	equal(grid.grid[1][1].live, 0);
	equal(grid.grid[1][2].live, 0);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 0);
	equal(grid.grid[2][2].live, 0);
});


test("testing blinker", function() {
	var canvas = new Canvas('cnv', 3);
	var grid = new Grid(3, canvas);
	grid.initializeGrid()
	grid.createLiveCell(0,1);
	grid.createLiveCell(1,1);
	grid.createLiveCell(2,1);
	grid.evolve();
	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 0);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 1);
	equal(grid.grid[1][1].live, 1);
	equal(grid.grid[1][2].live, 1);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 0);
	equal(grid.grid[2][2].live, 0);
	grid.evolve();
	equal(grid.grid[0][0].live, 0);
	equal(grid.grid[0][1].live, 1);
	equal(grid.grid[0][2].live, 0);
	equal(grid.grid[1][0].live, 0);
	equal(grid.grid[1][1].live, 1);
	equal(grid.grid[1][2].live, 0);
	equal(grid.grid[2][0].live, 0);
	equal(grid.grid[2][1].live, 1);
	equal(grid.grid[2][2].live, 0);
});