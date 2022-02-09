/* <!--Hanged Man Display-->
    <div id = "imgBox">
      <canvas id="myCanvas" height="300" width="300"></canvas>
    </div> */

//Stick Figure
var canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d"); // get Canvas Context object

context.beginPath();
context.strokeStyle = "#000000";
context.lineWidth = 2;
context.arc(200, 50, 50, 0, Math.PI * 2, true); // draw circle for head
// (x,y) center, radius, start angle, end angle, anticlockwise
context.stroke();

// body
context.beginPath();
context.moveTo(200, 100);
context.lineTo(200, 180);
context.strokeStyle = "#000000";
context.stroke();

// arms
context.beginPath();
context.strokeStyle = "#000000";
context.moveTo(200, 100);
context.lineTo(150, 130);
context.moveTo(200, 100);
context.lineTo(250, 130);
context.stroke();

// legs
context.beginPath();
context.strokeStyle = "#000000";
context.moveTo(200, 180);
context.lineTo(150, 280);
context.moveTo(200, 180);
context.lineTo(250, 280);
context.stroke();
//End of Stick Figure