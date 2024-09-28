import connectMongo from "@/utils/connect-mongo";
import Project from "@/models/project";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongo();
    const projects = await Project.find();
    return NextResponse.json({ data: projects });
  } catch (e) {
    return NextResponse.json({ e });
  }
}
