const { Router } = require("express"); 
const indexController = require("../controllers/indexController.js"); 
const indexRouter = Router(); 

indexRouter.get('/', indexController.teamGet); 

indexRouter.get('/new', indexController.teamCreateGet); 
indexRouter.post('/new', indexController.teamCreatePost); 

module.exports = indexRouter; 