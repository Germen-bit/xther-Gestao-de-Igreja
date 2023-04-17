const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
require('dotenv').config()

connectDB()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/pastores', require('./routes/api/pastor'))
app.use('/api/usuarios', require('./routes/api/usuario'))
app.use('/api/cultos', require('./routes/api/cultos'))
app.use('/api/lancamentos', require('./routes/api/lancamentos'))
app.use('/api/tarefas', require('./routes/api/tarefas'))

// Error handler middleware
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`))