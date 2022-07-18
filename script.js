let input = document.body.children[0];

input.canvas = function() {
    document.getElementByID("canvas"). innerHTML = input.value; 
}


window.onload = () => {
    let step = 20
    let cnvs = document.querySelector('canvas')
    let ctx = cnvs.getContext('2d')





    for (let i = step; i<cnvs.width; i+=step){//вертикальные
        ctx.beginPath();
        ctx.strokeStyle = '#7a7979';
        ctx.lineWidth = 1;
        ctx.moveTo(i, 0);
        ctx.lineTo(i, cnvs.height);
        ctx.closePath();
        ctx.stroke();
}
    for (let i = step; i<cnvs.height; i+=step){//Горизонтальные
        ctx.beginPath();
        ctx.moveTo(1, i);
        ctx.lineTo(cnvs.width, i);
        ctx.closePath();
        ctx.stroke();
    }
/*ctx.beginPath()
for(let x = -4; x<4;x++){
    ctx.moveTo(x*z,-cnvs.height/2)
    ctx.lineTo(x*z,cnvs.height/2)
    ctx.moveTo(-cnvs.width/2,x*z)
    ctx.lineTo(cnvs.width/2,x*z)
}
ctx.stroke()*/
//Ось X 
ctx.beginPath();
ctx.moveTo(0, cnvs.height/2);
ctx.lineTo(cnvs.width, cnvs.height/2);
ctx.strokeStyle = 'red';
ctx.lineWidth = 2;
ctx.closePath();
ctx.stroke()

    
    // ось Y
ctx.beginPath();
ctx.moveTo(cnvs.width/2+10, 0);
ctx.lineTo(cnvs.width/2+10, cnvs.height);
ctx.strokeStyle = 'green';
ctx.closePath();
ctx.stroke();

console.log(canvas.width);
console.log(canvas.height);


}





