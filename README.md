# 📰 News Monkey

**News Monkey** is a modern, responsive news reading web application built using **React**.  
It fetches real-time top headlines from **NewsAPI** and provides a smooth, distraction-free reading experience with infinite scrolling, category-based navigation, dark/light mode, and a top loading progress bar.

---

## 🚀 Features

- 🗞️ Latest top headlines from trusted sources  
- 🌍 Category-based news:
  - General
  - Business
  - Sports
  - Technology
  - Health
  - Science
  - Entertainment
- ♾️ Infinite scroll for seamless news loading
- 🌗 Dark / Light mode toggle
- 📊 Top loading progress bar
- ⚡ Fast and responsive UI
- 📱 Fully responsive design
- 🧠 Global state management using React Context API
- 🔐 Secure API key handling using environment variables

---

## 🛠️ Tech Stack

- **Frontend:** React (Class Components)
- **Routing:** React Router v6 (`createBrowserRouter`)
- **State Management:** React Context API
- **Styling:** Bootstrap 5 + Custom CSS
- **API:** NewsAPI.org
- **Infinite Scroll:** react-infinite-scroll-component
- **Loader:** react-top-loading-bar

---

## 📂 Project Structure

src/
│
├── Components/
│ ├── Navbar.jsx
│ ├── News.jsx
│ ├── NewsItem.jsx
│ ├── Footer.jsx
│ ├── About.jsx
│ ├── Layout.jsx
│ ├── Spinner.jsx
│ └── TopLoader.jsx
│
├── Context/
│ ├── ThemeContext.js
│ └── LoadingContext.js
│
├── Router.jsx
├── App.jsx
└── index.js


---

## ✅ Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- A **NewsAPI account**

Create a free API key from:  
👉 https://newsapi.org/register

---

## ⚙️ Installation & Setup

1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/news-monkey.git
cd news-monkey

---

2️⃣ Install Dependencies

npm install

or

yarn install

---

3️⃣ Configure Environment Variables

Create a file named .env.local in the root directory and add:

REACT_APP_API_KEY=your_news_api_key_here


⚠️ Important Notes:

Environment variables must start with REACT_APP_

Restart the server after creating or modifying .env.local

.env.local should NOT be pushed to GitHub

---

4️⃣ Start the Development Server

npm start

or

yarn start


The application will run on:

http://localhost:3000

---

🧭 How to Use

Use the navbar to navigate between news categories

Scroll down to load more articles automatically

Toggle dark/light mode from the navbar

Click on any article to read the full news on the source website

Visit the About page to learn more about the app and the developer

---

🧭 How to Use

Use the navbar to navigate between news categories

Scroll down to load more articles automatically

Toggle dark/light mode from the navbar

Click on any article to read the full news on the source website

Visit the About page to learn more about the app and the developer

---

🧠 Key Concepts Implemented

React Class Components

React Context API (Theme & Loading state)

Infinite Scroll implementation

Top loading progress bar

Environment variable security

Dynamic routing with React Router

Reusable and modular components

---

👨‍💻 Developer Information

Aditya Patel
💻 Web Developer | React Learner
🎯 Passionate about building real-world applications

🔗 LinkedIn: https://www.linkedin.com/in/aditya-patel-6ab7002a1/

---

🤝 Contributing

Contributions are welcome!

Fork the repository

Create a new branch

Make your changes

Submit a pull request

---

⭐ Support

If you like this project:

⭐ Star the repository

🍴 Fork it

📢 Share it with others

---

📜 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute it.

---

🙌 Acknowledgements

NewsAPI.org for providing news data

React community & open-source contributors

Bootstrap for responsive design

---

🧠 Final Note

News Monkey is built as a learning-focused, real-world React project.
Feel free to explore, improve, and extend it further 🚀

Thank you for using News Monkey! 📰✨
