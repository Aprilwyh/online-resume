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