import fs from "fs";
import path from "path";

export default function handler(req, res) {
    const { fileName } = req.query;
    // const filePath = path.join(
    //     ROOT_DIR,
    //     "public",
    //     "assets",
    //     "docs",
    //     `${fileName}.pdf`
    // );

    // const fileBuffer = fs.readFileSync(filePath, "utf8");

    // res.setHeader("Content-Type", "application/pdf");
    // res.send(fileBuffer);

    fs.readFile(
        path.join(process.cwd(), "public", "assets", "docs", `${fileName}.pdf`),
        (err, data) => {
            res.setHeader("Content-Type", "application/pdf");
            res.send(data);
        }
    );
}
