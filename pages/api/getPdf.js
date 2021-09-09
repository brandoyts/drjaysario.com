import fs from "fs";
import path from "path";

const ROOT_DIR = process.env.PWD;

export default function handler(req, res) {
    const { fileName } = req.query;
    const filePath = path.join(
        ROOT_DIR,
        "public",
        "assets",
        "docs",
        `${fileName}.pdf`
    );

    const fileBuffer = fs.readFileSync(filePath);

    res.setHeader("Content-Type", "application/pdf");
    res.send(fileBuffer);
}
