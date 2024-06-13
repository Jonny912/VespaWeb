const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const authRouter = require('./routes/authRouter');
const usersRouter = require('./routes/usersRouter');
const eventsRouter = require('./routes/eventsRouter')

const app = express();

const PORT = process.env.PORT || 3000;



app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/events', eventsRouter);

app.use((_, res) => {
    res.status(404).json({message: 'Page not found'})
})

app.use((error, req, res, next )=>{
  const {status = 500, message = 'Server error'} = error;
res.status(status).json({message})
})

const {DB_HOST} = process.env;

mongoose.connect(DB_HOST)
.then(() => {
console.log('Database connection successful')
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);  
});

})
.catch((error) => {
console.log(error.message)
process.exit(1);
})