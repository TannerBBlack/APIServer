const mongoose = require('mongoose');
const {mongoPass, mongoUser} = require('./config')

const uri = '';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected Successfully')
})
.catch(console.error)