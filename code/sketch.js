
// coordinates
var co = {

	x1: 0,
	y1: 0,
	x2: 0,
	y2: 0,
	x3: 0,
	y3: 0,
	x4: 0,
	y4: 0
	};

var w = 0;
var h = 0;


// background
var col1 = {
	h: 267,
	s: 90,
	b: 78
	};

// small quads
var col2 = {
	h: 40,
	s: 100,
	b: 100
};

//upper quads
var col3 = {
	h: 0,
	s: 100,
	b: 70
};

// downer quads
var col4 = {
	h: 0,
	s: 100,
	b: 70
};


function setup(){
	


frameRate(10);
colorMode(HSB,360,100,100,100);

var canvas = createCanvas(800,600);
canvas.parent ("container");

background(0);

w = width;
h = height;

}


function coordinates (){
co.x1 = random(0, w/2);
co.y1 = random(0,h/2);
co.x2 = random(w/2+1, w);
co.y2 = random(0,h/2);
co.x3 = random(w/2+1, w);
co.y3 = random(h/2+1,h);
co.x4 = random(0, w/2);
co.y4 = random(h/2+1,h);
}



function draw() {

function quad (){

// if ( temp_y1 < h/4){

// 	stroke(47,87,84);
// 	fill(0,100,100,7);
// }

if ( co.y1 < h/4  && co.y2 < h/4 ){

	
	fill(col3.h,col3.s,col3.b,7);
}

else if( co.y4 > 3 * h/4 && co.y3 > 3 * h/4){

	
	fill(col4.h,col4.s,col4.b,7);
}
else {

	
	fill(col2.h,col2.s,col2.b,7);
	}
// if ( co.y1 < h/4 || co.y3 > 3*h/4){

// 	stroke(210,87,84);
// 	fill(0,100,100,7);
// }

// else {
// 	fill(90,100,100,7);
// 	stroke(210,90,84);
// }


noStroke();
// stroke(col1.h,col1.s,col1.b);
// strokeWeight(0.5);
beginShape();
vertex(co.x1, co.y1);
vertex(co.x2, co.y2);
vertex(co.x3, co.y3);
vertex(co.x4, co.y4);
endShape(CLOSE);
}

coordinates();

quad();

}
	





