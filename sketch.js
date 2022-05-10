let robot1_x, robot1_y, robot1Speed_x, robot1Speed_y, robot2_x,
	robot2_y, robot2Speed_x, robot2Speed_y;

let headStyling;

function setup()
{
	//create a canvas for the robot animation
	createCanvas(700, 700);

	//set starting locations for each robot
	robot1_x = random(0, width - 100);
	robot1_y = random(0, height - 100);

	robot2_x = random(0, width - 100);
	robot2_y = random(0, height - 100);

	//set speed of robot
	robot1Speed_x = random(2, 4);
	robot1Speed_y = random(2, 4);

	robot2Speed_x = random(2, 4);
	robot2Speed_y = random(2, 4);

	//initialise robot head object
	headStyling = {
	antennaColour: [255, 255, 0],
	size: 100,
	stroke: 2,
	earsColour: [255, 0, 0]
	}
}

function draw()
{
	//set animation background and initial stroke weight
	background(155);
	strokeWeight(headStyling.stroke);

	/* --- DRAWING THE ROBOT'S STYLES --- */

	//robot heads
	fill(200);
	rect(robot1_x, robot1_y, headStyling.size, headStyling.size, 10);
	rect(robot2_x, robot2_y, headStyling.size, headStyling.size, 10);

	//ears
	fill(headStyling.earsColour);

	//robot 1
	rect(robot1_x - 7, robot1_y + 30, 10, 33);
	rect(robot1_x + 97, robot1_y + 30, 10, 33);

	//robot 2
	rect(robot2_x - 7, robot2_y + 30, 10, 33);
	rect(robot2_x + 97, robot2_y + 30, 10, 33);

	//robots' antennas
	fill(headStyling.antennaColour);
	ellipse(robot1_x + 50, robot1_y - 7, 10, 10);
	ellipse(robot2_x + 50, robot2_y - 7, 10, 10);

	fill(headStyling.earsColour);
	rect(robot1_x + 40, robot1_y - 3, 20, 10);
	rect(robot2_x + 40, robot2_y - 3, 20, 10);

	//robot 1's eyes
	fill(255);
	ellipse(robot1_x + 25, robot1_y + 30, 26, 26);
	strokeWeight(4);
	point(robot1_x + 25, robot1_y + 30);
	strokeWeight(2);
	ellipse(robot1_x + 75, robot1_y + 30, 26, 26);
	strokeWeight(4);
	point(robot1_x + 75, robot1_y + 30);
	strokeWeight(2);

	//robot 2's eyes
	ellipse(robot2_x + 25, robot2_y + 30, 26, 26);
	strokeWeight(4);
	point(robot2_x + 25, robot2_y + 30);
	strokeWeight(2);
	ellipse(robot2_x + 75, robot2_y + 30, 26, 26);
	strokeWeight(4);
	point(robot2_x + 75, robot2_y + 30);
	strokeWeight(2);

	//robots' noses
	fill(headStyling.earsColour);
	triangle(robot1_x + 50, robot1_y + 35, robot1_x + 35, robot1_y + 60, robot1_x + 65, robot1_y + 60);
	triangle(robot2_x + 50, robot2_y + 35, robot2_x + 35, robot2_y + 60, robot2_x + 65, robot2_y + 60);

	//robot 1 mouth
	noFill();
	beginShape();
	vertex(robot1_x + 28, robot1_y + 75);
	vertex(robot1_x + 36, robot1_y + 85);
	vertex(robot1_x + 42, robot1_y + 75);
	vertex(robot1_x + 50, robot1_y + 85);
	vertex(robot1_x + 58, robot1_y + 75);
	vertex(robot1_x + 66, robot1_y + 85);
	vertex(robot1_x + 74, robot1_y + 75);
	endShape();

	//robot 2 mouth
	beginShape();
	vertex(robot2_x + 28, robot2_y + 75);
	vertex(robot2_x + 36, robot2_y + 85);
	vertex(robot2_x + 42, robot2_y + 75);
	vertex(robot2_x + 50, robot2_y + 85);
	vertex(robot2_x + 58, robot2_y + 75);
	vertex(robot2_x + 66, robot2_y + 85);
	vertex(robot2_x + 74, robot2_y + 75);
	endShape();

	/* --- DRAWING THE ROBOT STYLES --- */

	//update the robots location
	robot1_x += robot1Speed_x;
	robot1_y += robot1Speed_y;
	//start robot 2 travelling opposite of robot 1
	robot2_x -= robot2Speed_x;
	robot2_y -= robot2Speed_y;

	/* --- ALTERING ROBOT'S DIRECTIONS --- */

	//switches direction when reaches max width or height
	if(robot1_x >= width - 100){
		robot1Speed_x *= -1;
	}else if(robot1_y >= height - 100){
		robot1Speed_y *= -1;
	}else{
		robot1Speed_x = robot1Speed_x;
		robot1Speed_y = robot1Speed_y;
	}
	
	//switches direction when reaches min on either width or height
	if(robot1_x <= width - width){
		robot1Speed_x *= -1;
	}else if(robot1_y <= height - height){
		robot1Speed_y *= -1;
	}else{
		robot1Speed_x = robot1Speed_x;
		robot1Speed_y = robot1Speed_y;
	}

	//switches direction when reaches max width or height
	if(robot2_x >= width - 100){
		robot2Speed_x *= -1;
	}else if(robot2_y >= height - 100){
		robot2Speed_y *= -1;
	}else{
		robot2Speed_x = robot2Speed_x;
		robot2Speed_y = robot2Speed_y;
	}
	
	//switches direction when reaches min on either width or height
	if(robot2_x <= width - width){
		robot2Speed_x *= -1;
	}else if(robot2_y <= height - height){
		robot2Speed_y *= -1;
	}else{
		robot2Speed_x = robot2Speed_x;
		robot2Speed_y = robot2Speed_y;
	}

	/* --- CHANGE STYLES --- */

	//change antenna colours
	if(robot1_x >= width || robot2_x >= width){
		headStyling.antennaColour = [0,255,0];
	}else if(robot1_y >= height || robot2_y >= height){
		headStyling.antennaColour = [255,255,0];
	}else if(robot1_x <= width-width || robot2_x <= width - width){
		headStyling.antennaColour = [255,0,0];
	}else if(robot1_y <= height - height || robot2_y <= height - height){
		headStyling.antennaColour = [0,0,255];
	}

	//change ears, nose and head block colour

	if(headStyling.earsColour[0] < 255){
		headStyling.earsColour[0] += 1;
	}else if(headStyling.earsColour[0] == 255 && headStyling.earsColour[1] < 255){
		headStyling.earsColour[1] += 1;
	}else if(headStyling.earsColour[0] == 255 && headStyling.earsColour[1] == 255 && headStyling.earsColour[2] < 255){
		headStyling.earsColour[2] += 1;
	}else if(headStyling.earsColour[0] >= 255 && headStyling.earsColour[1] >= 255 && headStyling.earsColour[2] >= 255){
		headStyling.earsColour = [255,0,0];
	}
}