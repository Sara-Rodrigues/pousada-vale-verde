const db = require('../../config/database');
const QuartosDao = require('../infra/quartos-dao');
const ReservasDao = require('../infra/reserva-dao');

module.exports = (app) => {
    app.get('/', (req, res) => {
     res.marko(
         require('../views/home/homePage.marko')
     );
    });

    app.get('/quartos', (req, res) => {

        const dao = new QuartosDao(db);
        
        dao.list()
            .then(quartos => res.marko(
                require('../views/quartos/quartos.marko'),
                {  quartos }
            ))
            .catch(err => console.error(err));
    });
    
 
    app.get('/quartos/vip', (req, res) => {

        const dao = new QuartosDao(db);

        dao.listType()
            .then(quartos => res.marko(
                require('../views/quartos/quartosVip.marko'),
                { quartos }
            ))
            .catch(err => console.error(err));
    });

    // falta configurar
    app.get('/quartos/apartamento', (req, res) => {
        res.marko(
            require('../views/quartos/quartosApartamento.marko')
        );
    });

    // falta configurar
    app.post('/reserva', (req, res) => {
        res.marko(
            require('../views/reserva/reserva.marko')
        );
    });

    // falta configurar
    app.post('/contato', (req, res) => {
        res.marko(
            require('../views/contato/contato.marko')
        );
    });

}