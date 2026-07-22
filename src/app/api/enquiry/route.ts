import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const {
      name,
      email,
      company,
      phone,
      employees,
      trainingInterest,
      message,
    } = body;

    if (
      !name ||
      !email ||
      !company ||
      !phone ||
      !employees ||
      !trainingInterest ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    const enquiry = await Enquiry.create({
      name,
      email,
      company,
      phone,
      employees,
      trainingInterest,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully.",
        data: enquiry,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating enquiry:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}