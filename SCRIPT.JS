* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #667eea, #764ba2);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  color: #333;
}

.container {
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  width: 100%;
  max-width: 1100px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #764ba2;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

thead th {
  background: #667eea;
  color: white;
  padding: 12px;
  font-size: 1rem;
}

tbody td {
  border: 1px solid #ddd;
  padding: 12px;
  transition: background 0.3s, transform 0.2s;
}

.subject {
  cursor: pointer;
  font-weight: 600;
}

.subject:hover {
  background: #f3f3ff;
  transform: scale(1.05);
}

.break {
  background: #fcb69f;
  font-weight: bold;
  font-style: italic;
  color: #333;
}