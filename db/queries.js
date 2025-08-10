const pool = require("./pool.js"); 

const getTeams = async () => {
    const { rows } = await pool.query("SELECT * FROM teams"); 
    return rows; 
}

const addTeam = async (name, nation, league, manager) => {
    await pool.query('INSERT INTO teams (name, nation, league, manager) VALUES ($1, $2, $3, $4)', [name, nation, league, manager])
}

module.exports = { getTeams, addTeam }; 