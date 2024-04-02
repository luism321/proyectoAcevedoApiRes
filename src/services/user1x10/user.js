import { body, validationResult } from "express-validator";
import { client } from "../../confDb";


// get condominios
export const getUser1x10 = async (request, resp) => {
console.log('ddddssss')
    try {
        const data1x10 = await client.query("select * from entrega1x10 ")
        const patriotas = await client.query("select * from patriotas")

        // resp.status(200).send(data1x10.rows)
        let resul= []
        if(resp.status(200)){
        Array.prototype.forEach.call(data1x10.rows, items => {
          Array.prototype.forEach.call(patriotas.rows, itemsPa => {
            if(items.cedulaencargado === itemsPa.cedula){
              resul.push({
                id:items.id,
                nombresRes:itemsPa.nombres,
                nombres:items.nombres,
                apellidos:items.apellidos,
                telefono:items.telefono,
                cedula:items.cedula,
                parroquia:items.parroquia,
                centrovotacion:items.centrovotacion
              })
            }
          })
        })
        resp.status(200).send(resul)      
      }

        console.log(resul)

    } catch (e) {
        console.log(resp.error)
        resp.send({ msg: false, error: e.message })
    }
}

// get create condominios


// get create delete


export const deleteClient = async (request, res) => {

}
