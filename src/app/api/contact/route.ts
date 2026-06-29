import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  // Check whether the API key exists for this request
  console.log("API KEY EXISTS:", !!process.env.RESEND_API_KEY);

  // Create the Resend client at request time
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, subject, message } = await request.json();

    console.log("Received contact form submission:", {
      name,
      email,
      subject,
    });

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

    // Log the complete response from Resend
    console.log(
      "Resend response:",
      JSON.stringify(result, null, 2)
    );

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

    console.log("Email sent successfully. ID:", result.data?.id);

    return NextResponse.json({
      success: true,
      id: result.data?.id,
    });
  } catch (error) {
    console.error("Server error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      {
        status: 500,
      }
    );
  }
}