const { getTeams, addTeam, getTeam, updateTeam } = require('../db/queries.js')

exports.teamGet = async (req, res) => {
    const teams = await getTeams(); 
    res.render('index', {teams: teams}); 
}

exports.teamCreateGet = (req, res) => {
    res.render('form', {team:null}); 
}

exports.teamCreatePost = async (req, res) => {
    const { name, nation, league, manager } = req.body;
    await addTeam(name, nation, league, manager); 
    res.redirect('/'); 
}

exports.teamUpdateGet = async (req, res) => {
    const team = await getTeam(req.params.id); 
    res.render('form', {team:team})
    
}

exports.teamUpdatePost = async (req, res) => {
    const { name, nation, league, manager } = req.body;
    await updateTeam(req.params.id, name, nation, league, manager); 
    res.redirect('/')
}