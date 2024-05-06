let posizioneX, posizioneY
let velX, velY

function setup() {
	createCanvas(windowWidth, windowHeight)

	posizioneX = width/2
	posizioneY = height/2

	velX = 10
	velY = 5
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	
	posizioneX = posizioneX + velX
	posizioneY = posizioneY + velY

	if (posizioneX >= width || posizioneX < 0) {
		velX = -velX
	}

	if (posizioneY >= height || posizioneY < 0) {
		velY = -velY
	}

	// background(200)

	fill(random(255), random(255),random(255))
	noStroke()
	circle(posizioneX, posizioneY, 100)
}