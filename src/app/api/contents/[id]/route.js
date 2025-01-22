// import { NextResponse } from "next/server"
// import { ObjectId } from "mongodb"
// import { getCollection } from "../../../../../lib/db"
// // import { getCollection } from "@/lib/db"

// export async function PUT(request, { params }) {
//   try {
//     const content = await request.json()
//     const collection = await getCollection("contents")

//     // Process other fields
//     if (typeof content.hashtags === "string") {
//       content.hashtags = content.hashtags.split(",").map((tag) => tag.trim())
//     }
//     if (typeof content.permissions === "string") {
//       content.permissions = content.permissions.split(",").map((permission) => permission.trim())
//     }

//     await collection.updateOne({ _id: new ObjectId(params.id) }, { $set: content })

//     return NextResponse.json({ success: true })
//   } catch (error) {
//     console.error("Error in PUT /api/contents:", error)
//     return NextResponse.json({ error: error.message }, { status: 500 })
//   }
// }

import { NextResponse } from "next/server"

export async function GET(request, { params }) {
  try {
    const id = params.id

    // Here you would typically fetch the content from your database
    // For now, we'll return a mock response
    const content = {
      id,
      title: "Sample Content",
      description: "This is a sample content item",
      category: "Sample",
      hashtags: ["sample", "test"],
      // Add other fields as needed
    }

    return NextResponse.json(content)
  } catch (error) {
    console.error("Error in GET /api/contents/[id]:", error)
    return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 })
  }
}

