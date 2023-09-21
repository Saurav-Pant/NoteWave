import connectToDB from "@/db/db";
import Notes from "@/models/Notes";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = await req.json();
    const { name, title, desc, img } = reqBody;
    const Note = new Notes({
      name,
      title,
      desc,
      img,
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

export async function GET(req: NextRequest, res: NextResponse) {}
