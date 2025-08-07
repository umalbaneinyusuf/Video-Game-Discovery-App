# 🎮 Video Game Discovery App

A responsive web application to discover video games, displaying a list of games with options to search, filter by genre or platform, sort by rating or popularity, and switch between light and dark modes.
Built with **React** and **Chakra UI**, using an external API to fetch game data.

---

## 📌 Features
- **Responsive UI** that works on all devices.
- **Dark/Light mode** toggle.
- **Display games** with images, icons, and critic scores.
- **Filter** by genre or platform.
- **Sort** by rating, popularity, or release date.
- **Instant search** functionality.
- **Beautiful design** using **Chakra UI**.
- **Handle missing data** (e.g., missing images).
- **Skeleton Loading** for better UX during fetch.

---

## 🛠️ Tech Stack
- **React 18**
- **TypeScript** (optional if used in the project)
- **Chakra UI** (UI components and styling)
- **RAWG Video Games API** (data source)
- **Axios** (HTTP requests)
- **Vite** (project bundler and dev server)

---

## 📂 Project Structure
```
src/
 ├── components/       # UI components
 ├── hooks/            # Custom hooks for data fetching
 ├── services/         # API connection logic
 ├── theme/            # Chakra UI theme customization
 ├── App.tsx           # Main app component
 ├── main.tsx          # Entry point
 └── index.css         # Global styles
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/umalbaneinyusuf/Video-Game-Discovery-App.git
cd video-game-discovery-app
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Get API Key
- Sign up for a free account at [RAWG.io](https://rawg.io/apidocs) to get an API key.
- Create a `.env` file in the project root and add:
```env
VITE_RAWG_API_KEY=YOUR_API_KEY
```

### 4️⃣ Run the app
```bash
npm run dev
```

### 5️⃣ Build for production
```bash
npm run build
```

---



## 📜 Lessons Learned
- Building **responsive layouts** with Chakra UI.
- Working with **APIs** and managing API keys securely.
- Improving UX with **loading states** and **skeletons**.
- Reusing code with **custom hooks**.
- Managing search, filter, and sort state with a **query object**.

---

## 📄 License
This project is open-source and free to use or modify.

---
