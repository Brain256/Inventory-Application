require('dotenv').config(); 
const path = require('path'); 

const express = require('express'); 

const indexRouter = require('./routes/indexRouter.js'); 

const app = express();

app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, 'views')); 
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter); 

PORT = process.env.PORT || 8000; 

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`); 
})