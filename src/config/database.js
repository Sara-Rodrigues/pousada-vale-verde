const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data.db');


const QUARTO_SCHEMA = `
    CREATE TABLE IF NOT EXISTS quarto (
        id_quarto INTEGER PRIMARY KEY AUTOINCREMENT,
        tipo_quarto TEXT NOT NULL,
        descricao_quarto TEXT NOT NULL,
        valor_quarto REAL NOT NULL
    )
    `;

const RESERVA_SCHEMA = `
    CREATE TABLE IF NOT EXISTS reserva (
        id_reserva INTEGER PRIMARY KEY AUTOINCREMENT,
        id_quarto INTEGER NOT NULL,
        dt_inicio TEXT NOT NULL,
        dt_saida TEXT NOT NULL

    )
    `;

const INSERT_QUARTO = `
        INSERT OR IGNORE INTO quarto (
            tipo_quarto,
            descricao_quarto,
            valor_quarto
        )VALUES (?, ?, ?)
`;

// ver se o id_quarto precisa ir no insert pois ele é chave estrangeira
const INSERT_RESERVA = `
        INSERT OR IGNORE INTO reserva (
            id_quarto,
            dt_inicio,
            dt_saida
        )VALUES (?, ?, ?)
`;

db.serialize(() => {
    db.run('PRAGMA foreign_keys=ON')
    db.run(QUARTO_SCHEMA);
    db.run(INSERT_QUARTO, ['VIP', '4 Quartos, 3 Banheiros, piscina', 900]);
    db.run(RESERVA_SCHEMA)

    db.each('SELECT * FROM quarto', (err, quartos) => {
        console.log('quartos:', quartos);
    });


    db.each('SELECT * FROM reserva', (err, reservas) => {
        console.log('reservas:', reservas);
    });
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log('DB closed');
        process.exit(0)
    });
});


module.exports = db;