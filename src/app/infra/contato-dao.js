
class ContatoDao {
    constructor(db) {
        this._db = db;
    }

    list() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM contato',
                (err, result) => {
                    if (err) return reject('Não foi possível listar os cadastros.');
                    return resolve(result);
                }
            );
        });
    }

    findById(id_contato) {
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT * 
                    FROM contato
                    WHERE id_contato = ?
                `,
                [id_contato],
                (err, contato) => {
                    if (err) return reject('Não foi possível encontrar o contato informado');
                    return resolve(contato);
                });
        });
    }


    add(contato) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO contato(
                    nome_contato,
                    email_contato,
                    assunto_contato,
                    msg_contato
                )VALUES (?, ?, ?, ?)
            `,
                [
                    contato.nome_contato,
                    contato.email_contato,
                    contato.assunto_contato,
                    contato.msg_contato

                ],
                (err) => {
                    if (err) {
                        console.error(err);
                        return reject('Não foi possível adicionar cadastro.');
                    }
                    resolve();
                })
        });
    }

    update(contato) {
        return new Promise((resolve, reject) => {
            this._db.run(
                `
                    UPDATE contato SET 
                    nome_contato,
                    email_contato,
                    assunto_contato,
                    msg_contato
                    WHERE id_contato = ?
                `,
                [
                    contato.id_contato,
                    contato.nome_contato,
                    contato.email_contato,
                    contato.assunto_contato,
                    contato.msg_contato

                ],
                (err) => {
                    if (err) {
                        console.error(err);
                        return reject('Não foi possível atualizar o cadastro.');
                    }
                    resolve();
                })
        });
    }

    
    delete(id_contato){
        return new Promise((resolve, reject) => {
            this._db.run(
                `
                    DELETE
                    FROM contato
                    WHERE id_contato = ?
                `,
                [id_contato],
                (err) => {
                    if (err) {
                        console.error(err);
                        return reject('Não foi possível excluir cadastro.');
                    }
                    resolve();
                })
            });
    }

}

module.exports = ContatoDao;