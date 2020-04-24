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

function checkFields(event) {
    
    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",
    ]
    
    const isEmpty = valuesToCheck.find(function(value) {

        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()

        if(checkIfIsString && checkIfIsEmpty) {
            return true
        }
    })
    
    if(isEmpty) {
        event.preventDefault()
        alert("Por favor, preencha todos os campos")
    }
}

//document
//    .querySelector("button.fat") // Pesquisa de um seletor "button.fat"
//    .addEventListener("click", onOff) 