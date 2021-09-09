import fs from "fs";
import path from "path";

export default function handler(req, res) {
    const { fileName } = req.query;
    const filePath = path.join(
        process.cwd(),
        "public",
        "assets",
        "docs",
        `${fileName}.pdf`
    );

    // fs.readFile(filePath, (err, data) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }

    //     res.setHeader("Content-Type", "application/pdf");
    //     res.setHeader(
    //         "Content-Disposition",
    //         `attachment; filename=${fileName}.pdf`
    //     );

    //     res.send(data);
    // });

    res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachmentl; filename=${fileName}.pdf`,
    });

    var readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
}
