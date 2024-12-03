{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
  const API_URL = 'http://localhost:5000';\
\
  const signupForm = document.getElementById('signup-form');\
  const mealList = document.getElementById('meal-list');\
\
  // Handle Signup\
  signupForm.addEventListener('submit', async (e) => \{\
    e.preventDefault();\
    const name = document.getElementById('name').value;\
    const email = document.getElementById('email').value;\
    const password = document.getElementById('password').value;\
    const type = document.getElementById('user-type').value;\
\
    const response = await fetch(`$\{API_URL\}/signup`, \{\
      method: 'POST',\
      headers: \{ 'Content-Type': 'application/json' \},\
      body: JSON.stringify(\{ name, email, password, type \}),\
    \});\
\
    const data = await response.json();\
    alert(data.message);\
  \});\
\
  // Fetch Meals\
  const fetchMeals = async () => \{\
    const response = await fetch(`$\{API_URL\}/meals`);\
    const meals = await response.json();\
\
    mealList.innerHTML = meals\
      .map(\
        (meal) => `\
      <div class="card">\
        <h3>$\{meal.name\}</h3>\
        <p>Price: $$\{meal.price\}</p>\
        <p>Nutrition: $\{meal.nutrition\}</p>\
        <p>Location: $\{meal.location\}</p>\
      </div>\
    `\
      )\
      .join('');\
  \};\
\
  fetchMeals();\
\});\
}