import fs from "fs";
import path from "path";

export default function handler(req, res) {
    // const { fileName } = req.query;
    // const filePath = path.join(
    //     ROOT_DIR,
    //     "public",
    //     "assets",
    //     "docs",
    //     `${fileName}.pdf`
    // );

    // const fileBuffer = fs.readFileSync(filePath);

    // res.setHeader("Content-Type", "application/pdf");
    // res.send(fileBuffer);

    fs.readFile(
        path.join(process.cwd(), "public", "assets", "docs", "Gratitude.pdf"),
        (err, data) => {
            console.log("testsi");
            res.setHeader("Content-Type", "application/pdf");
            res.download(data);
        }
    );
}
