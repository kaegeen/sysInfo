// sysInfo.js
const os = require("os");

console.log("🧠 System Information");
console.log("=======================");
console.log(`🖥️  Hostname: ${os.hostname()}`);
console.log(`💻 Platform: ${os.platform()} (${os.arch()})`);
console.log(`🕒 Uptime: ${(os.uptime() / 3600).toFixed(2)} hours`);
console.log(`📦 Total Memory: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`🔋 Free Memory: ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`);

const cpus = os.cpus();
console.log(`⚙️  CPU: ${cpus[0].model}`);
console.log(`🧩 Cores: ${cpus.length}`);
console.log("=======================");
