// require('./../vendor/LayaAir 1.7.7 beta/laya.core.js');
// require('./../vendor/LayaAir 1.7.7 beta/laya.webgl.js');
// require('./../vendor/LayaAir 1.7.7 beta/laya.filter.js');
// require('./../vendor/LayaAir 1.7.7 beta/laya.html.js');
// require('./../vendor/LayaAir 1.7.7 beta/laya.particle.js');
// require('./../vendor/LayaAir 1.7.7 beta/laya.tiledmap.js');
// require('./../vendor/LayaAir 1.7.7 beta/laya.ui.js');





创建舞台，默认背景是黑色
Laya.init(600, 400);


var txt = new Laya.Text();
txt.text = "学习";
txt.color = "#FF0000";
txt.fontSize = 66;
txt.stroke = 5;
txt.strokeColor = "#FFFFFF"; 
txt.bold = true;
txt.pos(60,100);

Laya.stage.bgColor = '#23238E';  
Laya.stage.addChild(txt);

