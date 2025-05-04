const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

// Ping route to keep Replit awake
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Example proxy route (expand this based on your logic)
app.get('/proxy', (req, res) => {
  const target = req.query.url;
  if (!target) return res.status(400).send("No URL provided.");
  res.send(`Proxy target would be: ${target}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.replit.dev`);
});
