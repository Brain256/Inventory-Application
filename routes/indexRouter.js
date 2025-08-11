const { Router } = require("express"); 
const indexController = require("../controllers/indexController.js"); 
const indexRouter = Router(); 

indexRouter.get('/', indexController.teamGet); 

indexRouter.get('/new', indexController.teamCreateGet); 
indexRouter.post('/new', indexController.teamCreatePost); 

indexRouter.get('/edit/:id', indexController.teamUpdateGet); 
indexRouter.post('/edit/:id', indexController.teamUpdatePost);

indexRouter.delete('/:id', indexController.teamDelete); 

module.exports = indexRouter; 