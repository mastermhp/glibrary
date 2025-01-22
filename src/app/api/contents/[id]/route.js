import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getCollection } from "../../../../../lib/db";

export async function GET(request, { params }) {
  try {
    const id = params.id;
    const collection = await getCollection("contents");

    const content = await collection.findOne({ _id: new ObjectId(id) });
    if (!content) {
      return NextResponse.json({ error: "Content not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: content._id.toString(),
      ...content,
    });
  } catch (error) {
    console.error("Error in GET /api/contents/[id]:", error);
    return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const id = params.id;
    const collection = await getCollection("contents");
    const formData = await request.formData();

    const updatedContent = {};
    for (const [key, value] of formData.entries()) {
      if (value instanceof Blob) {
        updatedContent[key] = {
          name: value.name,
          type: value.type,
          size: value.size,
          url: `https://fake-storage.com/${value.name}`,
        };
      } else if (key === "hashtags" || key === "permissions") {
        updatedContent[key] = value.split(",").map((item) => item.trim());
      } else {
        updatedContent[key] = value;
      }
    }

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedContent }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Content not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in PUT /api/contents/[id]:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = params.id;
    const collection = await getCollection("contents");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Content not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in DELETE /api/contents/[id]:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

