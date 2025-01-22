import { MongoClient } from "mongodb"

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local")
}

const indexesCreated = false
let mongoClient = null

export async function getMongoClient() {
  try {
    if (mongoClient) {
      return mongoClient
    }

    mongoClient = new MongoClient(process.env.MONGODB_URI)
    await mongoClient.connect()

    return mongoClient
  } catch (error) {
    console.error("Error connecting to database", error)
    throw error
  }
}

export async function getCollection(collectionName) {
  const client = await getMongoClient()
  const db = client.db() // uses default database specified in URI
  return db.collection(collectionName)
}

