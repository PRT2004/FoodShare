{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const express = require('express');\
const mongoose = require('mongoose');\
const bodyParser = require('body-parser');\
const cors = require('cors');\
\
const app = express();\
app.use(cors());\
app.use(bodyParser.json());\
\
// MongoDB Connection\
mongoose.connect('mongodb://localhost:27017/foodshare', \{\
  useNewUrlParser: true,\
  useUnifiedTopology: true,\
\});\
\
// Schemas\
const UserSchema = new mongoose.Schema(\{\
  name: String,\
  email: String,\
  password: String,\
  type: String, // "buyer" or "seller"\
\});\
\
const MealSchema = new mongoose.Schema(\{\
  name: String,\
  price: Number,\
  nutrition: String,\
  location: String,\
\});\
\
const User = mongoose.model('User', UserSchema);\
const Meal = mongoose.model('Meal', MealSchema);\
\
// Routes\
app.post('/signup', async (req, res) => \{\
  const \{ name, email, password, type \} = req.body;\
  const user = new User(\{ name, email, password, type \});\
  await user.save();\
  res.json(\{ message: 'User signed up successfully' \});\
\});\
\
app.get('/meals', async (req, res) => \{\
  const meals = await Meal.find();\
  res.json(meals);\
\});\
\
// Start Server\
app.listen(5000, () => \{\
  console.log('Backend running on http://localhost:5000');\
\});\
}