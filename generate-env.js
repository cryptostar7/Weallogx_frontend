// injects branch and build info to an .env.local file

const fs = require("fs");
const { execSync } = require("child_process");

// Get current Git branch and commit hash
const gitBranch = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
const gitCommit = execSync("git rev-parse --short HEAD").toString().trim();
const buildTime = new Date().toLocaleString();

// In dev, copy the contents of .env.development
const appEnv = process.env.APP_ENV || "development";

const viteKeys = Object.keys(process.env).filter(key => key.startsWith("VITE_"));
for (const key of viteKeys) {
    if (nodeEnv === "development" || nodeEnv === "staging") {
    } else {
    }
}

// add build info
const envContent = `
VITE_DEPLOY_APP_ENV=${appEnv}
VITE_DEPLOY_BRANCH=${gitBranch}
VITE_DEPLOY_COMMIT=${gitCommit}
VITE_DEPLOY_TIME=${buildTime}
`;

// Write to .env.local
fs.writeFileSync(".env.local", envContent, { flag: "w" });
