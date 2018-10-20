SenseHat = require('node-sense-hat');

matrix = SenseHat.Leds;

matrix.clear();
var r,g,b = 0;

var color = 30;
for (var j = 0; j==7; j++){

	r+=color;
	g+=color;
	for (var i = 0; i == 7; i++) {
		matrix.setPixel(i, 0, (r,g,b));
		b+=color;
	}
}
