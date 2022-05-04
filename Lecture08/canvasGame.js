var canvas= document.getElementById('myCanvas');
//var context= canvas.getContext('2d');

 // 1. 캔버스 및 그리기객체 취득
var ctx = canvas.getContext("2d"); // 2. 마우스 클릭 이벤트 처리: 좌표 취득 + 사각형 그리기
//canvas.onclick = function(event){ // 캔버스의 위치를 고려해 마우스 좌표를 취득
//var x = event.clientX - ctx.canvas.offsetLeft; var y = event.clientY - ctx.canvas.offsetTop; // 마우스 클릭한 곳에 사각형 그리기
//myCanvas.onmousedown = function(event)
myCanvas.onclick = function(event)
{
	ctx.arc(event.x, event.y, 5, 0, Math.PI*2, true);
	ctx.closePath();
  ctx.fillStyle='pink';
	ctx.fill();
}

//ctx.fillRect(x-15, y-15, 30, 30);


// class player{
//   constructor(x,y,radius,color)
//   {
//     this.pos_x=x;
//     this.pos_y=y;
//     this.radius=radius;
//     this.color=color;
//
//   }
//   draw()
//   {
//     context.arc(this.pos_x,this.pos_y,this.radius,0,2*Math.PI)
//     context.fillStyle=this.color;
//     context.fill()
//   }
// }
//
// var p = new player(100,100,30,'pink');
// p.draw();


// context.beginPath();
// context.moveTo(100,100);
// context.lineTo(0,100);
// context.lineTo(100,0);
// context.closePath();
// context.fillStyle='pink';
// context.fill();

// context.arc(100,100,20,0,2*Math.PI);
// context.fillStyle='green';
// context.fill();
// context.fillStyle='skyblue';
// context.fillRect(225,225,100,100);
