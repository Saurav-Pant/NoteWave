import connectToDB from "../../../../db/db";
import Notes from "../../../../models/Notes";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(request: NextRequest, { params }: any) {
  const { id } = params;
  const { newTitle: notesTitle, newDescription: notesDescription } =
    await request.json();
  await connectToDB();
  await Notes.findByIdAndUpdate(id, { notesTitle, notesDescription });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request: NextRequest, { params }: any) {
  const { id } = params;
  console.log(id);
  await connectToDB();
  const Note = await Notes.findOne({ _id: id });
  return NextResponse.json({ Note }, { status: 200 });
}
