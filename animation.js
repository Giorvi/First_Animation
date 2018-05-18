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


// Box Object definition
function Box(xpos, ypos, xstep, ystep, color, id) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.xstep = xstep;
    this.ystep = ystep;
    this.id = id;
    this.color = color;
    var elem = document.getElementById(this.id);
    this.render = function () {
        elem.style.top = this.ypos + 'px';
        elem.style.left = this.xpos + 'px';
        //elem.style.backgroundColor = color;
        elem.style.backgroundImage = "url('beee.png')";
        elem.style.backgroundSize = "50px 50px";
    }
}

// Some variables that we need below
var boxes = [];
var numBoxes = 50;
var container = document.getElementById("boxContainer");

// Dynamically create the boxes
for (var i = 0; i < numBoxes; i++) {
    var elem = document.createElement("div");
    elem.className = "box";
    elem.id = "box" + i;
    container.appendChild(elem);
    boxes[i] = new Box(Math.random() * 350,
        Math.random() * 350,
        Math.random(),
        Math.random(),
        '#' + Math.floor(Math.random() * 16777215).toString(16),
        elem.id);
}

var id = setInterval(frame, 5);

// The animation code
function frame() {
    // Box 1
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
