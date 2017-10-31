function promptElement() {
    let container = document.getElementById("container")
    let element = window.prompt("Type html element");
    container.innerHTML = element;  
}

setInterval(promptElement, 1000);