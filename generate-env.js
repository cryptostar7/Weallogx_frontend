// injects branch and build info for local development

const fs = require("fs");
const { execSync } = require("child_process");

// Get current Git branch and commit hash
const gitBranch = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
const gitCommit = execSync("git rev-parse --short HEAD").toString().trim();
const buildTime = new Date().toLocaleString();

// Generate content for the .env file
const envContent = `
VITE_DEPLOY_PLATFORM=LOCAL
VITE_DEPLOY_BRANCH=${gitBranch}
VITE_DEPLOY_COMMIT=${gitCommit}
VITE_DEPLOY_TIME=${buildTime}
`;

// Write to .env.local
fs.writeFileSync(".env.local", envContent);
console.log(".env.local file created with dynamic build and branch info.");
