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

    // ============================================
    // Email #1 - Send visitor's message to yourself
    // ============================================
    const adminEmail = await resend.emails.send({
      from: "Chukwuemeka Peter Eze <contact@chukwuemekapetereze.online>",
      to: "Chukwuemekapetereze@proton.me",
      subject: `📩 Portfolio Contact: ${subject}`,
      replyTo: email,

      text: `
New Portfolio Contact Form Submission

Name: ${name}

Email: ${email}

Subject: ${subject}

Message:

${message}
      `,

      html: `
      <h2>📩 New Portfolio Contact Form Submission</h2>

      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Subject:</strong> ${subject}</p>

      <h3>Message</h3>

      <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log(
      "Admin email response:",
      JSON.stringify(adminEmail, null, 2)
    );

    if (adminEmail.error) {
      console.error("Admin email error:", adminEmail.error);

      return NextResponse.json(
        {
          success: false,
          error: adminEmail.error,
        },
        {
          status: 500,
        }
      );
    }

    // ============================================
    // Email #2 - Auto reply to the visitor
    // ============================================
    const visitorEmail = await resend.emails.send({
      from: "Chukwuemeka Peter Eze <contact@chukwuemekapetereze.online>",
      to: email,
      subject: "Thank you for contacting me",

      text: `
Hi ${name},

Thank you for reaching out through my portfolio website.

I have successfully received your message.

Here is a copy of what you sent:

Subject:
${subject}

Message:
${message}

I appreciate you taking the time to contact me.

I'll review your message carefully and get back to you as soon as possible.

Thank you once again, and have a wonderful day!

Best regards,

Chukwuemeka Peter Eze

Cloud Engineer | DevOps Engineer
AWS | Docker | Kubernetes | Terraform
      `,

      html: `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:650px;margin:auto;padding:30px;border:1px solid #e5e5e5;border-radius:10px;">

      <h2 style="color:#2563eb;">
      Thank you for contacting me!
      </h2>

      <p>Hi <strong>${name}</strong>,</p>

      <p>
      Thank you for reaching out through my portfolio website.
      </p>

      <p>
      I have successfully received your message.
      </p>

      <p>
      Below is a copy of your submission:
      </p>

      <div style="background:#f8fafc;padding:18px;border-radius:8px;">

      <p><strong>Subject:</strong> ${subject}</p>

      <p><strong>Message:</strong></p>

      <p>${message.replace(/\n/g, "<br>")}</p>

      </div>

      <br>

      <p>
      I appreciate you taking the time to contact me. I'll review your message carefully and respond as soon as possible.
      </p>

      <p>
      Thank you once again, and have a wonderful day!
      </p>

      <br>

      <p>
      Best regards,
      </p>

      <p>
      <strong>Chukwuemeka Peter Eze</strong><br>
      Cloud Engineer | DevOps Engineer<br>
      AWS | Docker | Kubernetes | Terraform
      </p>

      </div>
      `,
    });

    console.log(
      "Visitor confirmation response:",
      JSON.stringify(visitorEmail, null, 2)
    );

    if (visitorEmail.error) {
      console.error("Visitor email error:", visitorEmail.error);
    }

    console.log("All emails sent successfully.");

    return NextResponse.json({
      success: true,
      adminEmailId: adminEmail.data?.id,
      visitorEmailId: visitorEmail.data?.id,
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