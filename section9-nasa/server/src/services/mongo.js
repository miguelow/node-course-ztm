const mongoose = require('mongoose')
require('dotenv').config();


const  MONGO_URL = process.env.MONGO_URL

mongoose.connection.once('connected', () => {
    console.log('Connected to MongoDB')
})

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err)
})

async function mongoConnect(){
    await mongoose.connect(MONGO_URL)
} 
async function mongoDisconnect(){
    await mongoose.disconnect()
} 

module.exports = {
    mongoConnect,
    mongoDisconnect
}