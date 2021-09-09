import fs from "fs";
import path from "path";

export default function handler(req, res) {
    const { fileName } = req.query;
    const filePath = path.join(
        process.cwd(),
        "public",
        "assets",
        "docs",
        "Gratitude.pdf"
    );

    const fileBuffer = fs.readFileSync(filePath);

    res.setHeader("Content-Type", "application/pdf").send(fileBuffer);
}
