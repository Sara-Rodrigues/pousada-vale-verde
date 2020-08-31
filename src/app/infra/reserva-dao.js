
class ReservasDao {
    constructor(db) {
        this._db = db;
    }

    list() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM reserva',
                (err, result) => {
                    if (err) return reject('Não foi possível listar suas reservas.');
                    return resolve(result);
                }
            );
        });
    }

    findById(id_reserva) {
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT * 
                    FROM reserva 
                    WHERE id_reserva = ?
                `,
                [id_reserva],
                (err, reserva) => {
                    if (err) return reject('Não foi possível encontrar a reserva informada');
                    return resolve(reserva);
                });
        });
    }

    save(reserva) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO reserva(
                    id_quarto,
                    dt_inicio,
                    dt_saida
                )
            `,
                [
                    reserva.id_quarto,
                    reserva.dt_inicio,
                    reserva.dt_saida

                ],
                (err) => {
                    if (err) {
                        console.error(err);
                        return reject('Não foi possível adicionar reserva.');
                    }
                    resolve();
                })
        });
    }

    update(reserva) {
        return new Promise((resolve, reject) => {
            this._db.run(
                `
                    UPDATE reserva SET 
                    dt_inicio = ?,
                    dt_saida = ?,
                    WHERE id_reserva = ?
                `,
                [
                    reserva.id_reserva,
                    reserva.dt_inicio,
                    reserva.dt_saida

                ],
                (err) => {
                    if (err) {
                        console.error(err);
                        return reject('Não foi possível atualizar a sua reserva.');
                    }
                    resolve();
                })
        });
    }

    
    delete(id_reserva){
        return new Promise((resolve, reject) => {
            this._db.run(
                `
                    DELETE
                    FROM reserva
                    WHERE id_reserva = ?
                `,
                [id_reserva],
                (err) => {
                    if (err) {
                        console.error(err);
                        return reject('Não foi possível excluir a reserva.');
                    }
                    resolve();
                })
            });
    }

}

module.exports = ReservasDao;