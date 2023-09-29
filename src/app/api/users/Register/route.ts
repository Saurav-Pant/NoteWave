import connectToDB from "@/db/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectToDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    console.log(reqBody);

    const user = await User.findOne({ email });

    if (user) {
      const response = NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
      // add CORS headers
      response.headers.set("Access-Control-Allow-Origin", "*");
      response.headers.set("Access-Control-Allow-Methods", "*");
      response.headers.set("Access-Control-Allow-Headers", "*");
      return response;
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const NewUser = await newUser.save();
    console.log(NewUser);

    const response = NextResponse.json({
      message: "User created successfully",
      success: true,
      NewUser,
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
    // add CORS headers
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "*");
    response.headers.set("Access-Control-Allow-Headers", "*");
    return response;
  }
}
