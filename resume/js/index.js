var body = document.getElementById("body");
var hd = body.getElementsByTagName("div")[0];
var bd = body.getElementsByTagName("div")[1];

var as = hd.getElementsByTagName("a");
var divs = bd.getElementsByClassName("symbol");

for(var i=0; i<as.length; i++) {
    as[i].setAttribute("index", i);
    as[i].onclick = function() {
        for(var j=0; j<as.length; j++) {
            as[j].removeAttribute("class");
        }
        this.className = "active";
        var index = this.getAttribute("index");
        for(var k=0; k<as.length; k++) {
            divs[k].style.display = "none";
        }
        divs[index].style.display = "block";
    };
}

//project
var project = document.querySelector(".project");
console.log(project);
var btn1 = project.getElementsByTagName("button")[0];
var btn2 = project.getElementsByTagName("button")[1];
var div1 = project.getElementsByTagName("div")[0];
var div2 = project.getElementsByTagName("div")[1];
var flag = false;

btn1.onclick = clickBtn1;
function clickBtn1() {
    if(div1.style.opacity == 0 && flag == false) {
        btn1.style.left = 50+"px";
        div1.style.opacity = 1;
        flag = true;
    }else if(div1.style.opacity == 1 && flag == true) {
        btn1.style.left = 300+"px";
        div1.style.opacity = 0;
        flag = false;
        btn2.onclick = clickBtn2;
    }
};
btn2.onclick = clickBtn2;
function clickBtn2() {
    if(div2.style.opacity == 0 && flag == false) {
        btn2.style.right = 50+"px";
        div2.style.opacity = 1;
        flag = true;
    }else if(div2.style.opacity == 1 && flag == true) {
        btn2.style.right = 300+"px";
        div2.style.opacity = 0;
        flag = false;
    }
};
