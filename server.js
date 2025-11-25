const http = require("http");
const PORT = process.env.PORT || 3000;

const portfolioHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Portfolio</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #eef2f3;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
    }
    .container {
      background: white;
      padding: 30px 40px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      width: 90%;
      max-width: 600px;
    }
    h1 {
      margin-bottom: 10px;
    }
    h2 {
      margin-top: 0;
      color: #555;
    }
    p {
      font-size: 1.1rem;
      color: #444;
    }
    .quote {
      margin-top: 20px;
      font-style: italic;
      color: #333;
    }
  </style>
</head>
<body>

<div class="container">
  <h1>Nar Anthony S. Esguerra</h1>
  <h2>Class Section: BSIT - 4101 </h2>
  <p class="quote">"Each and everyone has their own phase, you only just to find yours"</p>
</div>

</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(portfolioHTML);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
