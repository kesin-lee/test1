var mysalary;
mysalary = "12000"
if (mysalary >= 8000) {
    document.write("转行成功")
} else {
    document.write("转行失败")
}

function callpolice() {
    var mychar = "110"
    alert(mychar);
}

function Mygame() {
    var mygame = confirm("你喜欢绝地求生吗？")
    if (mygame == true) {
        document.write("是的，喜欢玩");
    } else {
        document.write("不，我不喜欢");
    }
}

[]

function sscore() {
    var myscore = prompt("分数多少？")
    if (myscore != null) {
        alert(myscore);
    } else {
        document.write("加油！")
    }
}

function Wopen() {
    window.open('http://www.imooc.com', '_blank', 'width=600,height=400')
}

var oo = window.open("http://www.baidu.com", "_blank");
oo.close();

function testwindow() {
    var newopen = prompt("是否打开新窗口？", "http://imooc.com")
    if (newopen != null) {
        window.open("http://imooc.com", "_blank", "width:40px,height:500px,menubar=no,toolbar=no")
    }
}