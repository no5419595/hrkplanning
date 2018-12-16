const config = require('../../config.json');
const { Client } = require('pg');

const client = new Client({
    user: config.dbUser,
    host: config.dbHost,
    database: config.dbName,
    password: config.dbPass,
    port: config.dbPort,
    ssl: true
});
client.connect();

module.exports = {
    query: function(){
        let query_text= 'select * from t1';
        client.query(query_text, (err, res) => {
            if (err) {
            console.log('error!' , err.stack);
            } else {
                console.log('resss!' , res.rows);
            }
            client.end()
        });
    }
}
