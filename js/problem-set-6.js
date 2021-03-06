/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
ctx.font = "48px sans-serif";
ctx.strokeText("Hello, World!",10,50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */


function drawRectangle() {
let canvas = document.getElementById("canvas2");
let ctx = canvas.getContext("2d");
let height = prompt("Height: ");
let width = prompt("Width: ");
let x = prompt("X: ");
let y = prompt("Y: ")
if (height < 1) {
  alert("Your height is too small");
}
if (width < 1) {
  alert("Your width is too small");
}
if (x < 5) {
  alert("Your x value is too small");
}
if (y < 5) {
  alert("Your y value is too small");
}
if (height > 512 || width > 1024 || x > 250 || y > 250) {
  alert("Your rectangle is too large, it won't fit in the canvas")
}
if (isNaN(height) || isNaN(width) || isNaN(x) || isNaN(y)) {
  alert("One or more of your values is not a number")
}
else {
  ctx.strokeRect(height, width, x, y);
}
}
/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
let color = prompt("Enter a valid color");
if (color == "black") {
  let canvas = document.getElementById("canvas3");
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(10, 10, 100, 50);
}
if (color == "blue") {
  let canvas = document.getElementById("canvas3");
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(10, 10, 100, 50);
}
if (color == "green") {
  let canvas = document.getElementById("canvas3");
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 100, 50);
}
if (color == "orange") {
  let canvas = document.getElementById("canvas3");
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "orange";
  ctx.fillRect(10, 10, 100, 50);
}
if (color == "purple") {
  let canvas = document.getElementById("canvas3");
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "purple";
  ctx.fillRect(10, 10, 100, 50);
}
if (color == "red") {
  let canvas = document.getElementById("canvas3");
  let ctx = canvas.getContext("2d");
  ctx.fillStyle ="red";
  ctx.fillRect(10, 10, 100, 50);
}
if (color == "yellow") {
  let canvas = document.getElementById("canvas3");
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "yellow";
  ctx.fillRect(10, 10, 100, 50);
}
else if (color !="black" && color !="blue" && color !="green" && color !="orange" && color !="purple" && color !="red" && color !="yellow") {
  alert("That color is not supported")
}

}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  let canvas = document.getElementById("canvas4");
  let ctx = canvas.getContext("2d");
  let position1 = 10;
  let position2 = 10;
  let a;
  let b;
  let c;
  while(true) {
    a = Number(prompt("Side 1: "));
    b = Number(prompt("Side 2: "));
    c = Number(prompt("Side 3: "));
    if((a**2)+(b**2) == (c**2) && a>0 && b>0 && c>0 && Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
      break;
    }
    else {
      alert("That is not a valid right Triangle")
    }
  }
  ctx.beginPath();
  ctx.moveTo(position1, position2);
  ctx.lineTo(position1, position2 + a);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(position1, position2 + a);
  ctx.lineTo(position1 + b, position2 + a);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(position1, position2);
  ctx.lineTo(position1 + b, position2 + a);
  ctx.stroke();

}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let canvas = document.getElementById("canvas5");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas5.width, canvas5.height);
    let radius = Number(prompt("Radius: "));
    let radius2;
    let radius3;
    let x = 10;
    let y = 10;
    drawing =false;
    if(radius >= 1 && radius <= canvas5.width && radius <= canvas5.height && Number.isInteger(radius)){
      drawing = true;
    }
    else{
      alert("Invalid Radius")
    }
  radius2 = radius*.1
  radius3 = radius*.7
  ctx.beginPath();
  ctx.arc(radius + 10, radius + 10, radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(radius + 10 - radius/3, radius + 10 - radius/4, radius2,0, Math.PI*2);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(radius + 10 + radius/3, radius + 10 - radius/4, radius2, 0, Math.PI*2);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(radius + 10, radius + 10, radius3, 0, Math.PI);
  ctx.stroke();
  ctx.closePath();
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  let canvas = document.getElementById("canvas6")
  let ctx = canvas.getContext("2d");
     ctx.clearRect(0,0,1024,760);
     let outside;
     let inside;
     do {
       outside = Number(prompt("Outside Radius:"));
     } while (isNaN(outside));
     do {
       inside = Number(prompt("Inside Radius:"));
     } while (isNaN(inside));
     let degrees = 0;
     if (inside > outside){
       alert("Inside radius is too large");
     } else if (outside<2){
       alert("Outside radius is too small");
     } else if (inside<1){
       alert("Inside radius is too small");
     } else {
       ctx.beginPath();
       ctx.moveTo(125,125-outside);
       for (let i=0; i<=5; i++) {
         ctx.lineTo(125+Math.round((Math.cos(Math.PI*(degrees-90)/180)*outside)), 125+Math.round((Math.sin(Math.PI*(degrees-90)/180)*outside)));
         degrees +=36;
         ctx.lineTo(125+Math.round((Math.cos(Math.PI*(degrees-90)/180)*inside)), 125+Math.round((Math.sin(Math.PI*(degrees-90)/180)*inside)));
         degrees +=36;
       }
       ctx.stroke();
       ctx.closePath();
     }
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let canvas = document.getElementById("canvas7")
  ctx = canvas.getContext("2d");
   ctx.clearRect(0, 0, canvas7.height, canvas7.width)
   let length = 80;
   let input = Number((80/Math.sqrt(2)).toFixed(0));
   let x = 70;
   let y = 10;
   ctx.beginPath();
   ctx.moveTo(x,y);
   ctx.lineTo(x+length,y);
   ctx.lineTo(x+length+input,y+input);
   ctx.lineTo(x+length+input,y+length+input);
   ctx.lineTo(x+length,y+length+input+input);
   ctx.lineTo(x,y+length+input+input);
   ctx.lineTo(x-input,y+length+input);
   ctx.lineTo(x-input,y+input);
   ctx.lineTo(x,y);
   ctx.fillStyle="red";
   ctx.fill();
   ctx.closePath();
   ctx.fillStyle="white";
   ctx.font="65px sans-serif";
   ctx.fillText("STOP", 22, 133);
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  let canvas = document.getElementById('canvas8')
  ctx = canvas.getContext("2d")
    let sideLength=Number(prompt("Length: "));
    let x = 10;
    let y = canvas8.height-10;
    let i = 0;
    line = 1;
    while(i < 5){
      for(let val = 0+line; val <= 5; val ++){
        ctx.strokeRect(x, y - sideLength, sideLength, sideLength);
        x += sideLength;
      }
    x = 10 + (sideLength / 2) * line;
    y -= sideLength;
      line++;
      i++;
    }
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let canvas = document.getElementById("canvas9")
   ctx= canvas.getContext("2d");
    let color = prompt("House Color: ");
    let door = prompt("Door Color: ");
    if ((color == "blue" || color == "brown"|| color == "green" || color == "orange" || color == "purple" || color == "red" || color == "yellow") && (door == "blue" || door == "brown"|| door == "green" || door == "orange" || door == "purple" || door == "red" || door == "yellow")){
      ctx.fillStyle="black";
      ctx.fillRect(150,300,724,450);
      ctx.fillStyle=color;
      ctx.fillRect(151,301,722,448);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(150,300);
      ctx.lineTo(510,10);
      ctx.lineTo(860,300);
      ctx.lineTo(150,300);
      ctx.fillStyle="black";
      ctx.fill();
      ctx.closePath();
      ctx.beginPath();
      ctx.moveTo(150,300);
      ctx.lineTo(510,12);
      ctx.lineTo(870,300);
      ctx.lineTo(150,300);
      ctx.fillStyle="gray";
      ctx.fill();
      ctx.closePath();
      ctx.fillStyle="black";
      ctx.fillRect(260,620,80,80);
      ctx.fillRect(260,400,80,80);
      ctx.fillRect(684,620,80,80);
      ctx.fillRect(684,400,80,80);
      ctx.fillStyle="lightblue";
      ctx.fillRect(261,620,80,80);
      ctx.fillRect(261,400,80,80);
      ctx.fillRect(685,620,80,80);
      ctx.fillRect(685,400,80,80);
      ctx.fillStyle="black"
      ctx.fillRect(462,590,100,160);
      ctx.fillStyle=door;
      ctx.fillRect(462,590,100,160);
      ctx.beginPath();
      ctx.arc(545,670,8,0,Math.PI*2,true);
      ctx.fillStyle="black";
      ctx.fill();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(545,670,7,0,Math.PI*2,true);
      ctx.fillStyle="yellow";
      ctx.fill();
      ctx.closePath();
    } else {
      alert("Color not supported");
    }
}
