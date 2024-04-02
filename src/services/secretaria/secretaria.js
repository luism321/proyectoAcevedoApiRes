import { body, validationResult } from "express-validator";
import { client } from "../../confDb";


// get condominios
export const getSecretaria = async (request, resp) => {
console.log('ddddssss')
    try {
        const Condominios = await client.query("select * from secretaria")
        resp.status(200).send(Condominios.rows)
        console.log(Condominios.rows)

    } catch (e) {
        console.log("dddddd")
        resp.send({ msg: false, error: e.message })
    }
}

// get create condominios


// get create delete


export const deleteClient = async (request, res) => {

}