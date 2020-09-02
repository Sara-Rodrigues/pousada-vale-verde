const db = require('../../config/database');
const QuartosDao = require('../infra/quartos-dao');
const ReservasDao = require('../infra/reserva-dao');
const ContatoDao = require('../infra/contato-dao');

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
        
        const vip = "VIP";
        const dao = new QuartosDao(db);

        dao.listType(vip)
            .then(quartos => res.marko(
                require('../views/quartos/quartosVip.marko'),
                { quartos }
            ))
            .catch(err => console.error(err));
    });

   
    app.get('/quartos/apartamento', (req, res) => {

        const apartamento = "APARTAMENTO";
        const dao = new QuartosDao(db);

        dao.listType(apartamento)
            .then(quartos => res.marko(
                require('../views/quartos/quartosApartamento.marko'),
                { quartos }
            ))
            .catch(err => console.error(err));

    });


    app.get('/reserva', (req, res) => {
        const dao = new ReservasDao(db)
        res.marko(
            require('../views/reserva/reserva.marko')
        );
    
    });

   
    app.post('/reserva', (req, res) => {
        
        const dao = new ReservasDao(db)

        dao.add()
        .then(res.redirect('/reserva'))
        .catch( err => console.log(err));
    });

    app.delete('/reserva/:id', (req, res) => {
        const id = req.params.id;
        const dao = new ReservasDao(db)

        dao.delete(id)
        .then(res.status(200).end()).catch( err => console.log(err));

    });

    
    app.get('/admin/reservas', (req, res) => {
        const dao = new ReservasDao(db)

        dao.list()
        .then(reservas => res.marko(
            require('../views/quartos/quartos.marko'),
            {  reservas }
        ))
        .catch(err => console.error(err));

    });


    app.get('/contato', (req, res) => {
        res.marko(
            require('../views/contato/contato.marko')
        );
    });


    app.post('/contato', (req, res) => {
        const dao = new ContatoDao(db)

        dao.add()
        .then(res.redirect('../views/contato/contato.marko'))
        .catch( err => console.log(err));
    });
}