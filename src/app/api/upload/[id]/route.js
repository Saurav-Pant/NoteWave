import connectToDB from "../../../../db/db";
import Notes from "../../../../models/Notes";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { newTitle: notesTitle, newDescription: notesDescription } =
      await request.json();

    await connectToDB();

    const updatedNotes = await Notes.findByIdAndUpdate(id, {
      notesTitle,
      notesDescription,
    });

    if (!updatedNotes) {
      const response = new NextResponse(
        { message: "Topic not found" },
        { status: 404 }
      );
      response.headers.set("Access-Control-Allow-Origin", "*");
      response.headers.set("Access-Control-Allow-Methods", "*");
      response.headers.set("Access-Control-Allow-Headers", "*");
      return response;
    }

    const response = new NextResponse(
      { message: "Topic updated" },
      { status: 200 }
    );
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "*");
    response.headers.set("Access-Control-Allow-Headers", "*");

    return response;
  } catch (error) {
    console.error("Error in PUT request:", error);
    const response = new NextResponse(
      { message: "Internal Server Error" },
      { status: 500 }
    );
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "*");
    response.headers.set("Access-Control-Allow-Headers", "*");
    return response;
  }
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectToDB();
  const Note = await Notes.findOne({ _id: id });

  const response = NextResponse.json({ Note }, { status: 200 });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "*");
  response.headers.set("Access-Control-Allow-Headers", "*");

  return response;
}
