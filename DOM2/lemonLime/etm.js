function alternateColors() {
    var arr = document.querySelectorAll("p");
    arr.forEach( function(elem, index){ 
        if (index % 2 == 0){
        elem.classList.add("bgGreen");
        }else {
            elem.classList.add("bgYellow")
        }
    })
}


