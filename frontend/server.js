const express = require('express');
const path = require('path');

const app = express();
const port = Number(process.env.PORT) || 4200;
const apiUrl = process.env.API_URL || 'http://localhost:8080/api/tasks';
const distPath = path.join(__dirname, 'dist', 'todo-frontend');

app.get('/env.js', (_, res) => {
  res.type('application/javascript');
  res.send(`window.__env = Object.assign({}, window.__env, { API_URL: '${apiUrl}' });`);
});

app.use(express.static(distPath));

app.get('*', (_, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Frontend running on port ${port}`);
});
