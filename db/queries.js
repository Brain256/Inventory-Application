const pool = require("./pool.js"); 

const getTeams = async () => {
    const { rows } = await pool.query("SELECT * FROM teams ORDER BY id"); 
    return rows; 
}

const addTeam = async (name, nation, league, manager) => {
    await pool.query('INSERT INTO teams (name, nation, league, manager) VALUES ($1, $2, $3, $4)', [name, nation, league, manager])
}

const getTeam = async (id) => {
    const { rows } = await pool.query("SELECT * FROM teams WHERE teams.id = $1", [id]); 
    return rows[0]; 
}

const updateTeam = async (id, name, nation, league, manager) => {
    await pool.query('UPDATE teams SET name=$1, nation=$2, league=$3, manager=$4 WHERE teams.id = $5', [name, nation, league, manager, id])
}

module.exports = { getTeams, addTeam, getTeam, updateTeam }; 