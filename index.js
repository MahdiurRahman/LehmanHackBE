const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const PORT = 5000 || process.env.PORT

// db.sync({ force: true }).then(async () => {
    // seedDatabase();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader('Access-Control-Allow-Methods', '*'); 
        res.setHeader('Access-Control-Allow-Headers', "*");
        next();
    });

    app.use("/api", apiRouter); //init express app
    app.listen(PORT, ()=>{
        console.log(`Server is running on PORT${PORT}`);
    })
// });