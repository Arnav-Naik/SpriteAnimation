var canvasWidth = 650
var canvasHeight = 350

var spriteWidth = 864
var spriteHeight = 280

var rows = 2
var columns = 8

var trackRight = 0
var trackLeft = 1

var width = spriteWidth/columns
var height = spriteHeight/rows

var curFrame = 0
var frameCount = 8

var left = false
var right = true

var x = 0 // render the sprite
var y = 0

var srcx = 0 //render a frame
var srcy = 0

var speed = 12

var canvas = document.getElementById("canvas")

canvas.width = canvasWidth
canvas.height = canvasHeight

var ctx = canvas.getContext("2d")

var character = new Image()
character.src = "character.png"

function updateFrame(){
curFrame = ++curFrame % frameCount
srcx = curFrame * width
ctx.clearRect(x,y,width,height)
if(left && x>0){
srcy = trackLeft * height
x -= speed // x = x - speed
}
if(right && x<(canvasWidth-width)){
srcy = trackRight * height
x += speed // x = x + speed
}
}

function draw(){
updateFrame()
ctx.drawImage(character,srcx,srcy,width,height,x,y,width,height)
}

setInterval(draw,100)

function moveLeft(){
left = true
right = false
}

function moveRight(){
left = false
right = true
}


