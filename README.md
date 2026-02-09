# 🧭 WealthLogix UI [Project ID: P-WLX-002]

A modern Vue 3 + Vite frontend for WealthLogix—a comprehensive wealth management and financial planning platform. This UI provides an intuitive interface for portfolio analysis, tax optimization, scenario planning, and subscription management.

---

## 📚 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Development](#development)
- [Building & Deployment](#building--deployment)
- [Contact](#contact)

---

## 🧩 About

WealthLogix UI is a responsive, modern frontend application built with Vue 3 and Vite. It provides users with a comprehensive dashboard to manage their investment portfolios, view financial reports, optimize tax strategies, and plan for retirement. The UI integrates seamlessly with the WealthLogix API backend and supports AWS Cognito authentication.

**Key Goals:**
- Deliver an intuitive wealth management interface
- Enable real-time portfolio analysis and visualization
- Provide actionable financial insights and recommendations
- Support team collaboration and account management
- Ensure secure authentication and data handling

---

## ✨ Features

- **Portfolio Dashboard** – Real-time portfolio overview with asset allocation visualization
- **Financial Reports** – Generate and download comprehensive PDF reports
- **Tax Optimization** – View tax scorecards and implement optimization strategies
- **Scenario Planning** – Create and compare "what-if" financial scenarios
- **Retirement Planning** – Calculate retirement readiness and gap analysis
- **Team Management** – Invite and manage team members with role-based access
- **Subscription Management** – Upgrade, downgrade, or cancel subscription plans
- **AWS Cognito Auth** – Secure authentication and user management
- **Responsive Design** – Mobile-friendly interface with Tailwind CSS
- **Real-time Data** – Live updates via API integration

---

## 🧠 Tech Stack

**Languages:** JavaScript, Vue 3, HTML5, CSS3

**Framework & Build Tool:**
- Vue 3 (latest)
- Vite 3 (next-generation bundler)
- Vue Router 4 (routing)
- Vuex 4 (state management)

**UI & Styling:**
- Tailwind CSS (utility-first CSS)
- Bootstrap Icons
- Custom component library

**HTTP & Data:**
- Axios (HTTP client)
- Lodash (utility functions)
- Moment.js (date handling)

**Authentication:**
- AWS Amplify
- Cognito integration

**PDF Handling:**
- PDF.js (PDF viewer)

**Validation:**
- Vee-validate (form validation)
- Yup (schema validation)

**Development Tools:**
- ESLint (code linting)
- Prettier (code formatting)
- Docker (containerization)

**Deployment:**
- nginx (reverse proxy & static serving)
- Docker Compose (local development)

---

## ⚙️ Installation

### Prerequisites

- Node.js 16+
- npm or yarn
- Git
- Docker (optional, for containerized development)

### Clone and Setup

```bash
# Clone the repository
git clone https://github.com/wealthlogix/wlx-ui.git

# Navigate to the project directory
cd wlx-ui

# Install dependencies
npm install
```

### Environment Setup

The application automatically generates `.env.local` when you run the development server:

```bash
npm run dev
```

This creates `.env.local` with development settings. For production builds:

```bash
npm run build
```

---

## 🚀 Usage

### Development Mode

```bash
# Start the development server with hot reload
npm run dev
```

Then open your browser and go to:
👉 [http://localhost:8000](http://localhost:8000)

The development server includes:
- Hot Module Replacement (HMR) for instant code updates
- Source maps for debugging
- Vue DevTools integration
- Automatic environment file generation

### Full Stack Development (with Backend)

If you want to run both frontend and backend together:

```bash
# From the project root, ensure both repos are cloned
# wlx-ui/
# wlx-api/

# Start backend
cd wlx-api
./start.sh    # or: docker compose up

# In another terminal, start frontend
cd wlx-ui
npm run dev
```

Access the services at:
- **UI:** [http://localhost:8000](http://localhost:8000)
- **API:** [http://localhost:8001](http://localhost:8001)
- **API Docs:** [http://localhost:8001/docs](http://localhost:8001/docs)

### Production Mode

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

The production build:
- Minifies JavaScript and CSS
- Optimizes assets
- Generates source maps
- Creates `dist/` directory with static files

---

## 🧾 Configuration

### Environment Variables

The app uses environment variables for configuration. Create a `.env.local` file in the root:

```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:8001
VITE_API_TIMEOUT=30000

# AWS Amplify / Cognito
VITE_AWS_REGION=us-east-1
VITE_COGNITO_DOMAIN=us-east-1zmxudtxqa.auth.us-east-1.amazoncognito.com
VITE_COGNITO_USER_POOL_ID=us-east-1_ZmXUDtXqa
VITE_COGNITO_WEB_CLIENT_ID=your_client_id_here
VITE_COGNITO_REDIRECT_URI=http://localhost:8000/callback
VITE_COGNITO_LOGOUT_URI=http://localhost:8000/login

# AWS S3 Configuration
VITE_AWS_S3_REGION=us-east-1
VITE_AWS_S3_BUCKET=your-bucket-name

# Feature Flags
VITE_ENABLE_COGNITO_AUTH=true
VITE_ENABLE_TEAM_FEATURES=true
VITE_ENABLE_ANALYTICS=false

# App Configuration
VITE_APP_NAME=WealthLogix
VITE_APP_VERSION=0.0.0
```

### Proxy Configuration

For local development, the app proxies API requests to `http://localhost:8001`:

```json
{
  "proxy": "http://localhost:8001"
}
```

---

## 📂 Project Structure

```
wlx-ui/
├── src/                      # Application source code
│   ├── components/           # Reusable Vue components
│   │   ├── common/          # Shared components (buttons, modals, etc.)
│   │   ├── portfolio/       # Portfolio-specific components
│   │   ├── reports/         # Report components
│   │   └── forms/           # Form components
│   ├── pages/               # Page-level components (routes)
│   │   ├── Dashboard.vue    # Main dashboard
│   │   ├── Portfolio.vue    # Portfolio management
│   │   ├── Reports.vue      # Reports view
│   │   └── Settings.vue     # User settings
│   ├── views/               # View containers
│   ├── store/               # Vuex state management
│   │   ├── modules/         # Vuex modules (auth, portfolio, etc.)
│   │   └── index.js         # Store configuration
│   ├── router/              # Vue Router configuration
│   ├── services/            # API client services
│   │   ├── api.js          # Axios instance
│   │   ├── auth.js         # Auth service
│   │   └── portfolio.js    # Portfolio service
│   ├── styles/              # Global styles
│   ├── utils/               # Utility functions
│   ├── App.vue              # Root component
│   └── main.js              # Application entry point
├── public/                   # Static assets
│   └── index.html
├── nginx.conf               # Nginx reverse proxy config
├── Dockerfile               # Production container
├── docker-compose.yaml      # Local development setup
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies & scripts
├── .eslintrc.js             # ESLint configuration
├── .prettierrc               # Prettier configuration
└── README.md                # This file
```

---

## 🔧 Development

### Code Style & Linting

```bash
# Lint and fix code
npm run lint

# Format code with Prettier
npx prettier --write src/
```

### Debugging

1. **Vue DevTools:** Install [Vue DevTools](https://devtools.vuejs.org/) browser extension
2. **Browser DevTools:** Press F12 or right-click → Inspect
3. **VS Code Debugger:** Configure with `.vscode/launch.json`

### Hot Module Replacement (HMR)

During development, changes to `.vue`, `.js`, and `.css` files automatically reload in the browser without losing state.

---

## 🔨 Building & Deployment

### Production Build

```bash
# Build for production
npm run build

# Output: dist/ directory with optimized files
```

### Docker Deployment

```bash
# Build Docker image
docker build -t wealthlogix-ui .

# Run container
docker run -p 80:80 wealthlogix-ui

# Access at http://localhost
```

### Nginx Configuration

The app includes `nginx.conf` for production serving:
- Serves static files with caching headers
- Routes API requests to backend (`/api` → `http://localhost:8001`)
- Handles SPA routing (rewrites to `index.html`)
- Gzip compression enabled

### Full Stack Docker Compose

```bash
# Start entire stack (UI, API, Database, Redis)
docker compose up

# Access services
# UI: http://localhost:8000
# API: http://localhost:8001
# Nginx proxy: http://localhost:80
```

---

## 🔒 Security

- **Authentication:** AWS Cognito with OAuth 2.0
- **CORS:** Configured for secure cross-origin requests
- **Sensitive Data:** Never commit `.env.local` or credentials
- **API Security:** JWT tokens for authenticated requests
- **Content Security Policy:** Configured in nginx.conf

### Best Practices

1. Always use HTTPS in production
2. Rotate secrets regularly
3. Keep dependencies updated: `npm audit` and `npm update`
4. Use environment variables for sensitive configuration
5. Enable browser security features (HSTS, X-Frame-Options, etc.)

---

## 🧪 Testing

```bash
# Run unit tests (when configured)
npm run test

# Run tests with coverage
npm run test:coverage

# Run E2E tests (when configured)
npm run test:e2e
```

---

## 📊 Performance

### Optimization Techniques

- **Code Splitting:** Lazy-loaded routes and components
- **Asset Optimization:** Minification and compression
- **Caching:** Service worker for offline functionality
- **Bundle Analysis:** Analyze build size with `npm run build -- --stats`

### Lighthouse Scores

Target metrics:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

---

## 🐛 Troubleshooting

### Common Issues

**Port 8000 already in use:**
```bash
npm run dev -- --port 3000
```

**API connection errors:**
- Ensure backend is running: `cd ../wlx-api && ./start.sh`
- Check `VITE_API_BASE_URL` in `.env.local`
- Verify CORS settings on backend

**Module not found errors:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Build fails:**
```bash
# Clear build cache
rm -rf dist
npm run build
```

---

## 📬 Contact

**Author:** WealthLogix Development Team
**Email:** dev@wealthlogix.com
**GitHub:** [@wealthlogix](https://github.com/wealthlogix)
**Website:** [www.wealthlogix.com](https://www.wealthlogix.com)

---

## 🌟 Acknowledgements

- Vue.js team for the progressive framework
- Vite for the next-generation bundler
- Tailwind CSS for utility-first styling
- AWS for cloud services and authentication
- The open-source community for excellent libraries and tools

---

## 📄 License

This project is proprietary and confidential. Unauthorized copying or distribution is prohibited.

---

**Last Updated:** February 8, 2026
