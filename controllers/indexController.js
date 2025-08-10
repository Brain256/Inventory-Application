const { getTeams, addTeam } = require('../db/queries.js')

exports.teamGet = async (req, res) => {
    const teams = await getTeams(); 
    res.render('index', {teams: teams}); 
}

exports.teamCreateGet = (req, res) => {
    res.render('createForm'); 
}

exports.teamCreatePost = async (req, res) => {
    const { name, nation, league, manager } = req.body;
    await addTeam(name, nation, league, manager); 
    res.redirect('/'); 
}