const fs = require("fs");
const path = "./node_modules/@achrinza/node-ipc/entities/Defaults.js";

if (fs.existsSync(path)) {
    let code = fs.readFileSync(path, "utf8");

    // 이미 패치됐는지 확인
    if (!code.includes("os.networkInterfaces =")) {
        code = code.replace(
            /const networkInterfaces = os\.networkInterfaces\(\);/,
            `
let networkInterfaces = {};
try {
    networkInterfaces = os.networkInterfaces();
} catch (e) {
    console.warn("Patched: os.networkInterfaces() failed:", e.message);
    networkInterfaces = {};
}
`
        );

        fs.writeFileSync(path, code, "utf8");
        console.log("✅ Patched @achrinza/node-ipc successfully.");
    } else {
        console.log("⚠ Already patched.");
    }
} else {
    console.log("❌ File not found:", path);
}
