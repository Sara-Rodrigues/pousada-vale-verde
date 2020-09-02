const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data.db');


const CONTATO_SCHEMA = `
    CREATE TABLE IF NOT EXISTS contato (
        id_contato INTEGER PRIMARY KEY AUTOINCREMENT,
        nome_contato TEXT NOT NULL,
        email_contato TEXT NOT NULL UNIQUE,
        assunto_contato TEXT NOT NULL,
        msg_contato TEXT NOT NULL
    )
`;

const QUARTO_SCHEMA = `
    CREATE TABLE IF NOT EXISTS quarto (
        id_quarto INTEGER PRIMARY KEY NOT NULL,
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
        dt_saida TEXT NOT NULL,
        FOREIGN KEY (id_quarto) REFERENCES quarto (id_quarto)

    )
    `;

const INSERT_CONTATO = `
        INSERT OR IGNORE INTO contato (
            nome_contato,
            email_contato,
            assunto_contato,
            msg_contato
        )VALUES (?, ?, ?, ?)

`;

const INSERT_QUARTO = `
        INSERT OR IGNORE INTO quarto (
            id_quarto,
            tipo_quarto,
            descricao_quarto,
            valor_quarto
        )VALUES (?, ?, ?, ?)
`;


const INSERT_RESERVA = `
        INSERT OR IGNORE INTO reserva (
            id_quarto,
            dt_inicio,
            dt_saida
        )VALUES (?, ?, ?)
`;

db.serialize(() => {
    db.run('PRAGMA foreign_keys=ON')
    db.run(CONTATO_SCHEMA);
    db.run(QUARTO_SCHEMA);

    db.run(INSERT_QUARTO, [1, 'VIP', '4 Quartos, 3 Banheiros, piscina', 900]);
    db.run(INSERT_QUARTO, [2, 'VIP', '3 Quartos, 2 Banheiros, cobertura', 750]); 
    db.run(INSERT_QUARTO, [3, 'VIP', '2 Quartos, 2 Banheiros, sala de jogos', 600]);
    db.run(INSERT_QUARTO, [4, 'VIP', '1 Quartos, 1 Banheiros, academia', 900]);
    db.run(INSERT_QUARTO, [5, 'VIP', '4 Quartos, 3 Banheiros, sala de estar', 900]);

    db.run(INSERT_QUARTO, [6, 'APARTAMENTO', 'Arejado', 450]);
    db.run(INSERT_QUARTO, [7, 'APARTAMENTO', 'Arejado', 350]);
    db.run(INSERT_QUARTO, [8, 'APARTAMENTO', 'Arejado', 250]);
    db.run(INSERT_QUARTO, [9, 'APARTAMENTO', 'Arejado', 550]);
    db.run(INSERT_QUARTO, [10, 'APARTAMENTO', 'Arejado', 650]);
    db.run(INSERT_QUARTO, [11, 'APARTAMENTO', 'Arejado', 200]);
    db.run(INSERT_QUARTO, [12, 'APARTAMENTO', 'Arejado', 370]);
    db.run(INSERT_QUARTO, [13, 'APARTAMENTO', 'Arejado', 225]);
    db.run(INSERT_QUARTO, [14, 'APARTAMENTO', 'Arejado', 300]);
    db.run(INSERT_QUARTO, [15, 'APARTAMENTO', 'Arejado', 450]);
        
        
        
    db.run(RESERVA_SCHEMA)

    db.each('SELECT * FROM contato', (err, contatos) => {
        console.log('contatos:', contatos);
    });

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