import { redis } from "@/app/libs/redis";
import connectToDB from "@/db/db";
import Notes from "@/models/Notes";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = await req.json();
    const { notesTitle, notesDescription, fileLink, creator, creatorImgUrl } =
      reqBody;
    const Note = new Notes({
      notesTitle,
      notesDescription,
      fileLink,
      creator,
      creatorImgUrl,
    });

    const NewNotes = await Note.save();
    console.log(NewNotes);

    const response = NextResponse.json({
      message: "Notes created successfully",
      success: true,
      NewNotes,
    });

    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "*");
    response.headers.set("Access-Control-Allow-Headers", "*");

    return response;
  } catch (error: any) {
    const response = NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "*");
    response.headers.set("Access-Control-Allow-Headers", "*");
    return response;
  }
}

export async function GET() {
  try {
    const cachedNote = await redis.get("note");
    if (typeof cachedNote === "object") {
      const noteString = JSON.stringify(cachedNote);
      const parsedNote = JSON.parse(noteString);
      const response = NextResponse.json({
        message: "Review fetched successfully from cache",
        success: true,
        Note: parsedNote,
      });
      response.headers.set("Access-Control-Allow-Origin", "*");
      response.headers.set(
        "Access-Control-Allow-Methods",
        "GET,PUT,POST,DELETE"
      );
      response.headers.set("Access-Control-Allow-Headers", "Content-Type");
      console.log("From Cached one");
      return response;
    }

    const Note = await Notes.find();

    const noteString = JSON.stringify(Note);

    await redis.set("note", noteString);

    // Create response
    const response = NextResponse.json({
      message: "Review fetched successfully",
      success: true,
      Note,
    });

    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    console.log("From Directly Database");

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectToDB();
  await Notes.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
