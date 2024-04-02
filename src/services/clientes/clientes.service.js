import { body, validationResult } from "express-validator";
import { client } from "../../confDb";


// get condominios
export const getClients = async (request, resp) => {
console.log('ddddssss')
    try {
        const Condominios = await client.query("select id, nombres, secretaria,direccion,cedula,telefono, cargo,tipocargo from  patriotas left join cargos    on cedula=cedulaempleado ")

        resp.status(200).send(Condominios.rows)

    } catch (e) {
        console.log("dddddd")
        resp.send({ msg: false, error: e.message })
    }
}

// get create condominios

export const createUpdateClient = async (request, res) => {
    const data = request.body
    try {
        const Patriotas = await client.query(`insert into patriotas (nombres, cedula, telefono, secretaria) values ('${data.nombre}', '${data.cedula}', '${data.telefono}','${data.secretaria}')`)
       
        res.status(200).send(true)

    } catch (e) {
        res.send({ msg: false, error: e.message })
    }
}

// get create delete


export const deleteClient = async (request, res) => {

}
