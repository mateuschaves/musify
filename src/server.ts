import app from './app'
import { createConnection } from 'typeorm'

createConnection().then(() => {
  app.server.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${process.env.PORT || 3000}`)
  })
})
