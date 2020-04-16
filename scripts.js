document
    .querySelector("button.fat") // Pesquisa de um seletor "button.fat"
    .addEventListener("click", function() { // adicionando um ouvidor de eventos "click"
        document
            .querySelector("#footer")
            .classList 
            .toggle("hide") // toggle colocar e tirar a class hide
    }) 