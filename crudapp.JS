const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/studentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Schema
const studentSchema = new mongoose.Schema({
  name: String,
  roll: Number,
  age: Number
});

const Student = mongoose.model('Student', studentSchema);

// Create
app.post('/students', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  console.log(student);
  res.send(student);
});

// Read All
app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

// Update
app.put('/students/:id', async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(student);
});

// Delete
app.delete('/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send({ message: 'Student deleted' });
});

app.listen(3000, () => console.log('Server running on port 3000'));

