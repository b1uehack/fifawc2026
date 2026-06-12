import './style.css';

// ----------------------------------------------------
// 1. DATA DEFINITIONS & INITIAL STATE
// ----------------------------------------------------

// Host Venues & Weather Data
const venues = {
  metlife: { id: 'metlife', name: 'MetLife Stadium', city: 'New York/New Jersey', country: 'usa', temp: 22, desc: 'Clear Sky', humidity: '55%', wind: '12 km/h', icon: '☀️' },
  sofi: { id: 'sofi', name: 'SoFi Stadium', city: 'Los Angeles', country: 'usa', temp: 26, desc: 'Sunny', humidity: '45%', wind: '8 km/h', icon: '☀️' },
  azteca: { id: 'azteca', name: 'Estadio Azteca', city: 'Mexico City', country: 'mex', temp: 19, desc: 'Scattered Clouds', humidity: '60%', wind: '15 km/h', icon: '⛅' },
  bcplace: { id: 'bcplace', name: 'BC Place', city: 'Vancouver', country: 'can', temp: 16, desc: 'Light Rain', humidity: '80%', wind: '18 km/h', icon: '🌧️' },
  monterrey: { id: 'monterrey', name: 'Estadio BBVA', city: 'Monterrey', country: 'mex', temp: 31, desc: 'Hot & Humid', humidity: '70%', wind: '6 km/h', icon: '🔥' },
  toronto: { id: 'toronto', name: 'BMO Field', city: 'Toronto', country: 'can', temp: 18, desc: 'Overcast', humidity: '65%', wind: '14 km/h', icon: '☁️' }
};

// Initial Matches List (IST Timings)
const initialMatches = [
  {
    id: 'm1',
    team1: { name: 'United States', flag: '🇺🇸', role: 'HOST' },
    team2: { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', role: 'CHALLENGER' },
    stage: 'Group A • Matchday 1',
    istTime: 'June 12, 2026 - 05:30 AM IST',
    score1: 1,
    score2: 1,
    time: 42,
    venue: venues.metlife,
    attendance: '82,500',
    status: 'live',
    stats: {
      possession: [52, 48],
      shots: [8, 7],
      shotsOnTarget: [4, 3],
      yellowCards: [1, 1],
      redCards: [0, 0],
      fouls: [6, 8]
    },
    timeline: [
      { time: 0, icon: '🏁', text: 'Match Started' },
      { time: 14, icon: '⚽', text: 'GOAL! United States 1 - 0 England (Pulisic)' },
      { time: 25, icon: '🟨', text: 'Yellow Card: Bellingham (England)' },
      { time: 38, icon: '⚽', text: 'GOAL! England 1 - 1 United States (Kane)' },
      { time: 41, icon: '🟨', text: 'Yellow Card: McKennie (United States)' }
    ]
  },
  {
    id: 'm2',
    team1: { name: 'Mexico', flag: '🇲🇽', role: 'HOST' },
    team2: { name: 'Argentina', flag: '🇦🇷', role: 'CHALLENGER' },
    stage: 'Group C • Matchday 1',
    istTime: 'June 12, 2026 - 07:30 AM IST',
    score1: 0,
    score2: 0,
    time: 15,
    venue: venues.azteca,
    attendance: '87,500',
    status: 'live',
    stats: {
      possession: [45, 55],
      shots: [2, 4],
      shotsOnTarget: [1, 2],
      yellowCards: [0, 0],
      redCards: [0, 0],
      fouls: [4, 3]
    },
    timeline: [
      { time: 0, icon: '🏁', text: 'Match Started' }
    ]
  },
  {
    id: 'm3',
    team1: { name: 'Canada', flag: '🇨🇦', role: 'HOST' },
    team2: { name: 'Germany', flag: '🇩🇪', role: 'CHALLENGER' },
    stage: 'Group B • Matchday 1',
    istTime: 'June 13, 2026 - 06:00 AM IST',
    score1: 0,
    score2: 0,
    time: 0,
    venue: venues.bcplace,
    attendance: '54,300',
    status: 'scheduled',
    stats: { possession: [50, 50], shots: [0, 0], shotsOnTarget: [0, 0], yellowCards: [0, 0], redCards: [0, 0], fouls: [0, 0] },
    timeline: []
  },
  {
    id: 'm4',
    team1: { name: 'Brazil', flag: '🇧🇷', role: 'CONTENDER' },
    team2: { name: 'Spain', flag: '🇪🇸', role: 'CONTENDER' },
    stage: 'Group F • Matchday 1',
    istTime: 'June 14, 2026 - 05:30 AM IST',
    score1: 0,
    score2: 0,
    time: 0,
    venue: venues.sofi,
    attendance: '70,200',
    status: 'scheduled',
    stats: { possession: [50, 50], shots: [0, 0], shotsOnTarget: [0, 0], yellowCards: [0, 0], redCards: [0, 0], fouls: [0, 0] },
    timeline: []
  },
  {
    id: 'm5',
    team1: { name: 'Japan', flag: '🇯🇵', role: 'CONTENDER' },
    team2: { name: 'France', flag: '🇫🇷', role: 'CONTENDER' },
    stage: 'Group D • Matchday 1',
    istTime: 'June 11, 2026 - 08:30 PM IST',
    score1: 2,
    score2: 3,
    time: 90,
    venue: venues.toronto,
    attendance: '45,000',
    status: 'completed',
    stats: {
      possession: [48, 52],
      shots: [11, 14],
      shotsOnTarget: [6, 8],
      yellowCards: [2, 1],
      redCards: [0, 0],
      fouls: [10, 9]
    },
    timeline: [
      { time: 0, icon: '🏁', text: 'Match Started' },
      { time: 18, icon: '⚽', text: 'GOAL! France 1 - 0 Japan (Mbappé)' },
      { time: 33, icon: '⚽', text: 'GOAL! Japan 1 - 1 France (Mitoma)' },
      { time: 45, icon: '⚽', text: 'GOAL! France 2 - 1 Japan (Griezmann)' },
      { time: 62, icon: '⚽', text: 'GOAL! Japan 2 - 2 France (Kubo)' },
      { time: 82, icon: '⚽', text: 'GOAL! France 3 - 2 Japan (Mbappé)' },
      { time: 90, icon: '🏁', text: 'Full Time: Japan 2 - France 3' }
    ]
  },
  {
    id: 'm6',
    team1: { name: 'Portugal', flag: '🇵🇹', role: 'CONTENDER' },
    team2: { name: 'Morocco', flag: '🇲🇦', role: 'CONTENDER' },
    stage: 'Group E • Matchday 1',
    istTime: 'June 15, 2026 - 09:30 PM IST',
    score1: 0,
    score2: 0,
    time: 0,
    venue: venues.monterrey,
    attendance: '53,500',
    status: 'scheduled',
    stats: { possession: [50, 50], shots: [0, 0], shotsOnTarget: [0, 0], yellowCards: [0, 0], redCards: [0, 0], fouls: [0, 0] },
    timeline: []
  },
  {
    id: 'm7',
    team1: { name: 'Italy', flag: '🇮🇹', role: 'CONTENDER' },
    team2: { name: 'Uruguay', flag: '🇺🇾', role: 'CONTENDER' },
    stage: 'Group H • Matchday 1',
    istTime: 'June 16, 2026 - 06:30 AM IST',
    score1: 0,
    score2: 0,
    time: 0,
    venue: venues.toronto,
    attendance: '45,500',
    status: 'scheduled',
    stats: { possession: [50, 50], shots: [0, 0], shotsOnTarget: [0, 0], yellowCards: [0, 0], redCards: [0, 0], fouls: [0, 0] },
    timeline: []
  },
  {
    id: 'm8',
    team1: { name: 'Belgium', flag: '🇧🇪', role: 'CONTENDER' },
    team2: { name: 'South Korea', flag: '🇰🇷', role: 'CONTENDER' },
    stage: 'Group G • Matchday 1',
    istTime: 'June 17, 2026 - 04:30 AM IST',
    score1: 0,
    score2: 0,
    time: 0,
    venue: venues.metlife,
    attendance: '82,500',
    status: 'scheduled',
    stats: { possession: [50, 50], shots: [0, 0], shotsOnTarget: [0, 0], yellowCards: [0, 0], redCards: [0, 0], fouls: [0, 0] },
    timeline: []
  }
];

// Spicy News Feed
const newsFeed = [
  {
    title: "Mbappé Spotted in Miami Nightclub, Promising Double Goals against Japan",
    label: "SPICY GOSSIP",
    snippet: "French talisman Kylian Mbappé sparked a media frenzy after being spotted in Miami just 36 hours before their opener, promising fans a brace.",
    body: "Inside sources report Kylian Mbappé was seen laughing and enjoying mocktails at a beachside lounge in Miami. When approached by fans, he reportedly said: 'Relax, my bags are packed, and the goals are guaranteed.' His performance tonight proved him right, bagging two magnificent goals against a resilient Japan side.",
    date: "June 12, 2026",
    author: "RMC Sport Telemetry"
  },
  {
    title: "Canada Coach Marsch Declares: 'Germany Has No Idea What is Coming in Vancouver'",
    label: "WAR OF WORDS",
    snippet: "Canada's national coach warns Germany of a tactical shock ahead of their much-anticipated match at BC Place.",
    body: "Addressing the media, Jesse Marsch did not hold back. 'We have been preparing a specific high-press overload that Germany has never experienced. The atmospheric pressure at BC Place is going to overwhelm them. We are not here to participate; we are here to top the group.' Germany coaches reportedly smiled during their counter-press conference.",
    date: "June 12, 2026",
    author: "Vancouver Football Network"
  },
  {
    title: "Estadio Azteca Pitch Condition Warning: Heatwave Affects Playing Surface",
    label: "PITCH WARNING",
    snippet: "Extreme heat and humidity in Mexico City might force physical tactics and slow down Argentina's tiki-taka style.",
    body: "Turf specialists at the Estadio Azteca are working around the clock. The current hot spell has dehydrated the pitch, making the ball bounce higher and roll slower. Pundits suggest this will favor Mexico's physical defense and hinder Argentina's fast ground passes. Expect a fiery, foul-heavy match today.",
    date: "June 12, 2026",
    author: "El Chiringuito News"
  }
];

// Global State
let matches = JSON.parse(JSON.stringify(initialMatches));
let activeHeroId = 'm1';
let currentFilter = 'all';
let isSimRunning = true;
let simSpeed = 5; // fast forward simulation speed (ticks every 2 seconds advances match by X minutes)
let newsIndex = 0;
let simIntervalId = null;
let newsIntervalId = null;

// ----------------------------------------------------
// 2. RENDERING ENGINE
// ----------------------------------------------------

// Render Ticking clock
function startClock() {
  setInterval(() => {
    const clockEl = document.getElementById('current-time');
    if (clockEl) {
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString();
    }
  }, 1000);
}

// Render active news item
function renderNews() {
  const container = document.getElementById('news-content-container');
  const indicators = document.getElementById('news-indicators');
  if (!container || !indicators) return;

  const news = newsFeed[newsIndex];
  container.innerHTML = `
    <div class="news-label">${news.label}</div>
    <h3 class="news-title">${news.title}</h3>
    <p class="news-snippet">${news.snippet}</p>
    <div class="news-footer">
      <span>By ${news.author}</span>
      <span>${news.date}</span>
    </div>
  `;

  // indicators
  indicators.innerHTML = newsFeed.map((_, i) => `
    <span class="indicator-dot ${i === newsIndex ? 'active' : ''}" data-idx="${i}"></span>
  `).join('');
}

// Render Host Venues
function renderWeather() {
  const container = document.getElementById('weather-grid-container');
  if (!container) return;

  container.innerHTML = Object.values(venues).map(v => `
    <div class="weather-venue-card" id="weather-card-${v.id}">
      <div class="weather-meta">
        <span class="weather-city">${v.city}</span>
        <span class="weather-stadium">${v.name}</span>
        <span class="weather-desc">${v.desc} • Hum: ${v.humidity}</span>
      </div>
      <div class="weather-info-right" style="text-align: right;">
        <span class="weather-icon-large">${v.icon}</span>
        <div class="weather-temp">${v.temp}°C</div>
      </div>
    </div>
  `).join('');
}

// Render Schedule List with Filters
function renderSchedule() {
  const container = document.getElementById('schedule-list-container');
  if (!container) return;

  const filteredMatches = matches.filter(m => {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'live') return m.status === 'live';
    if (currentFilter === 'usa') return m.venue.country === 'usa';
    if (currentFilter === 'mex') return m.venue.country === 'mex';
    if (currentFilter === 'can') return m.venue.country === 'can';
    return true;
  });

  if (filteredMatches.length === 0) {
    container.innerHTML = `<div class="timeline-empty">No matches found matching filter.</div>`;
    return;
  }

  container.innerHTML = filteredMatches.map(m => {
    const isHero = m.id === activeHeroId;
    let statusBadge = '';
    let scoreDisplay = '';

    if (m.status === 'live') {
      statusBadge = `<span class="schedule-time-badge live">LIVE ${m.time}'</span>`;
      scoreDisplay = `<span class="schedule-score">${m.score1} - ${m.score2}</span>`;
    } else if (m.status === 'completed') {
      statusBadge = `<span class="schedule-time-badge">FT</span>`;
      scoreDisplay = `<span class="schedule-score">${m.score1} - ${m.score2}</span>`;
    } else {
      statusBadge = `<span class="schedule-time-badge">UPCOMING</span>`;
      scoreDisplay = `<span class="schedule-vs">VS</span>`;
    }

    return `
      <div class="schedule-item ${isHero ? 'active-tracking' : ''} ${m.status === 'live' ? 'match-live' : ''} ${m.status === 'completed' ? 'match-completed' : ''}" data-id="${m.id}">
        <div class="schedule-match-info">
          <span class="schedule-meta">${m.stage} • ${m.venue.name}</span>
          <div class="schedule-teams">
            <span class="schedule-flag">${m.team1.flag}</span>
            <span>${m.team1.name}</span>
            ${scoreDisplay}
            <span>${m.team2.name}</span>
            <span class="schedule-flag">${m.team2.flag}</span>
          </div>
          <span class="schedule-ist-time">🇮🇳 IST: ${m.istTime}</span>
        </div>
        <div class="schedule-status">
          ${statusBadge}
          <button class="schedule-track-btn" data-id="${m.id}">${isHero ? 'Tracking' : 'Track'}</button>
        </div>
      </div>
    `;
  }).join('');
}

// Render Hero Match Box
function renderHeroMatch() {
  const currentMatch = matches.find(m => m.id === activeHeroId);
  if (!currentMatch) return;

  // Header Stage Info
  document.getElementById('hero-match-stage').textContent = `${currentMatch.stage} • Tracked Live`;

  // Flags & Names
  document.getElementById('hero-team1-flag').textContent = currentMatch.team1.flag;
  document.getElementById('hero-team1-name').textContent = currentMatch.team1.name;
  document.getElementById('hero-team2-flag').textContent = currentMatch.team2.flag;
  document.getElementById('hero-team2-name').textContent = currentMatch.team2.name;

  // Scores
  document.getElementById('hero-score-1').textContent = currentMatch.score1;
  document.getElementById('hero-score-2').textContent = currentMatch.score2;

  // Time & Info
  const timeEl = document.getElementById('hero-match-time');
  if (currentMatch.status === 'live') {
    timeEl.textContent = `${currentMatch.time}'`;
    timeEl.style.color = '#00ff66';
  } else if (currentMatch.status === 'completed') {
    timeEl.textContent = 'FT';
    timeEl.style.color = '#adb5bd';
  } else {
    timeEl.textContent = 'Upcoming';
    timeEl.style.color = '#e9ecef';
  }

  // Meta items
  document.getElementById('hero-match-venue').textContent = `${currentMatch.venue.name}, ${currentMatch.venue.city}`;
  document.getElementById('hero-match-attendance').textContent = currentMatch.attendance;
  document.getElementById('hero-match-weather').textContent = `${currentMatch.venue.icon} ${currentMatch.venue.temp}°C, ${currentMatch.venue.desc}`;

  // Statistics
  const p1 = currentMatch.stats.possession[0];
  const p2 = currentMatch.stats.possession[1];
  document.getElementById('stat-pos-1').textContent = `${p1}%`;
  document.getElementById('stat-pos-2').textContent = `${p2}%`;
  document.getElementById('bar-pos-1').style.width = `${p1}%`;
  document.getElementById('bar-pos-2').style.width = `${p2}%`;

  const s1 = currentMatch.stats.shots[0];
  const s2 = currentMatch.stats.shots[1];
  const sTot1 = currentMatch.stats.shotsOnTarget[0];
  const sTot2 = currentMatch.stats.shotsOnTarget[1];
  document.getElementById('stat-shots-1').textContent = `${s1} (${sTot1})`;
  document.getElementById('stat-shots-2').textContent = `${s2} (${sTot2})`;
  const shotsTotal = s1 + s2 || 1;
  document.getElementById('bar-shots-1').style.width = `${(s1 / shotsTotal) * 100}%`;
  document.getElementById('bar-shots-2').style.width = `${(s2 / shotsTotal) * 100}%`;

  // Cards
  document.getElementById('stat-yc-1').textContent = currentMatch.stats.yellowCards[0];
  document.getElementById('stat-rc-1').textContent = currentMatch.stats.redCards[0];
  document.getElementById('stat-yc-2').textContent = currentMatch.stats.yellowCards[1];
  document.getElementById('stat-rc-2').textContent = currentMatch.stats.redCards[1];

  // Timeline events
  const timelineEl = document.getElementById('timeline-events');
  if (currentMatch.timeline.length === 0) {
    timelineEl.innerHTML = `<div class="timeline-empty">Match has not started yet. Stay tuned!</div>`;
  } else {
    timelineEl.innerHTML = currentMatch.timeline.map(e => `
      <div class="timeline-event">
        <span class="event-time">${e.time}'</span>
        <span class="event-icon">${e.icon}</span>
        <span class="event-text">${e.text}</span>
      </div>
    `).reverse().join('');
  }
}

// Flash green effect on score increase
function triggerGoalFlash() {
  const card = document.getElementById('hero-match-section');
  if (!card) return;
  card.classList.add('goal-flash');
  setTimeout(() => {
    card.classList.remove('goal-flash');
  }, 800);
}

// ----------------------------------------------------
// 3. SIMULATION TELEMETRY ENGINE
// ----------------------------------------------------

// Progress weather slightly to make the venue center feel active
function shiftWeather() {
  Object.keys(venues).forEach(key => {
    const venue = venues[key];
    // Random temperature change (+/- 1 degree)
    venue.temp += (Math.random() > 0.5 ? 1 : -1) * (Math.random() > 0.7 ? 1 : 0);
    // Boundary check
    if (venue.temp < 10) venue.temp = 10;
    if (venue.temp > 38) venue.temp = 38;

    // Random descriptions shifts
    if (Math.random() > 0.95) {
      const conditionMap = [
        { desc: 'Clear Sky', icon: '☀️' },
        { desc: 'Sunny', icon: '☀️' },
        { desc: 'Scattered Clouds', icon: '⛅' },
        { desc: 'Overcast', icon: '☁️' },
        { desc: 'Light Rain', icon: '🌧️' },
        { desc: 'Heavy Rain', icon: '⛈️' }
      ];
      const newCond = conditionMap[Math.floor(Math.random() * conditionMap.length)];
      venue.desc = newCond.desc;
      venue.icon = newCond.icon;
    }
  });
  renderWeather();
}

// Simulates live matches progression
function runSimulationTick() {
  if (!isSimRunning) return;

  shiftWeather();

  matches.forEach(m => {
    if (m.status !== 'live') return;

    // Advance match minute
    m.time += Math.round(Math.random() * 2) + 1; // advances by 1-3 minutes
    if (m.time >= 90) {
      m.time = 90;
      m.status = 'completed';
      m.timeline.push({
        time: 90,
        icon: '🏁',
        text: `Full Time: ${m.team1.name} ${m.score1} - ${m.score2} ${m.team2.name}`
      });
      // Start another scheduled match if available
      const nextMatch = matches.find(ns => ns.status === 'scheduled');
      if (nextMatch) {
        nextMatch.status = 'live';
        nextMatch.time = 1;
        nextMatch.timeline.push({ time: 0, icon: '🏁', text: 'Match Started' });
      }
      return;
    }

    // Standard simulation parameters influenced by weather
    const isRain = m.venue.desc.includes('Rain');
    const isHot = m.venue.desc.includes('Hot');

    // Base probabilities
    let goalProb = 0.04;
    let cardProb = 0.05;
    let foulProb = 0.15;
    let shotProb = 0.25;

    if (isRain) {
      foulProb += 0.08; // slippery pitch
      shotProb -= 0.05; // harder to shoot
    }
    if (isHot) {
      goalProb -= 0.01; // players tired
      foulProb += 0.05;
    }

    const roll = Math.random();

    // 1. Goal Roll
    if (roll < goalProb) {
      const scoringTeam = Math.random() > 0.5 ? 1 : 2;
      const scorer = scoringTeam === 1 ? m.team1 : m.team2;
      if (scoringTeam === 1) {
        m.score1++;
      } else {
        m.score2++;
      }
      m.timeline.push({
        time: m.time,
        icon: '⚽',
        text: `GOAL! ${scorer.name} scored! (${m.score1} - ${m.score2})`
      });
      m.stats.shots[scoringTeam - 1]++;
      m.stats.shotsOnTarget[scoringTeam - 1]++;
      if (m.id === activeHeroId) {
        triggerGoalFlash();
      }
    }
    // 2. Shot Roll (non-scoring)
    else if (roll < goalProb + shotProb) {
      const shootingTeam = Math.random() > 0.5 ? 1 : 2;
      m.stats.shots[shootingTeam - 1]++;
      if (Math.random() > 0.6) {
        m.stats.shotsOnTarget[shootingTeam - 1]++;
        if (Math.random() > 0.8) {
          m.timeline.push({
            time: m.time,
            icon: '🧤',
            text: `Crucial save by goalkeeper denying ${shootingTeam === 1 ? m.team2.name : m.team1.name}!`
          });
        }
      }
    }
    // 3. Card Roll
    else if (roll < goalProb + shotProb + cardProb) {
      const foulTeam = Math.random() > 0.5 ? 1 : 2;
      const offender = foulTeam === 1 ? m.team1 : m.team2;
      
      if (Math.random() > 0.9) {
        m.stats.redCards[foulTeam - 1]++;
        m.timeline.push({
          time: m.time,
          icon: '🟥',
          text: `RED CARD! Sent off player from ${offender.name}!`
        });
      } else {
        m.stats.yellowCards[foulTeam - 1]++;
        m.timeline.push({
          time: m.time,
          icon: '🟨',
          text: `Yellow Card shown to ${offender.name} player.`
        });
      }
    }
    // 4. Foul Roll
    else if (roll < goalProb + shotProb + cardProb + foulProb) {
      const foulTeam = Math.random() > 0.5 ? 1 : 2;
      m.stats.fouls[foulTeam - 1]++;
    }

    // Possession adjustment
    const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
    m.stats.possession[0] = Math.max(25, Math.min(75, m.stats.possession[0] + change));
    m.stats.possession[1] = 100 - m.stats.possession[0];
  });

  renderHeroMatch();
  renderSchedule();
}

// ----------------------------------------------------
// 4. INTERACTIVE HANDLERS
// ----------------------------------------------------

function handleGoalManual(teamIndex) {
  const currentMatch = matches.find(m => m.id === activeHeroId);
  if (!currentMatch || currentMatch.status !== 'live') return;

  if (teamIndex === 1) {
    currentMatch.score1++;
    currentMatch.timeline.push({
      time: currentMatch.time,
      icon: '⚽',
      text: `GOAL! Manual trigger for ${currentMatch.team1.name}! (${currentMatch.score1} - ${currentMatch.score2})`
    });
    currentMatch.stats.shots[0]++;
    currentMatch.stats.shotsOnTarget[0]++;
  } else {
    currentMatch.score2++;
    currentMatch.timeline.push({
      time: currentMatch.time,
      icon: '⚽',
      text: `GOAL! Manual trigger for ${currentMatch.team2.name}! (${currentMatch.score1} - ${currentMatch.score2})`
    });
    currentMatch.stats.shots[1]++;
    currentMatch.stats.shotsOnTarget[1]++;
  }
  triggerGoalFlash();
  renderHeroMatch();
  renderSchedule();
}

function handleRandomEvent() {
  const currentMatch = matches.find(m => m.id === activeHeroId);
  if (!currentMatch || currentMatch.status !== 'live') return;

  const events = [
    { icon: '🪵', text: 'Stunning woodwork hit! Inches away from a goal!' },
    { icon: '🌦️', text: 'Heavy wind picks up! Cross pass drifts out of play.' },
    { icon: '📢', text: 'Crowd goes wild! Stadium chant reaches 110 decibels!' },
    { icon: '🤕', text: 'Medical staff on pitch. Stoppage for minor injury.' },
    { icon: '🟨', text: 'Tactical foul prevents clear fast break opportunity.' }
  ];

  const ev = events[Math.floor(Math.random() * events.length)];
  currentMatch.timeline.push({
    time: currentMatch.time,
    icon: ev.icon,
    text: ev.text
  });

  if (ev.icon === '🟨') {
    const team = Math.random() > 0.5 ? 1 : 2;
    currentMatch.stats.yellowCards[team - 1]++;
  }

  renderHeroMatch();
}

function resetSimulation() {
  matches = JSON.parse(JSON.stringify(initialMatches));
  activeHeroId = 'm1';
  renderHeroMatch();
  renderSchedule();
  renderWeather();
}

function setupEventHandlers() {
  // Play Pause Toggle
  const btnPause = document.getElementById('btn-pause-sim');
  if (btnPause) {
    btnPause.addEventListener('click', () => {
      isSimRunning = !isSimRunning;
      btnPause.innerHTML = isSimRunning 
        ? `<span class="icon">⏸</span> Pause Sim` 
        : `<span class="icon">▶️</span> Resume Sim`;
      
      const statusEl = document.getElementById('simulation-status');
      if (statusEl) {
        statusEl.textContent = isSimRunning ? "MATCHDAY SIM ACTIVE" : "SIMULATION PAUSED";
        statusEl.style.color = isSimRunning ? "#00ff66" : "#fa5252";
      }
    });
  }

  // Reset button
  const btnReset = document.getElementById('btn-reset-sim');
  if (btnReset) {
    btnReset.addEventListener('click', resetSimulation);
  }

  // Speed selector
  const selectSpeed = document.getElementById('sim-speed');
  if (selectSpeed) {
    selectSpeed.addEventListener('change', (e) => {
      simSpeed = parseInt(e.target.value, 10);
      clearInterval(simIntervalId);
      // Re-trigger with new rate
      const tickRate = 4000 / simSpeed; 
      simIntervalId = setInterval(runSimulationTick, tickRate);
    });
  }

  // Goals manual triggers
  document.getElementById('btn-goal-1').addEventListener('click', () => handleGoalManual(1));
  document.getElementById('btn-goal-2').addEventListener('click', () => handleGoalManual(2));
  document.getElementById('btn-shootout').addEventListener('click', handleRandomEvent);

  // Track buttons and clicks in the schedule
  document.getElementById('schedule-list-container').addEventListener('click', (e) => {
    const item = e.target.closest('.schedule-item');
    if (!item) return;

    const id = item.dataset.id;
    activeHeroId = id;
    renderHeroMatch();
    renderSchedule();
  });

  // Filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.dataset.filter;
      renderSchedule();
    });
  });

  // News carousel indicator clicks
  const newsContainer = document.getElementById('news-content-container');
  if (newsContainer) {
    newsContainer.addEventListener('click', () => {
      openNewsModal(newsFeed[newsIndex]);
    });
  }

  document.getElementById('news-indicators').addEventListener('click', (e) => {
    if (e.target.classList.contains('indicator-dot')) {
      newsIndex = parseInt(e.target.dataset.idx, 10);
      renderNews();
    }
  });

  // Modal close
  document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('news-modal').classList.remove('active');
  });

  document.getElementById('news-modal').addEventListener('click', (e) => {
    if (e.target.id === 'news-modal') {
      document.getElementById('news-modal').classList.remove('active');
    }
  });
}

// Open News Modal
function openNewsModal(news) {
  const modal = document.getElementById('news-modal');
  document.getElementById('modal-title').textContent = news.title;
  document.getElementById('modal-date').textContent = `${news.date} • Published by ${news.author}`;
  document.getElementById('modal-body').textContent = news.body;
  modal.classList.add('active');
}

// Rotate news article automatically
function startNewsTicker() {
  newsIntervalId = setInterval(() => {
    newsIndex = (newsIndex + 1) % newsFeed.length;
    renderNews();
  }, 8000);
}

// ----------------------------------------------------
// 5. APPLICATION INITIALIZATION
// ----------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  startClock();
  renderNews();
  renderWeather();
  renderSchedule();
  renderHeroMatch();
  setupEventHandlers();

  // Tick simulation loop
  const tickRate = 4000 / simSpeed; // base tick interval 4 seconds divided by multiplier
  simIntervalId = setInterval(runSimulationTick, tickRate);

  startNewsTicker();
});
