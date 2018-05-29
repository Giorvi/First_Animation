var button = document.getElementById("button");

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

document.addEventListener("click", myFunction);


function Box(xpos, ypos, xstep, ystep, id) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.xstep = xstep;
    this.ystep = ystep;
    this.id = id;
    var elem = document.getElementById(this.id);
    this.render = function () {
        elem.style.top = this.ypos + 'px';
        elem.style.left = this.xpos + 'px';
        elem.style.backgroundImage = "url('beee.png')";
        elem.style.backgroundSize = "50px 50px";
    }
    this.changeDirection = function (direction) {

        if (direction === "up") {
            this.ystep = -2;
            this.xstep = 0;
        }
        if (direction === "down") {
            this.ystep = 2;
            this.xstep = 0;
        }
        if (direction === "right") {
            this.xstep = 2;
            this.ystep = 0;
        }
        if (direction === "left") {
            this.xstep = -2;
            this.ystep = 0;
        }
        if (direction === "upright") {
            this.xstep = -2;
            this.ystep = 2;
        }
        if (direction === "upleft") {
            this.xstep = -2;
            this.ystep = -2;
        }
        if (direction === "downright") {
            this.xstep = -2;
            this.ystep = 2;
        }
        if (direction === "upright") {
            this.xstep = -2;
            this.ystep = 2;
        }

    }
}


var boxes = [];
var numBoxes = 50;
var container = document.getElementById("boxContainer");

// Dynamically create the boxes
for (var i = 0; i < numBoxes; i++) {
    var elem = document.createElement("div");
    elem.className = "box";
    elem.id = "box" + i;
    container.appendChild(elem);
    boxes[i] = new Box(Math.random() * 350, Math.random() * 350, 0, 0, elem.id);
}

var id = setInterval(frame, 5);


function frame() {

    collideBorder();
}


function collideBorder() {

    for (var i = 0; i < boxes.length; i++) {

        if (boxes[i].xpos > 450 || boxes[i].xpos < 0) {
            boxes[i].xstep = -boxes[i].xstep;
        }

        if (boxes[i].ypos > 450 || boxes[i].ypos < 0) {
            boxes[i].ystep = -boxes[i].ystep;
        }

        boxes[i].xpos = boxes[i].xpos + boxes[i].xstep;
        boxes[i].ypos = boxes[i].ypos + boxes[i].ystep;
        boxes[i].render();
    }
}
window.addEventListener("keypress", movesnake);


function movesnake(event) {

    for (var i = 0; i < boxes.length; i++) {

        if (event.key === "w") {
            boxes[i].changeDirection("up");
        }
        if (event.key === "s") {
            boxes[i].changeDirection("down");
        }
        if (event.key === "a") {
            boxes[i].changeDirection("left");
        }
        if (event.key === "d") {
            boxes[i].changeDirection("right");
        }
        if (event.key === "q") {
            boxes[i].changeDirection("upleft");
        }
        if (event.key === "e") {
            boxes[i].changeDirection("upright");
        }
        if (event.key === "z") {
            boxes[i].changeDirection("downleft");
        }
        if (event.key === "c") {
            boxes[i].changeDirection("downright");
        }
    }
}

var speed = 1;

document.addEventListener("click", spinFaster);

function spinFaster(MouseEvent) {
    for (var i = 0; i < boxes.length; i++) {
        speed = speed - .2;
        boxes[i].style.animationDuration = speed + "s";
    }
}
