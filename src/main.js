 
//创建舞台，默认背景是黑色
Laya.init(1136,640);


var txt = new Laya.Text();
txt.text = "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！";      //设置文本内容
txt.color = "#FF0000";  //设置字体颜色
txt.fontSize = 66;      //设置文本字体大小
txt.stroke = 5;         //设置描边大小
txt.strokeColor = "#FFFFFF";  //设置描边颜色
txt.bold = true;		//是否加粗

//设置文本区背景
txt.bgColor = "#c30c30";
//设置文本宽高
txt.width = 400;
txt.height = 400;
//字体位置
txt.pos(60,100); 
//设置文本水平居中
txt.align = "center";
//设置文本垂直居中
txt.valign = 'middle';       
//设置自动换行
txt.wordWrap = true;

Laya.stage.bgColor = '#23238E';  
Laya.stage.addChild(txt);

