import { NextResponse } from "next/server";

export async function DELETE() {
  const response = NextResponse.json(
    {
      message: "Logout successfully, Cheking wsl",
      success: true,
    },
    { status: 200 }
  );
  response.cookies.delete("token");
}
