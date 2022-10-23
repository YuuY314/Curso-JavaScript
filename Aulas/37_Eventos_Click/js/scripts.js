var btn = document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", function(){
    console.log("Clicou!");
    this.style.color = "red";
});

var title = document.querySelector("#title");

title.addEventListener("click", function(){
    console.log("Clicou no título");
    this.style.color = "blue";

    var subtitle = document.querySelector(".subtitle");
    subtitle.style.display = "none";
});

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", function(){
    console.log("Click duplo");
});