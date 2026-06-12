# 🏆 FIFA World Cup 2026 Live Arena Dashboard

A premium, interactive, and live-updating dashboard designed for fans to track the **FIFA World Cup 2026** matches, schedules, live weather conditions in upcoming stadiums, and hot headlines. 

Built with a high-fidelity football-pitch aesthetic, dark mode glassmorphism panels, and fully responsive mobile layout optimization.

---

## ⚡ Key Features

*   **Live Simulated Telemetry**: Matches tick dynamically in real-time, generating live goals, woodwork hits, shot attempts, booking events, and possession statistics.
*   **IST Timezone Timetable**: Upcoming matches display their start times translated directly into **Indian Standard Time (IST)**.
*   **Stadium Weather Center**: Hosts live conditions of stadiums (MetLife, Estadio Azteca, SoFi, BC Place, BMO Field, BBVA). Stadium weather (like rain or extreme heat) dynamically impacts match statistics (fouls, yellow cards, shooting accuracy).
*   **Manual Simulation Triggers**: Allows fans to override matches by forcing manual goals (`⚽ Goal USA / Goal ENG`), or triggering random events (crowd chants, woodworks, injuries).
*   **Spicy Buzz Feed**: Latest gossips and press-conference statements in a responsive slider with dialog modals.
*   **100% Mobile Compatible**: Optimizes header navigation, dashboard grids, and controls for mobile browsers.
*   **GitHub Pages Ready**: Relative URL configuration allows seamless deployment to GitHub Pages.

---

## 🛠️ Technology Stack

*   **Core**: HTML5, Vanilla JavaScript (ES6 Modules)
*   **Styling**: Vanilla CSS3 (Custom Variables, CSS Grids, Flexbox, Keyframe Animations)
*   **Build System**: Vite

---

## 🚀 Getting Started

### Local Development

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/b1uehack/fifawc2026.git
    cd fifawc2026
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173/` in your browser.

---

## 📦 Production & Deployment

### Build the Project
To generate static assets ready for deployment:
```bash
npm run build
```
This outputs all compiled code to the `/dist` directory.

### Deploying to GitHub Pages
Since `vite.config.js` is pre-configured with relative paths (`base: './'`), deployment is straightforward:

1. Push your code to your repository on GitHub.
2. Go to **Settings** -> **Pages** in your repository.
3. Under **Build and deployment**, select **GitHub Actions** as the source, OR set up a simple deploy workflow using `gh-pages` npm package.
4. If deploying manually from the `/dist` folder, you can push the contents of the `dist` directory to a branch named `gh-pages`.
