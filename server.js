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
      background: #f5f5f5;
      color: #333;
    }
    header {
      background: #222;
      color: white;
      text-align: center;
      padding: 40px 20px;
    }
    h1 { margin: 0; }
    section {
      padding: 20px 40px;
    }
    .projects div {
      background: white;
      padding: 15px;
      margin: 10px 0;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    footer {
      background: #222;
      color: #aaa;
      text-align: center;
      padding: 20px;
      margin-top: 40px;
    }
  </style>
</head>
<body>

<header>
  <h1>Nar Anthony S. Esguerra</h1>
  <p>Web Developer | Designer | Programmer</p>
</header>

<section>
  <h2>About Me</h2>
  <p>
    Hello! I'm a passionate developer who loves building web applications,
    experimenting with new technologies, and solving real-world problems.
  </p>
</section>

<section class="projects">
  <h2>Projects</h2>

  <div>
    <h3>Ilocate Mobile App</h3>
    <p>A dedicated mobile application for wearable emergency beacon. Built using flutter framework and firebase database</p>
  </div>

  <div>
    <h3>Cayanan Resort Reservation</h3>
    <p>A website built using html/css, php and mysql</p>
  </div>

  <div>
    <h3>Gym membership app</h3>
    <p>Built using c# use to perform </p>
  </div>
</section>

<section>
  <h2>Contact</h2>
  <p>Email: naresguerra02@gmail.com</p>
  <p>GitHub: github.com/NarEsguerra</p>
</section>

<footer>
  <p>&copy; 2025. All rights reserved.</p>
</footer>

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
