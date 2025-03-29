# WealthLogix UI

Vue 3 + Vite frontend for WealthLogix. Works with `wlx-api` backend service.

## Development Setup

### Prerequisites
- Node.js 16+
- Docker and Docker Compose (for local full-stack development)
- VSCode + Vue extension (recommended)

### Local Development

1. Clone the UI and API repositories into the same parent folder:
    ```bash
    git clone <wlx-ui-repo>
    git clone <wlx-api-repo>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Generate `.env.local` for local build info
   - *(a precommit hook also runs this for automated updates)*
    ```bash
    node generate-env.js
    ```

4. Choose your development mode:

    **UI Only:**
    ```bash
    npm run dev
    ```

    **Full Stack with Docker:**
    ```bash
    cd ../wlx-api
    docker compose up
    ```

5. The app will be available at:
   - UI: <http://localhost:8000>
   - API: <http://localhost:8001>
   - API Docs: <http://localhost:8001/docs>

### Build for Production

```bash
npm run build
```

---

## Architecture

*[TODO: update architecture section; proposed future state below]*

This UI is designed to work with the `wlx-api` backend. In production:
- UI is served as static assets by nginx
- nginx routes API requests to the backend service
- All components run in a single ECS task

See the [Infrastructure Documentation](../wlx-api/README.md#infrastructure-setup) for deployment details.

## Project Structure

```bash
wlx-ui/
├── src/            # Application source
├── dist/           # Production build output
├── public/         # Static assets
├── Dockerfile      # Production + development container config
├── nginx.conf      # nginx reverse proxy configuration
└── generate-env.js # Local environment setup script
```
