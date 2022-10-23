///uma linha por vez
var title = document.querySelector("#title");

title.style.color = "red"; //ele sobreescreve as regras de css

title.style.backgroundColor = "blue";

//numa linha só
var subtitle = document.querySelector(".subtitle");

subtitle.style.cssText = "color: blue; background-color:yellow; font-size: 20px";