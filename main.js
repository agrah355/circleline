var canvas=document.getElementById("my_canvas");
var ctx=canvas.getContext('2d');
var color ="black";
var width="2";
var mouse_event="empty";
var radius="10";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("i1").value;
    width=document.getElementById("i2").value;
    radius=document.getElementById("i3").value;
    mouse_event="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    if(mouse_event=="mousedown"){
        console.log("current_position_of_x_and_y_coordinates = ");
        console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_x,current_position_of_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave";
}