import { MongoClient } from "mongodb";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const uri = process.env.NEXT_PUBLIC_URI as string;
  const client = new MongoClient(uri);
  const database = client.db("beta");
  const movies = database.collection("waitlist");
  try {
    await client.connect();
    const data = await req.json();
    await movies.insertOne(data);
    return new Response("Done", {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed", {
      status: 400,
    });
  } finally {
    client.close();
  }
}
