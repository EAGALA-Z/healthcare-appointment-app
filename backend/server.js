const express = require('express')
const cors = require('cors')
const doctorsRoute = require('./routes/doctors')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/doctors', doctorsRoute)

const PORT = 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
