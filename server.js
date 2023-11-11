const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const users = [
  { id: 1, username: 'user1', password: '123@ishara', name: 'Ishara Samaraweera', email: 'ishara@gmail.com' },
  { id: 2, username: 'user2', password: '123@ama', name: 'Ama Nishadi', email: 'ama@gmail.com' },
];

//const Token = 'dummyToken123';

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id === parseInt(id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Create a new user(Not implement the logic yet)
app.post('/users', (req, res) => {
});

// Update user details(Not implement the logic yet)
app.put('/users/:id', (req, res) => {
});

// Delete a user(Not implement the logic yet)
app.delete('/users/:id', (req, res) => {
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      const Token = 'dummy_token';
      const userDetails = {
        id: user.id,
        username: user.username,
        name: user.name,
      };
  
      res.json({ user: userDetails, Token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
