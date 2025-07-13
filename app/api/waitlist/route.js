import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    const firstName = data.name?.split(' ')[0] || '';
    // Insert the form data into the waitlist table
    const { error } = await supabase.from('waitlist').insert([
      {
        name: data.name,
        email: data.email,
        company: data.company,
        role: data.role,
        interest: data.interest,
        referred_by: data.referredBy || null
      },
    ]);
    if (error) {
      return new Response(JSON.stringify({ success: false, error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    // Send 'WOWWW' confirmation email with Resend
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: data.email,
      subject: "🎉 You're officially on the QuantumLayer Waitlist!",
      html: `
        <table width="100%" bgcolor="#f4f4f4" cellpadding="0" cellspacing="0" style="padding: 40px 0; font-family: Verdana, Geneva, sans-serif;">
          <tr>
            <td align="center">
              <table width="480" bgcolor="#ffffff" cellpadding="0" cellspacing="0" style="border-radius: 12px; box-shadow: 0 4px 24px #0001; padding: 32px;">
                <tr>
                  <td align="center" style="padding-bottom: 24px;">
                    <img src="https://quantumlayerplatform.com/img/qlp-logo.svg" alt="QuantumLayer Logo" width="90" style="display: block; border-radius: 50%;" />
                  </td>
                </tr>
                <tr>
                  <td align="center" style="font-size: 26px; color: #7013fa; font-weight: bold; padding-bottom: 12px;">
                    Welcome${firstName ? ', ' + firstName : ''}!
                  </td>
                </tr>
                <tr>
                  <td align="center" style="font-size: 18px; color: #00e2c3; font-weight: bold; padding-bottom: 18px;">
                    You're officially on the QuantumLayer waitlist 🚀
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 16px; color: #222; padding-bottom: 24px; line-height: 1.6;">
                    <b>What's next?</b><br>
                    We'll keep you in the loop with exclusive updates, early access invites, and behind-the-scenes stories as we build the future of AI workflow orchestration.<br><br>
                    <b>Want to jump the line?</b><br>
                    <a href="https://quantumlayerplatform.com/waitlist?ref=${encodeURIComponent(data.email)}" style="color: #7013fa; text-decoration: underline;">Share your unique link</a> with friends and colleagues. The more you share, the sooner you'll get access!
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-bottom: 24px;">
                    <a href="https://quantumlayerplatform.com" style="background: linear-gradient(90deg,#7013fa,#00e2c3); color: #fff; padding: 14px 36px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block;">Visit Our Website</a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="font-size: 15px; color: #888; padding-bottom: 18px;">
                    <b>Connect with us:</b><br>
                    <a href="https://twitter.com/quantumlayerAI" style="color: #00e2c3; text-decoration: none; margin: 0 8px;">Twitter</a>|
                    <a href="https://linkedin.com/company/quantumlayer" style="color: #00e2c3; text-decoration: none; margin: 0 8px;">LinkedIn</a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="font-size: 13px; color: #aaa; padding-top: 12px;">
                    💡 <i>Reply to this email with your ideas, questions, or just to say hi. We read every message!</i>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="font-size: 12px; color: #bbb; padding-top: 18px;">
                    You're receiving this email because you joined the QuantumLayer waitlist.<br>
                    If this wasn't you, just ignore this message.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 