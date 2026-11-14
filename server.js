const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());


let users = [
  { id: 1, name: "Ali", email: "ali@gmail.com" },
  { id: 2, name: "Sara", email: "sara@gmail.com" }
];


app.get('/users', (req, res) => {
  res.json(users);
});


app.post('/users', (req, res) => {
  const { name, email } = req.body;

  
  if (!name || !email) {
    return res.status(400).json({ message: "please fill the fields " });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);
  res.status(201).json({ message: "new user added", user: newUser });
});

app.listen(PORT, () => {
  console.log(`server working : http://localhost:${PORT}`);
});