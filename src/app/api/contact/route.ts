import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
console.log("API KEY EXISTS:", !!process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const result = await resend.emails.send({
      from: "Chukwuemeka Peter Eze <contact@chukwuemekapetereze.online>",
      to: "Chukwuemekapetereze@proton.me",
      subject,
      replyTo: email,
      text: `
Name: ${name}

Email: ${email}

Message:

${message}
      `,
    });

    console.log("Resend response:", result);

    if (result.error) {
      console.error("Resend error:", result.error);

      return NextResponse.json(
        {
          success: false,
          error: result.error,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      id: result.data?.id,
    });
  } catch (error) {
    console.error("Server error:", error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}