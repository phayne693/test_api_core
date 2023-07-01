import express from 'express'
import { Router } from 'express'

const app = express()

const route = Router()

route.get('/', (req,res) => {
  return res.json({
    succes: true,
    message: "Sucesso!"
  })
})


app.use(route)

app.listen(4000, ()=>{
  console.log("server runing!")
})