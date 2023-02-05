
    const fs = require("fs");

    const base64String = fs.readFileSync("deploy.zip", "utf8");
    const buffer = Buffer.from(base64String, "base64");

    fs.writeFileSync("files.zip", buffer);
    