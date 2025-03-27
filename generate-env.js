// injects branch and build info to an .env.local file

const fs = require("fs");
const { execSync } = require("child_process");

// Get current Git branch and commit hash
const gitBranch = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
const gitCommit = execSync("git rev-parse --short HEAD").toString().trim();
const buildTime = new Date().toLocaleString();

// In dev, copy the contents of .env.development
const nodeEnv = process.env.NODE_ENV || "development"
const buildEnv = process.env.BUILD_ENV || "local";
console.log(`Current NODE_ENV: ${nodeEnv}`);
console.log(`Current BUILD_ENV: ${buildEnv}`);

let devEnvContent = "";
console.log(`Environment keys loaded: ${Object.keys(process.env).length}`);
for (const key in process.env) {
    if (nodeEnv === "development" || process.env.NODE_ENV === "staging") {
        console.log(`Env key ${key}: ${process.env[key]}`);
    } else {
        console.log(`Env key ${key}`);
    }
}
if (nodeEnv === "development") {
    devEnvContent = fs.readFileSync(".env.development", "utf-8");
    console.log(`Appending .env.development contents to .env.local; length ${devEnvContent.length}`)
}

// add build info
const envContent = `
${devEnvContent}
VITE_DEPLOY_NODE_ENV=${nodeEnv}
VITE_DEPLOY_BUILD_ENV=${buildEnv}
VITE_DEPLOY_BRANCH=${gitBranch}
VITE_DEPLOY_COMMIT=${gitCommit}
VITE_DEPLOY_TIME=${buildTime}
`;

// Write to .env.local
fs.writeFileSync(".env.local", envContent);
console.log(".env.local file created with dynamic build and branch info.");
