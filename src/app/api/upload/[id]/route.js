import connectToDB from "../../../../db/db";
import Notes from "../../../../models/Notes";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: notesTitle, newDescription: notesDescription } =
    await request.json();
  await connectToDB();
  await Notes.findByIdAndUpdate(id, { notesTitle, notesDescription });

  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectToDB();
  const Note = await Notes.findOne({ _id: id });

  return NextResponse.json({ Note }, { status: 200 });
}
