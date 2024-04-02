const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { routes } = require('../../config/routes/index');
const jwt = require('jsonwebtoken')

import { client } from '../../confDb'


var XLSX = require("xlsx");

// const ExcelAJSON = () => {
//   const excel = XLSX.readFile(
//     "/Users/RubenDiaz/Downloads/Book52.xlsx"
//   );
//   var nombreHoja = excel.SheetNames; // regresa un array
//   let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);

//   const jDatos = [];
//   var opciones = { year: 'numeric', month: 'short', day: 'numeric' };
//   for (let i = 1; i < datos.length; i++) {
//     const dato = datos[i];
//     jDatos.push({
//       ...dato,
//       Fecha: new Date()
//       .toLocaleDateString('es',opciones)
//       .replace(/ /g,'-')
//       .replace('.','')
//       .replace(/-([a-z])/, function (x) {return '-' + x[1].toUpperCase()})
//     });
//     // if(jDatos){
//     //     const users =  client.query(`INSERT INTO entrega1x10 (cedulaEncargado,cedula,parroquia,nombres,apellidos,telefono,centroVotacion,fechaCreacion) VALUES ('${datos[i].RESP}', '${datos[i].CEDULA}','${datos[i].PARROQUIA}', '${datos[i].NOMBRES}','${datos[i].APELLIDOS}','${datos[i].TELEFONO}','${datos[i].UBCH}','${jDatos[0].Fecha}')`)
//     // }
//   }
//   console.log(jDatos)
 
// };
// ExcelAJSON();


router.post(routes.Login, async (req, resp) => {
    const data = req.body
    const users = await client.query(`select * from users where users = '${data.usuario}'and password = '${data.password}' `)
    let dataUsuario = ''
    
    try {
        if (users) {
            if (users) {
                dataUsuario = await client.query(`select * from users  where users.id =${users.rows[0].id}`)
            }
            jwt.sign(users.rows[0].users + users.rows[0].password, 'secretkey', (error, token) => {
                resp.json({
                    mensaje: "token creado con éxito",
                    token,
                    msg: true,
                    users: dataUsuario.rows[0]
                })
            })
        } else {
            resp.json(
                {
                    mensaje: "Usuario o contraseña incorrectos"
                }
            )


        }
    }
    catch (error) {
        resp.send({ msg: false, error: error.message })

    }
})



module.exports = router;