// load our app server using express
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

app.use(morgan('short'))


//ruta localhost:3003/products/
app.get('/products', (req,res) => {
    const connection = mysql.createConnection({
        host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
        user: 'bsale_test',
        password: 'bsale_test',
        database: 'bsale_test'
    })
    const queryString = "SELECT * FROM product"
    connection.query(queryString,(err,rows,fields) =>{
        if (err){
            console.log('Failed to query for products' + err)
            res.sendStatus(500)
            throw err
        }
        console.log('i think we fetched products succesfully')
        res.json(rows)
    })
})


app.get('/', (req,res) => {
    res.send('Hello from root')
})
const PORT = process.env.PORT || 3003;
//localhost:3003
app.listen(PORT,()=> {
    console.log('Server is up and listening on:' + PORT)
})