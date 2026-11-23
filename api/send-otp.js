// api/send-otp.js – Vercel Serverless Function to deliver real-time OTP emails
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let body = req.body || {};
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch(e){}
    }
    const email = body.email;
    const name = body.name || 'Candidate';
    const otp = body.otp;

    if (!email || !otp) {
      return res.status(400).json({ error: 'Missing email or otp' });
    }

    // 1. If Resend API Key is configured in Vercel environment
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'Learning Portal <onboarding@resend.dev>',
          to: [email],
          subject: `${otp} is your Learning Portal verification code`,
          html: `
            <div style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif; max-width:460px; margin:0 auto; padding:28px 24px; background:#000000; color:#ffffff; border-radius:14px; border:1px solid #222;">
              <h2 style="margin:0 0 10px; color:#ffffff; font-size:22px; font-weight:800;">Learning Portal</h2>
              <p style="color:#888888; font-size:14px; margin:0 0 18px;">Hi ${name},</p>
              <p style="color:#aaaaaa; font-size:14px; line-height:1.5; margin:0 0 20px;">Use the 6-digit verification code below to complete your registration:</p>
              <div style="background:#111111; border:1px solid #333333; padding:18px; text-align:center; border-radius:10px; margin:0 0 20px;">
                <span style="font-size:32px; font-weight:900; letter-spacing:8px; color:#ffffff; font-family:monospace;">${otp}</span>
              </div>
              <p style="color:#666666; font-size:12px; margin:0;">This code is valid for 10 minutes. If you did not request this, please disregard this email.</p>
            </div>
          `
        })
      });
      const data = await response.json();
      return res.status(200).json({ success: true, delivered: true, provider: 'resend', data });
    }

    // Fallback response: successfully received & ready
    return res.status(200).json({
      success: true,
      delivered: false,
      message: 'OTP ready. Add RESEND_API_KEY to Vercel environment to deliver directly via Resend.'
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
