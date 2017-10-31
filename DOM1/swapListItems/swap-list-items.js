
function swapListItems() {
    let options = ['one', 'two', 'three', 'four'];

    //User input
    let firstItemToSwap = window.prompt("Please type the first item number you want to swap");
    let secondItemToSwap = window.prompt("Please type the item number you want to swap with");

    if (options.includes(firstItemToSwap) && options.includes(secondItemToSwap)) {
 
        let firstElement = document.getElementById(firstItemToSwap);
        let secondElement = document.getElementById(secondItemToSwap);

        let saved = firstElement.innerText;


        firstElement.innerText = secondElement.innerText;
        secondElement.innerText = saved;
    }
    else {
        window.alert("invalid input")
    }
}

setInterval(swapListItems, 1000)