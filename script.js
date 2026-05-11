import express from 'express'

const app = express()

app.use(function(res,req,next){
    console.log("This is a middleware!");
    next();
})
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/', (req, res) => {
  res.send('Hello World changed')
})
app.get("/profile", (req, res, next) =>{
    return next(new Error("Something went wrong!"))
})
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

