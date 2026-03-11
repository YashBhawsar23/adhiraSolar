// import { NextResponse } from "next/server";
// import { supabase } from "@/lib/supabase";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const { name, email, phone, message } = body;

//     // Save to database
//     const { error } = await supabase
//       .from("contacts")
//       .insert([{ name, email, phone, message }]);

//     if (error) {
//       console.error(error);
//       return NextResponse.json({ error: "Database error" }, { status: 500 });
//     }

//     // Send email
//     await resend.emails.send({
//       from: "Website <onboarding@resend.dev>",
//       to: process.env.EMAIL_TO!,
//       subject: "New Contact Form Submission",
//       html: `
//         <h2>New Contact Submission</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Phone:</b> ${phone}</p>
//         <p><b>Message:</b> ${message}</p>
//       `,
//     });

//     return NextResponse.json({ success: true });

//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, message } = body;

    // Save to database
    const { error } = await supabase
      .from("contacts")
      .insert([{ name, email, phone, message }]);

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    // Email 1 → Notify you
    await resend.emails.send({
      from: "Website <onboarding@resend.dev>",
      to: process.env.EMAIL_TO!,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // Email 2 → Auto reply to user
    await resend.emails.send({
      from: "Your Company <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for contacting us!",
      html: `
        <h2>Hi ${name},</h2>

        <p>Thanks for reaching out to us. We received your message and our team will get back to you shortly.</p>

        <p><strong>Your message:</strong></p>
        <p>${message}</p>

        <br/>

        <p>Best regards,</p>
        <p>Your Company Team</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}