// injects branch and build info to an .env.local file

const fs = require("fs");
const { execSync } = require("child_process");

// Get current Git branch and commit hash
const gitBranch = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
const gitCommit = execSync("git rev-parse --short HEAD").toString().trim();
const buildTime = new Date().toLocaleString();

// In dev, copy the contents of .env.development
let devEnvContent = "";
console.log(`Current env: ${process.env.NODE_ENV}`);
console.log(`Environment keys loaded: ${Object.keys(process.env).length}`);
for (const key in process.env) {
    if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "staging") {
        console.log(`Env key ${key}: ${process.env[key]}`);
    } else {
        console.log(`Env key ${key}`);
    }
}
if (process.env.NODE_ENV === "development") {
    devEnvContent = fs.readFileSync(".env.development", "utf-8");
}

// add build info
const buildEnv = process.env.BUILD_ENV;
const envContent = `
${devEnvContent}
VITE_DEPLOY_PLATFORM=${buildEnv}
VITE_DEPLOY_BRANCH=${gitBranch}
VITE_DEPLOY_COMMIT=${gitCommit}
VITE_DEPLOY_TIME=${buildTime}
`;

// Write to .env.local
fs.writeFileSync(".env.local", envContent);
console.log(".env.local file created with dynamic build and branch info.");
