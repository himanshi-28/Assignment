const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser');
const colors = require ('colors')
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorMiddleware');
const ocrRoutes = require('./routes/ocrRoutes'); // Import OCR routes



//dotenv config
dotenv.config()

//mongo connection
connectDB(); 

//rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(errorHandler);

const PORT = process.env.PORT || 8080

//API routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/ocr', ocrRoutes);


//listen server
app.listen(PORT, () =>{
    //console.log('server running in ${process.env.DEV_MODE} on ${PORT}'.bgCyan.white);
    console.log(`server running in ${process.env.DEV_MODE} on port no ${PORT}`.bgCyan.white);

});
