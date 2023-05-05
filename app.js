const express = require('express')
const app = express()
const cors = require('cors');
const { status } = require('express/lib/response');
const port = 8383

app.use(express.static('incdex.html'))
app.use(cors());
app.use(express.json)

app.post('/', (req, res) =>{
    const {parcel} = req.body
    console.log(parcel)
    if (!parcel){
        return res.status(404).send({status: 'failer'})
    }
    return res.status(200).send({status:'success'})
})

app.listen( port, ()=>{
    console.log('server has started!')
})


