import { NextResponse } from "next/server"
import { getCollection } from "../../../../lib/db"
// import { getCollection } from "@/lib/db"

export async function POST(request) {
  try {
    const formData = await request.formData()
    const collection = await getCollection("contents")

    const content = {}
    for (const [key, value] of formData.entries()) {
      if (value instanceof Blob) {
        // Handle file uploads
        content[key] = {
          name: value.name,
          type: value.type,
          size: value.size,
          url: `https://fake-storage.com/${value.name}`,
        }
      } else if (key === "hashtags" || key === "permissions") {
        content[key] = value.split(",").map((item) => item.trim())
      } else {
        content[key] = value
      }
    }

    content.date = new Date().toISOString()

    const result = await collection.insertOne(content)
    return NextResponse.json({ id: result.insertedId.toString() })
  } catch (error) {
    console.error("Error in POST /api/contents:", error)
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function GET() {
  try {
    const collection = await getCollection("contents")
    const contents = await collection.find({}).toArray()

    return NextResponse.json(
      contents.map(({ _id, ...rest }) => ({
        id: _id.toString(),
        ...rest,
      })),
    )
  } catch (error) {
    console.error("Error in GET /api/contents:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
