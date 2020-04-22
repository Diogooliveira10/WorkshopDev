const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function() {

    // criar a tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)

    // inserir dado na table
    const query = `
        INSERT INTO ideas(
            image,
            title,
            category,
            description,
            link
        ) VALUES (?,?,?,?,?);
    `

    const values = [
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Cursos de Programação",
        "Estudo",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit temporibus magni nihil iusto at provident quas aspernatur voluptates quasi unde in a est voluptas atque, possimus totam ad veniam?",
        "https://rocketseat.com.br"
    ]

    // db.run(query, values, function(err) {
    //    if (err) return console.log(err)

    //    console.log(this)
    // })

    // consultar dados na tabela

    // deletar um dado na tabela

})