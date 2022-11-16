import express from "express"
import cors from "cors"
import prisma from "../lib/prisma" 



const app = express()

app.use(express.json())
app.use(cors( {
    origin: '*'
}))

app.get('/users', async (req, res) => {
    try {
      const users = await prisma.user.findMany()
  
      res.json(users)
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
      })
    }
  })

  app.post("/users", async (req, res) => {
    try {
      const { name, id } = req.body
  
      // games is an array of string | string[]
  
      const newUser = await prisma.user.create({
        data: {
          name: name,
          stravaId: id 
        },
      })
  
      res.json(newUser)
    } catch (error: any) {
      console.log(error.message)
      res.status(500).json({
        message: "Internal Server Errork ",
      })
    }
  })

  app.get('/goals', async (req, res) => {
    try {
      const goals = await prisma.goal.findMany()
  
      res.json(goals)
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
      })
    }
  })

  app.post("/goals", async (req, res) => {
    try {
      const { sportType, kilometers, startDate, goalDate, userId } = req.body
  
    const newGoal = await prisma.goal.create({
     
      data: {
        sportType,
        kilometers, 
        startDate,
        goalDate, 
        userId, 
      },
    })
      
      res.json(newGoal)
    } catch (error: any) {
      console.log(error.message)
      res.status(500).json({
        message: "Internal Server Errorbb ",
      })
    }
  })

  


const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
