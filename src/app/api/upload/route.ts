import connectToDB from "@/db/db";
import Notes from "@/models/Notes";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = await req.json();
    const { notesTitle, notesDescription, fileLink } = reqBody;
    const Note = new Notes({
      notesTitle,
      notesDescription,
      fileLink,
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
    const Note = await Notes.find();

    const response = NextResponse.json({
      message: "Review fetched successfully",
      success: true,
      Note,
    });

    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
