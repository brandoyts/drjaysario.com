import fs from "fs";
import path from "path";

import { createReadStream } from "fs";
import { pipeline } from "stream";

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

    // option 2
    // res.writeHead(200, {
    //     "Content-Type": "application/pdf",
    //     "Content-Disposition": `attachmentl; filename=${fileName}.pdf`,
    // });

    // var readStream = fs.createReadStream(filePath);
    // readStream.pipe(res);

    // option 3
    res.setHeader("Content-Type", "application/pdf");
    const fileStream = createReadStream(filePath);
    pipeline(fileStream, res, (error) => {
        if (error) console.error(error);
    });
}
