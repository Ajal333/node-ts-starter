import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 3000;
app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ youGot: "Lucky!" });
});

app.listen(port, () => {
  try {
    return console.log(`Server is listening on ${port}`);
  } catch (error) {
    return console.error(error);
  }
});
