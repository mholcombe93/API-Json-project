import db from "../db/connection.js"
import Queen from "../models/Queen.js"
import queens from "./queens.json" assert { type: "json" };


const insertData = async () => {
  //reset Database
  await db.dropDatabase()


//insert data
  // scrubData
  let structuredQueens = queens.map(queen => {
    let { name, winner, missCongeniality, image_url, quote, seasons } = queen
    return {
      name,
      order: queen.id,
      winner,
      missCongeniality,
      image_url,
      quote,
      seasons
    }
  })

  await Queen.create(structuredQueens)

  //close db connection
  await db.close()
}

insertData()