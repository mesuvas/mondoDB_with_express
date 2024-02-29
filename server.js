const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
//load environment variables from a .env file into process.env.
dotenv.config({path: './config.env'})
  
//1.Start server
//2. Database connection
mongoose.connect(process.env.CONN_STR).then((conn) => {
    console.log('Mongodb conected success..')
}).catch((error) =>{
    console.log(error);
    console.log('Mongodb connected error..')
})

//3. Start the application
//create a server
const port = process.env.PORT;
app.listen(port, () => {
    console.log('server started...')
}) 