import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ success: true }); // Silent fail for bots
    }

    // TODO: Replace with actual email service integration
    // Examples: SendGrid, Resend, AWS SES, etc.
    // For now, just log the submission
    console.log("Contact form submission:", {
      formType: body.formType,
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      message: body.message,
    });

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}





