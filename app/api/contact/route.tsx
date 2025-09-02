import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, organization, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !organization || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailData = {
      from: "GOTERA Cloud <onboarding@resend.dev>",
      to: ["abenidemiss300@gmail.com"],
      subject: `New Contact Form Submission from ${name} - ${organization}`,
      html: `
        <h2>New Contact Form Submission from GOTERA Cloud Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service of Interest:</strong> ${service || "Not specified"}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>This message was sent from the GOTERA Cloud contact form.</em></p>
      `,
      reply_to: email,
    }

    // Send email using Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer 2004e299-d624-4d3c-81b9-408d70316ced`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Resend API error:", errorData)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    const result = await response.json()
    console.log("[v0] Email sent successfully:", result)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
