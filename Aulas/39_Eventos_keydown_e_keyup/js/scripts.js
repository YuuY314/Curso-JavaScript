document.addEventListener("keydown", function(){
    if(event.key === "Enter"){
        console.log("Apertou Enter");
    }
});

document.addEventListener("keyup", function(){
    if(event.key === "Enter"){
        console.log("Soltou Enter");
    }
});