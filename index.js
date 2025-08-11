require('dotenv').config(); 
const path = require('path'); 

const express = require('express'); 

const indexRouter = require('./routes/indexRouter.js');

const methodOverride = require('method-override');

const app = express();

app.use(methodOverride('_method')); 



app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, 'views')); 

app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public"); 
app.use(express.static(assetsPath))

app.use("/", indexRouter); 

PORT = process.env.PORT || 8000; 

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`); 
})