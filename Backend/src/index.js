
import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('server running at port: ' + PORT); 
})

app.get('/', (req, res) => {
    res.json('server is running!!!')
})

