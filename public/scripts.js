function onOff() { // adicionando um ouvidor de eventos "click"
    document
        .querySelector("#modal")
        .classList 
        .toggle("hide") // toggle colocar e tirar a class hide

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")

}

//document
//    .querySelector("button.fat") // Pesquisa de um seletor "button.fat"
//    .addEventListener("click", onOff) 