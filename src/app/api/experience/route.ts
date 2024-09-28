import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri as string);

export async function GET() {
  try {
    await client.connect();

    const db = client.db("portfolio");
    const collection = db.collection("experience");

    const experiences = await collection.find().toArray();

    return NextResponse.json({ data: experiences });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await client.close();
  }
}
