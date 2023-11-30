import connectToDB from "../../../../db/db";
import Notes from "../../../../models/Notes";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(
  request: NextRequest,
  response: NextResponse,
  { params }: any
) {
  const { id } = params;
  const { newTitle: notesTitle, newDescription: notesDescription } =
    await request.json();
  await connectToDB();
  await Notes.findByIdAndUpdate(id, { notesTitle, notesDescription });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "PUT");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(
  request: NextRequest,
  response: NextResponse,
  { params }: any
) {
  const { id } = params;
  console.log(id);
  await connectToDB();
  const Note = await Notes.findOne({ _id: id });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return NextResponse.json({ Note }, { status: 200 });
}
