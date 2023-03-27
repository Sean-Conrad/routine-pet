require('dotenv').config()

const express = require('express')
const taskRoutes = require('./routes/tasks')

//express app
const app = express()

//middleware

//this function looks in the requests for any body data and then parses it so it 
//can be accessed in the req handlers below. Allows us to use req.body in a post request
app.use(express.json())


//this function logs all the requests in the console, 
//next ensures we move on to the next piece of middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/tasks', taskRoutes) // '/api/tasks...' is continued in taskRoutes

//listen for requests
app.listen(process.env.PORT, ()=> {
    console.log('listening on port', process.env.PORT)
})

