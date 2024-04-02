import { body, validationResult } from "express-validator";
import { client } from "../../confDb";


// get condominios
export const getEdificios = async (request, resp) => {

    try {
        const Condominios = await client.query("select * from edificio")
        console.log(Condominios.rows[0])

        resp.status(200).send(Condominios.rows)

    } catch (e) {
        resp.send({ msg: false, error: e.message })
    }
}

// get create condominios

// export const createUpdateClient = async (request, res) => {
//     const data = request.body
//     try {
//         const Condominios = await client.query(`insert into condominios (nombre, ubicacion, rif, status) values ('${data.nombre}', '${data.ubicacion}', '${data.rif}','active')RETURNING id`)
//         console.log('fsdghfdghfd')
//         console.log(Condominios.rows[0])
//         const users = await client.query(`insert into users (id_condominios, nombre, apellido, cedula, correo) values ('${Condominios.rows[0].id}', '${data.nombre}', '${data.nombre}','${data.nombre}','${data.nombre}')`)
//         const admin = await client.query(`insert into admin  (id_condominios, rol, users, password) values ('${Condominios.rows[0].id}', 'Admin', '${data.nombre}', '${data.nombre}')`)
//         res.status(200).send(true)

//     } catch (e) {
//         res.send({ msg: false, error: e.message })
//     }
// }

// get create delete


// export const deleteClient = async (request, res) => {

// }
