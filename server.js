const express = require("express");
const { generatePDF } = require("./generatePDF");

const app = express();

app.use(express.json());

app.use("/generate-pdf", async (req, res) => {
  console.log(req.body.url);
  const pdfBuffer = await generatePDF({
    url: req.body.url,
  });
  res
    .status(200)
    .set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    })
    // .json({ foo: "bar" });
    .end(pdfBuffer);
});

app.listen(3000, () => console.log("listening on port 3000"));
