const pool = require("./pool.js"); 

const SQL = `
    CREATE TABLE IF NOT EXISTS teams (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(255),
        nation VARCHAR(255), 
        league VARCHAR(255), 
        manager VARCHAR(255)
    );

`; 

async function populate() {
    console.log('seeding...'); 
    await pool.query(SQL); 
    console.log('database populated'); 
}

populate(); 


