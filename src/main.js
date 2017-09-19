
/*
//创建舞台，默认背景是黑色
Laya.init(1136,640,Laya.WebGL);
var txt = new Laya.Text();
txt.text = "Layabox是HTML5引擎技术提供商与优秀的游戏发行商！";      //设置文本内容
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
**/


/**
//初始化引擎,不支持WebGL时自动切换到Canvas
Laya.init(500,400,Laya.WebGL);


function createText(){
    var txt = new Laya.Text();
    txt.text = "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
    "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
    "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！";
    txt.borderColor = "#ffff00";
    //设置宽高以后的自动裁剪会按照这个区域裁剪
    txt.size(300,50);
    txt.fontSize = 20;
    txt.color = "#ffffff";
    Laya.stage.addChild(txt);
    return txt;
}

function setup(){
    var t1 = createText();
    //设置不进行任何裁剪
    t1.overflow = Laya.Text.VISIBLE;
    t1.pos(10,10);
    var t2 = createText();
    //设置不显示文本区域外的字符像素
    t2.overflow = Laya.Text.SCROLL;
    t2.pos(10,110);
    var t3 = createText();
    //设置不显示超出文本域的字符
    t3.overflow = Laya.Text.HIDDEN;
    t3.pos(10,210);
}

setup();
**/
//初始化引擎,不支持WebGL时自动切换到Canvas
Laya.init(640,800,Laya.WebGL);
//设置画布的背景颜色
Laya.stage.bgColor = "#efefef";
Text_InputSingleline();
Text_InputMultiline();
function Text_InputSingleline(){
    var textInput = new Laya.TextInput("单行输入");//创建一个 TextInput 类的实例对象 textInput 。
    textInput.wordWrap = true;//设置 textInput 的文本自动换行。
    textInput.fontSize = 30;//设置 textInput 的字体大小。
    textInput.x = 0;//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
    textInput.y = 0;//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
    textInput.width = 300;//设置 textInput 的宽度。
    textInput.height = 200;//设置 textInput 的高度。
    textInput.bgColor = "#c30c30";
    Laya.stage.addChild(textInput);//将 textInput 添加到显示列表。
}
function Text_InputMultiline(){
    var textInput = new Laya.TextInput("多行输入");//创建一个 TextInput 类的实例对象 textInput 。
    textInput.fontSize = 30;//设置 textInput 的字体大小。
    textInput.wordWrap = true;//设置 textInput 的文本自动换行。
    textInput.multiline = true;//设置textInput的多行输入
    textInput.x = 0;//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
    textInput.y = 300//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
    textInput.width = 300;//设置 textInput 的宽度。
    textInput.height = 200;//设置 textInput 的高度。
    textInput.bgColor = "#c30c30";
    Laya.stage.addChild(textInput);//将 textInput 添加到显示列表。
}