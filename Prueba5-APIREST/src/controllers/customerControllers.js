const controller ={};

// lista cada una de las filas de la tabla usuario
controller.list = (req, res) =>{
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario', (err, usuarios) => {
            if(err){
                res.json(err);
            }
            console.log(usuarios);
            res.render('usuarios');
        });
    });
};

module.exports = controller;