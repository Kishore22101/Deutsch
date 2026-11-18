// api/submissions.js – Vercel Serverless Function fallback for candidate submissions

let cachedSubmissions = [];

module.exports = async function handler(req, res) {
  // Set CORS headers so any device / origin can post and read
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      let body = req.body;
      if (typeof body === 'string') {
        body = JSON.parse(body);
      }
      if (body && body.id) {
        cachedSubmissions = cachedSubmissions.filter(s => s.id !== body.id);
        cachedSubmissions.unshift(body);
      }
      return res.status(200).json({ success: true, count: cachedSubmissions.length });
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }

  // GET
  return res.status(200).json({ submissions: cachedSubmissions });
};
