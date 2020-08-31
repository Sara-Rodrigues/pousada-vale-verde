
class QuartosDao {
    constructor(db){
        this._db = db;
    }

    list() {
        return new Promise((resolve, reject) => {
            this._db.all('SELECT DISTINCT(tipo_quarto) FROM quarto', (err, quartos) => {
                if (err) return reject('Nenhum quarto cadastrado');
                return resolve(quartos);
            });
        });
    }

    listType(tipo_quarto){
        return new Promise((resolve, reject) => {
            this._db.all(
                `
                    SELECT * 
                    FROM quarto 
                    WHERE tipo_quarto = ?
                `,
                [tipo_quarto],
                (err, tipoQuarto) => {
                    if (err) return reject('Não foi possível encontrar o quarto '+ tipo_quarto + '.');
                    return resolve(tipoQuarto); 
            });
        });
    }

    findById(id_quarto){
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT * 
                    FROM quarto 
                    WHERE id_quarto = ?
                `,
                [id_quarto],
                (err, quarto) => {
                    if (err) return reject('Não foi possível encontrar o quarto informado');
                    return resolve(quarto);
             });
        });
    }

    save(quarto) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO quarto (
                    tipo_quarto,
                    descricao_quarto,
                    valor_quarto
                ) VALUES (?, ?, ?)
            `,
            [
                quarto.tipo_quarto,
                quarto.descricao_quarto,
                quarto.valor_quarto
            ],
            (err) => {
                if (err) {
                    console.error(err);
                    return reject('Não foi possível adicionar quarto.');
                }
                resolve();
            })
        });
    }

    update(quarto) {
        return new Promise((resolve, reject) => {
                this._db.run(
                    `
                    UPDATE quarto SET 
                    tipo_quarto = ?, 
                    descricao_quarto = ?,
                    valor_quarto = ?,
                    WHERE id_quarto = ?
                `,
                [
                    quarto.id_quarto,
                    quarto.tipo_quarto,
                    quarto.descricao_quarto,
                    quarto.valor_quarto
                ],
                (err) => {
                    if (err) {
                        console.error(err);
                        return reject('Não foi possível atualizar o quarto.');
                    }
                    resolve();
                })
            });
    }

    delete(id_quarto){
        return new Promise((resolve, reject) => {
            this._db.run(
                `
                    DELETE
                    FROM quarto
                    WHERE id_quarto = ?
                `,
                [id_quarto],
                (err) => {
                    if (err) {
                        console.error(err);
                        return reject('Não foi possível excluir o quarto.');
                    }
                    resolve();
                })
            });
    }
    
}

module.exports = QuartosDao;