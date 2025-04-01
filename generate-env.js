// injects branch and build info to an .env.local file

const fs = require("fs");
const { execSync } = require("child_process");

// Get current Git branch and commit hash
const gitBranch = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
const gitCommit = execSync("git rev-parse --short HEAD").toString().trim();
const buildTime = new Date().toLocaleString();

// In dev, copy the contents of .env.development
const nodeEnv = process.env.NODE_ENV || "development"
const appEnv = process.env.APP_ENV || "development";
console.log(`Current NODE_ENV: ${nodeEnv}`);
console.log(`Current APP_ENV: ${appEnv}`);

const viteKeys = Object.keys(process.env).filter(key => key.startsWith("VITE_"));
console.log(`VITE environment keys loaded: ${viteKeys.length}`);
for (const key of viteKeys) {
    if (nodeEnv === "development" || nodeEnv === "staging") {
        console.log(`VITE env key ${key}: ${process.env[key]}`);
    } else {
        console.log(`VITE env key ${key}`);
    }
}

// add build info
const envContent = `
VITE_DEPLOY_NODE_ENV=${nodeEnv}
VITE_DEPLOY_APP_ENV=${appEnv}
VITE_DEPLOY_BRANCH=${gitBranch}
VITE_DEPLOY_COMMIT=${gitCommit}
VITE_DEPLOY_TIME=${buildTime}
`;

// Write to .env.local
fs.writeFileSync(".env.local", envContent, { flag: "w" });
console.log(".env.local file updated with dynamic build and branch info.");
