require('dotenv/config');
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect('mongodb://localhost:27017/StudentsDB', {useNewUrlParser: true}, (err) => {
if (!err) {console.log('MongoDB Connection Succeeded.') }
else {console.log('Error in DB connection:' + err) }
});



const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log('app runing on port ${port}!')
})