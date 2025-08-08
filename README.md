# 🎬 Movie App

A simple React application that fetches and displays movies using an external API. Users can also mark movies as favourites.

## 🚀 Features

- 🔍 Search for movies by title
- 🖼️ View movie posters, titles, and release years
- ❤️ Mark/unmark movies as favourites
- 💾 Persistent favourites using `localStorage`
- 📱 Responsive design

## 🛠️ Built With

- [React](https://reactjs.org/)
- JavaScript (ES6+)
- CSS
- TMDb API 


## 📦 Installation

```bash
git clone https://github.com/your-username/movie-app.git
cd movie-app
npm install
npm start
```

The app will run on `http://localhost:3000`

## 🧠 How It Works

1. The app uses `fetch()` to call the TMDb API based on user input.
2. Movies are displayed as cards with poster, title, and year.
3. Favourites are stored in the browser `localStorage` and retrieved on load.
4. Clicking on a heart icon toggles favourite status.

## 📝 Notes

- You’ll need to get a free API key from [TMDb API] and replace it in the code where required.
- Add your .env file if you're using environment variables.

## 📂 Project Structure

```
movie-app/
├── public/
├── src/
│   ├── components/
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## 🙋‍♂️ Author

Made by Hitesh Venugopalan — based on Tech With Tim's React tutorial.

