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

    const stat = fs.statSync(filePath);

    res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Length": stat.size,
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
}
