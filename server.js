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
    :root {
      --bg: #f6f7f8;
      --card-bg: #ffffff;
      --text-main: #2d2d2d;
      --text-sub: #6a6a6a;
      --accent: #444444;
    }

    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      padding: 0;
      background: var(--bg);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
      color: var(--text-main);
    }

    .container {
      background: var(--card-bg);
      padding: 50px 50px;
      border-radius: 16px;
      box-shadow: 0 6px 20px rgba(0,0,0,0.08);
      width: 90%;
      max-width: 550px;
      transition: 0.3s ease;
    }

    .container:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 28px rgba(0,0,0,0.12);
    }

    h1 {
      margin: 0 0 8px;
      font-size: 2rem;
      font-weight: 600;
    }

    h2 {
      margin: 0;
      color: var(--text-sub);
      font-size: 1.2rem;
      font-weight: 400;
    }

    .quote {
      margin-top: 25px;
      font-size: 1.1rem;
      font-style: italic;
      color: var(--accent);
      line-height: 1.6;
    }

    .line {
      width: 60%;
      height: 1px;
      background: #ddd;
      margin: 25px auto 0;
    }
  </style>
</head>
<body>

<div class="container">
  <h1>Nar Anthony S. Esguerra</h1>
  <h2>BSIT - 4101</h2>
  <div class="line"></div>
  <p class="quote">"Each and everyone has their own phase; you only just need to find yours."</p>
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
