import fs from "fs";
import path from "path";

export default function handler(req, res) {
    const { fileName } = req.query;

    fs.readFile(
        path.join(process.cwd(), "public", "assets", "docs", `${fileName}.pdf`),
        (err, data) => {
            res.setHeader("Content-Type", "application/pdf");
            res.setHeader(
                "Content-Disposition",
                `attachment; filename=${fileName}.pdf`
            );

            res.send(data);
        }
    );
}
