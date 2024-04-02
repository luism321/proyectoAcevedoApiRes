const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'AlcaldiaAcevedo',
    password: 'Labest94',
    port: 5432,
})
client.connect()

export { client };
