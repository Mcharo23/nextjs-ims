import { NextResponse } from "next/server";
import { UserType } from "@/db/schema";
import { createUser } from "@/service/user";

export async function POST(request: Request) {
  try {
    const data: UserType = await request.json();
    const result = await createUser(data);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ detail: "An error occurred." }, { status: 500 });
  }
}
